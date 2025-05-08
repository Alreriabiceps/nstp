import { ref, unref, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$5 } from "./SecondaryButton-ayWW5s7i.js";
import { _ as _sfc_main$3 } from "./TextInput-4IbYUary.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const formSubmitted = ref(false);
    const formErrors = ref({});
    const form = useForm({
      code: "",
      name: ""
    });
    const submit = () => {
      formSubmitted.value = true;
      form.post(route("courses.store"), {
        onStart: () => {
          form.processing = true;
          formErrors.value = {};
        },
        onFinish: () => {
          form.processing = false;
        },
        onSuccess: () => {
        },
        onError: (errors) => {
          formErrors.value = errors;
        }
      });
    };
    const resetForm = () => {
      form.reset();
      formSubmitted.value = false;
      formErrors.value = {};
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Add Course" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Add Course </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Add Course ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>Course Information</h3></div><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><form method="POST"${_scopeId}><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "code",
              value: "Course Code"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "code",
              type: "text",
              class: ["mt-1 block w-full", { "border-red-500": formSubmitted.value && unref(form).errors.code }],
              modelValue: unref(form).code,
              "onUpdate:modelValue": ($event) => unref(form).code = $event,
              required: "",
              autofocus: "",
              placeholder: "e.g., BSIT"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.code
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Enter a unique code for the course (e.g., BSCS, BSIT) </p></div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Course Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: ["mt-1 block w-full", { "border-red-500": formSubmitted.value && unref(form).errors.name }],
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              placeholder: "e.g., Bachelor of Science in Information Technology"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Enter the full name of the course </p></div><div class="flex items-center justify-end mt-6 space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              type: "button",
              onClick: resetForm,
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset `);
                } else {
                  return [
                    createTextVNode(" Reset ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create Course `);
                } else {
                  return [
                    createTextVNode(" Create Course ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div><div class="mt-4 flex justify-end"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("courses.index"))} class="text-sm text-gray-600 dark:text-gray-400 hover:underline"${_scopeId}> ← Back to Course List </a></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-4 border-b border-gray-200 dark:border-gray-700" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, "Course Information")
                    ]),
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        method: "POST"
                      }, [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(_sfc_main$2, {
                            for: "code",
                            value: "Course Code"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "code",
                            type: "text",
                            class: ["mt-1 block w-full", { "border-red-500": formSubmitted.value && unref(form).errors.code }],
                            modelValue: unref(form).code,
                            "onUpdate:modelValue": ($event) => unref(form).code = $event,
                            required: "",
                            autofocus: "",
                            placeholder: "e.g., BSIT"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.code
                          }, null, 8, ["message"]),
                          createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Enter a unique code for the course (e.g., BSCS, BSIT) ")
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode(_sfc_main$2, {
                            for: "name",
                            value: "Course Name"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "name",
                            type: "text",
                            class: ["mt-1 block w-full", { "border-red-500": formSubmitted.value && unref(form).errors.name }],
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: "",
                            placeholder: "e.g., Bachelor of Science in Information Technology"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"]),
                          createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Enter the full name of the course ")
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-6 space-x-3" }, [
                          createVNode(_sfc_main$5, {
                            type: "button",
                            onClick: resetForm,
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Create Course ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ]),
                  createVNode("div", { class: "mt-4 flex justify-end" }, [
                    createVNode("a", {
                      href: _ctx.route("courses.index"),
                      class: "text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    }, " ← Back to Course List ", 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
