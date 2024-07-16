<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { onMounted } from "vue";

const props = defineProps({
    student: {
        type: Object,
        default: {},
    },
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
    student_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    extension_name: "",
    email: "",
    phone: "",
    birthdate: "",
    sex: "",
    region: "Central Luzon",
    province: "Pampanga",
    city: "Arayat",
    brgy: "Mapalad",
    course_id: null,
    year_level: 1,
    enrollment_type: "CWTS",
    enrollment_year: "",
    nstp_serial_no: "",
    processing: false,
});

const submit = () => {
    form.post(route("students.update", props.student.id), {
        onStart: () => {
            form.processing = true;
        },
        onFinish: () => {
            form.processing = false;
        },
        onSuccess: () => {
            // Show success message
            alert("Student updated successfully!");
        },
    });
};

onMounted(() => {
    form.student_id = props.student.student_id;
    form.first_name = props.student.first_name;
    form.middle_name = props.student.middle_name;
    form.last_name = props.student.last_name;
    form.extension_name = props.student.extension_name;
    form.email = props.student.email;
    form.phone = props.student.phone;
    form.birthdate = props.student.birthdate;
    form.sex = props.student.sex;
    form.region = props.student.region;
    form.province = props.student.province;
    form.city = props.student.city;
    form.brgy = props.student.brgy;
    form.course_id = props.student.course_id;
    form.year_level = props.student.year_level;
    form.enrollment_type = props.student.enrollment_type;
    form.enrollment_year = props.student.enrollment_year;
    form.nstp_serial_no = props.student.nstp_serial_no;
});

</script>

<template>
    <Head title="Edit Student" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Student
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
                                        for="student_id"
                                        value="Student ID"
                                    />
                                    <TextInput
                                        id="student_id"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.student_id"
                                        required
                                        autofocus
                                        placeholder="Please enter student id"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.student_id"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-3/12 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="first_name"
                                        value="Firstname"
                                    />
                                    <TextInput
                                        id="first_name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.first_name"
                                        required
                                        autofocus
                                        placeholder="First Name"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.first_name"
                                    />
                                </div>
                                <div class="w-full md:w-2/12 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="extension_name"
                                        value="Ext Name"
                                    />
                                    <TextInput
                                        id="extension_name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.extension_name"
                                        required
                                        autofocus
                                        placeholder="Ext Name"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.extension_name"
                                    />
                                </div>
                                <div class="w-full md:w-3/12 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="middle_name"
                                        value="Middlename"
                                    />
                                    <TextInput
                                        id="middle_name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.middle_name"
                                        required
                                        autofocus
                                        placeholder="Middle Name"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.middle_name"
                                    />
                                </div>
                                <div class="w-full md:w-3/12 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="last_name"
                                        value="Lastname"
                                    />
                                    <TextInput
                                        id="last_name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.last_name"
                                        required
                                        autofocus
                                        placeholder="Last Name"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.last_name"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/6 px-3 mb-4 md:mb-0">
                                    <InputLabel for="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.email"
                                        required
                                        autofocus
                                        placeholder="Email Address"
                                    />

                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.email"
                                    />
                                </div>
                                <div class="w-full md:w-2/6 px-3 mb-4 md:mb-0">
                                    <InputLabel for="phone" value="Phone" />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.phone"
                                        required
                                        autofocus
                                        placeholder="0900000000"
                                    />

                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.phone"
                                    />
                                </div>
                                <div class="w-full md:w-1/6 px-3 mb-4 md:mb-0">
                                    <InputLabel for="sex" value="Sex" />
                                    <select
                                        id="sex"
                                        class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        name="sex"
                                        autofocus
                                        v-model="form.sex"
                                        required
                                    >
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.sex"
                                    />
                                </div>
                                <div class="w-full md:w-1/6 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="birthdate"
                                        value="Birthdate"
                                    />
                                    <TextInput
                                        id="birthdate"
                                        type="date"
                                        class="mt-1 block w-full"
                                        v-model="form.birthdate"
                                        required
                                        autofocus
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.birthdate"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <InputLabel for="region" value="Region" />
                                    <TextInput
                                        id="region"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.region"
                                        required
                                        autofocus
                                        placeholder="Region"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.region"
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="province"
                                        value="Province"
                                    />
                                    <TextInput
                                        id="province"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.province"
                                        required
                                        autofocus
                                        placeholder="Province"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.province"
                                    />
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="city"
                                        value="City/Municipality"
                                    />
                                    <TextInput
                                        id="city"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.city"
                                        required
                                        autofocus
                                        placeholder="City/Municipality"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.city"
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <InputLabel for="brgy" value="Brgy" />
                                    <TextInput
                                        id="brgy"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.brgy"
                                        required
                                        autofocus
                                        placeholder="Barangay"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.brgy"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="course_id"
                                        value="Program/Course"
                                    />
                                    <select
                                        id="course_id"
                                        class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus
                                        v-model="form.course_id"
                                        required
                                    >
                                        <option selected>Select Course</option>
                                        <option
                                            v-for="course in courses"
                                            :key="course.id"
                                            :value="course.id"
                                        >
                                            {{ course.name }}
                                        </option>
                                    </select>
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.course_id"
                                    />
                                </div>
                                <div class="w-full md:w-1/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="year_level"
                                        value="Year Level"
                                    />
                                    <TextInput
                                        id="year_level"
                                        type="number"
                                        class="mt-1 block w-full"
                                        v-model="form.year_level"
                                        required
                                        autofocus
                                        placeholder="Year Level"
                                        step="1"
                                        min="0"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.year_level"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="enrollment_type"
                                        value="NSTP TYPE"
                                    />
                                    <select
                                        id="enrollment_type"
                                        class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus
                                        v-model="form.enrollment_type"
                                        required
                                    >
                                        <option value="CWTS">CWTS</option>
                                        <option value="ROTC">ROTC</option>
                                        <option value="LTS">LTS</option>
                                    </select>
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.enrollment_type"
                                    />
                                </div>
                                <div class="w-full md:w-1/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="enrollment_year"
                                        value="Graduation Year"
                                    />
                                    <select
                                        id="enrollment_year"
                                        class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        autofocus
                                        v-model="form.enrollment_year"
                                        required
                                    >
                                        <option selected>Select Year</option>
                                        <option
                                            v-for="year in graduationYears"
                                            :key="year"
                                            :value="year"
                                        >
                                            {{ year }}
                                        </option>
                                    </select>
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.enrollment_year"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/4 px-3 mb-4 md:mb-0">
                                    <InputLabel
                                        for="nstp_serial_no"
                                        value="NSTP Serial No."
                                    />
                                    <TextInput
                                        id="nstp_serial_no"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.nstp_serial_no"
                                        required
                                        autofocus
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.nstp_serial_no"
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
