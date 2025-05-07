<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset(),
            alert('Password Successfully updated!');
        },
        onError: () => {
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
        <header class="mb-3">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-3 space-y-3">
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <InputLabel for="current_password" value="Current Password" class="text-gray-700 dark:text-gray-300 sm:w-1/4" />
                    <div class="sm:w-3/4 mt-1 sm:mt-0">
                        <TextInput
                            id="current_password"
                            ref="currentPasswordInput"
                            v-model="form.current_password"
                            type="password"
                            class="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            autocomplete="current-password"
                        />
                        <InputError :message="form.errors.current_password" class="mt-1" />
                    </div>
                </div>
            </div>

            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <InputLabel for="password" value="New Password" class="text-gray-700 dark:text-gray-300 sm:w-1/4" />
                    <div class="sm:w-3/4 mt-1 sm:mt-0">
                        <TextInput
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            autocomplete="new-password"
                        />
                        <InputError :message="form.errors.password" class="mt-1" />
                    </div>
                </div>
            </div>

            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <InputLabel for="password_confirmation" value="Confirm Password" class="text-gray-700 dark:text-gray-300 sm:w-1/4" />
                    <div class="sm:w-3/4 mt-1 sm:mt-0">
                        <TextInput
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            class="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            autocomplete="new-password"
                        />
                        <InputError :message="form.errors.password_confirmation" class="mt-1" />
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 mt-4 sm:ml-1/4 sm:pl-2">
                <PrimaryButton :disabled="form.processing">Update Password</PrimaryButton>

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
