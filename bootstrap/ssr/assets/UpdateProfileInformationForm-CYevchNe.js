import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./InputLabel-9qluswvY.js";
import { P as PrimaryButton } from "./PrimaryButton-Bxknhggv.js";
import { _ as _sfc_main$2 } from "./TextInput-Dmhkk7Cm.js";
import { usePage, useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      username: user.username
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).username,
        "onUpdate:modelValue": ($event) => unref(form).username = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "mt-2",
        message: unref(form).errors.name
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
