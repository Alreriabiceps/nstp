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
import InputLabel from "@/Components/InputLabel.vue";
import { Head, useForm, router } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({
    courses: {
        type: Array,
        default: [],
    },
    students: {
        type: Array,
        default: [],
    },
    graduationYears: {
        type: Array,
        default: [],
    },
});

const downloadCertificateForm = useForm({
    student_ids: [],
    certificate_date: null,
});

const statusUpdateForm = useForm({
    student_ids: [],
    status: null,
});

const downloadCertificate = () => {
    if (downloadCertificateForm.student_ids.length === 0) {
        alert("Please select students to download certificate.");
        return;
    }

    certificateModal.value = true;
};

const updateStatus = () => {
    updateStatusModal.value = true;
};

const certificateModal = ref(false);
const toggleSelectAll = ref(false);
const updateStatusModal = ref(false);

const downloadCertificateSubmit = async () => {
    try {
        const response = await axios.post(
            route("certificates.download"),
            downloadCertificateForm.data(),
            {
                responseType: "blob", // Important for file download
            }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "certificates.zip"); // Specify the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        downloadCertificateForm.reset();
        certificateModal.value = false;
    } catch (error) {
        console.error("Error downloading certificates:", error);
    }
};
const selectAll = () => {
    if (toggleSelectAll.value) {
        downloadCertificateForm.student_ids = [];
        statusUpdateForm.student_ids = [];
    } else {
        downloadCertificateForm.student_ids = props.students.map(
            (student) => student.id
        );
        statusUpdateForm.student_ids = props.students.map(
            (student) => student.id
        );
    }
    toggleSelectAll.value = !toggleSelectAll.value;
};

const searchForm = useForm({
    search: "",
    course_id: "",
    semester: "",
    school_year: "",
    status: "",
});

const submitSearch = () => {
    const queryParams = new URLSearchParams({
        search: searchForm.search,
        course_id: searchForm.course_id,
        semester: searchForm.semester,
        school_year: searchForm.school_year,
        status: searchForm.status,
    }).toString();

    const urlWithParams = `students?${queryParams}`;

    router.visit(urlWithParams, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        }
    );
};

