<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import { ref } from "vue";
import FileUploadIcon from "@/Components/Icons/FileUploadIcon.vue";

const isUploading = ref(false);
const uploadProgress = ref(0);
const dragActive = ref(false);

const enrolledForm = useForm({
    enrolled_file: null,
    processing: false,
});

const graduatesForm = useForm({
    graduates_file: null,
    processing: false,
});

function handleDrag(e, form) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
        dragActive.value = true;
    } else if (e.type === "dragleave") {
        dragActive.value = false;
    }
}

function handleDrop(e, form) {
    e.preventDefault();
    e.stopPropagation();
    dragActive.value = false;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        form[form === enrolledForm ? 'enrolled_file' : 'graduates_file'] = e.dataTransfer.files[0];
    }
}

function uploadEnrolled() {
    if (!enrolledForm.enrolled_file) {
        enrolledForm.errors.enrolled_file = 'Please select a file to upload.';
        return;
    }
    
    isUploading.value = true;
    uploadProgress.value = 0;
    enrolledForm.post(route("students.import-enrolled"), {
        onStart: () => {
            enrolledForm.processing = true;
        },
        onProgress: (progress) => {
            uploadProgress.value = Math.round(progress.percentage);
        },
        onFinish: () => {
            enrolledForm.processing = false;
            isUploading.value = false;
            uploadProgress.value = 0;
        },
        onSuccess: () => {
            alert("Upload successful!");
        },
    });
}

function uploadGraduates() {
    if (!graduatesForm.graduates_file) {
        graduatesForm.errors.graduates_file = 'Please select a file to upload.';
        return;
    }
    
    isUploading.value = true;
    uploadProgress.value = 0;
    graduatesForm.post(route("students.import-graduates"), {
        onStart: () => {
            graduatesForm.processing = true;
        },
        onProgress: (progress) => {
            uploadProgress.value = Math.round(progress.percentage);
        },
        onFinish: () => {
            graduatesForm.processing = false;
            isUploading.value = false;
            uploadProgress.value = 0;
        },
        onSuccess: () => {
            alert("Upload successful!");
        },
    });
}
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
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Uploading</p>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" :style="{ width: uploadProgress + '%' }"></div>
                </div>
                <p class="text-xs text-gray-500 mt-2">{{ uploadProgress }}</p>
            </div>
        </div>

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Batch Upload
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <!-- Upload Instructions Static Panel -->
                        <div class="mb-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 class="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Upload Instructions</h3>
                            <ul class="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-200">
                                <li>Upload Excel files (.xls or .xlsx) only</li>
                                <li>Maximum file size: 10MB</li>
                                <li>Make sure your file follows the required format</li>
                                <li>You can drag and drop files into the upload area</li>
                            </ul>
                        </div>

                        <!-- Enrolled Students Upload -->
                        <div class="mb-12">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Enrolled Students</h3>
                            <form @submit.prevent="uploadEnrolled" method="POST">
                                <div 
                                    class="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200"
                                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': dragActive }"
                                    @dragenter="handleDrag($event, enrolledForm)"
                                    @dragover="handleDrag($event, enrolledForm)"
                                    @dragleave="handleDrag($event, enrolledForm)"
                                    @drop="handleDrop($event, enrolledForm)"
                                >
                                    <div class="text-center">
                                        <FileUploadIcon class="mx-auto h-12 w-12 text-gray-400" />
                                        <div class="mt-4">
                                            <label for="enrolled_file" class="cursor-pointer">
                                                <span class="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    Click to upload or drag and drop
                                                </span>
                                                <span class="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                                                    Excel files only (.xls, .xlsx)
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                id="enrolled_file"
                                                class="hidden"
                                                name="enrolled_file"
                                                @input="enrolledForm.enrolled_file = $event.target.files[0]"
                                                accept=".xls,.xlsx,.csv"
                                            >
                                        </div>
                                        <div v-if="enrolledForm.enrolled_file" class="mt-4">
                                            <p class="text-sm text-gray-600 dark:text-gray-300">
                                                Selected file: {{ enrolledForm.enrolled_file.name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <InputError
                                    class="mt-2"
                                    :message="enrolledForm.errors.enrolled_file"
                                />
                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                        :class="{ 'opacity-25': enrolledForm.processing }"
                                        :disabled="enrolledForm.processing || graduatesForm.processing"
                                    >
                                        <FileUploadIcon class="h-4 w-4 mr-2" />
                                        Upload Enrolled Students
                                    </button>
                                </div>
                            </form>
                        </div>

                        <!-- Graduate Students Upload -->
                        <div>
                            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Graduate Students</h3>
                            <form @submit.prevent="uploadGraduates" method="POST">
                                <div 
                                    class="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200"
                                    :class="{ 'border-green-500 bg-green-50 dark:bg-green-900/20': dragActive }"
                                    @dragenter="handleDrag($event, graduatesForm)"
                                    @dragover="handleDrag($event, graduatesForm)"
                                    @dragleave="handleDrag($event, graduatesForm)"
                                    @drop="handleDrop($event, graduatesForm)"
                                >
                                    <div class="text-center">
                                        <FileUploadIcon class="mx-auto h-12 w-12 text-gray-400" />
                                        <div class="mt-4">
                                            <label for="graduates_file" class="cursor-pointer">
                                                <span class="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    Click to upload or drag and drop
                                                </span>
                                                <span class="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                                                    Excel files only (.xls, .xlsx)
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                id="graduates_file"
                                                class="hidden"
                                                name="graduates_file"
                                                @input="graduatesForm.graduates_file = $event.target.files[0]"
                                                accept=".xls,.xlsx"
                                            >
                                        </div>
                                        <div v-if="graduatesForm.graduates_file" class="mt-4">
                                            <p class="text-sm text-gray-600 dark:text-gray-300">
                                                Selected file: {{ graduatesForm.graduates_file.name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <InputError
                                    class="mt-2"
                                    :message="graduatesForm.errors.graduates_file"
                                />
                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 focus:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                        :class="{ 'opacity-25': graduatesForm.processing }"
                                        :disabled="graduatesForm.processing || enrolledForm.processing"
                                    >
                                        <FileUploadIcon class="h-4 w-4 mr-2" />
                                        Upload Graduate Students
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
