<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    students: {
        type: Array,
        default: () => [],
    },
    courses: {
        type: Array,
        default: () => [],
    },
    certificatesPrinted: {
        type: Number,
        default: 0
    },
    enrolledPerYear: {
        type: Array,
        default: () => []
    },
    graduatePerYear: {
        type: Array,
        default: () => []
    },
    failedPerYear: {
        type: Array,
        default: () => []
    },
    componentTypes: {
        type: Array,
        default: () => []
    },
    certificatesNotPrinted: {
        type: Number,
        default: 0
    },
    certificateTrend: {
        type: Array,
        default: () => []
    },
    componentAnalytics: {
        type: Array,
        default: () => []
    },
    genderByComponent: {
        type: Array,
        default: () => []
    },
    semesterPerformance: {
        type: Object,
        default: () => ({})
    },
    recentCertificates: {
        type: Array,
        default: () => []
    },
    topCourses: {
        type: Array,
        default: () => []
    },
    needCertificates: {
        type: Array,
        default: () => []
    },
    recentStudents: {
        type: Array,
        default: () => []
    },
    statusOverview: {
        type: Object,
        default: () => ({})
    },
    studentsWithMissingInfo: {
        type: Array,
        default: () => []
    },
    missingInfoCount: {
        type: Number,
        default: 0
    }
});

// Calculate statistics
const totalStudents = computed(() => props.students.length || 1);
const totalCourses = computed(() => props.courses.length || 1);
const maleStudents = computed(() => props.students.filter(student => student.sex === 'M').length || 0);
const femaleStudents = computed(() => props.students.filter(student => student.sex === 'F').length || 0);
const certificatesPrinted = computed(() => props.certificatesPrinted || 0);

// Computed property for status overview percentages
const statusPercentages = computed(() => {
    const total = (props.statusOverview.both_passed || 0) + 
                 (props.statusOverview.first_passed_only || 0) + 
                 (props.statusOverview.second_passed_only || 0) + 
                 (props.statusOverview.none_passed || 0) || 1;
                 
    return {
        both_passed: Math.round(((props.statusOverview.both_passed || 0) / total) * 100),
        first_passed_only: Math.round(((props.statusOverview.first_passed_only || 0) / total) * 100),
        second_passed_only: Math.round(((props.statusOverview.second_passed_only || 0) / total) * 100),
        none_passed: Math.round(((props.statusOverview.none_passed || 0) / total) * 100)
    };
});

// Computed property for certificate eligibility percentage
const certificateEligibility = computed(() => {
    const eligible = props.statusOverview.both_passed || 0;
    const total = totalStudents.value || 1;
    return Math.round((eligible / total) * 100);
});

// Fixed semester performance percentages
const semesterPerformancePercentages = computed(() => {
    const firstTotal = (props.semesterPerformance.first_sem_passed || 0) + 
                    (props.semesterPerformance.first_sem_failed || 0) + 
                    (props.semesterPerformance.first_sem_pending || 0) || 1;
                    
    const secondTotal = (props.semesterPerformance.second_sem_passed || 0) + 
                     (props.semesterPerformance.second_sem_failed || 0) + 
                     (props.semesterPerformance.second_sem_pending || 0) || 1;

    return {
        first_passed: Math.round(((props.semesterPerformance.first_sem_passed || 0) / firstTotal) * 100),
        first_failed: Math.round(((props.semesterPerformance.first_sem_failed || 0) / firstTotal) * 100),
        first_pending: Math.round(((props.semesterPerformance.first_sem_pending || 0) / firstTotal) * 100),
        second_passed: Math.round(((props.semesterPerformance.second_sem_passed || 0) / secondTotal) * 100),
        second_failed: Math.round(((props.semesterPerformance.second_sem_failed || 0) / secondTotal) * 100),
        second_pending: Math.round(((props.semesterPerformance.second_sem_pending || 0) / secondTotal) * 100),
    };
});

