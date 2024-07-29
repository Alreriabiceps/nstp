<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const props = defineProps({
    student: {
        type: Object,
        required: true,
    },
    certificate: {
        type: String,
        required: true,
    },
});
const imageUrl = ref('');
const pdfUrl = ref('');

onMounted(() => {
    imageUrl.value = `/storage/${props.student.image}?t=${new Date().getTime()}`;
    pdfUrl.value = `${props.certificate}?t=${new Date().getTime()}`;
});
</script>

<template>
    <Head title="Certificate" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Certificate</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <img :src="imageUrl" alt="Student Image" class="w-32 h-32 object-cover rounded-full" />
                        <h3 class="text-2xl font-semibold">{{ student.last_name }}, {{ student.first_name }} {{ student.middle_name }}</h3>
                        <p class="text-lg font-bold">Course: <span class="font-normal">{{ student.course.name }}</span></p>
                        <p class="text-lg font-bold">Section: <span class="font-normal">{{ student.section }}</span></p>
                        <p class="text-lg font-bold">Student ID: <span class="font-normal">{{ student.student_id }}</span></p>
                    </div>
                    <div class="p-6 text-gray-900">
                        <embed :src="pdfUrl" width="100%" height="600px" type="application/pdf" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
