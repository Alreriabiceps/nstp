<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        default: {},
    },
});


const firstNameInput = ref(null);
const lastNameInput = ref(null);
const MIInput = ref(null);
const imageInput = ref(null);
const imageUrl = ref('');

const form = useForm({
    image: '',
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
    form.first_name = props.user.first_name;
    form.last_name = props.user.last_name;
    form.MI = props.user.MI;
    if(props.user.image) {
        imageUrl.value = `/storage/${props.user.image}`;
    }

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
        <header>
            <h2 class="text-lg font-medium text-gray-900">Update Admin</h2>

        </header>

        <form @submit.prevent="updateAdmin" class="mt-6 space-y-6">
            <div>
                <InputLabel for="image" value="Image" />
                <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="w-32 h-32 object-cover rounded-full" />

                <button type="button" class="mt-2 text-sm text-gray-600 underline" @click.prevent="triggerFileInput()">Change Image</button>
                <input id="image"
                    ref="imageInput"
                    type="file"
                    class="hidden"
                    @input="handleImageChange"
                >
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
