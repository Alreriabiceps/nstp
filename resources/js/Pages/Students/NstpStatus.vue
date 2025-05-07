<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ref, computed, watch, onMounted } from "vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import SelectAllIcon from "@/Components/Icons/SelectAllIcon.vue";
import Pagination from "@/Components/Pagination.vue";
import axios from "axios";

const props = defineProps({
    students: {
        type: Array,
        default: () => [],
    },
    courses: {
        type: Array,
        default: () => [],
    },
    graduationYears: {
        type: Array,
        default: () => [],
    },
    stats: {
        type: Object,
        default: () => ({
            nstp1: { pending: 0, passed: 0, failed: 0 },
            nstp2: { pending: 0, passed: 0, failed: 0 }
        })
    },
    flash: {
        type: Object,
        default: () => ({})
    },
    showFailedFilter: {
        type: Boolean,
        default: false
    },
    failedFilter: {
        type: String,
        default: ''
    }
});

// Message display
const message = ref('');
const messageType = ref(''); // 'success', 'error'

// Instructions panel toggle
const showInstructions = ref(false);

// Track active tab
const activeTab = ref('nstp1');

// Function to switch tabs
const switchTab = (tabId) => {
    activeTab.value = tabId;
    
    // Hide all tab content
    document.getElementById('nstp1').classList.add('hidden');
    document.getElementById('nstp2').classList.add('hidden');
    
    // Show active tab content
    document.getElementById(tabId).classList.remove('hidden');
    
    // Update tab styling
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
        if (tab.getAttribute('href') === `#${tabId}`) {
            tab.classList.add('border-blue-500', 'text-blue-600', 'dark:text-blue-300');
            tab.classList.remove('border-transparent', 'text-gray-500');
        } else {
            tab.classList.remove('border-blue-500', 'text-blue-600', 'dark:text-blue-300');
            tab.classList.add('border-transparent', 'text-gray-500');
        }
    });
};

// Clear message after 5 seconds
const showMessage = (text, type = 'success') => {
    message.value = text;
    messageType.value = type;
    
    setTimeout(() => {
        message.value = '';
        messageType.value = '';
    }, 5000);
};

// Check for flash messages on page load
if (props.flash && props.flash.success) {
    showMessage(props.flash.success, 'success');
} else if (props.flash && props.flash.error) {
    showMessage(props.flash.error, 'error');
}

// Forms for marking students as failed
const nstp1FailedStudents = ref([]);
const nstp2FailedStudents = ref([]);

// State for managing modals
const addStudentsModal = ref(false);
const failedStudentsModal = ref(false);
const modalType = ref('nstp1'); // 'nstp1' or 'nstp2'

// Search form for finding students
const searchForm = useForm({
    search: '',
    course_id: '',
    school_year: '',
});

// Selected students in the modal
const searchSelectedIds = ref([]);
const searchResults = ref([]);

// Calculate students that are currently set as failed
const pendingNstp1Students = computed(() => {
    return props.students.filter(student => student.first_sem_status === 2); // 2=pending
});

const pendingNstp2Students = computed(() => {
    return props.students.filter(student => student.second_sem_status === 2); // 2=pending
});

// Get students that are marked as failed but not yet submitted
const getDisplayStudents = () => {
    if (modalType.value === 'nstp1') {
        return nstp1FailedStudents.value.map(id => {
            return props.students.find(s => s.id === id);
        }).filter(s => s !== undefined);
    } else {
        return nstp2FailedStudents.value.map(id => {
            return props.students.find(s => s.id === id);
        }).filter(s => s !== undefined);
    }
};

