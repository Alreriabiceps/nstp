import { ref, onMounted, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./InputLabel-9qluswvY.js";
import { P as PrimaryButton } from "./PrimaryButton-Bxknhggv.js";
import { _ as _sfc_main$3 } from "./TextInput-Dmhkk7Cm.js";
import { useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "UpdateStudentForm",
  __ssrInlineRender: true,
  props: {
    student: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    const imageUrl = ref("");
    const props = __props;
    const form = useForm({
      student_id: "",
      section: "",
      image: ""
    });
    onMounted(() => {
      form.student_id = props.student.student_id;
      form.section = props.student.section;
      imageUrl.value = `/storage/${props.student.image}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Student ID</h2></header><form class="mt-6 space-y-6" method="POST"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "image",
        value: "Image"
      }, null, _parent));
      _push(`<img${ssrRenderAttr("src", imageUrl.value)} alt="Selected Image" class="w-32 h-32 object-cover rounded-full"><button type="button" class="mt-2 text-sm text-gray-600 underline">Change Image</button><input id="image" type="file" class="hidden">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.image,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "student_id",
        value: "Student ID"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "student_id",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).student_id,
        "onUpdate:modelValue": ($event) => unref(form).student_id = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.student_id,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "section",
        value: "Section"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "section",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).section,
        "onUpdate:modelValue": ($event) => unref(form).section = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: unref(form).errors.section,
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
        _push(`<p class="text-sm text-gray-600">Updated.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateStudentForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
