import { mergeProps, useSSRContext, ref, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./GuestLayout-CXysoXRY.js";
import { _ as _sfc_main$3, a as _sfc_main$5 } from "./InputLabel-9qluswvY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$4 } from "./TextInput-Dmhkk7Cm.js";
import { useForm, Head } from "@inertiajs/vue3";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-yellow-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 focus:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/YellowButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const YellowButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const showPassword = ref(false);
    const form = useForm({
      username: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "username",
              value: "Username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "username",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).username,
              "onUpdate:modelValue": ($event) => unref(form).username = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password",
              type: showPassword.value ? "text" : "password",
              class: "mt-1 block w-full pr-10",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="absolute inset-y-0 right-0 px-3 py-2"${_scopeId}>`);
            if (showPassword.value) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
            }
            _push2(`</button></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(YellowButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$3, {
                    for: "username",
                    value: "Username"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "username",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).username,
                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_sfc_main$4, {
                      id: "password",
                      type: showPassword.value ? "text" : "password",
                      class: "mt-1 block w-full pr-10",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "current-password"
                    }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                    createVNode("button", {
                      type: "button",
                      class: "absolute inset-y-0 right-0 px-3 py-2",
                      onClick: ($event) => showPassword.value = !showPassword.value
                    }, [
                      showPassword.value ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 text-gray-500",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0z",
                          "clip-rule": "evenodd"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 text-gray-500",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M2 10a8 8 0 1116 0 8 8 0 01-16 0z",
                          "clip-rule": "evenodd"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(YellowButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
