<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { isReactive, onMounted, ref } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        default: {},
    },
});

const passwordInput = ref(null);
const currentPasswordInput = ref(null);
const firstNameInput = ref(null);
const lastNameInput = ref(null);
const MIInput = ref(null);
const imageInput = ref(null);

const form = useForm({
    image: '',
    current_password: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    MI: '',
    ext_name: '',
});

function updateAdmin () {
    form.post(route('admin.update'), {
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
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
            if (form.errors.first_name) {
                form.reset('first_name');
                firstNameInput.value.focus();
            }
            if (form.errors.last_name) {
                form.reset('last_name');
                lastNameInput.value.focus();
            }
            if (form.errors.MI) {
                form.reset('MI');
                MIInput.value.focus();
            }
        },
    });
};

onMounted(() => {
    form.image = props.user.image;
    form.first_name = props.user.first_name;
    form.last_name = props.user.last_name;
    form.MI = props.user.MI;
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Update Admin</h2>

            <p class="mt-1 text-sm text-gray-600">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updateAdmin" class="mt-6 space-y-6">
            <img v-if="user.image" :src="`/storage/${user.image}`" alt="Student Image" class="w-32 h-32 object-cover rounded-full" />
            <div>
                <InputLabel for="image" value="Image" />

                <input id="image"
                    ref="imageInput"
                    type="file"
                    class="mt-1 block w-full"
                    @input="form.image = $event.target.files[0]"
                    required>

                <InputError :message="form.errors.image" class="mt-2" />
            </div>
            <div>
                <InputLabel for="first_name" value="First Name" />

                <TextInput
                    id="first_name"
                    ref="firstNameInput"
                    v-model="form.first_name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="first-name"
                />

                <InputError :message="form.errors.first_name" class="mt-2" />
            </div>
            <div>
                <InputLabel for="middle_initial" value="Middle Initial" />

                <TextInput
                    id="middle_initial"
                    ref="middleInitialInput"
                    v-model="form.MI"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="middle-initial"
                />

                <InputError :message="form.errors.MI" class="mt-2" />
            </div>
            <div>
                <InputLabel for="last_name" value="Last Name" />

                <TextInput
                    id="last_name"
                    ref="lastNameInput"
                    v-model="form.last_name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="last-name"
                />

                <InputError :message="form.errors.last_name" class="mt-2" />
            </div>

            <div>
                <InputLabel for="ext_name" value="Extension Name" />

                <TextInput
                    id="ext_name"
                    ref="extNameInput"
                    v-model="form.ext_name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="ext-name"
                />

                <InputError :message="form.errors.ext_name" class="mt-2" />
            </div>

            <div>
                <InputLabel for="current_password" value="Current Password" />

                <TextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="mt-1 block w-full"
                    autocomplete="current-password"
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
                    autocomplete="new-password"
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
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password_confirmation" class="mt-2" />
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Update</PrimaryButton>

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
