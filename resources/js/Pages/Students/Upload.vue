<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

const enrolledForm = useForm({
    enrolled_file: null,
    processing: false,
});

const graduatesForm = useForm({
    graduate_file: null,
    processing: false,
});

function uploadEnrolled() {
    enrolledForm.post(route("students.import-enrolled"), {
        onStart: () => {
            enrolledForm.processing = true;
        },
        onFinish: () => {
            enrolledForm.processing = false;
        },
        onSuccess: () => {
            // Show success message
            alert("Upload successful!");
        },
    });
}
function uploadGraduates() {
    graduatesForm.post(route("students.import-graduates"), {
        onStart: () => {
            graduatesForm.processing = true;
        },
        onFinish: () => {
            graduatesForm.processing = false;
        },
        onSuccess: () => {
            // Show success message
            alert("Upload successful!");
        },
    });
}
</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Batch Upload
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="uploadEnrolled" method="POST" class="mb-20">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="enrolled_file"
                                        value="Upload Enrolled Students"
                                    />
                                    <TextInput
                                        id="enrolled_file"
                                        type="file"
                                        class="mt-1 block w-full"
                                        @input="
                                            enrolledForm.enrolled_file =
                                                $event.target.files[0]
                                        "
                                        required
                                        autofocus
                                    />
                                    <p v-if="enrolledForm.processing" class="mt-2 ">Please wait...</p>
                                    <InputError
                                        class="mt-2"
                                        :message="
                                            enrolledForm.errors.batch_student_file
                                        "
                                    />
                                </div>
                            </div>

                            <div class="flex items-start justify-start mt-4">
                                <button
                                    class="ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    :class="{ 'opacity-25': enrolledForm.processing }"
                                    :disabled="enrolledForm.processing"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                        <form @submit.prevent="uploadGraduates" method="POST">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="graduates_file"
                                        value="Upload Graduate Students"
                                    />
                                    <TextInput
                                        id="graduates_file"
                                        type="file"
                                        class="mt-1 block w-full"
                                        @input="
                                            graduatesForm.graduate_file =
                                                $event.target.files[0]
                                        "
                                        required
                                        autofocus
                                    />
                                    <p v-if="graduatesForm.processing" class="mt-2 ">Please wait...</p>
                                    <InputError
                                        class="mt-2"
                                        :message="
                                            graduatesForm.errors.batch_student_file
                                        "
                                    />
                                </div>
                            </div>

                            <div class="flex items-start justify-start mt-4">
                                <button
                                    class="ms-4 inline-flex items-center px-2 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    :class="{ 'opacity-25': graduatesForm.processing }"
                                    :disabled="graduatesForm.processing"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
