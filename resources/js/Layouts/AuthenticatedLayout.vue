<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import ThemeToggle from "@/Components/ThemeToggle.vue";
import LogoutLink from "@/Components/LogoutLink.vue";
import { Link } from "@inertiajs/vue3";
import { useThemeStore } from "@/store/theme";

const showingNavigationDropdown = ref(false);
const { theme } = useThemeStore();
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-col flex-grow bg-gray-100 dark:bg-gray-900">
            <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link
                                    :href="$page.props.auth.user.role == 'Admin' ? route('dashboard') : route('certificate')">
                                <ApplicationLogo class="max-h-11 block fill-current text-gray-800 dark:text-white" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                v-if="$page.props.auth.user.role == 'Admin'">
                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    Dashboard
                                </NavLink>
                                <NavLink :href="route('students.index')" :active="route().current('students.index')">
                                    Students
                                </NavLink>
                                <NavLink :href="route('courses.index')" :active="route().current('courses.index')">
                                    Courses
                                </NavLink>
                                <NavLink :href="route('nstp.status')" :active="route().current('nstp.status')">
                                    NSTP Status
                                </NavLink>
                            </div>
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex" v-else>
                                <NavLink :href="route('certificate')" :active="route().current('certificate')">
                                    Certificate
                                </NavLink>

                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Theme Toggle -->
                            <div class="mr-4">
                                <ThemeToggle />
                            </div>

                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex items-center rounded-md">
                                            <div class="flex items-center">
                                                <!-- User Profile Image -->
                                                <div class="h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-2 flex-shrink-0">
                                                    <img 
                                                        v-if="$page.props.auth.user.image" 
                                                        :src="`/storage/${$page.props.auth.user.image}`" 
                                                        class="h-full w-full object-cover"
                                                        alt="Profile Photo"
                                                    />
                                                    <div v-else class="h-full w-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900">
                                                        <span class="text-indigo-800 dark:text-indigo-200 text-sm font-bold">
                                                            {{ $page.props.auth.user.first_name ? $page.props.auth.user.first_name.charAt(0).toUpperCase() : '' }}
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- User Name -->
                                                <button type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150">
                                                    <div class="text-left mr-1">
                                                        <div class="font-medium text-gray-800 dark:text-gray-200">
                                                            {{ $page.props.auth.user.first_name ? ($page.props.auth.user.first_name + ' ' + ($page.props.auth.user.last_name || '')) : $page.props.auth.user.username }}
                                                        </div>
                                                        <div class="text-xs text-gray-500 dark:text-gray-400">
                                                            {{ $page.props.auth.user.role }}
                                                        </div>
                                                    </div>

                                                    <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')">
                                            Profile
                                        </DropdownLink>
                                        <LogoutLink :href="route('logout')">
                                            Log Out
                                        </LogoutLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button @click="
                                showingNavigationDropdown =
                                !showingNavigationDropdown
                                "
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500 dark:focus:text-gray-200 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex':
                                            !showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex':
                                            showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{
                    block: showingNavigationDropdown,
                    hidden: !showingNavigationDropdown,
                }" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1" v-if="$page.props.auth.user.role === 'Admin'">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('students.index')" :active="route().current('students.index')">
                            Students
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('courses.index')" :active="route().current('courses.index')">
                            Courses
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('nstp.status')" :active="route().current('nstp.status')">
                            NSTP Status
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700">
                        <div class="px-4 flex items-center">
                            <!-- Mobile User Profile Image -->
                            <div class="h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-3 flex-shrink-0">
                                <img 
                                    v-if="$page.props.auth.user.image" 
                                    :src="`/storage/${$page.props.auth.user.image}`" 
                                    class="h-full w-full object-cover"
                                    alt="Profile Photo"
                                />
                                <div v-else class="h-full w-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900">
                                    <span class="text-indigo-800 dark:text-indigo-200 text-sm font-bold">
                                        {{ $page.props.auth.user.first_name ? $page.props.auth.user.first_name.charAt(0).toUpperCase() : '' }}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                                    {{ $page.props.auth.user.first_name ? ($page.props.auth.user.first_name + ' ' + ($page.props.auth.user.last_name || '')) : $page.props.auth.user.username }}
                                </div>
                                <div class="font-medium text-sm text-gray-500 dark:text-gray-400">
                                    {{ $page.props.auth.user.email }}
                                </div>
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')">
                                Profile
                            </ResponsiveNavLink>
                            <LogoutLink :isMobile="true" />

                            <!-- Mobile Theme Toggle -->
                            <div class="px-4 py-2 flex items-center">
                                <span class="text-sm text-gray-600 dark:text-gray-400 mr-2">Theme:</span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-grow pb-16">
                <slot />
            </main>
        </div>
        <!-- Footer -->
        <footer class="sticky bottom-0 w-full bg-gray-200 dark:bg-gray-800 py-4 border-t border-gray-300 dark:border-gray-700 z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center text-gray-500 dark:text-gray-400">
                    Nstp Web-based Profile Management System 2024. &copy; All rights reserved.
                    <div class="mt-1">
                        <a href="https://www.linkedin.com/in/russelle-roxas-173831334/" 
                           class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                           target="_blank" rel="noopener noreferrer">
                            Russelle Roxas
                        </a>
                        <span class="mx-2">•</span>
                        <a href="https://ph.linkedin.com/in/pangilinan-mariella-faye-c-617478364" 
                           class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                           target="_blank" rel="noopener noreferrer">
                            Mariella Faye Pangilinan
                        </a>
                        <span class="mx-2">•</span>
                        <a href="https://ph.linkedin.com/in/dane-paguinto-663478364" 
                           class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                           target="_blank" rel="noopener noreferrer">
                            Denmark Paguinto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
