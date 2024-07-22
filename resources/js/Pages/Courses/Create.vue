<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

const form = useForm({
    code: null,
    name: null,
});

const submit = () => {
    form.post(route("courses.store"), {
        onStart: () => {
            form.processing = true;
        },
        onFinish: () => {
            form.processing = false;
        },
        onSuccess: () => {
            // Show success message
            alert("Course created successfully!");
        },
    });
};
</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Add Course
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit" method="POST">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="code"
                                        value="Code"
                                    />
                                    <TextInput
                                        id="code"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.code"
                                        required
                                        autofocus
                                        placeholder="Please Enter Code"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.code"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="name"
                                        value="Name"
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.name"
                                        required
                                        autofocus
                                        placeholder="Please Enter Name"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.name"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    class="ms-4"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
