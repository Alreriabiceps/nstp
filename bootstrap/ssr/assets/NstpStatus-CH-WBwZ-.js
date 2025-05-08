import { ref, computed, watch, onMounted, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, createCommentVNode, toDisplayString, withDirectives, vModelText, Fragment, renderList, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { useForm, Head } from "@inertiajs/vue3";
import "./PrimaryButton-DcrIiEU-.js";
import "./SelectAllIcon-D1yH4S4d.js";
import axios from "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "NstpStatus",
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
    graduationYears: {
      type: Array,
      default: () => []
    },
    stats: {
      type: Object,
      default: () => ({
        nstp1: { pending: 0, passed: 0, failed: 0 },
        nstp2: { pending: 0, passed: 0, failed: 0 }
      })
    },
    flash: {
      type: Object,
      default: () => ({})
    },
    showFailedFilter: {
      type: Boolean,
      default: false
    },
    failedFilter: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const message = ref("");
    const messageType = ref("");
    const showInstructions = ref(false);
    const activeTab = ref("nstp1");
    const switchTab = (tabId) => {
      activeTab.value = tabId;
      document.getElementById("nstp1").classList.add("hidden");
      document.getElementById("nstp2").classList.add("hidden");
      document.getElementById(tabId).classList.remove("hidden");
      const tabs = document.querySelectorAll(".tab-link");
      tabs.forEach((tab) => {
        if (tab.getAttribute("href") === `#${tabId}`) {
          tab.classList.add("border-blue-500", "text-blue-600", "dark:text-blue-300");
          tab.classList.remove("border-transparent", "text-gray-500");
        } else {
          tab.classList.remove("border-blue-500", "text-blue-600", "dark:text-blue-300");
          tab.classList.add("border-transparent", "text-gray-500");
        }
      });
    };
    const showMessage = (text, type = "success") => {
      message.value = text;
      messageType.value = type;
      setTimeout(() => {
        message.value = "";
        messageType.value = "";
      }, 5e3);
    };
    if (props.flash && props.flash.success) {
      showMessage(props.flash.success, "success");
    } else if (props.flash && props.flash.error) {
      showMessage(props.flash.error, "error");
    }
    const nstp1FailedStudents = ref([]);
    const nstp2FailedStudents = ref([]);
    const addStudentsModal = ref(false);
    const failedStudentsModal = ref(false);
    const modalType = ref("nstp1");
    const searchForm = useForm({
      search: "",
      course_id: "",
      school_year: ""
    });
    const searchSelectedIds = ref([]);
    const searchResults = ref([]);
    computed(() => {
      return props.students.filter((student) => student.first_sem_status === 2);
    });
    computed(() => {
      return props.students.filter((student) => student.second_sem_status === 2);
    });
    const getDisplayStudents = () => {
      if (modalType.value === "nstp1") {
        return nstp1FailedStudents.value.map((id) => {
          return props.students.find((s) => s.id === id);
        }).filter((s) => s !== void 0);
      } else {
        return nstp2FailedStudents.value.map((id) => {
          return props.students.find((s) => s.id === id);
        }).filter((s) => s !== void 0);
      }
    };
    const searchStudents = () => {
      if (!searchForm.search && !searchForm.course_id && !searchForm.school_year) {
        searchResults.value = [];
        return;
      }
      searchResults.value = props.students.filter((student) => {
        var _a;
        if (props.showFailedFilter) {
          const isFailed = props.failedFilter === "nstp1" ? student.first_sem_status === 0 : student.second_sem_status === 0;
          if (!isFailed) return false;
        } else {
          const isPending = modalType.value === "nstp1" ? student.first_sem_status === 2 : student.second_sem_status === 2;
          if (!isPending) return false;
        }
        const fullName = `${student.last_name}, ${student.first_name} ${student.middle_name}`.toLowerCase();
        const studentId = ((_a = student.student_id) == null ? void 0 : _a.toLowerCase()) || "";
        const matchesSearch = searchForm.search === "" || fullName.includes(searchForm.search.toLowerCase()) || studentId.includes(searchForm.search.toLowerCase());
        const matchesCourse = searchForm.course_id === "" || student.course && student.course.id.toString() === searchForm.course_id;
        const matchesYear = searchForm.school_year === "" || student.enrollment_year === searchForm.school_year;
        return matchesSearch && matchesCourse && matchesYear;
      });
      console.log(`Found ${searchResults.value.length} students that match the criteria for ${modalType.value}`);
      if (modalType.value === "nstp1") {
        nstp1FailedStudents.value = nstp1FailedStudents.value.filter((id) => {
          const student = props.students.find((s) => s.id === id);
          return student && (props.showFailedFilter ? student.first_sem_status === 0 : student.first_sem_status === 2);
        });
      } else {
        nstp2FailedStudents.value = nstp2FailedStudents.value.filter((id) => {
          const student = props.students.find((s) => s.id === id);
          return student && (props.showFailedFilter ? student.second_sem_status === 0 : student.second_sem_status === 2);
        });
      }
    };
    const openAddStudentsModal = (type) => {
      modalType.value = type;
      addStudentsModal.value = true;
      searchSelectedIds.value = [];
      searchForm.search = "";
      searchForm.course_id = "";
      searchForm.school_year = "";
      searchResults.value = [];
      const pendingStudents = props.students.filter((student) => {
        return type === "nstp1" ? student.first_sem_status === 2 : student.second_sem_status === 2;
      });
      const pendingCount = pendingStudents.length;
      console.log(`Opening modal to select failed students. There are ${pendingCount} pending students for NSTP ${type === "nstp1" ? "1" : "2"}`);
      if (pendingCount === 0) {
        showMessage(`There are no pending students for NSTP ${type === "nstp1" ? "1" : "2"}. All students have already been marked as passed or failed.`, "error");
        addStudentsModal.value = false;
      }
    };
    const openFailedStudentsModal = (type) => {
      modalType.value = type;
      failedStudentsModal.value = true;
    };
    const addSelectedStudents = () => {
      if (searchSelectedIds.value.length === 0) {
        alert("Please select at least one student to add.");
        return;
      }
      const selectedIds = searchSelectedIds.value.map((id) => parseInt(id, 10));
      console.log("Selected IDs to add:", selectedIds);
      if (modalType.value === "nstp1") {
        nstp1FailedStudents.value = [.../* @__PURE__ */ new Set([...nstp1FailedStudents.value, ...selectedIds])];
        console.log("Updated NSTP1 failed students:", nstp1FailedStudents.value);
      } else {
        nstp2FailedStudents.value = [.../* @__PURE__ */ new Set([...nstp2FailedStudents.value, ...selectedIds])];
        console.log("Updated NSTP2 failed students:", nstp2FailedStudents.value);
      }
      addStudentsModal.value = false;
      searchSelectedIds.value = [];
    };
    const removeStudent = (studentId) => {
      if (modalType.value === "nstp1") {
        nstp1FailedStudents.value = nstp1FailedStudents.value.filter((id) => id !== studentId);
      } else {
        nstp2FailedStudents.value = nstp2FailedStudents.value.filter((id) => id !== studentId);
      }
    };
    const submitFailed = (type) => {
      const studentIds = type === "nstp1" ? nstp1FailedStudents.value : nstp2FailedStudents.value;
      console.log(`Submitting ${type} with student IDs:`, studentIds);
      if (studentIds.length === 0) {
        if (!confirm(`No students are marked as failed. This will mark ALL pending students as PASSED for NSTP ${type === "nstp1" ? "1" : "2"}. Continue?`)) {
          return;
        }
        axios.post(route(type === "nstp1" ? "nstp1.submit" : "nstp2.submit")).then((response) => {
          console.log("Submit successful, updating UI...");
          props.students.forEach((student) => {
            if (type === "nstp1" && student.first_sem_status === 2) {
              student.first_sem_status = 1;
            } else if (type === "nstp2" && student.second_sem_status === 2) {
              student.second_sem_status = 1;
            }
          });
          if (type === "nstp1") {
            props.stats.nstp1.passed += props.stats.nstp1.pending;
            props.stats.nstp1.pending = 0;
          } else {
            props.stats.nstp2.passed += props.stats.nstp2.pending;
            props.stats.nstp2.pending = 0;
          }
          showMessage(`All pending students have been marked as PASSED for NSTP ${type === "nstp1" ? "1" : "2"}.`, "success");
        }).catch((error) => {
          console.error("Error submitting NSTP status:", error);
          showMessage("An error occurred while updating student statuses. Please try again.", "error");
        });
        return;
      }
      if (!confirm(`This will mark ${studentIds.length} students as FAILED and all remaining pending students as PASSED for NSTP ${type === "nstp1" ? "1" : "2"}. Continue?`)) {
        return;
      }
      const formData = {
        student_ids: studentIds
      };
      console.log("Submitting form data:", formData);
      axios.post(route(type === "nstp1" ? "nstp1.failed" : "nstp2.failed"), formData).then((response) => {
        console.log("First step successful, submitting second step...");
        props.students.forEach((student) => {
          if (studentIds.includes(student.id)) {
            if (type === "nstp1") {
              student.first_sem_status = 0;
            } else {
              student.second_sem_status = 0;
            }
          }
        });
        axios.post(route(type === "nstp1" ? "nstp1.submit" : "nstp2.submit")).then((secondResponse) => {
          console.log("Both steps successful, updating UI...");
          props.students.forEach((student) => {
            if (type === "nstp1" && student.first_sem_status === 2) {
              student.first_sem_status = 1;
            } else if (type === "nstp2" && student.second_sem_status === 2) {
              student.second_sem_status = 1;
            }
          });
          if (type === "nstp1") {
            props.stats.nstp1.failed += studentIds.length;
            props.stats.nstp1.passed += props.stats.nstp1.pending - studentIds.length;
            props.stats.nstp1.pending = 0;
          } else {
            props.stats.nstp2.failed += studentIds.length;
            props.stats.nstp2.passed += props.stats.nstp2.pending - studentIds.length;
            props.stats.nstp2.pending = 0;
          }
          showMessage(`${studentIds.length} students marked as FAILED and all remaining pending students marked as PASSED for NSTP ${type === "nstp1" ? "1" : "2"}.`, "success");
          if (type === "nstp1") {
            nstp1FailedStudents.value = [];
          } else {
            nstp2FailedStudents.value = [];
          }
          failedStudentsModal.value = false;
        }).catch((error) => {
          console.error("Error submitting NSTP status (pass step):", error);
          showMessage("An error occurred while marking remaining students as passed. Please try again.", "error");
        });
      }).catch((error) => {
        console.error("Error submitting NSTP status (fail step):", error);
        showMessage("An error occurred while marking selected students as failed. Please try again.", "error");
      });
    };
    watch(() => searchForm.search, () => {
      if (searchForm.search.length >= 2 || searchForm.search === "") {
        searchStudents();
      }
    });
    watch(() => searchForm.course_id, () => {
      searchStudents();
    });
    watch(() => searchForm.school_year, () => {
      searchStudents();
    });
    const getStatusClass = (status) => {
      if (status === void 0 || status === null) {
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      }
      switch (parseInt(status, 10)) {
        case 1:
          return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case 0:
          return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        case 2:
        default:
          return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      }
    };
    const getStatusText = (status) => {
      if (status === void 0 || status === null) {
        return "Unknown";
      }
      switch (parseInt(status, 10)) {
        case 1:
          return "Passed";
        case 0:
          return "Failed";
        case 2:
          return "Pending";
        default:
          return "Unknown";
      }
    };
    const confirmResetAllNstp1 = () => {
      if (confirm("Are you sure you want to reset ALL students to PENDING status for NSTP 1? This action cannot be undone.")) {
        axios.post(route("nstp1.reset.all")).then((response) => {
          console.log("Reset NSTP1 successful");
          window.location.reload();
        }).catch((error) => {
          console.error("Error resetting NSTP1 status:", error);
          showMessage("An error occurred while resetting student statuses. Please try again.", "error");
        });
      }
    };
    const confirmResetAllNstp2 = () => {
      if (confirm("Are you sure you want to reset ALL students to PENDING status for NSTP 2? This action cannot be undone.")) {
        axios.post(route("nstp2.reset.all")).then((response) => {
          console.log("Reset NSTP2 successful");
          window.location.reload();
        }).catch((error) => {
          console.error("Error resetting NSTP2 status:", error);
          showMessage("An error occurred while resetting student statuses. Please try again.", "error");
        });
      }
    };
    const viewFailedNstp1Students = () => {
      window.location.href = route("nstp1.failed.list");
    };
    const viewFailedNstp2Students = () => {
      window.location.href = route("nstp2.failed.list");
    };
    const clearFailedFilters = () => {
      window.location.href = route("nstp.status");
    };
    const initTabs = () => {
      var _a, _b;
      if (props.showFailedFilter) {
        const tabToShow = props.failedFilter;
        (_a = document.getElementById(tabToShow)) == null ? void 0 : _a.classList.remove("hidden");
        activeTab.value = tabToShow;
        setTimeout(() => {
          const tabs = document.querySelectorAll(".tab-link");
          tabs.forEach((tab) => {
            if (tab.getAttribute("href") === `#${tabToShow}`) {
              tab.classList.add("border-blue-500", "text-blue-600", "dark:text-blue-300");
              tab.classList.remove("border-transparent", "text-gray-500");
            } else {
              tab.classList.remove("border-blue-500", "text-blue-600", "dark:text-blue-300");
              tab.classList.add("border-transparent", "text-gray-500");
            }
          });
        }, 0);
      } else {
        (_b = document.getElementById("nstp1")) == null ? void 0 : _b.classList.remove("hidden");
      }
    };
    onMounted(() => {
      initTabs();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "NSTP Status Management" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> NSTP Status Management </h2><div class="flex space-x-2"${_scopeId}><button class="px-3 py-1.5 bg-gray-500 hover:bg-gray-700 text-white text-sm rounded flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg> Refresh Data </button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " NSTP Status Management "),
                createVNode("div", { class: "flex space-x-2" }, [
                  createVNode("button", {
                    onClick: ($event) => _ctx.window.location.reload(),
                    class: "px-3 py-1.5 bg-gray-500 hover:bg-gray-700 text-white text-sm rounded flex items-center"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 mr-1",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      })
                    ])),
                    createTextVNode(" Refresh Data ")
                  ], 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-purple-50 dark:bg-purple-900/20 cursor-pointer flex justify-between items-center"${_scopeId}><h3 class="text-lg font-medium text-purple-800 dark:text-purple-300"${_scopeId}>NSTP Status Management Instructions</h3><svg class="${ssrRenderClass([{ "rotate-180": showInstructions.value }, "h-5 w-5 text-purple-600 dark:text-purple-400 transform transition-transform duration-200"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
            if (showInstructions.value) {
              _push2(`<div class="p-6 text-gray-700 dark:text-gray-300"${_scopeId}><ul class="list-disc list-inside space-y-2"${_scopeId}><li${_scopeId}>Use this page to manage students&#39; NSTP 1 and NSTP 2 completion status.</li><li${_scopeId}>Switch between <span class="font-semibold"${_scopeId}>NSTP 1</span> and <span class="font-semibold"${_scopeId}>NSTP 2</span> tabs to manage each semester separately.</li><li${_scopeId}>The dashboard at the top shows the current statistics for <span class="font-semibold"${_scopeId}>Pending</span>, <span class="font-semibold"${_scopeId}>Passed</span>, and <span class="font-semibold"${_scopeId}>Failed</span> students.</li><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>Mark Students as Failed</span> button to select students who did not complete the requirements.</li><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>Submit &amp; Process</span> button to mark selected students as failed and all other pending students as passed.</li><li${_scopeId}>Filter the student list using the search box, course dropdown, or school year selection.</li><li${_scopeId}>Changes to NSTP status will affect students&#39; eligibility for certificate generation.</li><li${_scopeId}>Use <span class="font-semibold"${_scopeId}>Reset All to Pending</span> to clear all status values and start fresh for a semester.</li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (message.value) {
              _push2(`<div class="${ssrRenderClass([{
                "bg-green-100 dark:bg-green-900/20 border-green-400 dark:border-green-800 text-green-700 dark:text-green-300": messageType.value === "success",
                "bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-700 dark:text-red-300": messageType.value === "error"
              }, "mb-6 p-4 border-l-4 rounded"])}"${_scopeId}>${ssrInterpolate(message.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.showFailedFilter) {
              _push2(`<div class="p-4 mb-4 rounded-md shadow-sm bg-amber-50 text-amber-700 dark:bg-amber-900 dark:text-amber-200 flex justify-between items-center"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}>Filtered view:</span> Showing only failed students for NSTP ${ssrInterpolate(props.failedFilter === "nstp1" ? "1" : "2")}</div><button class="px-2 py-1 bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm"${_scopeId}> Clear Filter </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden"${_scopeId}><div class="border-b border-gray-200 dark:border-gray-700"${_scopeId}><nav class="-mb-px flex"${_scopeId}><a href="#nstp1" class="border-blue-500 text-blue-600 dark:text-blue-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link"${_scopeId}> NSTP 1 </a><a href="#nstp2" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link"${_scopeId}> NSTP 2 </a></nav></div><div id="nstp1" class="p-6 hidden"${_scopeId}><div class="flex flex-wrap gap-2 mb-6"${_scopeId}><div class="px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Pending:</span> ${ssrInterpolate(props.stats.nstp1.pending)}</div><div class="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Passed:</span> ${ssrInterpolate(props.stats.nstp1.passed)}</div><div class="px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Failed:</span> ${ssrInterpolate(props.stats.nstp1.failed)}</div>`);
            if (nstp1FailedStudents.value.length > 0) {
              _push2(`<div class="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Selected for Fail:</span> ${ssrInterpolate(nstp1FailedStudents.value.length)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"${_scopeId}><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Student Selection</h4><div class="space-y-2"${_scopeId}><button class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> Add Students to Failed List </button><button${ssrIncludeBooleanAttr(nstp1FailedStudents.value.length === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": nstp1FailedStudents.value.length === 0 }, "w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center"])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> View Selected (${ssrInterpolate(nstp1FailedStudents.value.length)}) </button></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Process Changes</h4><div class="space-y-2"${_scopeId}><button class="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg> Submit &amp; Process Students </button><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId}> Marks selected students as failed, all other pending students as passed. </p></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Advanced Actions</h4><div class="space-y-2"${_scopeId}><button${ssrIncludeBooleanAttr(props.stats.nstp1.failed === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": props.stats.nstp1.failed === 0 }, "w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center"])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> View Failed (${ssrInterpolate(props.stats.nstp1.failed)}) </button><button class="w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg> Reset All to Pending </button></div></div></div></div><div id="nstp2" class="p-6 hidden"${_scopeId}><div class="flex flex-wrap gap-2 mb-6"${_scopeId}><div class="px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Pending:</span> ${ssrInterpolate(props.stats.nstp2.pending)}</div><div class="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Passed:</span> ${ssrInterpolate(props.stats.nstp2.passed)}</div><div class="px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Failed:</span> ${ssrInterpolate(props.stats.nstp2.failed)}</div>`);
            if (nstp2FailedStudents.value.length > 0) {
              _push2(`<div class="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm"${_scopeId}><span class="font-semibold"${_scopeId}>Selected for Fail:</span> ${ssrInterpolate(nstp2FailedStudents.value.length)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"${_scopeId}><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Student Selection</h4><div class="space-y-2"${_scopeId}><button class="w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> Add Students to Failed List </button><button${ssrIncludeBooleanAttr(nstp2FailedStudents.value.length === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": nstp2FailedStudents.value.length === 0 }, "w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center"])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> View Selected (${ssrInterpolate(nstp2FailedStudents.value.length)}) </button></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Process Changes</h4><div class="space-y-2"${_scopeId}><button class="w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg> Submit &amp; Process Students </button><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId}> Marks selected students as failed, all other pending students as passed. </p></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Advanced Actions</h4><div class="space-y-2"${_scopeId}><button${ssrIncludeBooleanAttr(props.stats.nstp2.failed === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": props.stats.nstp2.failed === 0 }, "w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center"])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> View Failed (${ssrInterpolate(props.stats.nstp2.failed)}) </button><button class="w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg> Reset All to Pending </button></div></div></div></div></div></div></div>`);
            if (addStudentsModal.value) {
              _push2(`<div${_scopeId}><div class="fixed inset-0 flex items-center justify-center z-50"${_scopeId}><div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"${_scopeId}><div class="flex justify-between items-center mb-4"${_scopeId}><h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200"${_scopeId}> Add Students to Failed List (NSTP ${ssrInterpolate(modalType.value === "nstp1" ? "1" : "2")}) </h2><button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"${_scopeId}><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div><div class="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}><div${_scopeId}><label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>Search</label><input id="search"${ssrRenderAttr("value", unref(searchForm).search)} type="text" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full" placeholder="Name or Student ID"${_scopeId}></div><div${_scopeId}><label for="course_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>Course</label><select id="course_id" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).course_id) ? ssrLooseContain(unref(searchForm).course_id, "") : ssrLooseEqual(unref(searchForm).course_id, "")) ? " selected" : ""}${_scopeId}>All Courses</option><!--[-->`);
              ssrRenderList(props.courses, (course) => {
                _push2(`<option${ssrRenderAttr("value", course.id)}${_scopeId}>${ssrInterpolate(course.name)}</option>`);
              });
              _push2(`<!--]--></select></div><div${_scopeId}><label for="school_year" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>School Year</label><select id="school_year" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).school_year) ? ssrLooseContain(unref(searchForm).school_year, "") : ssrLooseEqual(unref(searchForm).school_year, "")) ? " selected" : ""}${_scopeId}>All Years</option><!--[-->`);
              ssrRenderList(props.graduationYears, (year) => {
                _push2(`<option${ssrRenderAttr("value", year)}${_scopeId}>${ssrInterpolate(year)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-gray-700"${_scopeId}><tr${_scopeId}><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}><input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"${_scopeId}></th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Student ID </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Course </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Status </th></tr></thead><tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
              ssrRenderList(searchResults.value, (student) => {
                _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-gray-700"${_scopeId}><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(Array.isArray(searchSelectedIds.value) ? ssrLooseContain(searchSelectedIds.value, student.id) : searchSelectedIds.value) ? " checked" : ""}${ssrRenderAttr("value", student.id)}${_scopeId}></td><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.student_id)}</td><td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"${ssrRenderAttr("title", `${student.last_name}, ${student.first_name} ${student.middle_name}`)}${_scopeId}>${ssrInterpolate(student.last_name)}, ${ssrInterpolate(student.first_name)} ${ssrInterpolate(student.middle_name)}</td><td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.course ? student.course.code : "")}</td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([getStatusClass(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status), "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId}>${ssrInterpolate(getStatusText(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status))}</span></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (searchResults.value.length === 0) {
                _push2(`<tr${_scopeId}><td colspan="5" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(searchForm).search || unref(searchForm).course_id || unref(searchForm).school_year ? "No pending students found matching your search criteria. Only students with PENDING status are shown." : "Enter search criteria to find students. Only students with PENDING status can be marked as failed.")}</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table></div><div class="flex justify-end mt-6 space-x-3"${_scopeId}><button class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(searchSelectedIds.value.length === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": searchSelectedIds.value.length === 0 }, "py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm"])}"${_scopeId}> Add ${ssrInterpolate(searchSelectedIds.value.length)} Selected Students </button></div></div></div><div class="fixed inset-0 bg-black opacity-50"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (failedStudentsModal.value) {
              _push2(`<div${_scopeId}><div class="fixed inset-0 flex items-center justify-center z-50"${_scopeId}><div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"${_scopeId}><div class="flex justify-between items-center mb-4"${_scopeId}><h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200"${_scopeId}> Students Selected to Fail (NSTP ${ssrInterpolate(modalType.value === "nstp1" ? "1" : "2")}) </h2><button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"${_scopeId}><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div><div class="overflow-x-auto"${_scopeId}><table class="w-full divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-gray-700"${_scopeId}><tr${_scopeId}><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Student ID </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Course </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Status </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Action </th></tr></thead><tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
              ssrRenderList(getDisplayStudents(), (student) => {
                _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-gray-700"${_scopeId}><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.student_id)}</td><td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"${ssrRenderAttr("title", `${student.last_name}, ${student.first_name} ${student.middle_name}`)}${_scopeId}>${ssrInterpolate(student.last_name)}, ${ssrInterpolate(student.first_name)} ${ssrInterpolate(student.middle_name)}</td><td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.course ? student.course.code : "")}</td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([getStatusClass(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status), "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId}>${ssrInterpolate(getStatusText(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status))}</span><span class="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"${_scopeId}> Will be marked as Failed </span></td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none"${_scopeId}> Remove </button></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (getDisplayStudents().length === 0) {
                _push2(`<tr${_scopeId}><td colspan="5" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400"${_scopeId}> No students selected to fail. Click &quot;Add Students&quot; to select students. </td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table></div><div class="flex justify-end mt-6 space-x-3"${_scopeId}><button class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"${_scopeId}> Close </button></div></div></div><div class="fixed inset-0 bg-black opacity-50"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6" }, [
                    createVNode("div", {
                      onClick: ($event) => showInstructions.value = !showInstructions.value,
                      class: "p-4 border-b border-gray-200 dark:border-gray-700 bg-purple-50 dark:bg-purple-900/20 cursor-pointer flex justify-between items-center"
                    }, [
                      createVNode("h3", { class: "text-lg font-medium text-purple-800 dark:text-purple-300" }, "NSTP Status Management Instructions"),
                      (openBlock(), createBlock("svg", {
                        class: ["h-5 w-5 text-purple-600 dark:text-purple-400 transform transition-transform duration-200", { "rotate-180": showInstructions.value }],
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          "clip-rule": "evenodd"
                        })
                      ], 2))
                    ], 8, ["onClick"]),
                    showInstructions.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-6 text-gray-700 dark:text-gray-300"
                    }, [
                      createVNode("ul", { class: "list-disc list-inside space-y-2" }, [
                        createVNode("li", null, "Use this page to manage students' NSTP 1 and NSTP 2 completion status."),
                        createVNode("li", null, [
                          createTextVNode("Switch between "),
                          createVNode("span", { class: "font-semibold" }, "NSTP 1"),
                          createTextVNode(" and "),
                          createVNode("span", { class: "font-semibold" }, "NSTP 2"),
                          createTextVNode(" tabs to manage each semester separately.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("The dashboard at the top shows the current statistics for "),
                          createVNode("span", { class: "font-semibold" }, "Pending"),
                          createTextVNode(", "),
                          createVNode("span", { class: "font-semibold" }, "Passed"),
                          createTextVNode(", and "),
                          createVNode("span", { class: "font-semibold" }, "Failed"),
                          createTextVNode(" students.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "Mark Students as Failed"),
                          createTextVNode(" button to select students who did not complete the requirements.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "Submit & Process"),
                          createTextVNode(" button to mark selected students as failed and all other pending students as passed.")
                        ]),
                        createVNode("li", null, "Filter the student list using the search box, course dropdown, or school year selection."),
                        createVNode("li", null, "Changes to NSTP status will affect students' eligibility for certificate generation."),
                        createVNode("li", null, [
                          createTextVNode("Use "),
                          createVNode("span", { class: "font-semibold" }, "Reset All to Pending"),
                          createTextVNode(" to clear all status values and start fresh for a semester.")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  message.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: [{
                      "bg-green-100 dark:bg-green-900/20 border-green-400 dark:border-green-800 text-green-700 dark:text-green-300": messageType.value === "success",
                      "bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-700 dark:text-red-300": messageType.value === "error"
                    }, "mb-6 p-4 border-l-4 rounded"]
                  }, toDisplayString(message.value), 3)) : createCommentVNode("", true),
                  props.showFailedFilter ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-4 mb-4 rounded-md shadow-sm bg-amber-50 text-amber-700 dark:bg-amber-900 dark:text-amber-200 flex justify-between items-center"
                  }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, "Filtered view:"),
                      createTextVNode(" Showing only failed students for NSTP " + toDisplayString(props.failedFilter === "nstp1" ? "1" : "2"), 1)
                    ]),
                    createVNode("button", {
                      onClick: clearFailedFilters,
                      class: "px-2 py-1 bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm"
                    }, " Clear Filter ")
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden" }, [
                    createVNode("div", { class: "border-b border-gray-200 dark:border-gray-700" }, [
                      createVNode("nav", { class: "-mb-px flex" }, [
                        createVNode("a", {
                          href: "#nstp1",
                          class: "border-blue-500 text-blue-600 dark:text-blue-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link",
                          onClick: ($event) => switchTab("nstp1")
                        }, " NSTP 1 ", 8, ["onClick"]),
                        createVNode("a", {
                          href: "#nstp2",
                          class: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm tab-link",
                          onClick: ($event) => switchTab("nstp2")
                        }, " NSTP 2 ", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", {
                      id: "nstp1",
                      class: "p-6 hidden"
                    }, [
                      createVNode("div", { class: "flex flex-wrap gap-2 mb-6" }, [
                        createVNode("div", { class: "px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Pending:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp1.pending), 1)
                        ]),
                        createVNode("div", { class: "px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Passed:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp1.passed), 1)
                        ]),
                        createVNode("div", { class: "px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Failed:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp1.failed), 1)
                        ]),
                        nstp1FailedStudents.value.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm"
                        }, [
                          createVNode("span", { class: "font-semibold" }, "Selected for Fail:"),
                          createTextVNode(" " + toDisplayString(nstp1FailedStudents.value.length), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, [
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Student Selection"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: ($event) => openAddStudentsModal("nstp1"),
                              class: "w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 4v16m8-8H4"
                                })
                              ])),
                              createTextVNode(" Add Students to Failed List ")
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => openFailedStudentsModal("nstp1"),
                              class: ["w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center", { "opacity-50 cursor-not-allowed": nstp1FailedStudents.value.length === 0 }],
                              disabled: nstp1FailedStudents.value.length === 0
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" View Selected (" + toDisplayString(nstp1FailedStudents.value.length) + ") ", 1)
                            ], 10, ["onClick", "disabled"])
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Process Changes"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: ($event) => submitFailed("nstp1"),
                              class: "w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M5 13l4 4L19 7"
                                })
                              ])),
                              createTextVNode(" Submit & Process Students ")
                            ], 8, ["onClick"]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, " Marks selected students as failed, all other pending students as passed. ")
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Advanced Actions"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: viewFailedNstp1Students,
                              class: ["w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center", { "opacity-50 cursor-not-allowed": props.stats.nstp1.failed === 0 }],
                              disabled: props.stats.nstp1.failed === 0
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" View Failed (" + toDisplayString(props.stats.nstp1.failed) + ") ", 1)
                            ], 10, ["disabled"]),
                            createVNode("button", {
                              onClick: confirmResetAllNstp1,
                              class: "w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                })
                              ])),
                              createTextVNode(" Reset All to Pending ")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      id: "nstp2",
                      class: "p-6 hidden"
                    }, [
                      createVNode("div", { class: "flex flex-wrap gap-2 mb-6" }, [
                        createVNode("div", { class: "px-4 py-2 bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Pending:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp2.pending), 1)
                        ]),
                        createVNode("div", { class: "px-4 py-2 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Passed:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp2.passed), 1)
                        ]),
                        createVNode("div", { class: "px-4 py-2 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-sm" }, [
                          createVNode("span", { class: "font-semibold" }, "Failed:"),
                          createTextVNode(" " + toDisplayString(props.stats.nstp2.failed), 1)
                        ]),
                        nstp2FailedStudents.value.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg shadow-sm"
                        }, [
                          createVNode("span", { class: "font-semibold" }, "Selected for Fail:"),
                          createTextVNode(" " + toDisplayString(nstp2FailedStudents.value.length), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, [
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Student Selection"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: ($event) => openAddStudentsModal("nstp2"),
                              class: "w-full py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 4v16m8-8H4"
                                })
                              ])),
                              createTextVNode(" Add Students to Failed List ")
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => openFailedStudentsModal("nstp2"),
                              class: ["w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm flex items-center justify-center", { "opacity-50 cursor-not-allowed": nstp2FailedStudents.value.length === 0 }],
                              disabled: nstp2FailedStudents.value.length === 0
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" View Selected (" + toDisplayString(nstp2FailedStudents.value.length) + ") ", 1)
                            ], 10, ["onClick", "disabled"])
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Process Changes"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: ($event) => submitFailed("nstp2"),
                              class: "w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M5 13l4 4L19 7"
                                })
                              ])),
                              createTextVNode(" Submit & Process Students ")
                            ], 8, ["onClick"]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, " Marks selected students as failed, all other pending students as passed. ")
                          ])
                        ]),
                        createVNode("div", { class: "bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" }, [
                          createVNode("h4", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Advanced Actions"),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("button", {
                              onClick: viewFailedNstp2Students,
                              class: ["w-full py-2 px-3 bg-amber-500 hover:bg-amber-700 text-white rounded text-sm flex items-center justify-center", { "opacity-50 cursor-not-allowed": props.stats.nstp2.failed === 0 }],
                              disabled: props.stats.nstp2.failed === 0
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" View Failed (" + toDisplayString(props.stats.nstp2.failed) + ") ", 1)
                            ], 10, ["disabled"]),
                            createVNode("button", {
                              onClick: confirmResetAllNstp2,
                              class: "w-full py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white rounded text-sm flex items-center justify-center"
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-4 w-4 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                })
                              ])),
                              createTextVNode(" Reset All to Pending ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              addStudentsModal.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "fixed inset-0 flex items-center justify-center z-50" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                      createVNode("h2", { class: "text-xl font-semibold text-gray-800 dark:text-gray-200" }, " Add Students to Failed List (NSTP " + toDisplayString(modalType.value === "nstp1" ? "1" : "2") + ") ", 1),
                      createVNode("button", {
                        onClick: ($event) => addStudentsModal.value = false,
                        class: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mb-6 grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "search",
                          class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        }, "Search"),
                        withDirectives(createVNode("input", {
                          id: "search",
                          "onUpdate:modelValue": ($event) => unref(searchForm).search = $event,
                          type: "text",
                          class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full",
                          placeholder: "Name or Student ID"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(searchForm).search]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "course_id",
                          class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        }, "Course"),
                        withDirectives(createVNode("select", {
                          id: "course_id",
                          "onUpdate:modelValue": ($event) => unref(searchForm).course_id = $event,
                          class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full"
                        }, [
                          createVNode("option", { value: "" }, "All Courses"),
                          (openBlock(true), createBlock(Fragment, null, renderList(props.courses, (course) => {
                            return openBlock(), createBlock("option", {
                              value: course.id,
                              key: course.id
                            }, toDisplayString(course.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(searchForm).course_id]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "school_year",
                          class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        }, "School Year"),
                        withDirectives(createVNode("select", {
                          id: "school_year",
                          "onUpdate:modelValue": ($event) => unref(searchForm).school_year = $event,
                          class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full"
                        }, [
                          createVNode("option", { value: "" }, "All Years"),
                          (openBlock(true), createBlock(Fragment, null, renderList(props.graduationYears, (year) => {
                            return openBlock(), createBlock("option", {
                              value: year,
                              key: year
                            }, toDisplayString(year), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(searchForm).school_year]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode("table", { class: "w-full divide-y divide-gray-200 dark:divide-gray-700" }, [
                        createVNode("thead", { class: "bg-gray-50 dark:bg-gray-700" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, [
                              createVNode("input", {
                                type: "checkbox",
                                class: "form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600",
                                onChange: ($event) => searchSelectedIds.value = $event.target.checked ? searchResults.value.map((s) => s.id) : []
                              }, null, 40, ["onChange"])
                            ]),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Student ID "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Name "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Course "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Status ")
                          ])
                        ]),
                        createVNode("tbody", { class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(searchResults.value, (student) => {
                            return openBlock(), createBlock("tr", {
                              key: `search-${student.id}`,
                              class: "hover:bg-gray-50 dark:hover:bg-gray-700"
                            }, [
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  class: "form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600",
                                  "onUpdate:modelValue": ($event) => searchSelectedIds.value = $event,
                                  value: student.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, searchSelectedIds.value]
                                ])
                              ]),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, toDisplayString(student.student_id), 1),
                              createVNode("td", {
                                class: "px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate",
                                title: `${student.last_name}, ${student.first_name} ${student.middle_name}`
                              }, toDisplayString(student.last_name) + ", " + toDisplayString(student.first_name) + " " + toDisplayString(student.middle_name), 9, ["title"]),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300" }, toDisplayString(student.course ? student.course.code : ""), 1),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [
                                createVNode("span", {
                                  class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", getStatusClass(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status)]
                                }, toDisplayString(getStatusText(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status)), 3)
                              ])
                            ]);
                          }), 128)),
                          searchResults.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "5",
                              class: "px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                            }, toDisplayString(unref(searchForm).search || unref(searchForm).course_id || unref(searchForm).school_year ? "No pending students found matching your search criteria. Only students with PENDING status are shown." : "Enter search criteria to find students. Only students with PENDING status can be marked as failed."), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end mt-6 space-x-3" }, [
                      createVNode("button", {
                        onClick: ($event) => addStudentsModal.value = false,
                        class: "py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"
                      }, " Cancel ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: addSelectedStudents,
                        class: ["py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm", { "opacity-50 cursor-not-allowed": searchSelectedIds.value.length === 0 }],
                        disabled: searchSelectedIds.value.length === 0
                      }, " Add " + toDisplayString(searchSelectedIds.value.length) + " Selected Students ", 11, ["disabled"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "fixed inset-0 bg-black opacity-50" })
              ])) : createCommentVNode("", true),
              failedStudentsModal.value ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "fixed inset-0 flex items-center justify-center z-50" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                      createVNode("h2", { class: "text-xl font-semibold text-gray-800 dark:text-gray-200" }, " Students Selected to Fail (NSTP " + toDisplayString(modalType.value === "nstp1" ? "1" : "2") + ") ", 1),
                      createVNode("button", {
                        onClick: ($event) => failedStudentsModal.value = false,
                        class: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode("table", { class: "w-full divide-y divide-gray-200 dark:divide-gray-700" }, [
                        createVNode("thead", { class: "bg-gray-50 dark:bg-gray-700" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Student ID "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Name "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Course "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Status "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Action ")
                          ])
                        ]),
                        createVNode("tbody", { class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(getDisplayStudents(), (student) => {
                            return openBlock(), createBlock("tr", {
                              key: `selected-${student.id}`,
                              class: "hover:bg-gray-50 dark:hover:bg-gray-700"
                            }, [
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, toDisplayString(student.student_id), 1),
                              createVNode("td", {
                                class: "px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate",
                                title: `${student.last_name}, ${student.first_name} ${student.middle_name}`
                              }, toDisplayString(student.last_name) + ", " + toDisplayString(student.first_name) + " " + toDisplayString(student.middle_name), 9, ["title"]),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300" }, toDisplayString(student.course ? student.course.code : ""), 1),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [
                                createVNode("span", {
                                  class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", getStatusClass(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status)]
                                }, toDisplayString(getStatusText(modalType.value === "nstp1" ? student.first_sem_status : student.second_sem_status)), 3),
                                createVNode("span", { class: "ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" }, " Will be marked as Failed ")
                              ]),
                              createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [
                                createVNode("button", {
                                  onClick: ($event) => removeStudent(student.id),
                                  class: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none"
                                }, " Remove ", 8, ["onClick"])
                              ])
                            ]);
                          }), 128)),
                          getDisplayStudents().length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "5",
                              class: "px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                            }, ' No students selected to fail. Click "Add Students" to select students. ')
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end mt-6 space-x-3" }, [
                      createVNode("button", {
                        onClick: ($event) => failedStudentsModal.value = false,
                        class: "py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"
                      }, " Close ", 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "fixed inset-0 bg-black opacity-50" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/NstpStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
