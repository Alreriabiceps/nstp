import { computed, ref, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    students: {
      type: Array,
      default: () => []
    },
    courses: {
      type: Array,
      default: () => []
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
  },
  setup(__props) {
    const props = __props;
    const totalStudents = computed(() => props.students.length || 1);
    const totalCourses = computed(() => props.courses.length || 1);
    const maleStudents = computed(() => props.students.filter((student) => student.sex === "M").length || 0);
    const femaleStudents = computed(() => props.students.filter((student) => student.sex === "F").length || 0);
    const certificatesPrinted = computed(() => props.certificatesPrinted || 0);
    const statusPercentages = computed(() => {
      const total = (props.statusOverview.both_passed || 0) + (props.statusOverview.first_passed_only || 0) + (props.statusOverview.second_passed_only || 0) + (props.statusOverview.none_passed || 0) || 1;
      return {
        both_passed: Math.round((props.statusOverview.both_passed || 0) / total * 100),
        first_passed_only: Math.round((props.statusOverview.first_passed_only || 0) / total * 100),
        second_passed_only: Math.round((props.statusOverview.second_passed_only || 0) / total * 100),
        none_passed: Math.round((props.statusOverview.none_passed || 0) / total * 100)
      };
    });
    const certificateEligibility = computed(() => {
      const eligible = props.statusOverview.both_passed || 0;
      const total = totalStudents.value || 1;
      return Math.round(eligible / total * 100);
    });
    const semesterPerformancePercentages = computed(() => {
      const firstTotal = (props.semesterPerformance.first_sem_passed || 0) + (props.semesterPerformance.first_sem_failed || 0) + (props.semesterPerformance.first_sem_pending || 0) || 1;
      const secondTotal = (props.semesterPerformance.second_sem_passed || 0) + (props.semesterPerformance.second_sem_failed || 0) + (props.semesterPerformance.second_sem_pending || 0) || 1;
      return {
        first_passed: Math.round((props.semesterPerformance.first_sem_passed || 0) / firstTotal * 100),
        first_failed: Math.round((props.semesterPerformance.first_sem_failed || 0) / firstTotal * 100),
        first_pending: Math.round((props.semesterPerformance.first_sem_pending || 0) / firstTotal * 100),
        second_passed: Math.round((props.semesterPerformance.second_sem_passed || 0) / secondTotal * 100),
        second_failed: Math.round((props.semesterPerformance.second_sem_failed || 0) / secondTotal * 100),
        second_pending: Math.round((props.semesterPerformance.second_sem_pending || 0) / secondTotal * 100)
      };
    });
    const topCoursesPercentages = computed(() => {
      if (!props.topCourses || props.topCourses.length === 0) {
        return [];
      }
      const maxValue = Math.max(...props.topCourses.map((c) => c.total)) || 1;
      return props.topCourses.map((course) => {
        return {
          ...course,
          percentage: Math.round(course.total / maxValue * 100)
        };
      });
    });
    const showVideoModal = ref(false);
    const openVideoModal = () => {
      showVideoModal.value = true;
    };
    const closeVideoModal = () => {
      showVideoModal.value = false;
      const video = document.getElementById("tutorial-video");
      if (video) {
        video.pause();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>Dashboard</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, "Dashboard")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}><div class="max-w-7xl mx-auto sm:px-4 lg:px-6"${_scopeId}><div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-2"${_scopeId}><div class="flex items-center"${_scopeId}><div class="p-2 rounded-full bg-blue-500 bg-opacity-75"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg></div><div class="ml-3"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Total Students</p><p class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(totalStudents.value)}</p></div></div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-2"${_scopeId}><div class="flex items-center"${_scopeId}><div class="p-2 rounded-full bg-green-500 bg-opacity-75"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg></div><div class="ml-3"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Total Courses</p><p class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(totalCourses.value)}</p></div></div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-2"${_scopeId}><div class="flex items-center"${_scopeId}><div class="p-2 rounded-full bg-purple-500 bg-opacity-75"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div class="ml-3"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Certificate Eligible</p><div class="flex items-center space-x-1"${_scopeId}><span class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.statusOverview.both_passed || 0)}</span><span class="text-xs text-green-500 dark:text-green-400"${_scopeId}>(${ssrInterpolate(certificateEligibility.value)}%)</span></div></div></div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-2"${_scopeId}><div class="flex items-center"${_scopeId}><div class="p-2 rounded-full bg-yellow-500 bg-opacity-75"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"${_scopeId}></path></svg></div><div class="ml-3"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Certificates</p><p class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(certificatesPrinted.value)}</p></div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-3"${_scopeId}><div class="space-y-3 flex flex-col"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>NSTP Status Overview</h3><div class="grid grid-cols-2 gap-2"${_scopeId}><div class="bg-green-50 dark:bg-green-900/30 p-2 rounded-lg border border-green-200 dark:border-green-900"${_scopeId}><h4 class="text-xs font-medium text-green-800 dark:text-green-300 mb-1"${_scopeId}>Both Passed</h4><p class="text-base font-bold text-green-700 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.statusOverview.both_passed || 0)}</p><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1"${_scopeId}><div class="bg-green-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${statusPercentages.value.both_passed}%`)}"${_scopeId}></div></div><p class="text-xs text-green-700 dark:text-green-400 mt-1"${_scopeId}>${ssrInterpolate(statusPercentages.value.both_passed)}% of students</p></div><div class="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg border border-blue-200 dark:border-blue-900"${_scopeId}><h4 class="text-xs font-medium text-blue-800 dark:text-blue-300 mb-1"${_scopeId}>NSTP 1 Passed Only</h4><p class="text-base font-bold text-blue-700 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.statusOverview.first_passed_only || 0)}</p><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1"${_scopeId}><div class="bg-blue-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${statusPercentages.value.first_passed_only}%`)}"${_scopeId}></div></div><p class="text-xs text-blue-700 dark:text-blue-400 mt-1"${_scopeId}>${ssrInterpolate(statusPercentages.value.first_passed_only)}% of students</p></div><div class="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg border border-indigo-200 dark:border-indigo-900"${_scopeId}><h4 class="text-xs font-medium text-indigo-800 dark:text-indigo-300 mb-1"${_scopeId}>NSTP 2 Passed Only</h4><p class="text-base font-bold text-indigo-700 dark:text-indigo-400"${_scopeId}>${ssrInterpolate(__props.statusOverview.second_passed_only || 0)}</p><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1"${_scopeId}><div class="bg-indigo-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${statusPercentages.value.second_passed_only}%`)}"${_scopeId}></div></div><p class="text-xs text-indigo-700 dark:text-indigo-400 mt-1"${_scopeId}>${ssrInterpolate(statusPercentages.value.second_passed_only)}% of students</p></div><div class="bg-orange-50 dark:bg-orange-900/30 p-2 rounded-lg border border-orange-200 dark:border-orange-900"${_scopeId}><h4 class="text-xs font-medium text-orange-800 dark:text-orange-300 mb-1"${_scopeId}>None Passed</h4><p class="text-base font-bold text-orange-700 dark:text-orange-400"${_scopeId}>${ssrInterpolate(__props.statusOverview.none_passed || 0)}</p><div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1"${_scopeId}><div class="bg-orange-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${statusPercentages.value.none_passed}%`)}"${_scopeId}></div></div><p class="text-xs text-orange-700 dark:text-orange-400 mt-1"${_scopeId}>${ssrInterpolate(statusPercentages.value.none_passed)}% of students</p></div></div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>Top Courses</h3><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(topCoursesPercentages.value, (course, index) => {
              _push2(`<div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div class="flex items-center"${_scopeId}><div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium mr-2"${_scopeId}>${ssrInterpolate(index + 1)}</div><h4 class="text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[150px]"${_scopeId}>${ssrInterpolate(course.course_name)}</h4></div><p class="text-xs font-bold text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(course.total)}</p></div><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1.5"${_scopeId}><div class="bg-blue-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${course.percentage}%`)}"${_scopeId}></div></div></div>`);
            });
            _push2(`<!--]-->`);
            if (!topCoursesPercentages.value.length) {
              _push2(`<div class="text-center py-2 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> No course data available </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>Certificate Analytics</h3><div class="grid grid-cols-2 gap-2 mb-2"${_scopeId}><div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"${_scopeId}><div class="flex justify-between mb-1"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Printed</p><p class="text-xs font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(certificatesPrinted.value)}</p></div><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5"${_scopeId}><div class="bg-green-600 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${certificatesPrinted.value / (certificatesPrinted.value + __props.certificatesNotPrinted || 1) * 100}%`)}"${_scopeId}></div></div></div><div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"${_scopeId}><div class="flex justify-between mb-1"${_scopeId}><p class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>Pending</p><p class="text-xs font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.certificatesNotPrinted || 0)}</p></div><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5"${_scopeId}><div class="bg-yellow-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${__props.certificatesNotPrinted / (certificatesPrinted.value + __props.certificatesNotPrinted || 1) * 100}%`)}"${_scopeId}></div></div></div></div>`);
            if (__props.certificateTrend && __props.certificateTrend.length) {
              _push2(`<div class="mb-2"${_scopeId}><h4 class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>Certificate Trend (6 Months)</h4><div class="space-y-1"${_scopeId}><!--[-->`);
              ssrRenderList(__props.certificateTrend, (month, index) => {
                _push2(`<div class="flex items-center"${_scopeId}><span class="text-xs text-gray-600 dark:text-gray-400 w-14"${_scopeId}>${ssrInterpolate(month.month)}</span><div class="flex-grow h-5 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden"${_scopeId}><div class="h-full bg-blue-500 rounded" style="${ssrRenderStyle(`width: ${month.total / Math.max(...__props.certificateTrend.map((m) => m.total || 1)) * 100}%`)}"${_scopeId}><span class="px-1 text-xs text-white font-medium flex items-center h-full"${_scopeId}>${ssrInterpolate(month.total)}</span></div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex gap-3 mt-auto"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg flex-1"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>Gender Distribution</h3><div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"${_scopeId}><div class="flex justify-between mb-1"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><div class="w-2.5 h-2.5 bg-blue-500 rounded-full"${_scopeId}></div><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>Male</span></div><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(maleStudents.value)} (${ssrInterpolate(Math.round(maleStudents.value / totalStudents.value * 100) || 0)}%) </span></div><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5"${_scopeId}><div class="bg-blue-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${maleStudents.value / totalStudents.value * 100}%`)}"${_scopeId}></div></div><div class="flex justify-between mt-2 mb-1"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><div class="w-2.5 h-2.5 bg-pink-500 rounded-full"${_scopeId}></div><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>Female</span></div><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(femaleStudents.value)} (${ssrInterpolate(Math.round(femaleStudents.value / totalStudents.value * 100) || 0)}%) </span></div><div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5"${_scopeId}><div class="bg-pink-500 h-1.5 rounded-full" style="${ssrRenderStyle(`width: ${femaleStudents.value / totalStudents.value * 100}%`)}"${_scopeId}></div></div></div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg self-start w-1/3"${_scopeId}><div class="p-3"${_scopeId}><div class="flex flex-col items-center justify-center h-full"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>NSTP Tutorial</h3><button class="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition duration-150 ease-in-out w-full"${_scopeId}> Watch Tutorial </button></div></div></div></div></div><div class="space-y-3 flex flex-col"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>Semester Performance</h3><div class="space-y-3"${_scopeId}><div${_scopeId}><div class="flex justify-between mb-1"${_scopeId}><h5 class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>First Semester</h5><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(semesterPerformancePercentages.value.first_passed)}% Passed </span></div><div class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex"${_scopeId}><div class="h-full bg-green-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.first_passed}%`)}"${_scopeId}></div><div class="h-full bg-red-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.first_failed}%`)}"${_scopeId}></div><div class="h-full bg-yellow-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.first_pending}%`)}"${_scopeId}></div></div><div class="flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between"${_scopeId}><span${_scopeId}>Passed: ${ssrInterpolate(__props.semesterPerformance.first_sem_passed || 0)}</span><span${_scopeId}>Failed: ${ssrInterpolate(__props.semesterPerformance.first_sem_failed || 0)}</span><span${_scopeId}>Pending: ${ssrInterpolate(__props.semesterPerformance.first_sem_pending || 0)}</span></div></div><div${_scopeId}><div class="flex justify-between mb-1"${_scopeId}><h5 class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>Second Semester</h5><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(semesterPerformancePercentages.value.second_passed)}% Passed </span></div><div class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex"${_scopeId}><div class="h-full bg-green-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.second_passed}%`)}"${_scopeId}></div><div class="h-full bg-red-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.second_failed}%`)}"${_scopeId}></div><div class="h-full bg-yellow-500" style="${ssrRenderStyle(`width: ${semesterPerformancePercentages.value.second_pending}%`)}"${_scopeId}></div></div><div class="flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between"${_scopeId}><span${_scopeId}>Passed: ${ssrInterpolate(__props.semesterPerformance.second_sem_passed || 0)}</span><span${_scopeId}>Failed: ${ssrInterpolate(__props.semesterPerformance.second_sem_failed || 0)}</span><span${_scopeId}>Pending: ${ssrInterpolate(__props.semesterPerformance.second_sem_pending || 0)}</span></div></div></div></div></div><div class="flex-1 space-y-3 flex flex-col"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>Students Awaiting Certificates</h3><div class="overflow-hidden rounded-lg"${_scopeId}><ul class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
            ssrRenderList(__props.needCertificates, (student, index) => {
              _push2(`<li class="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-xs font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(student.last_name || "")}, ${ssrInterpolate(student.first_name || "")} ${ssrInterpolate(student.middle_name || "")}</p><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(student.student_id || "No ID")} • ${ssrInterpolate(student.course ? student.course.code : "No Course")}</p></div><div class="flex items-center"${_scopeId}><span class="px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full"${_scopeId}> Eligible </span></div></div></li>`);
            });
            _push2(`<!--]-->`);
            if (!__props.needCertificates || __props.needCertificates.length === 0) {
              _push2(`<li class="py-3 text-center"${_scopeId}><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> No students awaiting certificates </p></li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul>`);
            if (__props.certificatesNotPrinted > (__props.needCertificates ? __props.needCertificates.length : 0)) {
              _push2(`<div class="text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700"${_scopeId}><a href="/students" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"${_scopeId}> + ${ssrInterpolate(__props.certificatesNotPrinted - (__props.needCertificates ? __props.needCertificates.length : 0))} more eligible students </a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-3"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span${_scopeId}>Students with Missing Info</span><span class="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300"${_scopeId}>${ssrInterpolate(__props.missingInfoCount)}</span></div></h3><div class="overflow-hidden rounded-lg"${_scopeId}><ul class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
            ssrRenderList(__props.studentsWithMissingInfo, (student, index) => {
              _push2(`<li class="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-xs font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(student.last_name || "")}, ${ssrInterpolate(student.first_name || "")} ${ssrInterpolate(student.middle_name || "")}</p><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(student.student_id || "No ID")} • ${ssrInterpolate(student.course ? student.course.code : "No Course")}</p></div><div${_scopeId}><span class="px-1.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full"${_scopeId}> Incomplete </span></div></div><div class="mt-1 flex flex-wrap gap-1"${_scopeId}>`);
              if (!student.student_id) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> ID </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!student.email) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> Email </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!student.phone) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> Phone </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!student.nstp_serial_no) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> NSTP# </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!student.course_id) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> Course </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!student.region || !student.province || !student.city || !student.brgy) {
                _push2(`<span class="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"${_scopeId}> Address </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></li>`);
            });
            _push2(`<!--]-->`);
            if (!__props.studentsWithMissingInfo || __props.studentsWithMissingInfo.length === 0) {
              _push2(`<li class="py-3 text-center"${_scopeId}><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> No students with missing information </p></li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul>`);
            if (__props.missingInfoCount > (__props.studentsWithMissingInfo ? __props.studentsWithMissingInfo.length : 0)) {
              _push2(`<div class="text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700"${_scopeId}><a href="/students" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"${_scopeId}> + ${ssrInterpolate(__props.missingInfoCount - (__props.studentsWithMissingInfo ? __props.studentsWithMissingInfo.length : 0))} more with incomplete info </a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div></div></div>`);
            if (showVideoModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"${_scopeId}><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"${_scopeId}></div><div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"${_scopeId}><div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="w-full"${_scopeId}><div class="aspect-w-16 aspect-h-9 w-full"${_scopeId}><video id="tutorial-video" src="/tutorial-video/intro.mp4" controls class="w-full rounded-lg"${_scopeId}></video></div></div></div></div><div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"${_scopeId}><button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"${_scopeId}> Close </button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-4 lg:px-6" }, [
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-2 mb-4" }, [
                    createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "p-2 rounded-full bg-blue-500 bg-opacity-75" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 text-white",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "ml-3" }, [
                            createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Total Students"),
                            createVNode("p", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(totalStudents.value), 1)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "p-2 rounded-full bg-green-500 bg-opacity-75" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 text-white",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "ml-3" }, [
                            createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Total Courses"),
                            createVNode("p", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(totalCourses.value), 1)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "p-2 rounded-full bg-purple-500 bg-opacity-75" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 text-white",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "ml-3" }, [
                            createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Certificate Eligible"),
                            createVNode("div", { class: "flex items-center space-x-1" }, [
                              createVNode("span", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(__props.statusOverview.both_passed || 0), 1),
                              createVNode("span", { class: "text-xs text-green-500 dark:text-green-400" }, "(" + toDisplayString(certificateEligibility.value) + "%)", 1)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "p-2 rounded-full bg-yellow-500 bg-opacity-75" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 text-white",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "ml-3" }, [
                            createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Certificates"),
                            createVNode("p", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(certificatesPrinted.value), 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-3" }, [
                    createVNode("div", { class: "space-y-3 flex flex-col" }, [
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-3" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "NSTP Status Overview"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode("div", { class: "bg-green-50 dark:bg-green-900/30 p-2 rounded-lg border border-green-200 dark:border-green-900" }, [
                              createVNode("h4", { class: "text-xs font-medium text-green-800 dark:text-green-300 mb-1" }, "Both Passed"),
                              createVNode("p", { class: "text-base font-bold text-green-700 dark:text-green-400" }, toDisplayString(__props.statusOverview.both_passed || 0), 1),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1" }, [
                                createVNode("div", {
                                  class: "bg-green-500 h-1.5 rounded-full",
                                  style: `width: ${statusPercentages.value.both_passed}%`
                                }, null, 4)
                              ]),
                              createVNode("p", { class: "text-xs text-green-700 dark:text-green-400 mt-1" }, toDisplayString(statusPercentages.value.both_passed) + "% of students", 1)
                            ]),
                            createVNode("div", { class: "bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg border border-blue-200 dark:border-blue-900" }, [
                              createVNode("h4", { class: "text-xs font-medium text-blue-800 dark:text-blue-300 mb-1" }, "NSTP 1 Passed Only"),
                              createVNode("p", { class: "text-base font-bold text-blue-700 dark:text-blue-400" }, toDisplayString(__props.statusOverview.first_passed_only || 0), 1),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1" }, [
                                createVNode("div", {
                                  class: "bg-blue-500 h-1.5 rounded-full",
                                  style: `width: ${statusPercentages.value.first_passed_only}%`
                                }, null, 4)
                              ]),
                              createVNode("p", { class: "text-xs text-blue-700 dark:text-blue-400 mt-1" }, toDisplayString(statusPercentages.value.first_passed_only) + "% of students", 1)
                            ]),
                            createVNode("div", { class: "bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg border border-indigo-200 dark:border-indigo-900" }, [
                              createVNode("h4", { class: "text-xs font-medium text-indigo-800 dark:text-indigo-300 mb-1" }, "NSTP 2 Passed Only"),
                              createVNode("p", { class: "text-base font-bold text-indigo-700 dark:text-indigo-400" }, toDisplayString(__props.statusOverview.second_passed_only || 0), 1),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1" }, [
                                createVNode("div", {
                                  class: "bg-indigo-500 h-1.5 rounded-full",
                                  style: `width: ${statusPercentages.value.second_passed_only}%`
                                }, null, 4)
                              ]),
                              createVNode("p", { class: "text-xs text-indigo-700 dark:text-indigo-400 mt-1" }, toDisplayString(statusPercentages.value.second_passed_only) + "% of students", 1)
                            ]),
                            createVNode("div", { class: "bg-orange-50 dark:bg-orange-900/30 p-2 rounded-lg border border-orange-200 dark:border-orange-900" }, [
                              createVNode("h4", { class: "text-xs font-medium text-orange-800 dark:text-orange-300 mb-1" }, "None Passed"),
                              createVNode("p", { class: "text-base font-bold text-orange-700 dark:text-orange-400" }, toDisplayString(__props.statusOverview.none_passed || 0), 1),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1" }, [
                                createVNode("div", {
                                  class: "bg-orange-500 h-1.5 rounded-full",
                                  style: `width: ${statusPercentages.value.none_passed}%`
                                }, null, 4)
                              ]),
                              createVNode("p", { class: "text-xs text-orange-700 dark:text-orange-400 mt-1" }, toDisplayString(statusPercentages.value.none_passed) + "% of students", 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-3" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "Top Courses"),
                          createVNode("div", { class: "space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(topCoursesPercentages.value, (course, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"
                              }, [
                                createVNode("div", { class: "flex justify-between items-center" }, [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium mr-2" }, toDisplayString(index + 1), 1),
                                    createVNode("h4", { class: "text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[150px]" }, toDisplayString(course.course_name), 1)
                                  ]),
                                  createVNode("p", { class: "text-xs font-bold text-gray-800 dark:text-gray-200" }, toDisplayString(course.total), 1)
                                ]),
                                createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1.5" }, [
                                  createVNode("div", {
                                    class: "bg-blue-500 h-1.5 rounded-full",
                                    style: `width: ${course.percentage}%`
                                  }, null, 4)
                                ])
                              ]);
                            }), 128)),
                            !topCoursesPercentages.value.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-2 text-xs text-gray-500 dark:text-gray-400"
                            }, " No course data available ")) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-3" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "Certificate Analytics"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2 mb-2" }, [
                            createVNode("div", { class: "bg-gray-50 dark:bg-gray-700 p-2 rounded-lg" }, [
                              createVNode("div", { class: "flex justify-between mb-1" }, [
                                createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Printed"),
                                createVNode("p", { class: "text-xs font-bold text-gray-900 dark:text-white" }, toDisplayString(certificatesPrinted.value), 1)
                              ]),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5" }, [
                                createVNode("div", {
                                  class: "bg-green-600 h-1.5 rounded-full",
                                  style: `width: ${certificatesPrinted.value / (certificatesPrinted.value + __props.certificatesNotPrinted || 1) * 100}%`
                                }, null, 4)
                              ])
                            ]),
                            createVNode("div", { class: "bg-gray-50 dark:bg-gray-700 p-2 rounded-lg" }, [
                              createVNode("div", { class: "flex justify-between mb-1" }, [
                                createVNode("p", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, "Pending"),
                                createVNode("p", { class: "text-xs font-bold text-gray-900 dark:text-white" }, toDisplayString(__props.certificatesNotPrinted || 0), 1)
                              ]),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5" }, [
                                createVNode("div", {
                                  class: "bg-yellow-500 h-1.5 rounded-full",
                                  style: `width: ${__props.certificatesNotPrinted / (certificatesPrinted.value + __props.certificatesNotPrinted || 1) * 100}%`
                                }, null, 4)
                              ])
                            ])
                          ]),
                          __props.certificateTrend && __props.certificateTrend.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-2"
                          }, [
                            createVNode("h4", { class: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-1" }, "Certificate Trend (6 Months)"),
                            createVNode("div", { class: "space-y-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.certificateTrend, (month, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: "flex items-center"
                                }, [
                                  createVNode("span", { class: "text-xs text-gray-600 dark:text-gray-400 w-14" }, toDisplayString(month.month), 1),
                                  createVNode("div", { class: "flex-grow h-5 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden" }, [
                                    createVNode("div", {
                                      class: "h-full bg-blue-500 rounded",
                                      style: `width: ${month.total / Math.max(...__props.certificateTrend.map((m) => m.total || 1)) * 100}%`
                                    }, [
                                      createVNode("span", { class: "px-1 text-xs text-white font-medium flex items-center h-full" }, toDisplayString(month.total), 1)
                                    ], 4)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-3 mt-auto" }, [
                        createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg flex-1" }, [
                          createVNode("div", { class: "p-3" }, [
                            createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "Gender Distribution"),
                            createVNode("div", { class: "bg-gray-50 dark:bg-gray-700 p-2 rounded-lg" }, [
                              createVNode("div", { class: "flex justify-between mb-1" }, [
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("div", { class: "w-2.5 h-2.5 bg-blue-500 rounded-full" }),
                                  createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, "Male")
                                ]),
                                createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(maleStudents.value) + " (" + toDisplayString(Math.round(maleStudents.value / totalStudents.value * 100) || 0) + "%) ", 1)
                              ]),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5" }, [
                                createVNode("div", {
                                  class: "bg-blue-500 h-1.5 rounded-full",
                                  style: `width: ${maleStudents.value / totalStudents.value * 100}%`
                                }, null, 4)
                              ]),
                              createVNode("div", { class: "flex justify-between mt-2 mb-1" }, [
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("div", { class: "w-2.5 h-2.5 bg-pink-500 rounded-full" }),
                                  createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, "Female")
                                ]),
                                createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(femaleStudents.value) + " (" + toDisplayString(Math.round(femaleStudents.value / totalStudents.value * 100) || 0) + "%) ", 1)
                              ]),
                              createVNode("div", { class: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5" }, [
                                createVNode("div", {
                                  class: "bg-pink-500 h-1.5 rounded-full",
                                  style: `width: ${femaleStudents.value / totalStudents.value * 100}%`
                                }, null, 4)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg self-start w-1/3" }, [
                          createVNode("div", { class: "p-3" }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center h-full" }, [
                              createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "NSTP Tutorial"),
                              createVNode("button", {
                                onClick: openVideoModal,
                                class: "px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition duration-150 ease-in-out w-full"
                              }, " Watch Tutorial ")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3 flex flex-col" }, [
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-3" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "Semester Performance"),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "flex justify-between mb-1" }, [
                                createVNode("h5", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, "First Semester"),
                                createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(semesterPerformancePercentages.value.first_passed) + "% Passed ", 1)
                              ]),
                              createVNode("div", { class: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex" }, [
                                createVNode("div", {
                                  class: "h-full bg-green-500",
                                  style: `width: ${semesterPerformancePercentages.value.first_passed}%`
                                }, null, 4),
                                createVNode("div", {
                                  class: "h-full bg-red-500",
                                  style: `width: ${semesterPerformancePercentages.value.first_failed}%`
                                }, null, 4),
                                createVNode("div", {
                                  class: "h-full bg-yellow-500",
                                  style: `width: ${semesterPerformancePercentages.value.first_pending}%`
                                }, null, 4)
                              ]),
                              createVNode("div", { class: "flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between" }, [
                                createVNode("span", null, "Passed: " + toDisplayString(__props.semesterPerformance.first_sem_passed || 0), 1),
                                createVNode("span", null, "Failed: " + toDisplayString(__props.semesterPerformance.first_sem_failed || 0), 1),
                                createVNode("span", null, "Pending: " + toDisplayString(__props.semesterPerformance.first_sem_pending || 0), 1)
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex justify-between mb-1" }, [
                                createVNode("h5", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, "Second Semester"),
                                createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(semesterPerformancePercentages.value.second_passed) + "% Passed ", 1)
                              ]),
                              createVNode("div", { class: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex" }, [
                                createVNode("div", {
                                  class: "h-full bg-green-500",
                                  style: `width: ${semesterPerformancePercentages.value.second_passed}%`
                                }, null, 4),
                                createVNode("div", {
                                  class: "h-full bg-red-500",
                                  style: `width: ${semesterPerformancePercentages.value.second_failed}%`
                                }, null, 4),
                                createVNode("div", {
                                  class: "h-full bg-yellow-500",
                                  style: `width: ${semesterPerformancePercentages.value.second_pending}%`
                                }, null, 4)
                              ]),
                              createVNode("div", { class: "flex text-xs text-gray-500 dark:text-gray-400 mt-1 justify-between" }, [
                                createVNode("span", null, "Passed: " + toDisplayString(__props.semesterPerformance.second_sem_passed || 0), 1),
                                createVNode("span", null, "Failed: " + toDisplayString(__props.semesterPerformance.second_sem_failed || 0), 1),
                                createVNode("span", null, "Pending: " + toDisplayString(__props.semesterPerformance.second_sem_pending || 0), 1)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-1 space-y-3 flex flex-col" }, [
                        createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                          createVNode("div", { class: "p-3" }, [
                            createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, "Students Awaiting Certificates"),
                            createVNode("div", { class: "overflow-hidden rounded-lg" }, [
                              createVNode("ul", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.needCertificates, (student, index) => {
                                  return openBlock(), createBlock("li", {
                                    key: student.id,
                                    class: "p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                  }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-xs font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(student.last_name || "") + ", " + toDisplayString(student.first_name || "") + " " + toDisplayString(student.middle_name || ""), 1),
                                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(student.student_id || "No ID") + " • " + toDisplayString(student.course ? student.course.code : "No Course"), 1)
                                      ]),
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("span", { class: "px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full" }, " Eligible ")
                                      ])
                                    ])
                                  ]);
                                }), 128)),
                                !__props.needCertificates || __props.needCertificates.length === 0 ? (openBlock(), createBlock("li", {
                                  key: 0,
                                  class: "py-3 text-center"
                                }, [
                                  createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, " No students awaiting certificates ")
                                ])) : createCommentVNode("", true)
                              ]),
                              __props.certificatesNotPrinted > (__props.needCertificates ? __props.needCertificates.length : 0) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700"
                              }, [
                                createVNode("a", {
                                  href: "/students",
                                  class: "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                }, " + " + toDisplayString(__props.certificatesNotPrinted - (__props.needCertificates ? __props.needCertificates.length : 0)) + " more eligible students ", 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                          createVNode("div", { class: "p-3" }, [
                            createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-2" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", null, "Students with Missing Info"),
                                createVNode("span", { class: "bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300" }, toDisplayString(__props.missingInfoCount), 1)
                              ])
                            ]),
                            createVNode("div", { class: "overflow-hidden rounded-lg" }, [
                              createVNode("ul", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.studentsWithMissingInfo, (student, index) => {
                                  return openBlock(), createBlock("li", {
                                    key: student.id,
                                    class: "p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                  }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-xs font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(student.last_name || "") + ", " + toDisplayString(student.first_name || "") + " " + toDisplayString(student.middle_name || ""), 1),
                                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(student.student_id || "No ID") + " • " + toDisplayString(student.course ? student.course.code : "No Course"), 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("span", { class: "px-1.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full" }, " Incomplete ")
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-1 flex flex-wrap gap-1" }, [
                                      !student.student_id ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " ID ")) : createCommentVNode("", true),
                                      !student.email ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " Email ")) : createCommentVNode("", true),
                                      !student.phone ? (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " Phone ")) : createCommentVNode("", true),
                                      !student.nstp_serial_no ? (openBlock(), createBlock("span", {
                                        key: 3,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " NSTP# ")) : createCommentVNode("", true),
                                      !student.course_id ? (openBlock(), createBlock("span", {
                                        key: 4,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " Course ")) : createCommentVNode("", true),
                                      !student.region || !student.province || !student.city || !student.brgy ? (openBlock(), createBlock("span", {
                                        key: 5,
                                        class: "inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                                      }, " Address ")) : createCommentVNode("", true)
                                    ])
                                  ]);
                                }), 128)),
                                !__props.studentsWithMissingInfo || __props.studentsWithMissingInfo.length === 0 ? (openBlock(), createBlock("li", {
                                  key: 0,
                                  class: "py-3 text-center"
                                }, [
                                  createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, " No students with missing information ")
                                ])) : createCommentVNode("", true)
                              ]),
                              __props.missingInfoCount > (__props.studentsWithMissingInfo ? __props.studentsWithMissingInfo.length : 0) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-center py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700"
                              }, [
                                createVNode("a", {
                                  href: "/students",
                                  class: "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                }, " + " + toDisplayString(__props.missingInfoCount - (__props.studentsWithMissingInfo ? __props.studentsWithMissingInfo.length : 0)) + " more with incomplete info ", 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              showVideoModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 overflow-y-auto",
                "aria-labelledby": "modal-title",
                role: "dialog",
                "aria-modal": "true"
              }, [
                createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    "aria-hidden": "true",
                    onClick: closeVideoModal
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full" }, [
                    createVNode("div", { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                      createVNode("div", { class: "sm:flex sm:items-start" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("div", { class: "aspect-w-16 aspect-h-9 w-full" }, [
                            createVNode("video", {
                              id: "tutorial-video",
                              src: "/tutorial-video/intro.mp4",
                              controls: "",
                              class: "w-full rounded-lg"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeVideoModal,
                        class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      }, " Close ")
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
