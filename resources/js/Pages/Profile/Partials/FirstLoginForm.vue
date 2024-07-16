<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);
const studentIdInput = ref(null);
const sectionInput = ref(null);
const imageInput = ref(null);

const form = useForm({
    student_id: '',
    section: '',
    current_password: '',
    password: '',
    password_confirmation: '',
    image: '',
});

const updateStudent = () => {
    form.post(route('student.first-login'), {
        preserveScroll: true,
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
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Update Student ID, Section and Password</h2>

            <p class="mt-1 text-sm text-gray-600">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updateStudent" class="mt-6 space-y-6" method="POST">
            <div>
                <InputLabel for="image" value="Image" />
                <TextInput
                    id="image"
                    type="file"
                    class="mt-1 block w-full"
                    @input="form.image = $event.target.files[0]"
                    required
                />

                <InputError :message="form.errors.image" class="mt-2" />
            </div>
            <div>
                <InputLabel for="student_id" value="Student ID" />
                <TextInput
                    id="student_id"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.student_id"
                    required
                />

                <InputError :message="form.errors.student_id" class="mt-2" />
            </div>
            <div>
                <InputLabel for="section" value="Section" />
                <TextInput
                    id="section"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.section"
                    required
                />

                <InputError :message="form.errors.section" class="mt-2" />
            </div>
            <div>
                <InputLabel for="current_password" value="Current Password" />

                <TextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="mt-1 block w-full"
                />

                <InputError :message="form.errors.current_password" class="mt-2" />
            </div>

            <div>
                <InputLabel for="password" value="New Password" />

                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                />

                <InputError :message="form.errors.password" class="mt-2" />
            </div>

            <div>
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                />

                <InputError :message="form.errors.password_confirmation" class="mt-2" />
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
