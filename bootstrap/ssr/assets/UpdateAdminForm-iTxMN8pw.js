import { ref, onMounted, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$3 } from "./TextInput-4IbYUary.js";
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
    const firstNameInput = ref(null);
    const lastNameInput = ref(null);
    const MIInput = ref(null);
    ref(null);
    const imageUrl = ref("");
    const form = useForm({
      image: "",
      first_name: "",
      last_name: "",
      MI: "",
      ext_name: ""
    });
    onMounted(() => {
      form.first_name = props.user.first_name;
      form.last_name = props.user.last_name;
      form.MI = props.user.MI;
      form.ext_name = props.user.ext_name;
      if (props.user.image) {
        imageUrl.value = `/storage/${props.user.image}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header class="mb-4"><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Admin Profile Information</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Update your profile information including your image and personal details. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "image",
        value: "Profile Image",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(`<div class="mt-2 flex flex-col items-start">`);
      if (imageUrl.value) {
        _push(`<img${ssrRenderAttr("src", imageUrl.value)} alt="Profile Image" class="w-32 h-32 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline"> Change Profile Image </button><input id="image" type="file" class="hidden"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.image,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "first_name",
        value: "First Name",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "first_name",
        ref_key: "firstNameInput",
        ref: firstNameInput,
        modelValue: unref(form).first_name,
        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "first-name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.first_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "last_name",
        value: "Last Name",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "last_name",
        ref_key: "lastNameInput",
        ref: lastNameInput,
        modelValue: unref(form).last_name,
        "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "last-name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.last_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "middle_initial",
        value: "Middle Initial",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "middle_initial",
        ref_key: "MIInput",
        ref: MIInput,
        modelValue: unref(form).MI,
        "onUpdate:modelValue": ($event) => unref(form).MI = $event,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        autocomplete: "middle-initial"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.MI,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "ext_name",
        value: "Name Extension",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "ext_name",
        modelValue: unref(form).ext_name,
        "onUpdate:modelValue": ($event) => unref(form).ext_name = $event,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        placeholder: "Jr., Sr., III, etc."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.ext_name,
        class: "mt-2"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update Profile`);
          } else {
            return [
              createTextVNode("Update Profile")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateAdminForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
