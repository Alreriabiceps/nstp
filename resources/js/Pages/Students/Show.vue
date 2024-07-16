<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";


const props = defineProps({
    student: {
        type: Object,
        default: {},
    }
});




</script>

<template>
    <Head title="Edit Student" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ student.first_name }} {{ student.middle_name }} {{ student.last_name }}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="flex items-center space-x-4">
                            <img :src="`/storage/${student.image}`" alt="Student Image" class="w-32 h-32 object-cover rounded-full" v-if="student.image" />
                            <div class="w-32 h-32 bg-gray-200 rounded-full animate-pulse" v-else></div>

                        </div>
                        <h3 class="text-2xl font-semibold">{{ student.first_name }}, {{ student.middle_name }} {{ student.last_name }}</h3>
                        <p class="text-lg font-bold">Course: <span class="font-normal">{{ student.course.name }}</span></p>
                        <p class="text-lg font-bold">Section: <span class="font-normal">{{ student.section }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