// Search for students in the modal
const searchStudents = () => {
    // Show results only when user searches for something
    if (!searchForm.search && !searchForm.course_id && !searchForm.school_year) {
        searchResults.value = [];
        return;
    }

    // Filter students based on search criteria
    searchResults.value = props.students.filter(student => {
        // Only show pending students for the selected NSTP type
        const isPending = modalType.value === 'nstp1' 
            ? student.first_sem_status === 2 // 2=pending 
            : student.second_sem_status === 2; // 2=pending
            
        if (!isPending) return false;
        
        const fullName = `${student.last_name}, ${student.first_name} ${student.middle_name}`.toLowerCase();
        const studentId = student.student_id?.toLowerCase() || '';
        
        const matchesSearch = searchForm.search === '' || 
            fullName.includes(searchForm.search.toLowerCase()) || 
            studentId.includes(searchForm.search.toLowerCase());
            
        const matchesCourse = searchForm.course_id === '' || 
            (student.course && student.course.id.toString() === searchForm.course_id);
            
        const matchesYear = searchForm.school_year === '' || 
            student.enrollment_year === searchForm.school_year;
        
        return matchesSearch && matchesCourse && matchesYear;
    });
    
    // Debug information
    console.log(`Found ${searchResults.value.length} pending students that match the criteria for ${modalType.value}`);
    
    // Update the selected IDs list to remove any students that are no longer pending
    if (modalType.value === 'nstp1') {
        nstp1FailedStudents.value = nstp1FailedStudents.value.filter(id => {
            const student = props.students.find(s => s.id === id);
            return student && student.first_sem_status === 2;
        });
    } else {
        nstp2FailedStudents.value = nstp2FailedStudents.value.filter(id => {
            const student = props.students.find(s => s.id === id);
            return student && student.second_sem_status === 2;
        });
    }
};

// Open the add students modal
const openAddStudentsModal = (type) => {
    modalType.value = type;
    addStudentsModal.value = true;
    searchSelectedIds.value = [];
    searchForm.search = '';
    searchForm.course_id = '';
    searchForm.school_year = '';
    searchResults.value = []; // Clear results when opening modal
    
    // Recalculate pending students
    const pendingStudents = props.students.filter(student => {
        return type === 'nstp1' 
            ? student.first_sem_status === 2
            : student.second_sem_status === 2;
    });
    
    // Show instructions to the user
    const pendingCount = pendingStudents.length;
    
    console.log(`Opening modal to select failed students. There are ${pendingCount} pending students for NSTP ${type === 'nstp1' ? '1' : '2'}`);
    
    // If no pending students, show message and close modal
    if (pendingCount === 0) {
        showMessage(`There are no pending students for NSTP ${type === 'nstp1' ? '1' : '2'}. All students have already been marked as passed or failed.`, 'error');
        addStudentsModal.value = false;
    }
};

// Open the modal to view/manage selected students
const openFailedStudentsModal = (type) => {
    modalType.value = type;
    failedStudentsModal.value = true;
};

// Add selected students to the failed list
const addSelectedStudents = () => {
    if (searchSelectedIds.value.length === 0) {
        alert("Please select at least one student to add.");
        return;
    }
    
    // Ensure all IDs are numbers
    const selectedIds = searchSelectedIds.value.map(id => parseInt(id, 10));
    console.log('Selected IDs to add:', selectedIds);

    if (modalType.value === 'nstp1') {
        // Add selected students to the nstp1 failed list
        nstp1FailedStudents.value = [...new Set([...nstp1FailedStudents.value, ...selectedIds])];
        console.log('Updated NSTP1 failed students:', nstp1FailedStudents.value);
    } else {
        // Add selected students to the nstp2 failed list
        nstp2FailedStudents.value = [...new Set([...nstp2FailedStudents.value, ...selectedIds])];
        console.log('Updated NSTP2 failed students:', nstp2FailedStudents.value);
    }

    addStudentsModal.value = false;
    searchSelectedIds.value = [];
};

// Remove a student from the failed list
const removeStudent = (studentId) => {
    if (modalType.value === 'nstp1') {
        nstp1FailedStudents.value = nstp1FailedStudents.value.filter(id => id !== studentId);
    } else {
        nstp2FailedStudents.value = nstp2FailedStudents.value.filter(id => id !== studentId);
    }
};

