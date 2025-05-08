import { ref, onMounted, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./InputLabel-Dqwdm5HF.js";
import { P as PrimaryButton } from "./PrimaryButton-DcrIiEU-.js";
import { _ as _sfc_main$3 } from "./TextInput-4IbYUary.js";
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
    const studentIdInput = ref(null);
    const sectionInput = ref(null);
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
      _push(`<section${ssrRenderAttrs(_attrs)}><header class="mb-4"><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Student Profile Information</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Update your profile information including your image, student ID, and section. </p></header><form class="mt-6 space-y-6" method="POST"><div>`);
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
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "student_id",
        value: "Student ID",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "student_id",
        ref_key: "studentIdInput",
        ref: studentIdInput,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
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
        value: "Section",
        class: "text-gray-700 dark:text-gray-300"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "section",
        ref_key: "sectionInput",
        ref: sectionInput,
        type: "text",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateStudentForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