const retainSearchFormValues = () => {
    searchForm.search = localStorage.getItem('search') || '';
    searchForm.course_id = localStorage.getItem('course_id') || '';
    searchForm.semester = localStorage.getItem('semester') || '';
    searchForm.school_year = localStorage.getItem('school_year') || '';
    searchForm.status = localStorage.getItem('status') || '';
};
</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Students
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="flex justify-end space-x-2 p-2">
                        <a
                            href="/students/create"
                            type="button"
                            class="py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm"
                            ><PlusIcon class="h-4 w-5" /> Add Student</a
                        >
                        <a
                            href="/students/upload"
                            type="button"
                            class="py-2 px-2 bg-lime-500 hover:bg-lime-700 text-white rounded text-sm"
                            ><FileUploadIcon class="h-4 w-5" /> Batch Upload</a
                        >
                    </div>

                    <!-- Search -->
                    <div class="p-2">
                        <form @submit.prevent="submitSearch" method="POST">
                            <div class="flex mb-4">
                                <div class="w-1/2">
                                    <InputLabel
                                        for="search"
                                        value="Search"
                                    />
                                    <input
                                        id="search"
                                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                        type="text"
                                        name="search"
                                        placeholder="Search"
                                        v-model="searchForm.search"
                                    />
                                </div>
                            </div>
                            <div class="flex mb-4 space-x-4">
                                <div class="w-1/3">
                                    <InputLabel
                                        for="course"
                                        value="Course/Program"
                                    />
                                    <select
                                        id="course"
                                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                        name="course_id"
                                        v-model="searchForm.course_id"
                                        required
                                    >
                                        <option value="" hidden>
                                            Please Select Course
                                        </option>
                                        <option
                                            v-for="course in courses"
                                            :value="course.id"
                                            :key="course.id"
                                        >
                                            {{ course.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="w-1/3">
                                    <InputLabel
                                        for="semester"
                                        value="Semester"
                                    />
                                    <select
                                        id="semester"
                                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                        name="semester"
                                        value=""
                                        v-model="searchForm.semester"
                                    >
                                        <option value="" hidden>
                                            Please Select Semester
                                        </option>
                                        <option value="first">
                                            First Semester
                                        </option>
                                        <option value="second">
                                            Second Semester
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex mb-4 space-x-4">
                                <div class="w-1/3">
                                    <InputLabel
                                        for="school_year"
                                        value="School Year"
                                    />
                                    <select
                                        id="school_year"
                                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                        name="school_year"
                                        value=""
                                        v-model="searchForm.school_year"
                                    >
                                        <option value="" hidden>
                                            Please Select School Year
                                        </option>
                                        <option v-for="gy in graduationYears" :key="gy" :value="gy">
                                            {{ gy }}
                                        </option>
                                    </select>
                                </div>
                                <div class="w-1/3">
                                    <InputLabel
                                        for="status"
                                        value="Status"
                                    />
                                    <select
                                        id="status"
                                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                        name="status"
                                        value=""
                                        v-model="searchForm.status"
                                    >
                                        <option value="" hidden>
                                            Please Select Status
                                        </option>
                                        <option value="complete">
                                            Complete
                                        </option>
                                        <option value="incomplete">
                                            Incomplete
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                            >
                                Filter
                                <FilterIcon class="h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    <div class="flex justify-start space-x-2 p-2">
                        <button
                            @click="selectAll"
                            type="button"
                            class="py-2 px-2 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"
                        >
                            <SelectAllIcon class="h-4 w-4" /> Select all
                        </button>
                        <a href="#" @click="updateStatus" id="updateStatusButton" class="py-2 px-2 bg-pink-500 hover:bg-pink-700 text-white rounded text-sm" >Update Status</a>
                        <a
                            href="#"
                            @click="downloadCertificate"
                            id="downloadCertificateButton"
                            class="py-2 px-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"
                        >
                            <DownloadIcon class="h-4 w-4" /> Download Certificate
                        </a>

                    </div>

                    <div v-if="certificateModal">
                        <div
                            class="fixed inset-0 flex items-center justify-center z-50"
                        >
                            <div class="bg-white rounded-lg p-8">
                                <h2 class="text-xl font-semibold mb-4">
                                    Download Certificate
                                </h2>
                                <form
                                    @submit.prevent="downloadCertificateSubmit"
                                >
                                    <div class="mb-4">
                                        <label for="certificate_date" value="Certificate Date" />
                                        <input
                                            id="certificate_date"
                                            v-model="downloadCertificateForm.certificate_date"
                                            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                                            type="date"
                                            required
                                        />
                                        <InputError
                                            class="mt-2"
                                            :message="downloadCertificateForm.errors.certificate_date"
                                        />
                                    </div>
                                    <div class="flex justify-end">
                                        <button
                                            type="button"
                                            class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm mr-2"
                                            @click="certificateModal = false"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            class="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"
                                        >
                                            Download
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="fixed inset-0 bg-black opacity-50"></div>
                    </div>

                    <div v-if="updateStatusModal">
                        <div
                            class="fixed inset-0 flex items-center justify-center z-50"
                        >
                            <div class="bg-white rounded-lg p-8">
                                <h2 class="text-xl font-semibold mb-4">
                                    Update Status
                                </h2>
                                <form
                                    @submit.prevent="statusUpdate"
                                >
                                    <div class="mb-4">
                                        <label for="search" value="Search" />

                                        <!-- <InputError
                                            class="mt-2"
                                            :message="statusUpdateForm.errors.status"
                                        /> -->
                                    </div>
                                    <div class="flex justify-end">
                                        <button
                                            type="button"
                                            class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm mr-2"
                                            @click="updateStatusModal = false"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            class="py-2 px-4 bg-pink-500 hover:bg-pink-700 text-white rounded text-sm"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="fixed inset-0 bg-black opacity-50"></div>
                    </div>

                    <table class="w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                ></th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Seq. No.
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Student ID
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Course
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    NSTP Type
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    School Year
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="student in students" :key="student.id">
                                <td class="px-2 py-1 whitespace-nowrap">
                                    <input
                                        :key="student.id"
                                        type="checkbox"
                                        class="form-checkbox h-4 w-4 text-blue-500 rounded"
                                        v-model="downloadCertificateForm.student_ids"
                                        :value="student.id"
                                    />
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ student.seq_no }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ student.student_id }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-sm">
                                    {{ student.full_name }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-sm">
                                    {{ student.course ? student.course.code : "" }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ student.enrollment_type }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ student.enrollment_year }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    <div v-if="student.status === 1" class="text-green-500">
                                        Passed
                                    </div>
                                    <div v-else class="text-red-500">
                                        Incomplete
                                    </div>
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-sm space-x-2">
                                    <a
                                        :href="`/students/${student.id}`"
                                        class="text-blue-500 hover:text-blue-700"
                                        >
                                            <ShowIcon class="h-4 w-4" />
                                        </a
                                    >
                                    <a
                                        :href="`/students/${student.id}/edit`"
                                        class="text-green-500 hover:text-green-700"
                                        >
                                            <EditIcon class="h-4 w-4" />
                                        </a
                                    >
                                    <a
                                        :href="`/students/${student.id}/delete`"
                                        class="text-red-400 hover:text-red-600"
                                        >
                                            <DeleteIcon class="h-4 w-4" />
                                        </a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
