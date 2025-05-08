import { resolveComponent, mergeProps, useSSRContext, ref, watch, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, withKeys, vModelText, withModifiers, Fragment, renderList, vModelSelect, vModelCheckbox } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./AuthenticatedLayout-nxojOztp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { F as FileUploadIcon } from "./FileUploadIcon-BxHwe3uN.js";
import { S as SelectAllIcon } from "./SelectAllIcon-D1yH4S4d.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./InputLabel-Dqwdm5HF.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import axios from "axios";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-pencil" }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/EditIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const EditIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-trash" }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/DeleteIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DeleteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-eye" }, _attrs), null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ShowIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ShowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-download" }, _attrs), null, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/DownloadIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DownloadIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-plus" }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/PlusIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PlusIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-filter" }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/FilterIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FilterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: {
      type: Array,
      default: []
    },
    students: {
      type: Object,
      default: () => ({
        data: [],
        links: [],
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          links: [],
          path: "",
          per_page: 15,
          to: 1,
          total: 0
        }
      })
    },
    pagination: {
      type: Object,
      default: () => ({
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        total: 0,
        per_page: 15,
        links: []
      })
    },
    graduationYears: {
      type: Array,
      default: []
    },
    filters: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const isUploading = ref(false);
    const props = __props;
    const downloadCertificateForm = useForm({
      student_ids: [],
      certificate_date: null
    });
    const viewModal = ref(false);
    const currentStudent = ref(null);
    const showSidebar = ref(false);
    const viewStudent = (student) => {
      currentStudent.value = student;
      viewModal.value = true;
    };
    const downloadCertificate = () => {
      if (downloadCertificateForm.student_ids.length === 0) {
        alert("Please select students to download certificate.");
        return;
      }
      certificateModal.value = true;
    };
    const certificateModal = ref(false);
    const toggleSelectAll = ref(false);
    const showFilters = ref(false);
    const selectAll = async () => {
      if (toggleSelectAll.value) {
        downloadCertificateForm.student_ids = [];
      } else {
        try {
          const loadingNotification = document.createElement("div");
          loadingNotification.className = "fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50";
          loadingNotification.textContent = "Loading all student IDs...";
          document.body.appendChild(loadingNotification);
          const params = {
            search: searchForm.search,
            course_id: searchForm.course_id,
            school_year: searchForm.school_year,
            nstp1_status: searchForm.nstp1_status,
            nstp2_status: searchForm.nstp2_status
          };
          const response = await axios.get(route("students.all-ids", params));
          downloadCertificateForm.student_ids = response.data.student_ids;
          if (document.body.contains(loadingNotification)) {
            document.body.removeChild(loadingNotification);
          }
          const successNotification = document.createElement("div");
          successNotification.className = "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50";
          successNotification.textContent = `Selected ${response.data.total} students across all pages`;
          document.body.appendChild(successNotification);
          setTimeout(() => {
            if (document.body.contains(successNotification)) {
              document.body.removeChild(successNotification);
            }
          }, 3e3);
        } catch (error) {
          console.error("Error fetching all student IDs:", error);
          const errorNotification = document.createElement("div");
          errorNotification.className = "fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50";
          errorNotification.textContent = "Failed to select all students. Please try again.";
          document.body.appendChild(errorNotification);
          setTimeout(() => {
            if (document.body.contains(errorNotification)) {
              document.body.removeChild(errorNotification);
            }
          }, 3e3);
          downloadCertificateForm.student_ids = props.students.data ? props.students.data.map(
            (student) => student.id
          ) : [];
        }
      }
      toggleSelectAll.value = !toggleSelectAll.value;
    };
    const searchForm = useForm({
      search: props.filters.search || "",
      course_id: props.filters.course_id || "",
      school_year: props.filters.school_year || "",
      nstp1_status: props.filters.nstp1_status || "",
      nstp2_status: props.filters.nstp2_status || ""
    });
    watch(() => searchForm.course_id, (value) => {
      if (value !== "") {
        submitSearch();
      }
    });
    watch(() => searchForm.school_year, (value) => {
      if (value !== "") {
        submitSearch();
      }
    });
    watch(() => searchForm.nstp1_status, (value) => {
      if (value !== "") {
        submitSearch();
      }
    });
    watch(() => searchForm.nstp2_status, (value) => {
      if (value !== "") {
        submitSearch();
      }
    });
    const submitSearch = () => {
      searchForm.get(route("students.index"), {
        onStart: () => {
          searchForm.processing = true;
        },
        onFinish: () => {
          searchForm.processing = false;
        },
        preserveState: true,
        preserveScroll: true
      });
    };
    const clearFilters = () => {
      searchForm.search = "";
      searchForm.course_id = "";
      searchForm.school_year = "";
      searchForm.nstp1_status = "";
      searchForm.nstp2_status = "";
      submitSearch();
    };
    const form = useForm({});
    const deleteStudent = (studentId) => {
      if (confirm("Are you sure you want to delete this student?")) {
        form.delete(`/students/${studentId}`);
      }
    };
    const refreshData = () => {
      const notification = document.createElement("div");
      notification.className = "fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50";
      notification.textContent = "Refreshing NSTP status data...";
      document.body.appendChild(notification);
      const currentUrl = window.location.pathname + window.location.search;
      const separator = currentUrl.includes("?") ? "&" : "?";
      const jsonUrl = `${currentUrl}${separator}format=json`;
      axios.get(jsonUrl).then((response) => {
        if (response.data.students && response.data.students.data) {
          props.students.data = [...response.data.students.data];
          if (response.data.pagination) {
            Object.assign(props.pagination, response.data.pagination);
          }
          notification.className = "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50";
          notification.textContent = "NSTP status data successfully refreshed!";
          setTimeout(() => {
            if (document.body.contains(notification)) {
              document.body.removeChild(notification);
            }
          }, 3e3);
        }
      }).catch((error) => {
        console.error("Error refreshing data:", error);
        notification.className = "fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50";
        notification.textContent = "Failed to refresh data. Try reloading the page.";
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 5e3);
      });
    };
    const showInstructions = ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Students </h2><div class="flex gap-2 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("students.upload"),
              class: "py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md flex items-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(FileUploadIcon, { class: "h-5 w-5 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Batch Upload `);
                } else {
                  return [
                    createVNode(FileUploadIcon, { class: "h-5 w-5 mr-2" }),
                    createTextVNode(" Batch Upload ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="md:hidden px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"${_scopeId}></path></svg></button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Students "),
                createVNode("div", { class: "flex gap-2 items-center" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("students.upload"),
                    class: "py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md flex items-center justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(FileUploadIcon, { class: "h-5 w-5 mr-2" }),
                      createTextVNode(" Batch Upload ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode("button", {
                    onClick: ($event) => showSidebar.value = !showSidebar.value,
                    class: "md:hidden px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4 6h16M4 12h16M4 18h16"
                      })
                    ]))
                  ], 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isUploading.value) {
              _push2(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"${_scopeId}><div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center"${_scopeId}><div class="relative w-16 h-16"${_scopeId}><svg class="w-full h-full" viewBox="0 0 100 100"${_scopeId}><circle class="stroke-blue-500" cx="50" cy="50" r="40" fill="none" stroke-width="3" stroke-dasharray="251" stroke-dashoffset="75"${_scopeId}><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite"${_scopeId}></animateTransform></circle></svg></div><p class="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3"${_scopeId}>Generating Certificates</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20 cursor-pointer flex justify-between items-center"${_scopeId}><h3 class="text-lg font-medium text-blue-800 dark:text-blue-300"${_scopeId}>Student Management Instructions</h3><svg class="${ssrRenderClass([{ "rotate-180": showInstructions.value }, "h-5 w-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-200"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
            if (showInstructions.value) {
              _push2(`<div class="p-6 text-gray-700 dark:text-gray-300"${_scopeId}><ul class="list-disc list-inside space-y-2"${_scopeId}><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>Batch Upload</span> button above to upload multiple students at once using a CSV or Excel file.</li><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>search box</span> to filter students by name.</li><li${_scopeId}>Filter students by <span class="font-semibold"${_scopeId}>course</span>, <span class="font-semibold"${_scopeId}>school year</span>, or <span class="font-semibold"${_scopeId}>NSTP status</span>.</li><li${_scopeId}>Click the <span class="font-semibold"${_scopeId}>Add Student</span> button to register new students.</li><li${_scopeId}>Select multiple students and use the <span class="font-semibold"${_scopeId}>Download Certificate</span> button to generate certificates for students who have passed both NSTP 1 and NSTP 2.</li><li${_scopeId}>Click on <span class="font-semibold"${_scopeId}>View</span> (eye icon) to see complete student details.</li><li${_scopeId}>Click on <span class="font-semibold"${_scopeId}>Edit</span> (pencil icon) to modify student information.</li><li${_scopeId}>Click on <span class="font-semibold"${_scopeId}>Delete</span> (trash icon) to remove a student from the system.</li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col md:flex-row gap-4"${_scopeId}><div class="${ssrRenderClass([["md:block transition-all duration-300 ease-in-out", showSidebar.value ? "block" : "hidden"], "md:w-64 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden"])}"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-lg font-medium text-gray-800 dark:text-gray-200"${_scopeId}>Actions</h3></div><div class="p-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("students.create"),
              class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(PlusIcon, { class: "h-5 w-5 mr-3 text-blue-500" }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Add Student</span>`);
                } else {
                  return [
                    createVNode(PlusIcon, { class: "h-5 w-5 mr-3 text-blue-500" }),
                    createVNode("span", null, "Add Student")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("students.upload"),
              class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(FileUploadIcon, { class: "h-5 w-5 mr-3 text-green-500" }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Upload Students</span>`);
                } else {
                  return [
                    createVNode(FileUploadIcon, { class: "h-5 w-5 mr-3 text-green-500" }),
                    createVNode("span", null, "Upload Students")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("nstp.status"),
              class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"${_scopeId2}></path></svg><span${_scopeId2}>NSTP Status</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-3 text-purple-500",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      })
                    ])),
                    createVNode("span", null, "NSTP Status")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="w-full flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg><span${_scopeId}>Refresh NSTP Status</span></button></div><div class="p-4 border-t border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3"${_scopeId}>Certificate Actions</h3><button class="w-full mb-2 py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-sm flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(SelectAllIcon, { class: "h-4 w-4 mr-2" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(toggleSelectAll.value ? "Deselect All" : "Select All")}</span></button><button${ssrIncludeBooleanAttr(unref(downloadCertificateForm).student_ids.length === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": unref(downloadCertificateForm).student_ids.length === 0 }, "w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded-md text-sm flex items-center justify-center"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(DownloadIcon, { class: "h-4 w-4 mr-2" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Download Certificate</span></button>`);
            if (__props.students.data.length > 0 && __props.pagination) {
              _push2(`<div class="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(unref(downloadCertificateForm).student_ids.length)}</span> of <span class="font-medium"${_scopeId}>${ssrInterpolate(__props.pagination.total)}</span> selected </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex-grow"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4"${_scopeId}><div class="p-4"${_scopeId}><div class="flex flex-col sm:flex-row items-stretch gap-4"${_scopeId}><div class="relative flex-grow"${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></div><input id="search" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full pl-10" type="text" name="search" placeholder="Search students by name..."${ssrRenderAttr("value", unref(searchForm).search)}${_scopeId}></div><button class="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(FilterIcon, { class: "h-4 w-4 mr-2" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(showFilters.value ? "Hide Filters" : "Filters")}</span>`);
            if (unref(searchForm).course_id || unref(searchForm).school_year || unref(searchForm).nstp1_status || unref(searchForm).nstp2_status) {
              _push2(`<span class="ml-2 bg-white text-indigo-700 px-1.5 py-0.5 rounded-full text-xs font-medium"${_scopeId}>${ssrInterpolate((unref(searchForm).course_id ? 1 : 0) + (unref(searchForm).school_year ? 1 : 0) + (unref(searchForm).nstp1_status ? 1 : 0) + (unref(searchForm).nstp2_status ? 1 : 0))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div>`);
            if (showFilters.value) {
              _push2(`<div class="mt-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-md"${_scopeId}><form method="POST"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                for: "course",
                value: "Course/Program",
                class: "text-gray-700 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`<select id="course" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="course_id"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).course_id) ? ssrLooseContain(unref(searchForm).course_id, "") : ssrLooseEqual(unref(searchForm).course_id, "")) ? " selected" : ""}${_scopeId}>All Courses</option><!--[-->`);
              ssrRenderList(__props.courses, (course) => {
                _push2(`<option${ssrRenderAttr("value", course.id)}${_scopeId}>${ssrInterpolate(course.name)}</option>`);
              });
              _push2(`<!--]--></select></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                for: "school_year",
                value: "School Year",
                class: "text-gray-700 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`<select id="school_year" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="school_year"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).school_year) ? ssrLooseContain(unref(searchForm).school_year, "") : ssrLooseEqual(unref(searchForm).school_year, "")) ? " selected" : ""}${_scopeId}>All Years</option><!--[-->`);
              ssrRenderList(__props.graduationYears, (gy) => {
                _push2(`<option${ssrRenderAttr("value", gy)}${_scopeId}>${ssrInterpolate(gy)}</option>`);
              });
              _push2(`<!--]--></select></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                for: "nstp1_status",
                value: "NSTP 1 Status",
                class: "text-gray-700 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`<select id="nstp1_status" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="nstp1_status"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp1_status) ? ssrLooseContain(unref(searchForm).nstp1_status, "") : ssrLooseEqual(unref(searchForm).nstp1_status, "")) ? " selected" : ""}${_scopeId}>All Statuses</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp1_status) ? ssrLooseContain(unref(searchForm).nstp1_status, "1") : ssrLooseEqual(unref(searchForm).nstp1_status, "1")) ? " selected" : ""}${_scopeId}>Passed</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp1_status) ? ssrLooseContain(unref(searchForm).nstp1_status, "0") : ssrLooseEqual(unref(searchForm).nstp1_status, "0")) ? " selected" : ""}${_scopeId}>Failed</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp1_status) ? ssrLooseContain(unref(searchForm).nstp1_status, "2") : ssrLooseEqual(unref(searchForm).nstp1_status, "2")) ? " selected" : ""}${_scopeId}>Pending</option></select></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                for: "nstp2_status",
                value: "NSTP 2 Status",
                class: "text-gray-700 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(`<select id="nstp2_status" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="nstp2_status"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp2_status) ? ssrLooseContain(unref(searchForm).nstp2_status, "") : ssrLooseEqual(unref(searchForm).nstp2_status, "")) ? " selected" : ""}${_scopeId}>All Statuses</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp2_status) ? ssrLooseContain(unref(searchForm).nstp2_status, "1") : ssrLooseEqual(unref(searchForm).nstp2_status, "1")) ? " selected" : ""}${_scopeId}>Passed</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp2_status) ? ssrLooseContain(unref(searchForm).nstp2_status, "0") : ssrLooseEqual(unref(searchForm).nstp2_status, "0")) ? " selected" : ""}${_scopeId}>Failed</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).nstp2_status) ? ssrLooseContain(unref(searchForm).nstp2_status, "2") : ssrLooseEqual(unref(searchForm).nstp2_status, "2")) ? " selected" : ""}${_scopeId}>Pending</option></select></div></div><div class="flex justify-end"${_scopeId}><button type="button" class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded flex items-center mr-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg> Clear Filters </button><button type="submit" class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> Apply Filters </button></div></form></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="overflow-x-auto"${_scopeId}>`);
            if (!unref(searchForm).processing) {
              _push2(`<table class="w-full divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-gray-700"${_scopeId}><tr${_scopeId}><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}><span class="sr-only"${_scopeId}>Select</span></th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Seq. No. </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Course </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> NSTP Type </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> School Year </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> NSTP 1 </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> NSTP 2 </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Certificate </th><th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
              ssrRenderList(__props.students.data, (student) => {
                _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-gray-700"${_scopeId}><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(Array.isArray(unref(downloadCertificateForm).student_ids) ? ssrLooseContain(unref(downloadCertificateForm).student_ids, student.id) : unref(downloadCertificateForm).student_ids) ? " checked" : ""}${ssrRenderAttr("value", student.id)}${_scopeId}></td><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.seq_no)}</td><td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate"${ssrRenderAttr("title", student.last_name + ", " + student.first_name + " " + student.middle_name)}${_scopeId}>${ssrInterpolate(student.last_name + ", " + student.first_name + " " + student.middle_name)}</td><td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.course ? student.course.code : "")}</td><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.enrollment_type)}</td><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(student.enrollment_year)}</td><td class="px-4 py-3 whitespace-nowrap text-xs"${_scopeId}><span class="${ssrRenderClass([
                  "px-2 py-1 text-xs font-medium rounded-full",
                  student.first_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : student.first_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                ])}"${_scopeId}>${ssrInterpolate(student.first_sem_status === 1 ? "Passed" : student.first_sem_status === 0 ? "Failed" : "Pending")}</span></td><td class="px-4 py-3 whitespace-nowrap text-xs"${_scopeId}><span class="${ssrRenderClass([
                  "px-2 py-1 text-xs font-medium rounded-full",
                  student.second_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : student.second_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                ])}"${_scopeId}>${ssrInterpolate(student.second_sem_status === 1 ? "Passed" : student.second_sem_status === 0 ? "Failed" : "Pending")}</span></td><td class="px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300"${_scopeId}>`);
                if (student.certificate_printed_at) {
                  _push2(`<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"${ssrRenderAttr("title", `Printed on ${new Date(student.certificate_printed_at).toLocaleString()} by ${student.certificate_printed_by}`)}${_scopeId}> Printed </span>`);
                } else {
                  _push2(`<span class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full"${_scopeId}> Not Printed </span>`);
                }
                _push2(`</td><td class="px-4 py-3 whitespace-nowrap text-sm space-x-2"${_scopeId}><button class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"${_scopeId}>`);
                _push2(ssrRenderComponent(ShowIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</button><a${ssrRenderAttr("href", `/students/${student.id}/edit`)} class="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"${_scopeId}>`);
                _push2(ssrRenderComponent(EditIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</a><a href="#" class="text-red-400 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"${_scopeId}>`);
                _push2(ssrRenderComponent(DeleteIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</a></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (__props.students.data.length === 0) {
                _push2(`<tr${_scopeId}><td colspan="11" class="px-4 py-6 text-center text-gray-500 dark:text-gray-400"${_scopeId}> No students found. Please try a different search. </td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else {
              _push2(`<div class="my-4 text-center text-xl text-gray-800 dark:text-gray-200"${_scopeId}> Please wait... </div>`);
            }
            _push2(`</div><div class="p-4 border-t border-gray-200 dark:border-gray-700"${_scopeId}>`);
            if (__props.pagination && __props.pagination.last_page > 1) {
              _push2(`<div class="flex flex-col sm:flex-row justify-between items-center"${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0"${_scopeId}> Showing <span class="font-medium"${_scopeId}>${ssrInterpolate(__props.pagination.from)}</span> to <span class="font-medium"${_scopeId}>${ssrInterpolate(__props.pagination.to)}</span> of <span class="font-medium"${_scopeId}>${ssrInterpolate(__props.pagination.total)}</span> results </p><nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination"${_scopeId}>`);
              if (__props.pagination.current_page > 1) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("students.index", { ..._ctx.route().params, page: __props.pagination.current_page - 1 }),
                  class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only"${_scopeId2}>Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        createVNode("span", { class: "sr-only" }, "Previous"),
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed"${_scopeId}><span class="sr-only"${_scopeId}>Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg></span>`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(__props.pagination.last_page, (page) => {
                _push2(`<!--[-->`);
                if (page === 1 || page === __props.pagination.last_page || page >= __props.pagination.current_page - 1 && page <= __props.pagination.current_page + 1) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("students.index", { ..._ctx.route().params, page }),
                    class: [
                      "relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-150",
                      page === __props.pagination.current_page ? "z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-200" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    ]
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(page)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(page), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else if (page === 2 && __props.pagination.current_page > 3 || page === __props.pagination.last_page - 1 && __props.pagination.current_page < __props.pagination.last_page - 2) {
                  _push2(`<span class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> ... </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
              if (__props.pagination.current_page < __props.pagination.last_page) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("students.index", { ..._ctx.route().params, page: __props.pagination.current_page + 1 }),
                  class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only"${_scopeId2}>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        createVNode("span", { class: "sr-only" }, "Next"),
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed"${_scopeId}><span class="sr-only"${_scopeId}>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg></span>`);
              }
              _push2(`</nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              isUploading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
              }, [
                createVNode("div", { class: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center" }, [
                  createVNode("div", { class: "relative w-16 h-16" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-full h-full",
                      viewBox: "0 0 100 100"
                    }, [
                      createVNode("circle", {
                        class: "stroke-blue-500",
                        cx: "50",
                        cy: "50",
                        r: "40",
                        fill: "none",
                        "stroke-width": "3",
                        "stroke-dasharray": "251",
                        "stroke-dashoffset": "75"
                      }, [
                        createVNode("animateTransform", {
                          attributeName: "transform",
                          type: "rotate",
                          from: "0 50 50",
                          to: "360 50 50",
                          dur: "1.5s",
                          repeatCount: "indefinite"
                        })
                      ])
                    ]))
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mt-3" }, "Generating Certificates")
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6" }, [
                    createVNode("div", {
                      onClick: ($event) => showInstructions.value = !showInstructions.value,
                      class: "p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20 cursor-pointer flex justify-between items-center"
                    }, [
                      createVNode("h3", { class: "text-lg font-medium text-blue-800 dark:text-blue-300" }, "Student Management Instructions"),
                      (openBlock(), createBlock("svg", {
                        class: ["h-5 w-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-200", { "rotate-180": showInstructions.value }],
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
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "Batch Upload"),
                          createTextVNode(" button above to upload multiple students at once using a CSV or Excel file.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "search box"),
                          createTextVNode(" to filter students by name.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Filter students by "),
                          createVNode("span", { class: "font-semibold" }, "course"),
                          createTextVNode(", "),
                          createVNode("span", { class: "font-semibold" }, "school year"),
                          createTextVNode(", or "),
                          createVNode("span", { class: "font-semibold" }, "NSTP status"),
                          createTextVNode(".")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Click the "),
                          createVNode("span", { class: "font-semibold" }, "Add Student"),
                          createTextVNode(" button to register new students.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Select multiple students and use the "),
                          createVNode("span", { class: "font-semibold" }, "Download Certificate"),
                          createTextVNode(" button to generate certificates for students who have passed both NSTP 1 and NSTP 2.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Click on "),
                          createVNode("span", { class: "font-semibold" }, "View"),
                          createTextVNode(" (eye icon) to see complete student details.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Click on "),
                          createVNode("span", { class: "font-semibold" }, "Edit"),
                          createTextVNode(" (pencil icon) to modify student information.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Click on "),
                          createVNode("span", { class: "font-semibold" }, "Delete"),
                          createTextVNode(" (trash icon) to remove a student from the system.")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-4" }, [
                    createVNode("div", {
                      class: [["md:block transition-all duration-300 ease-in-out", showSidebar.value ? "block" : "hidden"], "md:w-64 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden"]
                    }, [
                      createVNode("div", { class: "p-4 border-b border-gray-200 dark:border-gray-700" }, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-800 dark:text-gray-200" }, "Actions")
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("students.create"),
                          class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        }, {
                          default: withCtx(() => [
                            createVNode(PlusIcon, { class: "h-5 w-5 mr-3 text-blue-500" }),
                            createVNode("span", null, "Add Student")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("students.upload"),
                          class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        }, {
                          default: withCtx(() => [
                            createVNode(FileUploadIcon, { class: "h-5 w-5 mr-3 text-green-500" }),
                            createVNode("span", null, "Upload Students")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("nstp.status"),
                          class: "flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 mr-3 text-purple-500",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              })
                            ])),
                            createVNode("span", null, "NSTP Status")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("button", {
                          onClick: ($event) => refreshData(),
                          class: "w-full flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-3 text-indigo-500",
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
                          createVNode("span", null, "Refresh NSTP Status")
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "p-4 border-t border-gray-200 dark:border-gray-700" }, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-800 dark:text-gray-200 mb-3" }, "Certificate Actions"),
                        createVNode("button", {
                          class: "w-full mb-2 py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-sm flex items-center justify-center",
                          onClick: selectAll
                        }, [
                          createVNode(SelectAllIcon, { class: "h-4 w-4 mr-2" }),
                          createVNode("span", null, toDisplayString(toggleSelectAll.value ? "Deselect All" : "Select All"), 1)
                        ]),
                        createVNode("button", {
                          onClick: downloadCertificate,
                          disabled: unref(downloadCertificateForm).student_ids.length === 0,
                          class: [{ "opacity-50 cursor-not-allowed": unref(downloadCertificateForm).student_ids.length === 0 }, "w-full py-2 px-3 bg-green-500 hover:bg-green-700 text-white rounded-md text-sm flex items-center justify-center"]
                        }, [
                          createVNode(DownloadIcon, { class: "h-4 w-4 mr-2" }),
                          createVNode("span", null, "Download Certificate")
                        ], 10, ["disabled"]),
                        __props.students.data.length > 0 && __props.pagination ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-3 text-sm text-gray-600 dark:text-gray-400 text-center"
                        }, [
                          createVNode("span", { class: "font-medium" }, toDisplayString(unref(downloadCertificateForm).student_ids.length), 1),
                          createTextVNode(" of "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.pagination.total), 1),
                          createTextVNode(" selected ")
                        ])) : createCommentVNode("", true)
                      ])
                    ], 2),
                    createVNode("div", { class: "flex-grow" }, [
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4" }, [
                        createVNode("div", { class: "p-4" }, [
                          createVNode("div", { class: "flex flex-col sm:flex-row items-stretch gap-4" }, [
                            createVNode("div", { class: "relative flex-grow" }, [
                              createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-5 w-5 text-gray-400 dark:text-gray-600",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  })
                                ]))
                              ]),
                              withDirectives(createVNode("input", {
                                id: "search",
                                class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block w-full pl-10",
                                type: "text",
                                name: "search",
                                placeholder: "Search students by name...",
                                "onUpdate:modelValue": ($event) => unref(searchForm).search = $event,
                                onKeyup: withKeys(submitSearch, ["enter"])
                              }, null, 40, ["onUpdate:modelValue"]), [
                                [vModelText, unref(searchForm).search]
                              ])
                            ]),
                            createVNode("button", {
                              onClick: ($event) => showFilters.value = !showFilters.value,
                              class: "py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center"
                            }, [
                              createVNode(FilterIcon, { class: "h-4 w-4 mr-2" }),
                              createVNode("span", null, toDisplayString(showFilters.value ? "Hide Filters" : "Filters"), 1),
                              unref(searchForm).course_id || unref(searchForm).school_year || unref(searchForm).nstp1_status || unref(searchForm).nstp2_status ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "ml-2 bg-white text-indigo-700 px-1.5 py-0.5 rounded-full text-xs font-medium"
                              }, toDisplayString((unref(searchForm).course_id ? 1 : 0) + (unref(searchForm).school_year ? 1 : 0) + (unref(searchForm).nstp1_status ? 1 : 0) + (unref(searchForm).nstp2_status ? 1 : 0)), 1)) : createCommentVNode("", true)
                            ], 8, ["onClick"])
                          ]),
                          showFilters.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-md"
                          }, [
                            createVNode("form", {
                              onSubmit: withModifiers(submitSearch, ["prevent"]),
                              method: "POST"
                            }, [
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-4" }, [
                                createVNode("div", null, [
                                  createVNode(_sfc_main$8, {
                                    for: "course",
                                    value: "Course/Program",
                                    class: "text-gray-700 dark:text-gray-300"
                                  }),
                                  withDirectives(createVNode("select", {
                                    id: "course",
                                    class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                                    name: "course_id",
                                    "onUpdate:modelValue": ($event) => unref(searchForm).course_id = $event
                                  }, [
                                    createVNode("option", { value: "" }, "All Courses"),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
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
                                  createVNode(_sfc_main$8, {
                                    for: "school_year",
                                    value: "School Year",
                                    class: "text-gray-700 dark:text-gray-300"
                                  }),
                                  withDirectives(createVNode("select", {
                                    id: "school_year",
                                    class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                                    name: "school_year",
                                    "onUpdate:modelValue": ($event) => unref(searchForm).school_year = $event
                                  }, [
                                    createVNode("option", { value: "" }, "All Years"),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.graduationYears, (gy) => {
                                      return openBlock(), createBlock("option", {
                                        key: gy,
                                        value: gy
                                      }, toDisplayString(gy), 9, ["value"]);
                                    }), 128))
                                  ], 8, ["onUpdate:modelValue"]), [
                                    [vModelSelect, unref(searchForm).school_year]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_sfc_main$8, {
                                    for: "nstp1_status",
                                    value: "NSTP 1 Status",
                                    class: "text-gray-700 dark:text-gray-300"
                                  }),
                                  withDirectives(createVNode("select", {
                                    id: "nstp1_status",
                                    class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                                    name: "nstp1_status",
                                    "onUpdate:modelValue": ($event) => unref(searchForm).nstp1_status = $event
                                  }, [
                                    createVNode("option", { value: "" }, "All Statuses"),
                                    createVNode("option", { value: "1" }, "Passed"),
                                    createVNode("option", { value: "0" }, "Failed"),
                                    createVNode("option", { value: "2" }, "Pending")
                                  ], 8, ["onUpdate:modelValue"]), [
                                    [vModelSelect, unref(searchForm).nstp1_status]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_sfc_main$8, {
                                    for: "nstp2_status",
                                    value: "NSTP 2 Status",
                                    class: "text-gray-700 dark:text-gray-300"
                                  }),
                                  withDirectives(createVNode("select", {
                                    id: "nstp2_status",
                                    class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                                    name: "nstp2_status",
                                    "onUpdate:modelValue": ($event) => unref(searchForm).nstp2_status = $event
                                  }, [
                                    createVNode("option", { value: "" }, "All Statuses"),
                                    createVNode("option", { value: "1" }, "Passed"),
                                    createVNode("option", { value: "0" }, "Failed"),
                                    createVNode("option", { value: "2" }, "Pending")
                                  ], 8, ["onUpdate:modelValue"]), [
                                    [vModelSelect, unref(searchForm).nstp2_status]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "flex justify-end" }, [
                                createVNode("button", {
                                  type: "button",
                                  onClick: clearFilters,
                                  class: "py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded flex items-center mr-2"
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
                                      d: "M6 18L18 6M6 6l12 12"
                                    })
                                  ])),
                                  createTextVNode(" Clear Filters ")
                                ]),
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded flex items-center"
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
                                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                  ])),
                                  createTextVNode(" Apply Filters ")
                                ])
                              ])
                            ], 32)
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "overflow-x-auto" }, [
                          !unref(searchForm).processing ? (openBlock(), createBlock("table", {
                            key: 0,
                            class: "w-full divide-y divide-gray-200 dark:divide-gray-700"
                          }, [
                            createVNode("thead", { class: "bg-gray-50 dark:bg-gray-700" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, [
                                  createVNode("span", { class: "sr-only" }, "Select")
                                ]),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " Seq. No. "),
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
                                }, " NSTP Type "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " School Year "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " NSTP 1 "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " NSTP 2 "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " Certificate "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                }, " Actions ")
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (student) => {
                                return openBlock(), createBlock("tr", {
                                  key: student.id,
                                  class: "hover:bg-gray-50 dark:hover:bg-gray-700"
                                }, [
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [
                                    withDirectives(createVNode("input", {
                                      type: "checkbox",
                                      class: "form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded dark:bg-gray-700 dark:border-gray-600",
                                      "onUpdate:modelValue": ($event) => unref(downloadCertificateForm).student_ids = $event,
                                      value: student.id
                                    }, null, 8, ["onUpdate:modelValue", "value"]), [
                                      [vModelCheckbox, unref(downloadCertificateForm).student_ids]
                                    ])
                                  ]),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, toDisplayString(student.seq_no), 1),
                                  createVNode("td", {
                                    class: "px-4 py-3 text-sm text-gray-900 dark:text-gray-300 max-w-[200px] truncate",
                                    title: student.last_name + ", " + student.first_name + " " + student.middle_name
                                  }, toDisplayString(student.last_name + ", " + student.first_name + " " + student.middle_name), 9, ["title"]),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300" }, toDisplayString(student.course ? student.course.code : ""), 1),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, toDisplayString(student.enrollment_type), 1),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, toDisplayString(student.enrollment_year), 1),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs" }, [
                                    createVNode("span", {
                                      class: [
                                        "px-2 py-1 text-xs font-medium rounded-full",
                                        student.first_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : student.first_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                      ]
                                    }, toDisplayString(student.first_sem_status === 1 ? "Passed" : student.first_sem_status === 0 ? "Failed" : "Pending"), 3)
                                  ]),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs" }, [
                                    createVNode("span", {
                                      class: [
                                        "px-2 py-1 text-xs font-medium rounded-full",
                                        student.second_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : student.second_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                      ]
                                    }, toDisplayString(student.second_sem_status === 1 ? "Passed" : student.second_sem_status === 0 ? "Failed" : "Pending"), 3)
                                  ]),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-xs text-gray-900 dark:text-gray-300" }, [
                                    student.certificate_printed_at ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full",
                                      title: `Printed on ${new Date(student.certificate_printed_at).toLocaleString()} by ${student.certificate_printed_by}`
                                    }, " Printed ", 8, ["title"])) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full"
                                    }, " Not Printed "))
                                  ]),
                                  createVNode("td", { class: "px-4 py-3 whitespace-nowrap text-sm space-x-2" }, [
                                    createVNode("button", {
                                      onClick: withModifiers(($event) => viewStudent(student), ["prevent"]),
                                      class: "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    }, [
                                      createVNode(ShowIcon, { class: "h-4 w-4" })
                                    ], 8, ["onClick"]),
                                    createVNode("a", {
                                      href: `/students/${student.id}/edit`,
                                      class: "text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                                    }, [
                                      createVNode(EditIcon, { class: "h-4 w-4" })
                                    ], 8, ["href"]),
                                    createVNode("a", {
                                      href: "#",
                                      onClick: ($event) => deleteStudent(student.id),
                                      class: "text-red-400 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                                    }, [
                                      createVNode(DeleteIcon, { class: "h-4 w-4" })
                                    ], 8, ["onClick"])
                                  ])
                                ]);
                              }), 128)),
                              __props.students.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                                createVNode("td", {
                                  colspan: "11",
                                  class: "px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                                }, " No students found. Please try a different search. ")
                              ])) : createCommentVNode("", true)
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "my-4 text-center text-xl text-gray-800 dark:text-gray-200"
                          }, " Please wait... "))
                        ]),
                        createVNode("div", { class: "p-4 border-t border-gray-200 dark:border-gray-700" }, [
                          __props.pagination && __props.pagination.last_page > 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col sm:flex-row justify-between items-center"
                          }, [
                            createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0" }, [
                              createTextVNode(" Showing "),
                              createVNode("span", { class: "font-medium" }, toDisplayString(__props.pagination.from), 1),
                              createTextVNode(" to "),
                              createVNode("span", { class: "font-medium" }, toDisplayString(__props.pagination.to), 1),
                              createTextVNode(" of "),
                              createVNode("span", { class: "font-medium" }, toDisplayString(__props.pagination.total), 1),
                              createTextVNode(" results ")
                            ]),
                            createVNode("nav", {
                              class: "inline-flex rounded-md shadow-sm -space-x-px",
                              "aria-label": "Pagination"
                            }, [
                              __props.pagination.current_page > 1 ? (openBlock(), createBlock(unref(Link), {
                                key: 0,
                                href: _ctx.route("students.index", { ..._ctx.route().params, page: __props.pagination.current_page - 1 }),
                                class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Previous"),
                                  (openBlock(), createBlock("svg", {
                                    class: "h-5 w-5",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    "aria-hidden": "true"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                      "clip-rule": "evenodd"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }, 8, ["href"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed"
                              }, [
                                createVNode("span", { class: "sr-only" }, "Previous"),
                                (openBlock(), createBlock("svg", {
                                  class: "h-5 w-5",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.pagination.last_page, (page) => {
                                return openBlock(), createBlock(Fragment, { key: page }, [
                                  page === 1 || page === __props.pagination.last_page || page >= __props.pagination.current_page - 1 && page <= __props.pagination.current_page + 1 ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("students.index", { ..._ctx.route().params, page }),
                                    class: [
                                      "relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-150",
                                      page === __props.pagination.current_page ? "z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-200" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(page), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class"])) : page === 2 && __props.pagination.current_page > 3 || page === __props.pagination.last_page - 1 && __props.pagination.current_page < __props.pagination.last_page - 2 ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400"
                                  }, " ... ")) : createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              __props.pagination.current_page < __props.pagination.last_page ? (openBlock(), createBlock(unref(Link), {
                                key: 2,
                                href: _ctx.route("students.index", { ..._ctx.route().params, page: __props.pagination.current_page + 1 }),
                                class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Next"),
                                  (openBlock(), createBlock("svg", {
                                    class: "h-5 w-5",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    "aria-hidden": "true"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                      "clip-rule": "evenodd"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }, 8, ["href"])) : (openBlock(), createBlock("span", {
                                key: 3,
                                class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-400 cursor-not-allowed"
                              }, [
                                createVNode("span", { class: "sr-only" }, "Next"),
                                (openBlock(), createBlock("svg", {
                                  class: "h-5 w-5",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ]))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (viewModal.value) {
        _push(`<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span><div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start"><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"><h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title"> Student Details </h3>`);
        if (currentStudent.value) {
          _push(`<div class="mt-4 space-y-3"><div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"><h4 class="font-medium text-gray-700 dark:text-gray-300">Personal Information</h4><div class="grid grid-cols-2 gap-2 mt-2"><div><p class="text-xs text-gray-500 dark:text-gray-400">Full Name</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.last_name + ", " + currentStudent.value.first_name + " " + currentStudent.value.middle_name)}</p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">Student ID</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.student_id)}</p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">Course</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.course ? currentStudent.value.course.name : "N/A")}</p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">Year Level</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.year_level)}</p></div></div></div><div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"><h4 class="font-medium text-gray-700 dark:text-gray-300">NSTP Status</h4><div class="grid grid-cols-2 gap-2 mt-2"><div><p class="text-xs text-gray-500 dark:text-gray-400">NSTP Type</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.enrollment_type)}</p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">School Year</p><p class="text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(currentStudent.value.enrollment_year)}</p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">NSTP 1 Status</p><p class="text-sm"><span class="${ssrRenderClass([
            "px-2 py-1 text-xs font-medium rounded-full",
            currentStudent.value.first_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : currentStudent.value.first_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          ])}">${ssrInterpolate(currentStudent.value.first_sem_status === 1 ? "Passed" : currentStudent.value.first_sem_status === 0 ? "Failed" : "Pending")}</span></p></div><div><p class="text-xs text-gray-500 dark:text-gray-400">NSTP 2 Status</p><p class="text-sm"><span class="${ssrRenderClass([
            "px-2 py-1 text-xs font-medium rounded-full",
            currentStudent.value.second_sem_status === 1 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : currentStudent.value.second_sem_status === 0 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          ])}">${ssrInterpolate(currentStudent.value.second_sem_status === 1 ? "Passed" : currentStudent.value.second_sem_status === 0 ? "Failed" : "Pending")}</span></p></div></div></div><div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"><h4 class="font-medium text-gray-700 dark:text-gray-300">Certificate Status</h4><div class="mt-2"><p class="text-xs text-gray-500 dark:text-gray-400">Certificate Status</p><p class="text-sm">`);
          if (currentStudent.value.certificate_printed_at) {
            _push(`<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"> Printed on ${ssrInterpolate(new Date(currentStudent.value.certificate_printed_at).toLocaleString())}</span>`);
          } else {
            _push(`<span class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full"> Not Printed </span>`);
          }
          _push(`</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Close </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (certificateModal.value) {
        _push(`<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span><div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start"><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"><h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title"> Certificate Information </h3><div class="mt-4">`);
        _push(ssrRenderComponent(_sfc_main$8, {
          for: "certificate_date",
          value: "Certificate Date",
          class: "text-gray-700 dark:text-gray-300"
        }, null, _parent));
        _push(`<input id="certificate_date" type="date" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"${ssrRenderAttr("value", unref(downloadCertificateForm).certificate_date)}>`);
        _push(ssrRenderComponent(_sfc_main$9, {
          message: unref(downloadCertificateForm).errors.certificate_date,
          class: "mt-2"
        }, null, _parent));
        _push(`</div></div></div></div><div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"> Download </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
