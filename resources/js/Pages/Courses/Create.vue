<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import SecondaryButton from "@/Components/Buttons/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { ref } from "vue";

const formSubmitted = ref(false);
const formErrors = ref({});

const form = useForm({
    code: '',
    name: '',
});

const submit = () => {
    formSubmitted.value = true;
    
    form.post(route("courses.store"), {
        onStart: () => {
            form.processing = true;
            formErrors.value = {};
        },
        onFinish: () => {
            form.processing = false;
        },
        onSuccess: () => {
            // Redirect is handled by the controller
        },
        onError: (errors) => {
            formErrors.value = errors;
        }
    });
};

const resetForm = () => {
    form.reset();
    formSubmitted.value = false;
    formErrors.value = {};
};
</script>

<template>
    <Head title="Add Course" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Add Course
            </h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Course Information</h3>
                    </div>
                    
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="submit" method="POST">
                            <div class="mb-6">
                                <InputLabel for="code" value="Course Code" />
                                <TextInput
                                    id="code"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.code"
                                    required
                                    autofocus
                                    placeholder="e.g., BSIT"
                                    :class="{ 'border-red-500': formSubmitted && form.errors.code }"
                                />
                                <InputError class="mt-2" :message="form.errors.code" />
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Enter a unique code for the course (e.g., BSCS, BSIT)
                                </p>
                            </div>
                            
                            <div class="mb-6">
                                <InputLabel for="name" value="Course Name" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.name"
                                    required
                                    placeholder="e.g., Bachelor of Science in Information Technology"
                                    :class="{ 'border-red-500': formSubmitted && form.errors.name }"
                                />
                                <InputError class="mt-2" :message="form.errors.name" />
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Enter the full name of the course
                                </p>
                            </div>
                            
                            <div class="flex items-center justify-end mt-6 space-x-3">
                                <SecondaryButton type="button" @click="resetForm" :disabled="form.processing">
                                    Reset
                                </SecondaryButton>
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Create Course
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="mt-4 flex justify-end">
                    <a :href="route('courses.index')" class="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        &larr; Back to Course List
                    </a>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
