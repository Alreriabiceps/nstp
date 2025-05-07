<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    links: {
        type: Array,
        default: () => [],
    }
});

// Filter out the "prev" and "next" links as they're handled separately
const displayLinks = props.links.filter(link => link.label !== "&laquo; Previous" && link.label !== "Next &raquo;");

// Find the prev and next links
const prevLink = props.links.find(link => link.label === "&laquo; Previous");
const nextLink = props.links.find(link => link.label === "Next &raquo;");
</script>

<template>
    <div>
        <div v-if="links.length > 3" class="flex items-center justify-between">
            <!-- Mobile pagination (simplified) -->
            <div class="sm:hidden flex justify-between w-full">
                <Link v-if="prevLink" :href="prevLink.url"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
                </Link>
                <span v-else
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md cursor-not-allowed">
                    Previous
                </span>

                <Link v-if="nextLink" :href="nextLink.url"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
                </Link>
                <span v-else
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md cursor-not-allowed">
                    Next
                </span>
            </div>

            <!-- Desktop pagination (full) -->
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <!-- Pages info -->
                <div>
                    <p class="text-sm text-gray-700 dark:text-gray-300">
                        Showing
                        <span class="font-medium">{{ props.links.length > 0 ? props.links[0].label : 0 }}</span>
                        to
                        <span class="font-medium">{{ props.links.length > 0 ? props.links[props.links.length - 1].label
                            : 0 }}</span>
                        of
                        <span class="font-medium">{{ props.links.length }}</span>
                        results
                    </p>
                </div>

                <!-- Page links -->
                <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <!-- Previous -->
                        <Link v-if="prevLink && prevLink.url" :href="prevLink.url"
                            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        </Link>
                        <span v-else
                            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed">
                            <span class="sr-only">Previous</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>

                        <!-- Pages -->
                        <template v-for="(link, i) in displayLinks" :key="i">
                            <Link v-if="link.url" :href="link.url"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                                :class="{ 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-300': link.active, 'text-gray-500 dark:text-gray-400': !link.active }">
                            {{ link.label }}
                            </Link>
                            <span v-else
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ link.label }}
                            </span>
                        </template>

                        <!-- Next -->
                        <Link v-if="nextLink && nextLink.url" :href="nextLink.url"
                            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        </Link>
                        <span v-else
                            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed">
                            <span class="sr-only">Next</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>