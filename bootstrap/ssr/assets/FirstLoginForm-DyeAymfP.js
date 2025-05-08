import { ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$2 } from "./TextInput-4IbYUary.js";
import { useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "FirstLoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    ref(null);
    ref(null);
    ref(null);
    const form = useForm({
      student_id: "",
      section: "",
      current_password: "",
      password: "",
      password_confirmation: "",
      image: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Student ID, Section and Password</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6" method="POST"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "image",
        value: "Image"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "image",
        type: "file",
        class: "mt-1 block w-full",
        onInput: ($event) => unref(form).image = $event.target.files[0],
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.image,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "student_id",
        value: "Student ID"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "student_id",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).student_id,
        "onUpdate:modelValue": ($event) => unref(form).student_id = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.student_id,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "section",
        value: "Section"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "section",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).section,
        "onUpdate:modelValue": ($event) => unref(form).section = $event,
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.section,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/FirstLoginForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
