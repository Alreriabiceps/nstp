<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const studentIdInput = ref(null);
const sectionInput = ref(null);
const imageInput = ref(null);
const imageUrl = ref('');

const props = defineProps({
    student: {
        type: Object,
        default: {},
    },
});

const form = useForm({
    student_id: '',
    section: '',
    image: '',
});
const updateStudent = () => {
    form.post(route('student.update'), {
        onSuccess: () => {
            form.reset();

            alert('Successfully updated!');
        },
        onError: () => {
            if (form.errors.image) {
                form.reset('image');
                imageInput.value.focus();
            }
            if (form.errors.student_id) {
                form.reset('student_id');
                studentIdInput.value.focus();
            }
            if (form.errors.section) {
                form.reset('section');
                sectionInput.value.focus();
            }
        },
    });
};
onMounted(() => {
    form.student_id = props.student.student_id;
    form.section = props.student.section;
    imageUrl.value = `/storage/${props.student.image}`;
});

const triggerFileInput = () => {
    imageInput.value.click();
}

const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.image = file;
        imageUrl.value = URL.createObjectURL(file);
    }
};
</script>

<template>
    <section>
        <header class="mb-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Student Profile Information</h2>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Update your profile information including your image, student ID, and section.
            </p>
        </header>

        <form @submit.prevent="updateStudent" class="mt-6 space-y-6" method="POST">
            <div>
                <InputLabel for="image" value="Profile Image" class="text-gray-700 dark:text-gray-300" />
                <div class="mt-2 flex flex-col items-start">
                    <img v-if="imageUrl" :src="imageUrl" alt="Profile Image" class="w-32 h-32 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700" />
                    <button type="button" class="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline" @click.prevent="triggerFileInput()">
                        Change Profile Image
                    </button>
                    <input id="image"
                        ref="imageInput"
                        type="file"
                        class="hidden"
                        @input="handleImageChange"
                    >
                </div>
                <InputError :message="form.errors.image" class="mt-2" />
            </div>
            
            <div>
                <InputLabel for="student_id" value="Student ID" class="text-gray-700 dark:text-gray-300" />
                <TextInput
                    id="student_id"
                    ref="studentIdInput"
                    type="text"
                    class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    v-model="form.student_id"
                />
                <InputError :message="form.errors.student_id" class="mt-2" />
            </div>
            
            <div>
                <InputLabel for="section" value="Section" class="text-gray-700 dark:text-gray-300" />
                <TextInput
                    id="section"
                    ref="sectionInput"
                    type="text"
                    class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    v-model="form.section"
                />
                <InputError :message="form.errors.section" class="mt-2" />
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Update Profile</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">Updated.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