// Top courses percentages
const topCoursesPercentages = computed(() => {
    if (!props.topCourses || props.topCourses.length === 0) {
        return [];
    }
    
    const maxValue = Math.max(...props.topCourses.map(c => c.total)) || 1;
    
    return props.topCourses.map(course => {
        return {
            ...course,
            percentage: Math.round((course.total / maxValue) * 100)
        };
    });
});

// Video modal controls
const showVideoModal = ref(false);
const openVideoModal = () => {
    showVideoModal.value = true;
};
const closeVideoModal = () => {
    showVideoModal.value = false;
    // Pause the video when closing the modal
    const video = document.getElementById('tutorial-video');
    if (video) {
        video.pause();
    }
};
</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-4 lg:px-6">
                <!-- Statistics Cards - compact layout -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                    <!-- Total Students Card -->
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-2">
                            <div class="flex items-center">
                                <div class="p-2 rounded-full bg-blue-500 bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Total Students</p>
                                    <p class="text-xl font-bold text-gray-900 dark:text-white">{{ totalStudents }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Total Courses Card -->
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-2">
                            <div class="flex items-center">
                                <div class="p-2 rounded-full bg-green-500 bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Total Courses</p>
                                    <p class="text-xl font-bold text-gray-900 dark:text-white">{{ totalCourses }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Certificate Eligibility Card -->
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-2">
                            <div class="flex items-center">
                                <div class="p-2 rounded-full bg-purple-500 bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" 
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Certificate Eligible</p>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xl font-bold text-gray-900 dark:text-white">{{ statusOverview.both_passed || 0 }}</span>
                                        <span class="text-xs text-green-500 dark:text-green-400">({{ certificateEligibility }}%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Certificates Printed Card -->
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-2">
                            <div class="flex items-center">
                                <div class="p-2 rounded-full bg-yellow-500 bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Certificates</p>
                                    <p class="text-xl font-bold text-gray-900 dark:text-white">{{ certificatesPrinted }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content Grid - Two columns for main content -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <!-- Left Column -->
                    <div class="space-y-3 flex flex-col">
                        <!-- NSTP Status Overview -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-3">
                                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">NSTP Status Overview</h3>
                                <div class="grid grid-cols-2 gap-2">
                                    <!-- Both Passed -->
                                    <div class="bg-green-50 dark:bg-green-900/30 p-2 rounded-lg border border-green-200 dark:border-green-900">
                                        <h4 class="text-xs font-medium text-green-800 dark:text-green-300 mb-1">Both Passed</h4>
                                        <p class="text-base font-bold text-green-700 dark:text-green-400">{{ statusOverview.both_passed || 0 }}</p>
                                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                            <div class="bg-green-500 h-1.5 rounded-full" 
                                                :style="`width: ${statusPercentages.both_passed}%`"></div>
                                        </div>
                                        <p class="text-xs text-green-700 dark:text-green-400 mt-1">{{ statusPercentages.both_passed }}% of students</p>
                                    </div>
                                    
                                    <!-- NSTP 1 Passed Only -->
                                    <div class="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg border border-blue-200 dark:border-blue-900">
                                        <h4 class="text-xs font-medium text-blue-800 dark:text-blue-300 mb-1">NSTP 1 Passed Only</h4>
                                        <p class="text-base font-bold text-blue-700 dark:text-blue-400">{{ statusOverview.first_passed_only || 0 }}</p>
                                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                            <div class="bg-blue-500 h-1.5 rounded-full" 
                                                :style="`width: ${statusPercentages.first_passed_only}%`"></div>
                                        </div>
                                        <p class="text-xs text-blue-700 dark:text-blue-400 mt-1">{{ statusPercentages.first_passed_only }}% of students</p>
                                    </div>
                                    
                                    <!-- NSTP 2 Passed Only -->
                                    <div class="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg border border-indigo-200 dark:border-indigo-900">
                                        <h4 class="text-xs font-medium text-indigo-800 dark:text-indigo-300 mb-1">NSTP 2 Passed Only</h4>
                                        <p class="text-base font-bold text-indigo-700 dark:text-indigo-400">{{ statusOverview.second_passed_only || 0 }}</p>
                                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                            <div class="bg-indigo-500 h-1.5 rounded-full" 
                                                :style="`width: ${statusPercentages.second_passed_only}%`"></div>
                                        </div>
                                        <p class="text-xs text-indigo-700 dark:text-indigo-400 mt-1">{{ statusPercentages.second_passed_only }}% of students</p>
                                    </div>
                                    
                                    <!-- None Passed -->
                                    <div class="bg-orange-50 dark:bg-orange-900/30 p-2 rounded-lg border border-orange-200 dark:border-orange-900">
                                        <h4 class="text-xs font-medium text-orange-800 dark:text-orange-300 mb-1">None Passed</h4>
                                        <p class="text-base font-bold text-orange-700 dark:text-orange-400">{{ statusOverview.none_passed || 0 }}</p>
                                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                            <div class="bg-orange-500 h-1.5 rounded-full" 
                                                :style="`width: ${statusPercentages.none_passed}%`"></div>
                                        </div>
                                        <p class="text-xs text-orange-700 dark:text-orange-400 mt-1">{{ statusPercentages.none_passed }}% of students</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Top Courses - With Fixed Percentages -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-3">
                                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Top Courses</h3>
                                <div class="space-y-2">
                                    <div v-for="(course, index) in topCoursesPercentages" :key="index" 
                                        class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div class="flex justify-between items-center">
                                            <div class="flex items-center">
                                                <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium mr-2">
                                                    {{ index + 1 }}
                                                </div>
                                                <h4 class="text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[150px]">
                                                    {{ course.course_name }}
                                                </h4>
                                            </div>
                                            <p class="text-xs font-bold text-gray-800 dark:text-gray-200">
                                                {{ course.total }}
                                            </p>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1.5">
                                            <div class="bg-blue-500 h-1.5 rounded-full" 
                                                :style="`width: ${course.percentage}%`"></div>
                                        </div>
                                    </div>
                                    <div v-if="!topCoursesPercentages.length" class="text-center py-2 text-xs text-gray-500 dark:text-gray-400">
                                        No course data available
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Certificate Analytics -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-3">
                                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Certificate Analytics</h3>

                                <!-- Certificate Status Overview -->
                                <div class="grid grid-cols-2 gap-2 mb-2">
                                    <div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div class="flex justify-between mb-1">
                                            <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Printed</p>
                                            <p class="text-xs font-bold text-gray-900 dark:text-white">{{
                                                certificatesPrinted }}
                                            </p>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                                            <div class="bg-green-600 h-1.5 rounded-full" 
                                                :style="`width: ${(certificatesPrinted / (certificatesPrinted + certificatesNotPrinted || 1) * 100)}%`">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div class="flex justify-between mb-1">
                                            <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Pending</p>
                                            <p class="text-xs font-bold text-gray-900 dark:text-white">{{
                                                certificatesNotPrinted || 0
                                            }}</p>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                                            <div class="bg-yellow-500 h-1.5 rounded-full" 
                                                :style="`width: ${(certificatesNotPrinted / (certificatesPrinted + certificatesNotPrinted || 1) * 100)}%`">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Certificate Trend - Compact Version -->
                                <div v-if="certificateTrend && certificateTrend.length" class="mb-2">
                                    <h4 class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Certificate Trend (6 Months)</h4>
                                    <div class="space-y-1">
                                        <div v-for="(month, index) in certificateTrend" :key="index"
                                            class="flex items-center">
                                            <span class="text-xs text-gray-600 dark:text-gray-400 w-14">{{ month.month }}</span>
                                            <div class="flex-grow h-5 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                                                <div class="h-full bg-blue-500 rounded"
                                                    :style="`width: ${(month.total / Math.max(...certificateTrend.map(m => m.total || 1))) * 100}%`">
                                                    <span class="px-1 text-xs text-white font-medium flex items-center h-full">
                                                        {{ month.total }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Gender Distribution Card and Tutorial Video Combined -->
                        <div class="flex gap-3 mt-auto">
                            <!-- Gender Distribution Card - Simplified -->
                            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg flex-1">
                                <div class="p-3">
                                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Gender Distribution</h3>
                                    
                                    <div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div class="flex justify-between mb-1">
                                            <div class="flex items-center space-x-2">
                                                <div class="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                                <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Male</span>
                                            </div>
                                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {{ maleStudents }} ({{ Math.round((maleStudents / totalStudents) * 100) || 0 }}%)
                                            </span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                                            <div class="bg-blue-500 h-1.5 rounded-full" 
                                                :style="`width: ${(maleStudents / totalStudents) * 100}%`"></div>
                                        </div>
                                        
                                        <div class="flex justify-between mt-2 mb-1">
                                            <div class="flex items-center space-x-2">
                                                <div class="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                                                <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Female</span>
                                            </div>
                                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {{ femaleStudents }} ({{ Math.round((femaleStudents / totalStudents) * 100) || 0 }}%)
                                            </span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                                            <div class="bg-pink-500 h-1.5 rounded-full" 
                                                :style="`width: ${(femaleStudents / totalStudents) * 100}%`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Tutorial Video Button - Compact Version -->
                            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg self-start w-1/3">
                                <div class="p-3">
                                    <div class="flex flex-col items-center justify-center h-full">
                                        <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">NSTP Tutorial</h3>
                                        <button @click="openVideoModal"
                                            class="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition duration-150 ease-in-out w-full">
                                            Watch Tutorial
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="space-y-3 flex flex-col">
                        <!-- Semester Performance - Fixed Percentages -->
                        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-3">
                                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Semester Performance</h3>
                                <div class="space-y-3">
                                    <div>
                                        <div class="flex justify-between mb-1">
                                            <h5 class="text-xs font-medium text-gray-700 dark:text-gray-300">First Semester</h5>
                                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {{ semesterPerformancePercentages.first_passed }}% Passed
                                            </span>
                                        </div>
                                        <div class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex">
                                            <div class="h-full bg-green-500" 
                                                :style="`width: ${semesterPerformancePercentages.first_passed}%`">
                                            </div>
                                            <div class="h-full bg-red-500" 
                                                :style="`width: ${semesterPerformancePercentages.first_failed}%`">
                                            </div>
                                            <div class="h-full bg-yellow-500" 
                                                :style="`width: ${semesterPerformancePercentages.first_pending}%`">
                                            </div>
                                        </div>
                                        <div class="flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between">
                                            <span>Passed: {{ semesterPerformance.first_sem_passed || 0 }}</span>
                                            <span>Failed: {{ semesterPerformance.first_sem_failed || 0 }}</span>
                                            <span>Pending: {{ semesterPerformance.first_sem_pending || 0 }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between mb-1">
                                            <h5 class="text-xs font-medium text-gray-700 dark:text-gray-300">Second Semester</h5>
                                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {{ semesterPerformancePercentages.second_passed }}% Passed
                                            </span>
                                        </div>
                                        <div class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex">
                                            <div class="h-full bg-green-500" 
                                                :style="`width: ${semesterPerformancePercentages.second_passed}%`">
                                            </div>
                                            <div class="h-full bg-red-500" 
                                                :style="`width: ${semesterPerformancePercentages.second_failed}%`">
                                            </div>
                                            <div class="h-full bg-yellow-500" 
                                                :style="`width: ${semesterPerformancePercentages.second_pending}%`">
                                            </div>
                                        </div>
                                        <div class="flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between">
                                            <span>Passed: {{ semesterPerformance.second_sem_passed || 0 }}</span>
                                            <span>Failed: {{ semesterPerformance.second_sem_failed || 0 }}</span>
                                            <span>Pending: {{ semesterPerformance.second_sem_pending || 0 }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Students Lists -->
                        <div class="flex-1 space-y-3 flex flex-col">
                            <!-- Students Needing Certificates -->
                            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <div class="p-3">
                                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Students Awaiting Certificates</h3>
                                    <div class="overflow-hidden rounded-lg">
                                        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li v-for="(student, index) in needCertificates" :key="student.id"
                                                class="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <div class="flex items-center justify-between">
                                                    <div>
                                                        <p class="text-xs font-medium text-gray-800 dark:text-gray-200">
                                                            {{ student.last_name || '' }}, {{ student.first_name || '' }} {{ student.middle_name || '' }}
                                                        </p>
                                                        <p class="text-xs text-gray-500 dark:text-gray-400">
                                                            {{ student.student_id || 'No ID' }} • 
                                                            {{ student.course ? student.course.code : 'No Course' }}
                                                        </p>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <span class="px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                                            Eligible
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li v-if="!needCertificates || needCertificates.length === 0" class="py-3 text-center">
                                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                                    No students awaiting certificates
                                                </p>
                                            </li>
                                        </ul>
                                        <div v-if="(certificatesNotPrinted > (needCertificates ? needCertificates.length : 0))" 
                                            class="text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
                                            <a href="/students" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                                + {{ certificatesNotPrinted - (needCertificates ? needCertificates.length : 0) }} more eligible students
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Students with Missing Information -->
                            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <div class="p-3">
                                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        <div class="flex items-center justify-between">
                                            <span>Students with Missing Info</span>
                                            <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                                                {{ missingInfoCount }}
                                            </span>
                                        </div>
                                    </h3>
                                    <div class="overflow-hidden rounded-lg">
                                        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li v-for="(student, index) in studentsWithMissingInfo" :key="student.id"
                                                class="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <div class="flex items-center justify-between">
                                                    <div>
                                                        <p class="text-xs font-medium text-gray-800 dark:text-gray-200">
                                                            {{ student.last_name || '' }}, {{ student.first_name || '' }} {{ student.middle_name || '' }}
                                                        </p>
                                                        <p class="text-xs text-gray-500 dark:text-gray-400">
                                                            {{ student.student_id || 'No ID' }} • 
                                                            {{ student.course ? student.course.code : 'No Course' }}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span class="px-1.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">
                                                            Incomplete
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="mt-1 flex flex-wrap gap-1">
                                                    <span v-if="!student.student_id" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        ID
                                                    </span>
                                                    <span v-if="!student.email" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        Email
                                                    </span>
                                                    <span v-if="!student.phone" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        Phone
                                                    </span>
                                                    <span v-if="!student.nstp_serial_no" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        NSTP#
                                                    </span>
                                                    <span v-if="!student.course_id" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        Course
                                                    </span>
                                                    <span v-if="!student.region || !student.province || !student.city || !student.brgy" class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                                                        Address
                                                    </span>
                                                </div>
                                            </li>
                                            <li v-if="!studentsWithMissingInfo || studentsWithMissingInfo.length === 0" class="py-3 text-center">
                                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                                    No students with missing information
                                                </p>
                                            </li>
                                        </ul>
                                        <div v-if="missingInfoCount > (studentsWithMissingInfo ? studentsWithMissingInfo.length : 0)" 
                                            class="text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
                                            <a href="/students" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                                + {{ missingInfoCount - (studentsWithMissingInfo ? studentsWithMissingInfo.length : 0) }} more with incomplete info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Video Modal -->
        <div v-if="showVideoModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title"
            role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- Background overlay -->
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"
                    @click="closeVideoModal"></div>

                <!-- Modal panel -->
                <div
                    class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                    <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="w-full">
                                <div class="aspect-w-16 aspect-h-9 w-full">
                                    <video id="tutorial-video" src="/tutorial-video/intro.mp4" controls
                                        class="w-full rounded-lg"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="closeVideoModal"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>
/* Aspect ratio utility (for responsive video) */
.aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 Aspect Ratio */
}

.aspect-w-16 video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Modal transition effects */
.transform {
    transition-property: transform;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>
