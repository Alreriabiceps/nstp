import { ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';

// Theme state is stored in localStorage and synced across tabs
export const useThemeStore = () => {
    const theme = ref(localStorage.getItem('theme') || 'light');

    // Watch for theme changes and update localStorage and document class
    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme);

        // Update document classes for Tailwind dark mode
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, { immediate: true });

    // Toggle between light and dark mode
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    };

    return {
        theme,
        toggleTheme
    };
}; 