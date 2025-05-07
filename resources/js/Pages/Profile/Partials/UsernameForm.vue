<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps({
    user: {
        type: Object,
    },
});

const usernameInput = ref(null);

const form = useForm({
    username: props.user?.username || '',
});

const updateUsername = () => {
    form.put(route('username.update'), {
        preserveScroll: true,
        onSuccess: () => {
            alert('Username successfully updated!');
        },
        onError: () => {
            if (form.errors.username) {
                usernameInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header class="mb-3">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Username</h2>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Update your account username used for login.
            </p>
        </header>

        <form @submit.prevent="updateUsername" class="mt-3 space-y-3">
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <InputLabel for="username" value="Username" class="text-gray-700 dark:text-gray-300 sm:w-1/4" />
                    <div class="sm:w-3/4 mt-1 sm:mt-0">
                        <TextInput
                            id="username"
                            ref="usernameInput"
                            v-model="form.username"
                            type="text"
                            class="block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            autocomplete="username"
                            required
                        />
                        <InputError :message="form.errors.username" class="mt-1" />
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 mt-4 sm:ml-1/4 sm:pl-2">
                <PrimaryButton :disabled="form.processing">Update Username</PrimaryButton>
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