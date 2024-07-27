import { ref, onMounted, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./InputLabel-9qluswvY.js";
import { P as PrimaryButton } from "./PrimaryButton-Bxknhggv.js";
import { _ as _sfc_main$3 } from "./TextInput-Dmhkk7Cm.js";
import { useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "UpdateAdminForm",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const firstNameInput = ref(null);
    const lastNameInput = ref(null);
    ref(null);
    ref(null);
    const form = useForm({
      image: "",
      current_password: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      MI: "",
      ext_name: ""
    });
    onMounted(() => {
      form.image = props.user.image;
      form.first_name = props.user.first_name;
      form.last_name = props.user.last_name;
      form.MI = props.user.MI;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Admin</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6">`);
      if (__props.user.image) {
        _push(`<img${ssrRenderAttr("src", `/storage/${__props.user.image}`)} alt="Student Image" class="w-32 h-32 object-cover rounded-full">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "image",
        value: "Image"
      }, null, _parent));
      _push(`<input id="image" type="file" class="mt-1 block w-full" required>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.image,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "first_name",
        value: "First Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "first_name",
        ref_key: "firstNameInput",
        ref: firstNameInput,
        modelValue: unref(form).first_name,
        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
        type: "text",
        class: "mt-1 block w-full",
        autocomplete: "first-name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.first_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "middle_initial",
        value: "Middle Initial"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "middle_initial",
        ref: "middleInitialInput",
        modelValue: unref(form).MI,
        "onUpdate:modelValue": ($event) => unref(form).MI = $event,
        type: "text",
        class: "mt-1 block w-full",
        autocomplete: "middle-initial"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.MI,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "last_name",
        value: "Last Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "last_name",
        ref_key: "lastNameInput",
        ref: lastNameInput,
        modelValue: unref(form).last_name,
        "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
        type: "text",
        class: "mt-1 block w-full",
        autocomplete: "last-name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.last_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "ext_name",
        value: "Extension Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "ext_name",
        ref: "extNameInput",
        modelValue: unref(form).ext_name,
        "onUpdate:modelValue": ($event) => unref(form).ext_name = $event,
        type: "text",
        class: "mt-1 block w-full",
        autocomplete: "ext-name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.ext_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update`);
          } else {
            return [
              createTextVNode("Update")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateAdminForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
