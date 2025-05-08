<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import EditIcon from "@/Components/Icons/EditIcon.vue";
import DeleteIcon from "@/Components/Icons/DeleteIcon.vue";
import ShowIcon from "@/Components/Icons/ShowIcon.vue";
import DownloadIcon from "@/Components/Icons/DownloadIcon.vue";
import FileUploadIcon from "@/Components/Icons/FileUploadIcon.vue";
import PlusIcon from "@/Components/Icons/PlusIcon.vue";
import FilterIcon from "@/Components/Icons/FilterIcon.vue";
import SelectAllIcon from "@/Components/Icons/SelectAllIcon.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import { Head, useForm, Link } from "@inertiajs/vue3";
import { ref, watch } from "vue";
import Pagination from "@/Components/Pagination.vue";
import axios from "axios";

const isUploading = ref(false);

const props = defineProps({
    courses: {
        type: Array,
        default: [],
    },
    students: {
        type: Object,
        default: () => ({
            data: [],
            links: [],
            meta: {
                current_page: 1,
                from: 1,
                last_page: 1,
                links: [],
                path: '',
                per_page: 15,
                to: 1,
                total: 0
            }
        }),
    },
    pagination: {
        type: Object,
        default: () => ({
            current_page: 1,
            last_page: 1,
            from: 1,
            to: 1,
            total: 0,
            per_page: 15,
            links: []
        }),
    },
    graduationYears: {
        type: Array,
        default: [],
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

const downloadCertificateForm = useForm({
    student_ids: [],
    certificate_date: null,
});

// Add student view modal functionality
const viewModal = ref(false);
const currentStudent = ref(null);
const showSidebar = ref(false); // Control sidebar visibility on mobile

const viewStudent = (student) => {
    currentStudent.value = student;
    viewModal.value = true;
};

const downloadCertificate = () => {
    if (downloadCertificateForm.student_ids.length === 0) {
        alert("Please select students to download certificate.");
        return;
    }

    certificateModal.value = true;
};

const certificateModal = ref(false);
const toggleSelectAll = ref(false);
const showFilters = ref(false);

const downloadCertificateSubmit = async () => {
    try {
        // Validate that certificate_date is set
        if (!downloadCertificateForm.certificate_date) {
            alert("Please select a certificate date.");
            return;
        }

        // Check if selected students meet the requirements (both NSTP 1 and NSTP 2 passed)
        const selectedStudents = props.students.data.filter(student => 
            downloadCertificateForm.student_ids.includes(student.id)
        );
        
        const ineligibleStudents = selectedStudents.filter(student => 
            student.first_sem_status !== 1 || student.second_sem_status !== 1
        );
        
        if (ineligibleStudents.length > 0) {
            // Show notification about ineligible students
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50 max-w-md';
            notification.innerHTML = `
                <div class="font-bold mb-1">Cannot download certificates</div>
                <div>Students must pass both NSTP 1 and NSTP 2 to receive certificates.</div>
                <div class="mt-2 text-sm">
                    ${ineligibleStudents.length} of ${selectedStudents.length} selected students are not eligible.
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 5000);
            
            return;
        }

        // Set uploading state to true
        isUploading.value = true;

        // Try multiple URL possibilities with fallbacksng
        let response;
        let error404 = false;
        
        try {
            // First attempt with route helper
            response = await axios.post(
                route("certificates.download"),
                downloadCertificateForm.data(),
                {
                    responseType: "blob",
                }
            );
        } catch (err) {
            if (err.response && err.response.status === 404) {
                error404 = true;
                console.log("First attempt failed with 404, trying direct URL...");
                
                // Second attempt with direct URL
                try {
                    response = await axios.post(
                        '/download-certificates',
                        downloadCertificateForm.data(),
                        {
                            responseType: "blob",
                            headers: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        }
                    );
                } catch (err2) {
                    if (err2.response && err2.response.status === 404) {
                        console.log("Second attempt failed with 404, trying API fallback URL...");
                        
                        // Third attempt with API fallback route
                        response = await axios.post(
                            '/api/download-certificates',
                            downloadCertificateForm.data(),
                            {
                                responseType: "blob",
                                headers: {
                                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                }
                            }
                        );
                    } else {
                        throw err2;
                    }
                }
            } else {
                throw err;
            }
        }

        // Create download link
        const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", "nstp-certificates.zip"); // Specify the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form and close modal
        downloadCertificateForm.reset();
        certificateModal.value = false;
        isUploading.value = false;

        // Show success notification
        const successNotification = document.createElement('div');
        successNotification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
        successNotification.textContent = 'Certificates generated successfully!';
        document.body.appendChild(successNotification);
        
        setTimeout(() => {
            if (document.body.contains(successNotification)) {
                document.body.removeChild(successNotification);
            }
        }, 3000);

    } catch (error) {
        console.error("Error downloading certificates:", error);
        
        // Show error notification
        const errorNotification = document.createElement('div');
        errorNotification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-3 rounded shadow-lg z-50 max-w-md';
        
        // Try to get error message from response
        let errorMessage = 'Error generating certificates. Please try again.';
        
        if (error.response) {
            console.log("Error response status:", error.response.status);
            console.log("Error response data:", error.response.data);
            
            if (error.response.data instanceof Blob) {
                // If response is a blob, we need to read it
                const reader = new FileReader();
                reader.onload = function() {
                    try {
                        const jsonResponse = JSON.parse(reader.result);
                        if (jsonResponse.message) {
                            errorNotification.innerHTML = `
                                <div class="font-bold">Error</div>
                                <div>${jsonResponse.message}</div>
                            `;
                        }
                    } catch (e) {
                        // If not valid JSON, use default message
                        errorNotification.innerHTML = `
                            <div class="font-bold">Error</div>
                            <div>${errorMessage}</div>
                        `;
                    }
                };
                reader.readAsText(error.response.data);
            } else if (error.response.data && error.response.data.message) {
                // If response has a message directly
                errorNotification.innerHTML = `
                    <div class="font-bold">Error</div>
                    <div>${error.response.data.message}</div>
                `;
            } else {
                // Use default message with status code
                errorNotification.innerHTML = `
                    <div class="font-bold">Error ${error.response.status}</div>
                    <div>${errorMessage}</div>
                    <div class="mt-2 text-xs">The certificate download functionality may not be properly configured. Please contact support.</div>
                `;
            }
        } else {
            // Use default message
            errorNotification.innerHTML = `
                <div class="font-bold">Error</div>
                <div>${errorMessage}</div>
                <div class="mt-2 text-xs">The certificate download functionality may not be properly configured. Please contact support.</div>
            `;
        }
        
        document.body.appendChild(errorNotification);
        
        setTimeout(() => {
            if (document.body.contains(errorNotification)) {
                document.body.removeChild(errorNotification);
            }
        }, 5000);
    }
};

const selectAll = async () => {
    if (toggleSelectAll.value) {
        // If already selected, deselect all
        downloadCertificateForm.student_ids = [];
    } else {
        try {
            // Show loading notification
            const loadingNotification = document.createElement('div');
            loadingNotification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50';
            loadingNotification.textContent = 'Loading all student IDs...';
            document.body.appendChild(loadingNotification);
            
            // Get all the current filter parameters
            const params = {
                search: searchForm.search,
                course_id: searchForm.course_id,
                school_year: searchForm.school_year,
                nstp1_status: searchForm.nstp1_status,
                nstp2_status: searchForm.nstp2_status
            };
            
            // Fetch all student IDs that match the current filters
            const response = await axios.get(route('students.all-ids', params));
            
            // Set the student IDs in the form
            downloadCertificateForm.student_ids = response.data.student_ids;
            
            // Remove loading notification
            if (document.body.contains(loadingNotification)) {
                document.body.removeChild(loadingNotification);
            }
            
            // Show success notification with count
            const successNotification = document.createElement('div');
            successNotification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
            successNotification.textContent = `Selected ${response.data.total} students across all pages`;
            document.body.appendChild(successNotification);
            
            setTimeout(() => {
                if (document.body.contains(successNotification)) {
                    document.body.removeChild(successNotification);
                }
            }, 3000);
            
        } catch (error) {
            console.error('Error fetching all student IDs:', error);
            
            // Show error notification
            const errorNotification = document.createElement('div');
            errorNotification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
            errorNotification.textContent = 'Failed to select all students. Please try again.';
            document.body.appendChild(errorNotification);
            
            setTimeout(() => {
                if (document.body.contains(errorNotification)) {
                    document.body.removeChild(errorNotification);
                }
            }, 3000);
            
            // Fallback to selecting only the current page
            downloadCertificateForm.student_ids = props.students.data ? props.students.data.map(
                (student) => student.id
            ) : [];
        }
    }
    toggleSelectAll.value = !toggleSelectAll.value;
};

const searchForm = useForm({
    search: props.filters.search || "",
    course_id: props.filters.course_id || "",
    school_year: props.filters.school_year || "",
    nstp1_status: props.filters.nstp1_status || "",
    nstp2_status: props.filters.nstp2_status || "",
});

// Auto-submit form when filter values change
watch(() => searchForm.course_id, (value) => {
    if (value !== "") {
        submitSearch();
    }
});

watch(() => searchForm.school_year, (value) => {
    if (value !== "") {
        submitSearch();
    }
});

watch(() => searchForm.nstp1_status, (value) => {
    if (value !== "") {
        submitSearch();
    }
});

watch(() => searchForm.nstp2_status, (value) => {
    if (value !== "") {
        submitSearch();
    }
});

const submitSearch = () => {
    searchForm.get(route("students.index"), {
        onStart: () => {
            searchForm.processing = true;
        },
        onFinish: () => {
            searchForm.processing = false;
        },
        preserveState: true,
        preserveScroll: true,
    });
};

const clearFilters = () => {
    searchForm.search = "";
    searchForm.course_id = "";
    searchForm.school_year = "";
    searchForm.nstp1_status = "";
    searchForm.nstp2_status = "";
    submitSearch();
};

const form = useForm({});

const deleteStudent = (studentId) => {
    if (confirm("Are you sure you want to delete this student?")) {
        form.delete(`/students/${studentId}`);
    }
};

// Function to refresh student data without full page reload
const refreshData = () => {
    // Create a notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = 'Refreshing NSTP status data...';
    document.body.appendChild(notification);
    
    // Use URL with current query parameters
    const currentUrl = window.location.pathname + window.location.search;
    
    // Add a parameter to request JSON response
    const separator = currentUrl.includes('?') ? '&' : '?';
    const jsonUrl = `${currentUrl}${separator}format=json`;
    
    axios.get(jsonUrl)
        .then(response => {
            // Update student data with fresh data from server
            if (response.data.students && response.data.students.data) {
                // Replace the entire students object to ensure reactivity
                props.students.data = [...response.data.students.data];
                
                // Update pagination if available
                if (response.data.pagination) {
                    Object.assign(props.pagination, response.data.pagination);
                }
                
                // Update notification to success
                notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
                notification.textContent = 'NSTP status data successfully refreshed!';
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 3000);
            }
        })
        .catch(error => {
            console.error('Error refreshing data:', error);
            
            // Update notification to error
            notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
            notification.textContent = 'Failed to refresh data. Try reloading the page.';
            
            // Remove notification after 5 seconds
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 5000);
        });
};

// Student Instructions Panel functionality
const showInstructions = ref(false);

// Batch Upload Instructions Dropdown
const showBatchUploadInstructions = ref(false);
</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <div v-if="isUploading" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center">
                <div class="relative w-16 h-16">
                    <svg class="w-full h-full" viewBox="0 0 100 100">
                        <circle 
                            class="stroke-blue-500" 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke-width="3" 
                            stroke-dasharray="251" 
                            stroke-dashoffset="75"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="360 50 50"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Generating Certificates</p>
            </div>
        </div>

        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Students
                </h2>
                <div class="flex gap-2 items-center">
                    <!-- Batch Upload Navigation Button -->
                    <Link :href="route('students.upload')"
                        class="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md flex items-center justify-center">
                        <FileUploadIcon class="h-5 w-5 mr-2" />
                        Batch Upload
                    </Link>
                    <!-- Mobile sidebar toggle -->
                    <button @click="showSidebar = !showSidebar" class="md:hidden px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Student Instructions Panel -->
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6">
                    <div @click="showInstructions = !showInstructions" 
                         class="p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20 cursor-pointer flex justify-between items-center">
                        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-300">Student Management Instructions</h3>
                        <svg class="h-5 w-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-200" 
                             :class="{ 'rotate-180': showInstructions }"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-if="showInstructions" class="p-6 text-gray-700 dark:text-gray-300">
                        <ul class="list-disc list-inside space-y-2">
                            <li>Use the <span class="font-semibold">Batch Upload</span> button above to upload multiple students at once using a CSV or Excel file.</li>
                            <li>Use the <span class="font-semibold">search box</span> to filter students by name.</li>
                            <li>Filter students by <span class="font-semibold">course</span>, <span class="font-semibold">school year</span>, or <span class="font-semibold">NSTP status</span>.</li>
                            <li>Click the <span class="font-semibold">Add Student</span> button to register new students.</li>
                            <li>Select multiple students and use the <span class="font-semibold">Download Certificate</span> button to generate certificates for students who have passed both NSTP 1 and NSTP 2.</li>
                            <li>Click on <span class="font-semibold">View</span> (eye icon) to see complete student details.</li>
                            <li>Click on <span class="font-semibold">Edit</span> (pencil icon) to modify student information.</li>
                            <li>Click on <span class="font-semibold">Delete</span> (trash icon) to remove a student from the system.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                    <!-- Sidebar -->
                    <div :class="['md:block transition-all duration-300 ease-in-out', showSidebar ? 'block' : 'hidden']" class="md:w-64 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">Actions</h3>
                        </div>
                        <!-- Action links -->
                        <div class="p-2">
                            <Link :href="route('students.create')" class="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                                <PlusIcon class="h-5 w-5 mr-3 text-blue-500" />
                                <span>Add Student</span>
                            </Link>
                            <Link :href="route('students.upload')" class="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                                <FileUploadIcon class="h-5 w-5 mr-3 text-green-500" />
                                <span>Upload Students</span>
                            </Link>
                            <Link :href="route('nstp.status')" class="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                <span>NSTP Status</span>
                            </Link>
                            <button @click="refreshData()" class="w-full flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>Refresh NSTP Status</span>
                            </button>
                                    </div>

                        <!-- Certificate Actions -->
                        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Certificate Actions</h3>
                            <button
                                class="w-full mb-2 py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-sm flex items-center justify-center"
                                @click="selectAll">
                                <SelectAllIcon class="h-4 w-4 mr-2" />
                                <span>{{ toggleSelectAll ? 'Deselect All' : 'Select All' }}</span>
                                </button>
                            <button @click="downloadCertificate" :disabled="downloadCertificateForm.student_ids.length === 0"
                                :class="{ 'opacity-50 cursor-not-allowed': downloadCertificateForm.student_ids.length === 0 }"
                                class="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded-md text-sm flex items-center justify-center">
                                <DownloadIcon class="h-4 w-4 mr-2" />
                                <span>Download Certificate</span>
                            </button>
                            <div v-if="students.data.length > 0 && pagination" class="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
                                <span class="font-medium">{{ downloadCertificateForm.student_ids.length }}</span> of <span class="font-medium">{{ pagination.total }}</span> selected
                            </div>
                            </div>
                        </div>

                    <!-- Main Content -->
                    <div class="flex-grow">
                        <!-- Search and Filter Card -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4">
                            <div class="p-4">
                                <div class="flex flex-col sm:flex-row items-stretch gap-4">
                                    <!-- Search -->
                                    <div class="relative flex-grow">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                            </div>
                                        <input id="search"
                                            class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full pl-10"
                                            type="text" name="search" placeholder="Search students by name..."
                                            v-model="searchForm.search" @keyup.enter="submitSearch" />
                        </div>

                                    <!-- Filter Toggle -->
                                    <button @click="showFilters = !showFilters"
                                        class="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center">
                                        <FilterIcon class="h-4 w-4 mr-2" />
                                        <span>{{ showFilters ? 'Hide Filters' : 'Filters' }}</span>
                                        <span v-if="searchForm.course_id || searchForm.school_year || searchForm.nstp1_status || searchForm.nstp2_status"
                                            class="ml-2 bg-white text-indigo-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                                            {{ (searchForm.course_id ? 1 : 0) + 
                                               (searchForm.school_year ? 1 : 0) + 
                                               (searchForm.nstp1_status ? 1 : 0) + 
                                               (searchForm.nstp2_status ? 1 : 0) }}
                                        </span>
                                    </button>
                                </div>

                                <!-- Filters Panel -->
                        <div v-if="showFilters" class="mt-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                            <form @submit.prevent="submitSearch" method="POST">
                                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                    <div>
                                                <InputLabel for="course" value="Course/Program" class="text-gray-700 dark:text-gray-300" />
                                        <select id="course"
                                            class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                            name="course_id" v-model="searchForm.course_id">
                                            <option value="">All Courses</option>
                                            <option v-for="course in courses" :value="course.id" :key="course.id">
                                                {{ course.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                                <InputLabel for="school_year" value="School Year" class="text-gray-700 dark:text-gray-300" />
                                        <select id="school_year"
                                            class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                            name="school_year" v-model="searchForm.school_year">
                                            <option value="">All Years</option>
                                                    <option v-for="gy in graduationYears" :key="gy" :value="gy">{{ gy }}</option>
                                        </select>
                                    </div>
                                            <div>
                                                <InputLabel for="nstp1_status" value="NSTP 1 Status" class="text-gray-700 dark:text-gray-300" />
                                                <select id="nstp1_status"
                                                    class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                                    name="nstp1_status" v-model="searchForm.nstp1_status">
                                                    <option value="">All Statuses</option>
                                                    <option value="1">Passed</option>
                                                    <option value="0">Failed</option>
                                                    <option value="2">Pending</option>
                                                </select>
                                    </div>
                                            <div>
                                                <InputLabel for="nstp2_status" value="NSTP 2 Status" class="text-gray-700 dark:text-gray-300" />
                                                <select id="nstp2_status"
                                                    class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                                    name="nstp2_status" v-model="searchForm.nstp2_status">
                                                    <option value="">All Statuses</option>
                                                    <option value="1">Passed</option>
                                                    <option value="0">Failed</option>
                                                    <option value="2">Pending</option>
                                                </select>
                        </div>
                    </div>

                                    <div class="flex justify-end">
                                            <button type="button" @click="clearFilters"
                                                class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded flex items-center mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Clear Filters
                                        </button>
                                        <button type="submit"
                                                class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Apply Filters
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                        <!-- Data Table Card -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <!-- Students Table -->
                    <div class="overflow-x-auto">
                        <table v-if="!searchForm.processing"
                            class="w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <span class="sr-only">Select</span>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Seq. No.
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        NSTP Type
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        School Year
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        NSTP 1
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        NSTP 2
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Certificate
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="student in students.data" :key="student.id"
                                    class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <input type="checkbox"
                                            class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"
                                            v-model="downloadCertificateForm.student_ids" :value="student.id" />
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        {{ student.seq_no }}
                                    </td>
                                    <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"
                                        :title="student.last_name + ', ' + student.first_name + ' ' + student.middle_name">
                                        {{ student.last_name + ", " + student.first_name + " " + student.middle_name }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                        {{ student.course ? student.course.code : "" }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        {{ student.enrollment_type }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        {{ student.enrollment_year }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs">
                                        <span 
                                            :class="[
                                                'px-2 py-1 text-xs font-medium rounded-full', 
                                                        student.first_sem_status === 1
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                                            : student.first_sem_status === 0
                                                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                            ]"
                                        >
                                                    {{ student.first_sem_status === 1 ? 'Passed' : student.first_sem_status === 0 ? 'Failed' : 'Pending' }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs">
                                        <span 
                                            :class="[
                                                'px-2 py-1 text-xs font-medium rounded-full', 
                                                        student.second_sem_status === 1
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                                            : student.second_sem_status === 0
                                                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                            ]"
                                        >
                                                    {{ student.second_sem_status === 1 ? 'Passed' : student.second_sem_status === 0 ? 'Failed' : 'Pending' }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        <span v-if="student.certificate_printed_at"
                                            class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                                            :title="`Printed on ${new Date(student.certificate_printed_at).toLocaleString()} by ${student.certificate_printed_by}`">
                                            Printed
                                        </span>
                                        <span v-else
                                            class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full">
                                            Not Printed
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm space-x-2">
                                        <button @click.prevent="viewStudent(student)"
                                            class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                            <ShowIcon class="h-4 w-4" />
                                        </button>
                                        <a :href="`/students/${student.id}/edit`"
                                            class="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                                            <EditIcon class="h-4 w-4" />
                                        </a>
                                        <a href="#" @click="deleteStudent(student.id)"
                                            class="text-red-400 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
                                            <DeleteIcon class="h-4 w-4" />
                                        </a>
                                    </td>
                                </tr>
                                <tr v-if="students.data.length === 0">
                                    <td colspan="11" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                        No students found. Please try a different search.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else class="my-4 text-center text-xl text-gray-800 dark:text-gray-200">
                            Please wait...
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div v-if="pagination && pagination.last_page > 1"
                            class="flex flex-col sm:flex-row justify-between items-center">
                            <!-- Page info -->
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
                                Showing <span class="font-medium">{{ pagination.from
                                    }}</span> to
                                <span class="font-medium">{{
                                    pagination.to }}</span> of <span class="font-medium">{{
                                        pagination.total }}</span>
                                results
                            </p>

                            <!-- Navigation -->
                            <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <!-- Previous Page -->
                                <Link v-if="pagination.current_page > 1"
                                    :href="route('students.index', { ...route().params, page: pagination.current_page - 1 })"
                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <span class="sr-only">Previous</span>
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                </Link>
                                <span v-else
                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed">
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>

                                <!-- Page Numbers -->
                                <template v-for="page in pagination.last_page" :key="page">
                                    <!-- First page, last page, current page and pages around current page -->
                                    <template v-if="
                                        page === 1 ||
                                        page === pagination.last_page ||
                                        (page >= pagination.current_page - 1 && page <= pagination.current_page + 1)
                                    ">
                                        <Link :href="route('students.index', { ...route().params, page: page })" :class="[
                                            'relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-150',
                                            page === pagination.current_page
                                                ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-200'
                                                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        ]">
                                        {{ page }}
                                        </Link>
                                    </template>

                                    <!-- Ellipsis for gaps -->
                                    <span v-else-if="
                                        (page === 2 && pagination.current_page > 3) ||
                                        (page === pagination.last_page - 1 && pagination.current_page < pagination.last_page - 2)
                                    "
                                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400">
                                        ...
                                    </span>
                                </template>

                                <!-- Next Page -->
                                <Link v-if="pagination.current_page < pagination.last_page"
                                    :href="route('students.index', { ...route().params, page: pagination.current_page + 1 })"
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <span class="sr-only">Next</span>
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                </Link>
                                <span v-else
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed">
                                    <span class="sr-only">Next</span>
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

    <!-- Student View Modal -->
    <div v-if="viewModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="viewModal = false"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                                Student Details
                            </h3>
                            <div class="mt-4 space-y-3" v-if="currentStudent">
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                    <h4 class="font-medium text-gray-700 dark:text-gray-300">Personal Information</h4>
                                    <div class="grid grid-cols-2 gap-2 mt-2">
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">Full Name</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.last_name + ", " + currentStudent.first_name + " " + currentStudent.middle_name }}</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">Student ID</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.student_id }}</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">Course</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.course ? currentStudent.course.name : "N/A" }}</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">Year Level</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.year_level }}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                    <h4 class="font-medium text-gray-700 dark:text-gray-300">NSTP Status</h4>
                                    <div class="grid grid-cols-2 gap-2 mt-2">
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">NSTP Type</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.enrollment_type }}</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">School Year</p>
                                            <p class="text-sm text-gray-800 dark:text-gray-200">{{ currentStudent.enrollment_year }}</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">NSTP 1 Status</p>
                                            <p class="text-sm">
                                                <span 
                                                    :class="[
                                                        'px-2 py-1 text-xs font-medium rounded-full', 
                                                        currentStudent.first_sem_status === 1
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                                            : currentStudent.first_sem_status === 0
                                                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                    ]"
                                                >
                                                    {{ currentStudent.first_sem_status === 1 ? 'Passed' : currentStudent.first_sem_status === 0 ? 'Failed' : 'Pending' }}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">NSTP 2 Status</p>
                                            <p class="text-sm">
                                                <span 
                                                    :class="[
                                                        'px-2 py-1 text-xs font-medium rounded-full', 
                                                        currentStudent.second_sem_status === 1
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                                            : currentStudent.second_sem_status === 0
                                                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                    ]"
                                                >
                                                    {{ currentStudent.second_sem_status === 1 ? 'Passed' : currentStudent.second_sem_status === 0 ? 'Failed' : 'Pending' }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                    <h4 class="font-medium text-gray-700 dark:text-gray-300">Certificate Status</h4>
                                    <div class="mt-2">
                                        <p class="text-xs text-gray-500 dark:text-gray-400">Certificate Status</p>
                                        <p class="text-sm">
                                            <span v-if="currentStudent.certificate_printed_at"
                                                class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                                Printed on {{ new Date(currentStudent.certificate_printed_at).toLocaleString() }}
                                            </span>
                                            <span v-else
                                                class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full">
                                                Not Printed
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" @click="viewModal = false"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Certificate Date Modal -->
    <div v-if="certificateModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                                Certificate Information
                            </h3>
                            <div class="mt-4">
                                <InputLabel for="certificate_date" value="Certificate Date" class="text-gray-700 dark:text-gray-300" />
                                <input id="certificate_date" type="date"
                                    class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                    v-model="downloadCertificateForm.certificate_date" />
                                <InputError :message="downloadCertificateForm.errors.certificate_date" class="mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" @click="downloadCertificateSubmit"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Download
                    </button>
                    <button type="button" @click="certificateModal = false"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>