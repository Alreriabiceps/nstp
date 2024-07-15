<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

const form = useForm({
    batch_student_file: null,
    processing: false,
});

function upload() {
    form.post(route("students.import"), {
        onStart: () => {
            form.processing = true;
        },
        onFinish: () => {
            form.processing = false;
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
                        <form @submit.prevent="upload" method="POST">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="batch_student_file"
                                        value="Excel File"
                                    />
                                    <TextInput
                                        id="batch_student_file"
                                        type="file"
                                        class="mt-1 block w-full"
                                        @input="
                                            form.batch_student_file =
                                                $event.target.files[0]
                                        "
                                        required
                                        autofocus
                                    />
                                    <progress
                                        v-if="form.progress"
                                        :value="form.progress.percentage"
                                        max="100"
                                    >
                                        {{ form.progress.percentage }}%
                                    </progress>
                                    <InputError
                                        class="mt-2"
                                        :message="
                                            form.errors.batch_student_file
                                        "
                                    />
                                </div>
                            </div>

                            <div class="flex items-start justify-end mt-4">
                                <button
                                    class="ms-4 inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
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
