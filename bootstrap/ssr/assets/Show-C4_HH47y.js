import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BY_rBIip.js";
import { Head } from "@inertiajs/vue3";
import "./InputLabel-9qluswvY.js";
import "./PrimaryButton-Bxknhggv.js";
import "./TextInput-Dmhkk7Cm.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    student: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Student" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>${ssrInterpolate(__props.student.first_name)} ${ssrInterpolate(__props.student.middle_name)} ${ssrInterpolate(__props.student.last_name)}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, toDisplayString(__props.student.first_name) + " " + toDisplayString(__props.student.middle_name) + " " + toDisplayString(__props.student.last_name), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}>`);
            if (__props.student.image) {
              _push2(`<img${ssrRenderAttr("src", `/storage/${__props.student.image}`)} alt="Student Image" class="w-32 h-32 object-cover rounded-full"${_scopeId}>`);
            } else {
              _push2(`<div class="w-32 h-32 bg-gray-200 rounded-full animate-pulse"${_scopeId}></div>`);
            }
            _push2(`</div><h3 class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(__props.student.first_name)}, ${ssrInterpolate(__props.student.middle_name)} ${ssrInterpolate(__props.student.last_name)}</h3><p class="text-lg font-bold"${_scopeId}>Course: <span class="font-normal"${_scopeId}>${ssrInterpolate(__props.student.course.name)}</span></p><p class="text-lg font-bold"${_scopeId}>Section: <span class="font-normal"${_scopeId}>${ssrInterpolate(__props.student.section)}</span></p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("div", { class: "flex items-center space-x-4" }, [
                        __props.student.image ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: `/storage/${__props.student.image}`,
                          alt: "Student Image",
                          class: "w-32 h-32 object-cover rounded-full"
                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-32 h-32 bg-gray-200 rounded-full animate-pulse"
                        }))
                      ]),
                      createVNode("h3", { class: "text-2xl font-semibold" }, toDisplayString(__props.student.first_name) + ", " + toDisplayString(__props.student.middle_name) + " " + toDisplayString(__props.student.last_name), 1),
                      createVNode("p", { class: "text-lg font-bold" }, [
                        createTextVNode("Course: "),
                        createVNode("span", { class: "font-normal" }, toDisplayString(__props.student.course.name), 1)
                      ]),
                      createVNode("p", { class: "text-lg font-bold" }, [
                        createTextVNode("Section: "),
                        createVNode("span", { class: "font-normal" }, toDisplayString(__props.student.section), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
