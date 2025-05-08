import { ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$2 } from "./TextInput-4IbYUary.js";
import { useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header class="mb-3"><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-3 space-y-3"><div><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "current_password",
        value: "Current Password",
        class: "text-gray-700 dark:text-gray-300 sm:w-1/4"
      }, null, _parent));
      _push(`<div class="sm:w-3/4 mt-1 sm:mt-0">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.current_password,
        class: "mt-1"
      }, null, _parent));
      _push(`</div></div></div><div><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password",
        value: "New Password",
        class: "text-gray-700 dark:text-gray-300 sm:w-1/4"
      }, null, _parent));
      _push(`<div class="sm:w-3/4 mt-1 sm:mt-0">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.password,
        class: "mt-1"
      }, null, _parent));
      _push(`</div></div></div><div><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password_confirmation",
        value: "Confirm Password",
        class: "text-gray-700 dark:text-gray-300 sm:w-1/4"
      }, null, _parent));
      _push(`<div class="sm:w-3/4 mt-1 sm:mt-0">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.password_confirmation,
        class: "mt-1"
      }, null, _parent));
      _push(`</div></div></div><div class="flex items-center gap-4 mt-4 sm:ml-1/4 sm:pl-2">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update Password`);
          } else {
            return [
              createTextVNode("Update Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600 dark:text-gray-400">Updated.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
