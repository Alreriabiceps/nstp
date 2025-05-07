<script setup>
import { router } from '@inertiajs/vue3';

// Define props for component customization
const props = defineProps({
    isMobile: {
        type: Boolean,
        default: false
    }
});

const logout = () => {
    router.post(route('logout'), {}, {
        onFinish: () => {
            // Force a page reload after logout
            window.location.href = '/';
        }
    });
};

// Define classes based on whether this is in the mobile menu or dropdown
const classes = props.isMobile
    ? 'block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out'
    : 'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition duration-150 ease-in-out';
</script>

<template>
    <div>
        <button @click="logout" type="button" :class="classes">
            <slot>Log Out</slot>
        </button>
    </div>
</template> 