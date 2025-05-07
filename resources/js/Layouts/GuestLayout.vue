<script setup>
import NstpLogo from '@/Components/NstpLogo.vue';
import ThemeToggle from '@/Components/ThemeToggle.vue';
import { useThemeStore } from '@/store/theme';

const { theme } = useThemeStore();
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <div class="flex-grow flex flex-col items-center justify-center py-6 pb-16">
            <div class="flex items-center gap-4">
                <NstpLogo
                    class="block fill-current text-gray-800 dark:text-white"
                />
                <ThemeToggle class="mt-2" />
            </div>

            <div
                class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
            >
                <slot />
            </div>
        </div>
        <footer class="sticky bottom-0 w-full py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-10">
            <div class="text-center text-gray-500 dark:text-gray-400 text-sm">
                &copy; 2024 NSTP Management System. All rights reserved.
                <div class="mt-1">
                    <a href="https://www.linkedin.com/in/russelle-roxas-173831334/" 
                       class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                       target="_blank" rel="noopener noreferrer">
                        Let's connect on LinkedIn!
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
