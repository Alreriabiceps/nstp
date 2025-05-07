<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import UpdateStudentForm from './Partials/UpdateStudentForm.vue';
import UpdateAdminForm from './Partials/UpdateAdminForm.vue';
import { Head } from '@inertiajs/vue3';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UsernameForm from './Partials/UsernameForm.vue';
import { ref } from 'vue';

// Instructions panel toggle
const showInstructions = ref(false);
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <!-- Profile Instructions Panel -->
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4">
                    <div @click="showInstructions = !showInstructions" 
                         class="p-3 border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20 cursor-pointer flex justify-between items-center">
                        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-300">Profile Management Instructions</h3>
                        <svg class="h-5 w-5 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-200" 
                             :class="{ 'rotate-180': showInstructions }"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-if="showInstructions" class="p-3 text-gray-700 dark:text-gray-300 text-sm">
                        <ul class="list-disc list-inside space-y-1">
                            <li>On this page, you can update your account information and security settings.</li>
                            <li>You can change your <span class="font-semibold">username</span> used for login.</li>
                            <li>You can update your <span class="font-semibold">profile image</span> by clicking the "Change Profile Image" link.</li>
                            <li v-if="$page.props.auth.user.role === 'Student'">Update your <span class="font-semibold">student ID</span> and <span class="font-semibold">section</span> information as needed.</li>
                            <li v-if="$page.props.auth.user.role === 'Admin'">Update your personal information including <span class="font-semibold">name</span> and other details.</li>
                            <li>To change your password, provide your <span class="font-semibold">current password</span> first for security.</li>
                        </ul>
                    </div>
                </div>

                <!-- Two Column Layout for Desktop -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Left Column -->
                    <div class="space-y-4">
                        <!-- Security Settings Card -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 class="text-base font-medium text-gray-900 dark:text-gray-100">Security Settings</h3>
                            </div>
                            
                            <div class="p-4">
                                <!-- Username Form -->
                                <UsernameForm :user="$page.props.user" />
                                
                                <div class="my-6 border-t border-gray-200 dark:border-gray-700"></div>
                                
                                <!-- Password Form -->
                                <UpdatePasswordForm />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column -->
                    <div>
                        <!-- Profile Form Card -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 class="text-base font-medium text-gray-900 dark:text-gray-100">Personal Information</h3>
                            </div>
                            
                            <div class="p-4">
                                <UpdateAdminForm v-if="$page.props.auth.user.role === 'Admin'" :user="$page.props.user"/>
                                <UpdateStudentForm v-if="$page.props.auth.user.role === 'Student'" :student="$page.props.student"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
