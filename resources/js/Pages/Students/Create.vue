<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

defineProps({
    courses: {
        type: Array,
        default: [],
    },
    graduationYears: {
        type: Array,
        default: [],
    },
});

const form = useForm({
    student_id: null,
    first_name: "",
    middle_name: "",
    last_name: "",
    extension_name: null,
    email: null,
    phone: null,
    sex: null,
    region: "Central Luzon",
    province: "Pampanga",
    city: "Arayat",
    brgy: "Mapalad",
    course_id: "",
    year_level: 1,
    enrollment_type: "CWTS",
    enrollment_year: "",
    nstp_serial_no: null,
    processing: false,
});

const submit = () => {
    form.post(route("students.store"), {
        onStart: () => {
            form.processing = true;
        },
        onFinish: () => {
            form.processing = false;
        },
        onSuccess: () => {
            alert("Student added successfully!");
        },
    });
};
</script>

<template>

    <Head title="Add Student" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Add Student
            </h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-5 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="submit" method="POST">
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-2/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="student_id" value="Student ID" />
                                    <TextInput id="student_id" type="text" class="mt-1 block w-full"
                                        v-model="form.student_id" required autofocus
                                        placeholder="Please enter student id" />
                                    <InputError class="mt-2" :message="form.errors.student_id" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-3/12 px-2 mb-3 md:mb-0">
                                    <InputLabel for="first_name" value="Firstname" />
                                    <TextInput id="first_name" type="text" class="mt-1 block w-full"
                                        v-model="form.first_name" required autofocus placeholder="First Name" />
                                    <InputError class="mt-2" :message="form.errors.first_name" />
                                </div>
                                <div class="w-full md:w-2/12 px-2 mb-3 md:mb-0">
                                    <InputLabel for="extension_name" value="Ext Name" />
                                    <TextInput id="extension_name" type="text" class="mt-1 block w-full"
                                        v-model="form.extension_name" placeholder="Ext Name" />
                                    <InputError class="mt-2" :message="form.errors.extension_name" />
                                </div>
                                <div class="w-full md:w-3/12 px-2 mb-3 md:mb-0">
                                    <InputLabel for="middle_name" value="Middlename" />
                                    <TextInput id="middle_name" type="text" class="mt-1 block w-full"
                                        v-model="form.middle_name" required autofocus placeholder="Middle Name" />
                                    <InputError class="mt-2" :message="form.errors.middle_name" />
                                </div>
                                <div class="w-full md:w-3/12 px-2 mb-3 md:mb-0">
                                    <InputLabel for="last_name" value="Lastname" />
                                    <TextInput id="last_name" type="text" class="mt-1 block w-full"
                                        v-model="form.last_name" required autofocus placeholder="Last Name" />
                                    <InputError class="mt-2" :message="form.errors.last_name" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-2/6 px-2 mb-3 md:mb-0">
                                    <InputLabel for="email" value="Email" />
                                    <TextInput id="email" type="text" class="mt-1 block w-full" v-model="form.email"
                                        required autofocus placeholder="Email Address" />
                                    <InputError class="mt-2" :message="form.errors.email" />
                                </div>
                                <div class="w-full md:w-2/6 px-2 mb-3 md:mb-0">
                                    <InputLabel for="phone" value="Phone" />
                                    <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone"
                                        required autofocus placeholder="0900000000" />
                                    <InputError class="mt-2" :message="form.errors.phone" />
                                </div>
                                <div class="w-full md:w-1/6 px-2 mb-3 md:mb-0">
                                    <InputLabel for="sex" value="Sex" />
                                    <select id="sex"
                                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        name="sex" autofocus v-model="form.sex" required>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.sex" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                    <InputLabel for="region" value="Region" />
                                    <TextInput id="region" type="text" class="mt-1 block w-full" v-model="form.region"
                                        required autofocus placeholder="Region" />
                                    <InputError class="mt-2" :message="form.errors.region" />
                                </div>
                                <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                    <InputLabel for="province" value="Province" />
                                    <TextInput id="province" type="text" class="mt-1 block w-full"
                                        v-model="form.province" required autofocus placeholder="Province" />
                                    <InputError class="mt-2" :message="form.errors.province" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                    <InputLabel for="city" value="City/Municipality" />
                                    <TextInput id="city" type="text" class="mt-1 block w-full" v-model="form.city"
                                        required autofocus placeholder="City/Municipality" />
                                    <InputError class="mt-2" :message="form.errors.city" />
                                </div>
                                <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                    <InputLabel for="brgy" value="Brgy" />
                                    <TextInput id="brgy" type="text" class="mt-1 block w-full" v-model="form.brgy"
                                        required autofocus placeholder="Barangay" />
                                    <InputError class="mt-2" :message="form.errors.brgy" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-2/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="course_id" value="Program/Course" />
                                    <select id="course_id"
                                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus v-model="form.course_id" required>
                                        <option selected>Select Course</option>
                                        <option v-for="course in courses" :key="course.id" :value="course.id">
                                            {{ course.name }}
                                        </option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.course_id" />
                                </div>
                                <div class="w-full md:w-1/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="year_level" value="Year Level" />
                                    <TextInput id="year_level" type="number" class="mt-1 block w-full"
                                        v-model="form.year_level" required autofocus placeholder="Year Level" step="1"
                                        min="0" />
                                    <InputError class="mt-2" :message="form.errors.year_level" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-2 mb-4">
                                <div class="w-full md:w-1/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="enrollment_type" value="NSTP TYPE" />
                                    <select id="enrollment_type"
                                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus v-model="form.enrollment_type" required>
                                        <option value="CWTS">CWTS</option>
                                        <option value="ROTC">ROTC</option>
                                        <option value="LTS">LTS</option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.enrollment_type" />
                                </div>
                                <div class="w-full md:w-1/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="enrollment_year" value="Graduation Year" />
                                    <select id="enrollment_year"
                                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus v-model="form.enrollment_year" required>
                                        <option selected>Select Year</option>
                                        <option v-for="gy in graduationYears" :key="gy" :value="gy">
                                            {{ gy }}
                                        </option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.enrollment_year" />
                                </div>
                                <div class="w-full md:w-1/4 px-2 mb-3 md:mb-0">
                                    <InputLabel for="nstp_serial_no" value="NSTP Serial Number" />
                                    <TextInput id="nstp_serial_no" type="text" class="mt-1 block w-full"
                                        v-model="form.nstp_serial_no" required autofocus
                                        placeholder="NSTP Serial Number" />
                                    <InputError class="mt-2" :message="form.errors.nstp_serial_no" />
                                </div>
                            </div>

                            <div class="flex items-center justify-between border-t dark:border-gray-700 mt-4 pt-4">
                                <div></div>
                                <div class="flex items-center space-x-2">
                                    <a :href="route('students.index')"
                                        class="inline-flex items-center px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md">
                                        Cancel
                                    </a>
                                    <PrimaryButton :disabled="form.processing">
                                        Save
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