// Submit failed students and pass remaining students
const submitFailed = (type) => {
    const studentIds = type === 'nstp1' ? nstp1FailedStudents.value : nstp2FailedStudents.value;
    
    // Debug the student IDs
    console.log(`Submitting ${type} with student IDs:`, studentIds);

    if (studentIds.length === 0) {
        // If no students are selected as failed, just pass all pending students
        if (!confirm(`No students are marked as failed. This will mark ALL pending students as PASSED for NSTP ${type === 'nstp1' ? '1' : '2'}. Continue?`)) {
            return;
        }

        // Use axios for simpler CSRF handling
        axios.post(route(type === 'nstp1' ? "nstp1.submit" : "nstp2.submit"))
            .then(response => {
                console.log('Submit successful, updating UI...');
                
                // Update the local student data
                props.students.forEach(student => {
                    if (type === 'nstp1' && student.first_sem_status === 2) {
                        student.first_sem_status = 1;
                    } else if (type === 'nstp2' && student.second_sem_status === 2) {
                        student.second_sem_status = 1;
                    }
                });
                
                // Update stats
                if (type === 'nstp1') {
                    props.stats.nstp1.passed += props.stats.nstp1.pending;
                    props.stats.nstp1.pending = 0;
                } else {
                    props.stats.nstp2.passed += props.stats.nstp2.pending;
                    props.stats.nstp2.pending = 0;
                }
                
                // Show success message
                showMessage(`All pending students have been marked as PASSED for NSTP ${type === 'nstp1' ? '1' : '2'}.`, 'success');
            })
            .catch(error => {
                console.error('Error submitting NSTP status:', error);
                showMessage('An error occurred while updating student statuses. Please try again.', 'error');
            });
        
        return;
    }

    // First mark selected students as failed
    if (!confirm(`This will mark ${studentIds.length} students as FAILED and all remaining pending students as PASSED for NSTP ${type === 'nstp1' ? '1' : '2'}. Continue?`)) {
        return;
    }

    // Mark the selected students as failed using axios
    const formData = {
        student_ids: studentIds
    };
    console.log('Submitting form data:', formData);
    
    axios.post(route(type === 'nstp1' ? "nstp1.failed" : "nstp2.failed"), formData)
        .then(response => {
            console.log('First step successful, submitting second step...');
            
            // Update the local student data to mark selected students as failed
            props.students.forEach(student => {
                if (studentIds.includes(student.id)) {
                    if (type === 'nstp1') {
                        student.first_sem_status = 0;
                    } else {
                        student.second_sem_status = 0;
                    }
                }
            });
            
            // If success, then mark remaining as passed
            axios.post(route(type === 'nstp1' ? "nstp1.submit" : "nstp2.submit"))
                .then(secondResponse => {
                    console.log('Both steps successful, updating UI...');
                    
                    // Update the local student data to mark remaining pending students as passed
                    props.students.forEach(student => {
                        if (type === 'nstp1' && student.first_sem_status === 2) {
                            student.first_sem_status = 1;
                        } else if (type === 'nstp2' && student.second_sem_status === 2) {
                            student.second_sem_status = 1;
                        }
                    });
                    
                    // Update the stats
                    if (type === 'nstp1') {
                        props.stats.nstp1.failed += studentIds.length;
                        props.stats.nstp1.passed += props.stats.nstp1.pending - studentIds.length;
                        props.stats.nstp1.pending = 0;
                    } else {
                        props.stats.nstp2.failed += studentIds.length;
                        props.stats.nstp2.passed += props.stats.nstp2.pending - studentIds.length;
                        props.stats.nstp2.pending = 0;
                    }
                    
                    // Show success message
                    showMessage(`${studentIds.length} students marked as FAILED and all remaining pending students marked as PASSED for NSTP ${type === 'nstp1' ? '1' : '2'}.`, 'success');
                    
                    // Clear selections and close modal
                    if (type === 'nstp1') {
                        nstp1FailedStudents.value = [];
                    } else {
                        nstp2FailedStudents.value = [];
                    }
                    failedStudentsModal.value = false;
                })
                .catch(error => {
                    console.error('Error submitting NSTP status (pass step):', error);
                    showMessage('An error occurred while marking remaining students as passed. Please try again.', 'error');
                });
        })
        .catch(error => {
            console.error('Error submitting NSTP status (fail step):', error);
            showMessage('An error occurred while marking selected students as failed. Please try again.', 'error');
        });
};

