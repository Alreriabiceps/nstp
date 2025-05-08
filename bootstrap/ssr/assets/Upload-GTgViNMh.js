import { ref, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { useForm, Head } from "@inertiajs/vue3";
import { a as _sfc_main$2 } from "./InputLabel-Dqwdm5HF.js";
import { F as FileUploadIcon } from "./FileUploadIcon-BxHwe3uN.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Upload",
  __ssrInlineRender: true,
  setup(__props) {
    const isUploading = ref(false);
    const uploadProgress = ref(0);
    const dragActive = ref(false);
    const enrolledForm = useForm({
      enrolled_file: null,
      processing: false
    });
    const graduatesForm = useForm({
      graduates_file: null,
      processing: false
    });
    function handleDrag(e, form) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        dragActive.value = true;
      } else if (e.type === "dragleave") {
        dragActive.value = false;
      }
    }
    function handleDrop(e, form) {
      e.preventDefault();
      e.stopPropagation();
      dragActive.value = false;
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        form[form === enrolledForm ? "enrolled_file" : "graduates_file"] = e.dataTransfer.files[0];
      }
    }
    function uploadEnrolled() {
      if (!enrolledForm.enrolled_file) {
        enrolledForm.errors.enrolled_file = "Please select a file to upload.";
        return;
      }
      isUploading.value = true;
      uploadProgress.value = 0;
      enrolledForm.post(route("students.import-enrolled"), {
        onStart: () => {
          enrolledForm.processing = true;
        },
        onProgress: (progress) => {
          uploadProgress.value = Math.round(progress.percentage);
        },
        onFinish: () => {
          enrolledForm.processing = false;
          isUploading.value = false;
          uploadProgress.value = 0;
        },
        onSuccess: () => {
          alert("Upload successful!");
        }
      });
    }
    function uploadGraduates() {
      if (!graduatesForm.graduates_file) {
        graduatesForm.errors.graduates_file = "Please select a file to upload.";
        return;
      }
      isUploading.value = true;
      uploadProgress.value = 0;
      graduatesForm.post(route("students.import-graduates"), {
        onStart: () => {
          graduatesForm.processing = true;
        },
        onProgress: (progress) => {
          uploadProgress.value = Math.round(progress.percentage);
        },
        onFinish: () => {
          graduatesForm.processing = false;
          isUploading.value = false;
          uploadProgress.value = 0;
        },
        onSuccess: () => {
          alert("Upload successful!");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Batch Upload </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Batch Upload ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isUploading.value) {
              _push2(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"${_scopeId}><div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center"${_scopeId}><div class="relative w-16 h-16"${_scopeId}><svg class="w-full h-full" viewBox="0 0 100 100"${_scopeId}><circle class="stroke-blue-500" cx="50" cy="50" r="40" fill="none" stroke-width="3" stroke-dasharray="251" stroke-dashoffset="75"${_scopeId}><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite"${_scopeId}></animateTransform></circle></svg></div><p class="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3"${_scopeId}>Uploading</p><div class="w-full bg-gray-200 rounded-full h-2 mt-4"${_scopeId}><div class="bg-blue-500 h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: uploadProgress.value + "%" })}"${_scopeId}></div></div><p class="text-xs text-gray-500 mt-2"${_scopeId}>${ssrInterpolate(uploadProgress.value)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><div class="mb-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"${_scopeId}><h3 class="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2"${_scopeId}>Upload Instructions</h3><ul class="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-200"${_scopeId}><li${_scopeId}>Upload Excel files (.xls or .xlsx) only</li><li${_scopeId}>Maximum file size: 10MB</li><li${_scopeId}>Make sure your file follows the required format</li><li${_scopeId}>You can drag and drop files into the upload area</li></ul></div><div class="mb-12"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4"${_scopeId}>Enrolled Students</h3><form method="POST"${_scopeId}><div class="${ssrRenderClass([{ "border-blue-500 bg-blue-50 dark:bg-blue-900/20": dragActive.value }, "relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200"])}"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(FileUploadIcon, { class: "mx-auto h-12 w-12 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4"${_scopeId}><label for="enrolled_file" class="cursor-pointer"${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Click to upload or drag and drop </span><span class="mt-1 block text-xs text-gray-500 dark:text-gray-400"${_scopeId}> Excel files only (.xls, .xlsx) </span></label><input type="file" id="enrolled_file" class="hidden" name="enrolled_file" accept=".xls,.xlsx,.csv"${_scopeId}></div>`);
            if (unref(enrolledForm).enrolled_file) {
              _push2(`<div class="mt-4"${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}> Selected file: ${ssrInterpolate(unref(enrolledForm).enrolled_file.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(enrolledForm).errors.enrolled_file
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(enrolledForm).processing }, "inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(enrolledForm).processing || unref(graduatesForm).processing) ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(FileUploadIcon, { class: "h-4 w-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Upload Enrolled Students </button></div></form></div><div${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4"${_scopeId}>Graduate Students</h3><form method="POST"${_scopeId}><div class="${ssrRenderClass([{ "border-green-500 bg-green-50 dark:bg-green-900/20": dragActive.value }, "relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200"])}"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(FileUploadIcon, { class: "mx-auto h-12 w-12 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4"${_scopeId}><label for="graduates_file" class="cursor-pointer"${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Click to upload or drag and drop </span><span class="mt-1 block text-xs text-gray-500 dark:text-gray-400"${_scopeId}> Excel files only (.xls, .xlsx) </span></label><input type="file" id="graduates_file" class="hidden" name="graduates_file" accept=".xls,.xlsx"${_scopeId}></div>`);
            if (unref(graduatesForm).graduates_file) {
              _push2(`<div class="mt-4"${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}> Selected file: ${ssrInterpolate(unref(graduatesForm).graduates_file.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(graduatesForm).errors.graduates_file
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(graduatesForm).processing }, "inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 focus:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(graduatesForm).processing || unref(enrolledForm).processing) ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(FileUploadIcon, { class: "h-4 w-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Upload Graduate Students </button></div></form></div></div></div></div></div>`);
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
                  createVNode("p", { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mt-3" }, "Uploading"),
                  createVNode("div", { class: "w-full bg-gray-200 rounded-full h-2 mt-4" }, [
                    createVNode("div", {
                      class: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                      style: { width: uploadProgress.value + "%" }
                    }, null, 4)
                  ]),
                  createVNode("p", { class: "text-xs text-gray-500 mt-2" }, toDisplayString(uploadProgress.value), 1)
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                      createVNode("div", { class: "mb-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg" }, [
                        createVNode("h3", { class: "text-lg font-medium text-blue-800 dark:text-blue-300 mb-2" }, "Upload Instructions"),
                        createVNode("ul", { class: "list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-200" }, [
                          createVNode("li", null, "Upload Excel files (.xls or .xlsx) only"),
                          createVNode("li", null, "Maximum file size: 10MB"),
                          createVNode("li", null, "Make sure your file follows the required format"),
                          createVNode("li", null, "You can drag and drop files into the upload area")
                        ])
                      ]),
                      createVNode("div", { class: "mb-12" }, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100 mb-4" }, "Enrolled Students"),
                        createVNode("form", {
                          onSubmit: withModifiers(uploadEnrolled, ["prevent"]),
                          method: "POST"
                        }, [
                          createVNode("div", {
                            class: ["relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200", { "border-blue-500 bg-blue-50 dark:bg-blue-900/20": dragActive.value }],
                            onDragenter: ($event) => handleDrag($event, unref(enrolledForm)),
                            onDragover: ($event) => handleDrag($event, unref(enrolledForm)),
                            onDragleave: ($event) => handleDrag($event, unref(enrolledForm)),
                            onDrop: ($event) => handleDrop($event, unref(enrolledForm))
                          }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode(FileUploadIcon, { class: "mx-auto h-12 w-12 text-gray-400" }),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode("label", {
                                  for: "enrolled_file",
                                  class: "cursor-pointer"
                                }, [
                                  createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100" }, " Click to upload or drag and drop "),
                                  createVNode("span", { class: "mt-1 block text-xs text-gray-500 dark:text-gray-400" }, " Excel files only (.xls, .xlsx) ")
                                ]),
                                createVNode("input", {
                                  type: "file",
                                  id: "enrolled_file",
                                  class: "hidden",
                                  name: "enrolled_file",
                                  onInput: ($event) => unref(enrolledForm).enrolled_file = $event.target.files[0],
                                  accept: ".xls,.xlsx,.csv"
                                }, null, 40, ["onInput"])
                              ]),
                              unref(enrolledForm).enrolled_file ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300" }, " Selected file: " + toDisplayString(unref(enrolledForm).enrolled_file.name), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ], 42, ["onDragenter", "onDragover", "onDragleave", "onDrop"]),
                          createVNode(_sfc_main$2, {
                            class: "mt-2",
                            message: unref(enrolledForm).errors.enrolled_file
                          }, null, 8, ["message"]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("button", {
                              type: "submit",
                              class: ["inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150", { "opacity-25": unref(enrolledForm).processing }],
                              disabled: unref(enrolledForm).processing || unref(graduatesForm).processing
                            }, [
                              createVNode(FileUploadIcon, { class: "h-4 w-4 mr-2" }),
                              createTextVNode(" Upload Enrolled Students ")
                            ], 10, ["disabled"])
                          ])
                        ], 32)
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100 mb-4" }, "Graduate Students"),
                        createVNode("form", {
                          onSubmit: withModifiers(uploadGraduates, ["prevent"]),
                          method: "POST"
                        }, [
                          createVNode("div", {
                            class: ["relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 transition-colors duration-200", { "border-green-500 bg-green-50 dark:bg-green-900/20": dragActive.value }],
                            onDragenter: ($event) => handleDrag($event, unref(graduatesForm)),
                            onDragover: ($event) => handleDrag($event, unref(graduatesForm)),
                            onDragleave: ($event) => handleDrag($event, unref(graduatesForm)),
                            onDrop: ($event) => handleDrop($event, unref(graduatesForm))
                          }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode(FileUploadIcon, { class: "mx-auto h-12 w-12 text-gray-400" }),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode("label", {
                                  for: "graduates_file",
                                  class: "cursor-pointer"
                                }, [
                                  createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100" }, " Click to upload or drag and drop "),
                                  createVNode("span", { class: "mt-1 block text-xs text-gray-500 dark:text-gray-400" }, " Excel files only (.xls, .xlsx) ")
                                ]),
                                createVNode("input", {
                                  type: "file",
                                  id: "graduates_file",
                                  class: "hidden",
                                  name: "graduates_file",
                                  onInput: ($event) => unref(graduatesForm).graduates_file = $event.target.files[0],
                                  accept: ".xls,.xlsx"
                                }, null, 40, ["onInput"])
                              ]),
                              unref(graduatesForm).graduates_file ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300" }, " Selected file: " + toDisplayString(unref(graduatesForm).graduates_file.name), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ], 42, ["onDragenter", "onDragover", "onDragleave", "onDrop"]),
                          createVNode(_sfc_main$2, {
                            class: "mt-2",
                            message: unref(graduatesForm).errors.graduates_file
                          }, null, 8, ["message"]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("button", {
                              type: "submit",
                              class: ["inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 focus:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150", { "opacity-25": unref(graduatesForm).processing }],
                              disabled: unref(graduatesForm).processing || unref(enrolledForm).processing
                            }, [
                              createVNode(FileUploadIcon, { class: "h-4 w-4 mr-2" }),
                              createTextVNode(" Upload Graduate Students ")
                            ], 10, ["disabled"])
                          ])
                        ], 32)
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
