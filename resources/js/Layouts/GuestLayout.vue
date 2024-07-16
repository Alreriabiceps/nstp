<script setup>
import NstpLogo from '@/Components/NstpLogo.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <NstpLogo
                class="block fill-current text-gray-800"
            />
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
        <footer class="mt-6 text-center text-gray-500 text-sm">
            &copy; 2024 NSTP Management System. All rights reserved.
        </footer>
    </div>
</template>
