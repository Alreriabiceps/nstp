import { ref, onMounted, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Certificate",
  __ssrInlineRender: true,
  props: {
    student: {
      type: Object,
      required: true
    },
    certificate: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const imageUrl = ref("");
    const pdfUrl = ref("");
    onMounted(() => {
      imageUrl.value = `/storage/${props.student.image}?t=${(/* @__PURE__ */ new Date()).getTime()}`;
      pdfUrl.value = `${props.certificate}?t=${(/* @__PURE__ */ new Date()).getTime()}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Certificate" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>Certificate</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, "Certificate")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><img${ssrRenderAttr("src", imageUrl.value)} alt="Student Image" class="w-32 h-32 object-cover rounded-full border-2 border-gray-200 dark:border-gray-600"${_scopeId}><h3 class="text-2xl font-semibold mt-4"${_scopeId}>${ssrInterpolate(__props.student.last_name)}, ${ssrInterpolate(__props.student.first_name)} ${ssrInterpolate(__props.student.middle_name)}</h3><p class="text-lg font-bold mt-2"${_scopeId}>Course: <span class="font-normal"${_scopeId}>${ssrInterpolate(__props.student.course.name)}</span></p><p class="text-lg font-bold"${_scopeId}>Section: <span class="font-normal"${_scopeId}>${ssrInterpolate(__props.student.section)}</span></p><p class="text-lg font-bold"${_scopeId}>Student ID: <span class="font-normal"${_scopeId}>${ssrInterpolate(__props.student.student_id)}</span></p></div><div class="p-6 bg-white dark:bg-gray-800"${_scopeId}><div class="bg-white rounded-lg p-2"${_scopeId}><embed${ssrRenderAttr("src", pdfUrl.value)} width="100%" height="600px" type="application/pdf" class="rounded-lg shadow"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                      createVNode("img", {
                        src: imageUrl.value,
                        alt: "Student Image",
                        class: "w-32 h-32 object-cover rounded-full border-2 border-gray-200 dark:border-gray-600"
                      }, null, 8, ["src"]),
                      createVNode("h3", { class: "text-2xl font-semibold mt-4" }, toDisplayString(__props.student.last_name) + ", " + toDisplayString(__props.student.first_name) + " " + toDisplayString(__props.student.middle_name), 1),
                      createVNode("p", { class: "text-lg font-bold mt-2" }, [
                        createTextVNode("Course: "),
                        createVNode("span", { class: "font-normal" }, toDisplayString(__props.student.course.name), 1)
                      ]),
                      createVNode("p", { class: "text-lg font-bold" }, [
                        createTextVNode("Section: "),
                        createVNode("span", { class: "font-normal" }, toDisplayString(__props.student.section), 1)
                      ]),
                      createVNode("p", { class: "text-lg font-bold" }, [
                        createTextVNode("Student ID: "),
                        createVNode("span", { class: "font-normal" }, toDisplayString(__props.student.student_id), 1)
                      ])
                    ]),
                    createVNode("div", { class: "p-6 bg-white dark:bg-gray-800" }, [
                      createVNode("div", { class: "bg-white rounded-lg p-2" }, [
                        createVNode("embed", {
                          src: pdfUrl.value,
                          width: "100%",
                          height: "600px",
                          type: "application/pdf",
                          class: "rounded-lg shadow"
                        }, null, 8, ["src"])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Certificate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
