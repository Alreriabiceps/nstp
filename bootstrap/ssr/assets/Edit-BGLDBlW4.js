import { unref, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$3 } from "./TextInput-4IbYUary.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    course: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      code: props.course.code,
      name: props.course.name
    });
    const submit = () => {
      form.put(route("courses.update", props.course.id), {
        onStart: () => {
          form.processing = true;
        },
        onFinish: () => {
          form.processing = false;
        },
        onSuccess: () => {
          alert("Course updated successfully!");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Course" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Edit Course </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Edit Course ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><form method="POST"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "code",
              value: "Code"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "code",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).code,
              "onUpdate:modelValue": ($event) => unref(form).code = $event,
              required: "",
              autofocus: "",
              placeholder: "Please Enter Code"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.code
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              placeholder: "Please Enter Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        method: "POST"
                      }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "code",
                              value: "Code"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "code",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).code,
                              "onUpdate:modelValue": ($event) => unref(form).code = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Please Enter Code"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.code
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "name",
                              value: "Name"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "name",
                              type: "text",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: "",
                              autofocus: "",
                              placeholder: "Please Enter Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                          createVNode(PrimaryButton, {
                            class: ["ms-4", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