// Watch for search changes
watch(() => searchForm.search, () => {
    if (searchForm.search.length >= 2 || searchForm.search === '') {
        searchStudents();
    }
});

watch(() => searchForm.course_id, () => {
    searchStudents();
});

watch(() => searchForm.school_year, () => {
    searchStudents();
});

const getStatusClass = (status) => {
    if (status === undefined || status === null) {
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }

    switch (parseInt(status, 10)) {
        case 1: // passed
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
        case 0: // failed
            return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
        case 2: // pending
        default:
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    }
};

const getStatusText = (status) => {
    if (status === undefined || status === null) {
        return 'Unknown';
    }
    
    switch (parseInt(status, 10)) {
        case 1: 
            return 'Passed';
        case 0: 
            return 'Failed';
        case 2: 
            return 'Pending';
        default:
            return 'Unknown';
    }
};

// Methods for resetting status to pending
const confirmResetAllNstp1 = () => {
    if (confirm('Are you sure you want to reset ALL students to PENDING status for NSTP 1? This action cannot be undone.')) {
        axios.post(route('nstp1.reset.all'))
            .then(response => {
                console.log('Reset NSTP1 successful');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error resetting NSTP1 status:', error);
                showMessage('An error occurred while resetting student statuses. Please try again.', 'error');
            });
    }
};

const confirmResetAllNstp2 = () => {
    if (confirm('Are you sure you want to reset ALL students to PENDING status for NSTP 2? This action cannot be undone.')) {
        axios.post(route('nstp2.reset.all'))
            .then(response => {
                console.log('Reset NSTP2 successful');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error resetting NSTP2 status:', error);
                showMessage('An error occurred while resetting student statuses. Please try again.', 'error');
            });
    }
};

// Methods for loading failed students 
const viewFailedNstp1Students = () => {
    window.location.href = route('nstp1.failed.list');
};

const viewFailedNstp2Students = () => {
    window.location.href = route('nstp2.failed.list');
};

// Method to clear filters and go back to normal view
const clearFailedFilters = () => {
    window.location.href = route('nstp.status');
};

// Function to initialize tabs
const initTabs = () => {
    // If showing filtered results, show the corresponding tab
    if (props.showFailedFilter) {
        const tabToShow = props.failedFilter;
        document.getElementById(tabToShow)?.classList.remove('hidden');
        
        // Also update the active tab state
        activeTab.value = tabToShow;
        
        // Update tab styling
        setTimeout(() => {
            const tabs = document.querySelectorAll('.tab-link');
            tabs.forEach(tab => {
                if (tab.getAttribute('href') === `#${tabToShow}`) {
                    tab.classList.add('border-blue-500', 'text-blue-600', 'dark:text-blue-300');
                    tab.classList.remove('border-transparent', 'text-gray-500');
                } else {
                    tab.classList.remove('border-blue-500', 'text-blue-600', 'dark:text-blue-300');
                    tab.classList.add('border-transparent', 'text-gray-500');
                }
            });
        }, 0);
    } else {
        // Default to NSTP 1 if not showing filtered results
        document.getElementById('nstp1')?.classList.remove('hidden');
    }
};

// Call initTabs when component is mounted
onMounted(() => {
    initTabs();
});
</script>

