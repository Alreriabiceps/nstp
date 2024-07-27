import { unref, withCtx, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-Bg1mrgu1.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./InputLabel-9qluswvY.js";
import "./PrimaryButton-Bxknhggv.js";
import "./TextInput-Dmhkk7Cm.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Upload",
  __ssrInlineRender: true,
  setup(__props) {
    const enrolledForm = useForm({
      enrolled_file: null,
      processing: false
    });
    const graduatesForm = useForm({
      graduates_file: null,
      processing: false
    });
    function uploadEnrolled() {
      enrolledForm.post(route("students.import-enrolled"), {
        onStart: () => {
          enrolledForm.processing = true;
        },
        onFinish: () => {
          enrolledForm.processing = false;
        },
        onSuccess: () => {
          alert("Upload successful!");
        }
      });
    }
    function uploadGraduates() {
      graduatesForm.post(route("students.import-graduates"), {
        onStart: () => {
          graduatesForm.processing = true;
        },
        onFinish: () => {
          graduatesForm.processing = false;
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
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Batch Upload </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Batch Upload ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form method="POST" class="mb-20"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "enrolled_file",
              value: "Upload Enrolled Students"
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" id="enrolled_file" class="mt-1 block w-full" name="enrolled_file" required autofocus${_scopeId}>`);
            if (unref(enrolledForm).processing) {
              _push2(`<p class="mt-2"${_scopeId}>Please wait...</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(enrolledForm).errors.enrolled_file
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-start justify-start mt-4"${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(enrolledForm).processing }, "ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(enrolledForm).processing || unref(graduatesForm).processing) ? " disabled" : ""}${_scopeId}> Upload </button></div></form><form method="POST"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "graduates_file",
              value: "Upload Graduate Students"
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" id="graduates_file" class="mt-1 block w-full" name="graduates_file" required autofocus${_scopeId}>`);
            if (unref(graduatesForm).processing) {
              _push2(`<p class="mt-2"${_scopeId}>Please wait...</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(graduatesForm).errors.graduates_file
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-start justify-start mt-4"${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(graduatesForm).processing }, "ms-4 inline-flex items-center px-2 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(graduatesForm).processing || unref(enrolledForm).processing) ? " disabled" : ""}${_scopeId}> Upload </button></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(uploadEnrolled, ["prevent"]),
                        method: "POST",
                        class: "mb-20"
                      }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "enrolled_file",
                              value: "Upload Enrolled Students"
                            }),
                            createVNode("input", {
                              type: "file",
                              id: "enrolled_file",
                              class: "mt-1 block w-full",
                              name: "enrolled_file",
                              onInput: ($event) => unref(enrolledForm).enrolled_file = $event.target.files[0],
                              required: "",
                              autofocus: ""
                            }, null, 40, ["onInput"]),
                            unref(enrolledForm).processing ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2"
                            }, "Please wait...")) : createCommentVNode("", true),
                            createVNode(_sfc_main$3, {
                              class: "mt-2",
                              message: unref(enrolledForm).errors.enrolled_file
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-start justify-start mt-4" }, [
                          createVNode("button", {
                            class: ["ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150", { "opacity-25": unref(enrolledForm).processing }],
                            disabled: unref(enrolledForm).processing || unref(graduatesForm).processing
                          }, " Upload ", 10, ["disabled"])
                        ])
                      ], 32),
                      createVNode("form", {
                        onSubmit: withModifiers(uploadGraduates, ["prevent"]),
                        method: "POST"
                      }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "graduates_file",
                              value: "Upload Graduate Students"
                            }),
                            createVNode("input", {
                              type: "file",
                              id: "graduates_file",
                              class: "mt-1 block w-full",
                              name: "graduates_file",
                              onInput: ($event) => unref(enrolledForm).graduates_file = $event.target.files[0],
                              required: "",
                              autofocus: ""
                            }, null, 40, ["onInput"]),
                            unref(graduatesForm).processing ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2"
                            }, "Please wait...")) : createCommentVNode("", true),
                            createVNode(_sfc_main$3, {
                              class: "mt-2",
                              message: unref(graduatesForm).errors.graduates_file
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-start justify-start mt-4" }, [
                          createVNode("button", {
                            class: ["ms-4 inline-flex items-center px-2 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150", { "opacity-25": unref(graduatesForm).processing }],
                            disabled: unref(graduatesForm).processing || unref(enrolledForm).processing
                          }, " Upload ", 10, ["disabled"])
                        ])
                      ], 32)
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
