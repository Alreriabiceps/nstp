import { resolveComponent, mergeProps, useSSRContext, ref, unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelCheckbox } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./AuthenticatedLayout-BY_rBIip.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./InputLabel-9qluswvY.js";
import { useForm, Head } from "@inertiajs/vue3";
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-pencil" }, _attrs), null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/EditIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const EditIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-trash" }, _attrs), null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/DeleteIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DeleteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-eye" }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ShowIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ShowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-download" }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/DownloadIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DownloadIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-file-upload" }, _attrs), null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/FileUploadIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FileUploadIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-plus" }, _attrs), null, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/PlusIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PlusIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-filter" }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/FilterIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FilterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_font_awesome_icon, mergeProps({ icon: "fa-solid fa-list-dots" }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/SelectAllIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SelectAllIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: {
      type: Array,
      default: []
    },
    students: {
      type: Array,
      default: []
    },
    graduationYears: {
      type: Array,
      default: []
    },
    search: String,
    course_id: String,
    school_year: String
  },
  setup(__props) {
    const props = __props;
    const downloadCertificateForm = useForm({
      student_ids: [],
      certificate_date: null
    });
    const downloadCertificate = () => {
      if (downloadCertificateForm.student_ids.length === 0) {
        alert("Please select students to download certificate.");
        return;
      }
      certificateModal.value = true;
    };
    const certificateModal = ref(false);
    const toggleSelectAll = ref(false);
    const downloadCertificateSubmit = async () => {
      try {
        const response = await axios.post(
          route("certificates.download"),
          downloadCertificateForm.data(),
          {
            responseType: "blob"
            // Important for file download
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "certificates.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        downloadCertificateForm.reset();
        certificateModal.value = false;
      } catch (error) {
        console.error("Error downloading certificates:", error);
      }
    };
    const selectAll = () => {
      if (toggleSelectAll.value) {
        downloadCertificateForm.student_ids = [];
      } else {
        downloadCertificateForm.student_ids = props.students.map(
          (student) => student.id
        );
      }
      toggleSelectAll.value = !toggleSelectAll.value;
    };
    const searchForm = useForm({
      search: props.search || "",
      course_id: props.course_id || "",
      school_year: props.school_year || ""
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
    const form = useForm({});
    const deleteStudent = (studentId) => {
      if (confirm("Are you sure you want to delete this student?")) {
        form.delete(`/students/${studentId}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Students </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Students ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="flex justify-end space-x-2 p-2"${_scopeId}><a href="/students/create" type="button" class="py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(PlusIcon, { class: "h-4 w-5" }, null, _parent2, _scopeId));
            _push2(` Add Student</a><a href="/students/upload" type="button" class="py-2 px-2 bg-lime-500 hover:bg-lime-700 text-white rounded text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(FileUploadIcon, { class: "h-4 w-5" }, null, _parent2, _scopeId));
            _push2(` Batch Upload</a></div><div class="p-2"${_scopeId}><form method="POST"${_scopeId}><div class="flex mb-4"${_scopeId}><div class="w-1/2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              for: "search",
              value: "Search"
            }, null, _parent2, _scopeId));
            _push2(`<input id="search" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" type="text" name="search" placeholder="Search"${ssrRenderAttr("value", unref(searchForm).search)}${_scopeId}></div></div><div class="flex mb-4 space-x-4"${_scopeId}><div class="w-1/3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              for: "course",
              value: "Course/Program"
            }, null, _parent2, _scopeId));
            _push2(`<select id="course" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="course_id" required${_scopeId}><option value="" hidden${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).course_id) ? ssrLooseContain(unref(searchForm).course_id, "") : ssrLooseEqual(unref(searchForm).course_id, "")) ? " selected" : ""}${_scopeId}> Please Select Course </option><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(`<option${ssrRenderAttr("value", course.id)}${_scopeId}>${ssrInterpolate(course.name)}</option>`);
            });
            _push2(`<!--]--></select></div></div><div class="flex mb-4 space-x-4"${_scopeId}><div class="w-1/3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              for: "school_year",
              value: "School Year"
            }, null, _parent2, _scopeId));
            _push2(`<select id="school_year" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="school_year" value=""${_scopeId}><option value="" hidden${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).school_year) ? ssrLooseContain(unref(searchForm).school_year, "") : ssrLooseEqual(unref(searchForm).school_year, "")) ? " selected" : ""}${_scopeId}> Please Select School Year </option><!--[-->`);
            ssrRenderList(__props.graduationYears, (gy) => {
              _push2(`<option${ssrRenderAttr("value", gy)}${_scopeId}>${ssrInterpolate(gy)}</option>`);
            });
            _push2(`<!--]--></select></div></div><button type="submit" class="py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded"${_scopeId}> Filter `);
            _push2(ssrRenderComponent(FilterIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</button></form></div><div class="flex justify-start space-x-2 p-2"${_scopeId}><button type="button" class="py-2 px-2 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(SelectAllIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Select all </button><a href="#" id="downloadCertificateButton" class="py-2 px-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(DownloadIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Download Certificate </a></div>`);
            if (certificateModal.value) {
              _push2(`<div${_scopeId}><div class="fixed inset-0 flex items-center justify-center z-50"${_scopeId}><div class="bg-white rounded-lg p-8"${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}> Download Certificate </h2><form${_scopeId}><div class="mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, {
                for: "certificate_date",
                value: "Certificate Date"
              }, null, _parent2, _scopeId));
              _push2(`<input id="certificate_date"${ssrRenderAttr(
                "value",
                unref(downloadCertificateForm).certificate_date
              )} class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" type="date" required${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, {
                class: "mt-2",
                message: unref(downloadCertificateForm).errors.certificate_date
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end"${_scopeId}><button type="button" class="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm mr-2"${_scopeId}> Cancel </button><button type="submit" class="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"${_scopeId}> Download </button></div></form></div></div><div class="fixed inset-0 bg-black opacity-50"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(searchForm).processing) {
              _push2(`<table class="w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}></th><th scope="col" class="px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Seq. No. </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Student ID </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Course </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> NSTP Type </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> School Year </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
              ssrRenderList(__props.students, (student) => {
                _push2(`<tr${_scopeId}><td class="px-2 py-1 whitespace-nowrap"${_scopeId}><input type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 rounded"${ssrIncludeBooleanAttr(
                  Array.isArray(
                    unref(downloadCertificateForm).student_ids
                  ) ? ssrLooseContain(
                    unref(downloadCertificateForm).student_ids,
                    student.id
                  ) : unref(downloadCertificateForm).student_ids
                ) ? " checked" : ""}${ssrRenderAttr("value", student.id)}${_scopeId}></td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(student.seq_no)}</td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(student.student_id)}</td><td class="px-2 py-1 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(student.last_name + ", " + student.first_name + " " + student.middle_name)}</td><td class="px-2 py-1 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(student.course ? student.course.code : "")}</td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(student.enrollment_type)}</td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(student.enrollment_year)}</td><td class="px-2 py-1 whitespace-nowrap text-sm space-x-2"${_scopeId}><a${ssrRenderAttr("href", `/students/${student.id}`)} class="text-blue-500 hover:text-blue-700"${_scopeId}>`);
                _push2(ssrRenderComponent(ShowIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</a><a${ssrRenderAttr("href", `/students/${student.id}/edit`)} class="text-green-500 hover:text-green-700"${_scopeId}>`);
                _push2(ssrRenderComponent(EditIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</a><a href="#" class="text-red-400 hover:text-red-600"${_scopeId}>`);
                _push2(ssrRenderComponent(DeleteIcon, { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`</a></td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(searchForm).processing) {
              _push2(`<p class="my-4 text-center text-xl"${_scopeId}>Please wait...</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "flex justify-end space-x-2 p-2" }, [
                      createVNode("a", {
                        href: "/students/create",
                        type: "button",
                        class: "py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded text-sm"
                      }, [
                        createVNode(PlusIcon, { class: "h-4 w-5" }),
                        createTextVNode(" Add Student")
                      ]),
                      createVNode("a", {
                        href: "/students/upload",
                        type: "button",
                        class: "py-2 px-2 bg-lime-500 hover:bg-lime-700 text-white rounded text-sm"
                      }, [
                        createVNode(FileUploadIcon, { class: "h-4 w-5" }),
                        createTextVNode(" Batch Upload")
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submitSearch, ["prevent"]),
                        method: "POST"
                      }, [
                        createVNode("div", { class: "flex mb-4" }, [
                          createVNode("div", { class: "w-1/2" }, [
                            createVNode(_sfc_main$a, {
                              for: "search",
                              value: "Search"
                            }),
                            withDirectives(createVNode("input", {
                              id: "search",
                              class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                              type: "text",
                              name: "search",
                              placeholder: "Search",
                              "onUpdate:modelValue": ($event) => unref(searchForm).search = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(searchForm).search]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-4 space-x-4" }, [
                          createVNode("div", { class: "w-1/3" }, [
                            createVNode(_sfc_main$a, {
                              for: "course",
                              value: "Course/Program"
                            }),
                            withDirectives(createVNode("select", {
                              id: "course",
                              class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                              name: "course_id",
                              "onUpdate:modelValue": ($event) => unref(searchForm).course_id = $event,
                              required: ""
                            }, [
                              createVNode("option", {
                                value: "",
                                hidden: ""
                              }, " Please Select Course "),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                return openBlock(), createBlock("option", {
                                  value: course.id,
                                  key: course.id
                                }, toDisplayString(course.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(searchForm).course_id]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-4 space-x-4" }, [
                          createVNode("div", { class: "w-1/3" }, [
                            createVNode(_sfc_main$a, {
                              for: "school_year",
                              value: "School Year"
                            }),
                            withDirectives(createVNode("select", {
                              id: "school_year",
                              class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                              name: "school_year",
                              value: "",
                              "onUpdate:modelValue": ($event) => unref(searchForm).school_year = $event
                            }, [
                              createVNode("option", {
                                value: "",
                                hidden: ""
                              }, " Please Select School Year "),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.graduationYears, (gy) => {
                                return openBlock(), createBlock("option", {
                                  key: gy,
                                  value: gy
                                }, toDisplayString(gy), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(searchForm).school_year]
                            ])
                          ])
                        ]),
                        createVNode("button", {
                          type: "submit",
                          class: "py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        }, [
                          createTextVNode(" Filter "),
                          createVNode(FilterIcon, { class: "h-4 w-4" })
                        ])
                      ], 32)
                    ]),
                    createVNode("div", { class: "flex justify-start space-x-2 p-2" }, [
                      createVNode("button", {
                        onClick: selectAll,
                        type: "button",
                        class: "py-2 px-2 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm"
                      }, [
                        createVNode(SelectAllIcon, { class: "h-4 w-4" }),
                        createTextVNode(" Select all ")
                      ]),
                      createVNode("a", {
                        href: "#",
                        onClick: downloadCertificate,
                        id: "downloadCertificateButton",
                        class: "py-2 px-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"
                      }, [
                        createVNode(DownloadIcon, { class: "h-4 w-4" }),
                        createTextVNode(" Download Certificate ")
                      ])
                    ]),
                    certificateModal.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "fixed inset-0 flex items-center justify-center z-50" }, [
                        createVNode("div", { class: "bg-white rounded-lg p-8" }, [
                          createVNode("h2", { class: "text-xl font-semibold mb-4" }, " Download Certificate "),
                          createVNode("form", {
                            onSubmit: withModifiers(downloadCertificateSubmit, ["prevent"])
                          }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(_sfc_main$a, {
                                for: "certificate_date",
                                value: "Certificate Date"
                              }),
                              withDirectives(createVNode("input", {
                                id: "certificate_date",
                                "onUpdate:modelValue": ($event) => unref(downloadCertificateForm).certificate_date = $event,
                                class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                                type: "date",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(downloadCertificateForm).certificate_date
                                ]
                              ]),
                              createVNode(_sfc_main$b, {
                                class: "mt-2",
                                message: unref(downloadCertificateForm).errors.certificate_date
                              }, null, 8, ["message"])
                            ]),
                            createVNode("div", { class: "flex justify-end" }, [
                              createVNode("button", {
                                type: "button",
                                class: "py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded text-sm mr-2",
                                onClick: ($event) => certificateModal.value = false
                              }, " Cancel ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "submit",
                                class: "py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-sm"
                              }, " Download ")
                            ])
                          ], 32)
                        ])
                      ]),
                      createVNode("div", { class: "fixed inset-0 bg-black opacity-50" })
                    ])) : createCommentVNode("", true),
                    !unref(searchForm).processing ? (openBlock(), createBlock("table", {
                      key: 1,
                      class: "w-full divide-y divide-gray-200"
                    }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"
                          }, " Seq. No. "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Student ID "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Name "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Course "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " NSTP Type "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " School Year "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Actions ")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.students, (student) => {
                          return openBlock(), createBlock("tr", {
                            key: student.id
                          }, [
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap" }, [
                              withDirectives((openBlock(), createBlock("input", {
                                key: student.id,
                                type: "checkbox",
                                class: "form-checkbox h-4 w-4 text-blue-500 rounded",
                                "onUpdate:modelValue": ($event) => unref(downloadCertificateForm).student_ids = $event,
                                value: student.id
                              }, null, 8, ["onUpdate:modelValue", "value"])), [
                                [
                                  vModelCheckbox,
                                  unref(downloadCertificateForm).student_ids
                                ]
                              ])
                            ]),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(student.seq_no), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(student.student_id), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-sm" }, toDisplayString(student.last_name + ", " + student.first_name + " " + student.middle_name), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-sm" }, toDisplayString(student.course ? student.course.code : ""), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(student.enrollment_type), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(student.enrollment_year), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-sm space-x-2" }, [
                              createVNode("a", {
                                href: `/students/${student.id}`,
                                class: "text-blue-500 hover:text-blue-700"
                              }, [
                                createVNode(ShowIcon, { class: "h-4 w-4" })
                              ], 8, ["href"]),
                              createVNode("a", {
                                href: `/students/${student.id}/edit`,
                                class: "text-green-500 hover:text-green-700"
                              }, [
                                createVNode(EditIcon, { class: "h-4 w-4" })
                              ], 8, ["href"]),
                              createVNode("a", {
                                href: "#",
                                onClick: ($event) => deleteStudent(student.id),
                                class: "text-red-400 hover:text-red-600"
                              }, [
                                createVNode(DeleteIcon, { class: "h-4 w-4" })
                              ], 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    unref(searchForm).processing ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "my-4 text-center text-xl"
                    }, "Please wait...")) : createCommentVNode("", true)
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