<template>
    <Head title="NSTP Status Management" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    NSTP Status Management
                </h2>
                <div class="flex space-x-2">
                    <button @click="window.location.reload()"
                        class="px-3 py-1.5 bg-gray-500 hover:bg-gray-700 text-white text-sm rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh Data
                    </button>
                </div>
            </div>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- NSTP Status Instructions Panel -->
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6">
                    <div @click="showInstructions = !showInstructions" 
                         class="p-4 border-b border-gray-200 dark:border-gray-700 bg-purple-50 dark:bg-purple-900/20 cursor-pointer flex justify-between items-center">
                        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-300">NSTP Status Management Instructions</h3>
                        <svg class="h-5 w-5 text-purple-600 dark:text-purple-400 transform transition-transform duration-200" 
                             :class="{ 'rotate-180': showInstructions }"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-if="showInstructions" class="p-6 text-gray-700 dark:text-gray-300">
                        <ul class="list-disc list-inside space-y-2">
                            <li>Use this page to manage students' NSTP 1 and NSTP 2 completion status.</li>
                            <li>Switch between <span class="font-semibold">NSTP 1</span> and <span class="font-semibold">NSTP 2</span> tabs to manage each semester separately.</li>
                            <li>The dashboard at the top shows the current statistics for <span class="font-semibold">Pending</span>, <span class="font-semibold">Passed</span>, and <span class="font-semibold">Failed</span> students.</li>
                            <li>Use the <span class="font-semibold">Mark Students as Failed</span> button to select students who did not complete the requirements.</li>
                            <li>Use the <span class="font-semibold">Submit & Process</span> button to mark selected students as failed and all other pending students as passed.</li>
                            <li>Filter the student list using the search box, course dropdown, or school year selection.</li>
                            <li>Changes to NSTP status will affect students' eligibility for certificate generation.</li>
                            <li>Use <span class="font-semibold">Reset All to Pending</span> to clear all status values and start fresh for a semester.</li>
                        </ul>
                    </div>
                </div>

                <!-- Status update message display -->
                <div v-if="message" :class="{
                    'bg-green-100 dark:bg-green-900/20 border-green-400 dark:border-green-800 text-green-700 dark:text-green-300': messageType === 'success',
                    'bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-700 dark:text-red-300': messageType === 'error'
                }" class="mb-6 p-4 border-l-4 rounded">
                    {{ message }}
                </div>
                
                <!-- Failed students filter notification -->
                <div v-if="props.showFailedFilter" 
                    class="p-4 mb-4 rounded-md shadow-sm bg-amber-50 text-amber-700 dark:bg-amber-900 dark:text-amber-200 flex justify-between items-center">
                    <div>
                        <span class="font-bold">Filtered view:</span> Showing only failed students for NSTP {{ props.failedFilter === 'nstp1' ? '1' : '2' }}
                    </div>
                    <button @click="clearFailedFilters" 
                        class="px-2 py-1 bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm">
                        Clear Filter
                    </button>
                </div>
            
                <!-- NSTP Status Tabs -->
                <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <nav class="-mb-px flex">
                            <a href="#nstp1" class="border-blue-500 text-blue-600 dark:text-blue-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link" @click="switchTab('nstp1')">
                                NSTP 1
                            </a>
                            <a href="#nstp2" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link" @click="switchTab('nstp2')">
                                NSTP 2
                            </a>
                        </nav>
                    </div>

                    <!-- NSTP 1 Content -->
                    <div id="nstp1" class="p-6 hidden">
                        <!-- Status Stats -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <div class="px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Pending:</span>
                                {{ props.stats.nstp1.pending }}
                            </div>
                            <div class="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Passed:</span>
                                {{ props.stats.nstp1.passed }}
                            </div>
                            <div class="px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Failed:</span>
                                {{ props.stats.nstp1.failed }}
                            </div>
                            <div v-if="nstp1FailedStudents.length > 0"
                                class="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Selected for Fail:</span>
                                {{ nstp1FailedStudents.length }}
                            </div>
                        </div>

                        <!-- Action Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <!-- Card 1: Student Selection -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Student Selection</h4>
                                <div class="space-y-2">
                                    <button @click="openAddStudentsModal('nstp1')"
                                        class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add Students to Failed List
                                    </button>
                                    <button @click="openFailedStudentsModal('nstp1')"
                                        class="w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center"
                                        :disabled="nstp1FailedStudents.length === 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': nstp1FailedStudents.length === 0 }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View Selected ({{ nstp1FailedStudents.length }})
                                    </button>
                                </div>
                            </div>

                            <!-- Card 2: Submit & Process -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Process Changes</h4>
                                <div class="space-y-2">
                                    <button @click="submitFailed('nstp1')"
                                        class="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Submit & Process Students
                                    </button>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        Marks selected students as failed, all other pending students as passed.
                                    </p>
                                </div>
                            </div>

                            <!-- Card 3: Advanced Actions -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Advanced Actions</h4>
                                <div class="space-y-2">
                                    <button @click="viewFailedNstp1Students" 
                                        class="w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center"
                                        :disabled="props.stats.nstp1.failed === 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': props.stats.nstp1.failed === 0 }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View Failed ({{ props.stats.nstp1.failed }})
                                    </button>
                                    <button @click="confirmResetAllNstp1" 
                                        class="w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        Reset All to Pending
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NSTP 2 Content -->
                    <div id="nstp2" class="p-6 hidden">
                        <!-- Status Stats -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <div class="px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Pending:</span>
                                {{ props.stats.nstp2.pending }}
                            </div>
                            <div class="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Passed:</span>
                                {{ props.stats.nstp2.passed }}
                            </div>
                            <div class="px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Failed:</span>
                                {{ props.stats.nstp2.failed }}
                            </div>
                            <div v-if="nstp2FailedStudents.length > 0"
                                class="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm">
                                <span class="font-semibold">Selected for Fail:</span>
                                {{ nstp2FailedStudents.length }}
                            </div>
                        </div>

                        <!-- Action Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <!-- Card 1: Student Selection -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Student Selection</h4>
                                <div class="space-y-2">
                                    <button @click="openAddStudentsModal('nstp2')"
                                        class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add Students to Failed List
                                    </button>
                                    <button @click="openFailedStudentsModal('nstp2')"
                                        class="w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center"
                                        :disabled="nstp2FailedStudents.length === 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': nstp2FailedStudents.length === 0 }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View Selected ({{ nstp2FailedStudents.length }})
                                    </button>
                                </div>
                            </div>

                            <!-- Card 2: Submit & Process -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Process Changes</h4>
                                <div class="space-y-2">
                                    <button @click="submitFailed('nstp2')"
                                        class="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Submit & Process Students
                                    </button>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        Marks selected students as failed, all other pending students as passed.
                                    </p>
                                </div>
                            </div>

                            <!-- Card 3: Advanced Actions -->
                            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Advanced Actions</h4>
                                <div class="space-y-2">
                                    <button @click="viewFailedNstp2Students" 
                                        class="w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center"
                                        :disabled="props.stats.nstp2.failed === 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': props.stats.nstp2.failed === 0 }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View Failed ({{ props.stats.nstp2.failed }})
                                    </button>
                                    <button @click="confirmResetAllNstp2" 
                                        class="w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        Reset All to Pending
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Students Modal -->
        <div v-if="addStudentsModal">
            <div class="fixed inset-0 flex items-center justify-center z-50">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Add Students to Failed List (NSTP {{ modalType === 'nstp1' ? '1' : '2' }})
                        </h2>
                        <button @click="addStudentsModal = false"
                            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <!-- Search Form -->
                    <div class="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label for="search"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search</label>
                            <input id="search" v-model="searchForm.search" type="text"
                                class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full"
                                placeholder="Name or Student ID">
                        </div>
                        <div>
                            <label for="course_id"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course</label>
                            <select id="course_id" v-model="searchForm.course_id"
                                class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full">
                                <option value="">All Courses</option>
                                <option v-for="course in props.courses" :value="course.id" :key="course.id">
                                    {{ course.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="school_year"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">School
                                Year</label>
                            <select id="school_year" v-model="searchForm.school_year"
                                class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full">
                                <option value="">All Years</option>
                                <option v-for="year in props.graduationYears" :value="year" :key="year">
                                    {{ year }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Search Results -->
                    <div class="overflow-x-auto">
                        <table class="w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <input type="checkbox"
                                            class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"
                                            @change="searchSelectedIds = $event.target.checked ? searchResults.map(s => s.id) : []">
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Student ID
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
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="student in searchResults" :key="`search-${student.id}`"
                                    class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <input type="checkbox"
                                            class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"
                                            v-model="searchSelectedIds" :value="student.id" />
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        {{ student.student_id }}
                                    </td>
                                    <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"
                                        :title="`${student.last_name}, ${student.first_name} ${student.middle_name}`">
                                        {{ student.last_name }}, {{ student.first_name }} {{ student.middle_name }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                        {{ student.course ? student.course.code : "" }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                                            :class="getStatusClass(modalType === 'nstp1' ? student.first_sem_status : student.second_sem_status)">
                                            {{ getStatusText(modalType === 'nstp1' ? student.first_sem_status : student.second_sem_status) }}
                                        </span>
                                    </td>
                                </tr>
                                <tr v-if="searchResults.length === 0">
                                    <td colspan="5" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                {{ searchForm.search || searchForm.course_id || searchForm.school_year ? 
                                    'No pending students found matching your search criteria. Only students with PENDING status are shown.' : 
                                    'Enter search criteria to find students. Only students with PENDING status can be marked as failed.' }}
                                            
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-end mt-6 space-x-3">
                        <button @click="addStudentsModal = false"
                            class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm">
                            Cancel
                        </button>
                        <button @click="addSelectedStudents"
                            class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm"
                            :disabled="searchSelectedIds.length === 0"
                            :class="{ 'opacity-50 cursor-not-allowed': searchSelectedIds.length === 0 }">
                            Add {{ searchSelectedIds.length }} Selected Students
                        </button>
                    </div>
                </div>
            </div>
            <div class="fixed inset-0 bg-black opacity-50"></div>
        </div>

        <!-- Failed Students Modal -->
        <div v-if="failedStudentsModal">
            <div class="fixed inset-0 flex items-center justify-center z-50">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Students Selected to Fail (NSTP {{ modalType === 'nstp1' ? '1' : '2' }})
                        </h2>
                        <button @click="failedStudentsModal = false"
                            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <!-- Selected Students List -->
                    <div class="overflow-x-auto">
                        <table class="w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Student ID
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
                                        Status
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="student in getDisplayStudents()" :key="`selected-${student.id}`"
                                    class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300">
                                        {{ student.student_id }}
                                    </td>
                                    <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"
                                        :title="`${student.last_name}, ${student.first_name} ${student.middle_name}`">
                                        {{ student.last_name }}, {{ student.first_name }} {{ student.middle_name }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                        {{ student.course ? student.course.code : "" }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                                            :class="getStatusClass(modalType === 'nstp1' ? student.first_sem_status : student.second_sem_status)">
                                            {{ getStatusText(modalType === 'nstp1' ? student.first_sem_status : student.second_sem_status) }}
                                        </span>
                                        <span class="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                            Will be marked as Failed
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <button @click="removeStudent(student.id)"
                                            class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="getDisplayStudents().length === 0">
                                    <td colspan="5" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                        No students selected to fail. Click "Add Students" to select students.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-end mt-6 space-x-3">
                        <button @click="failedStudentsModal = false"
                            class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
            <div class="fixed inset-0 bg-black opacity-50"></div>
        </div>
    </AuthenticatedLayout>
</template>