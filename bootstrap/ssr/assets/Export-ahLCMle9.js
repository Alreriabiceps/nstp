import { unref, withCtx, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BY_rBIip.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./InputLabel-9qluswvY.js";
import "./PrimaryButton-Bxknhggv.js";
import "./TextInput-Dmhkk7Cm.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Export",
  __ssrInlineRender: true,
  props: {
    graduationYears: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const form = useForm({
      graduation_year: null
    });
    function exportExcel() {
      form.post(route("students.export-graduates"), {
        onStart: () => {
          form.processing = true;
        },
        onFinish: () => {
          form.processing = false;
        },
        onSuccess: () => {
          alert("Export successful!");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Export Graduate </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Export Graduate ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form method="POST" class="mb-20"${_scopeId}><div class="flex flex-wrap -mx-3 mb-6"${_scopeId}><div class="w-full md:w-2/4 px-3 mb-4 md:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "school_year",
              value: "School Year"
            }, null, _parent2, _scopeId));
            _push2(`<select id="school_year" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" name="school_year" value=""${_scopeId}><option value="" hidden${ssrIncludeBooleanAttr(Array.isArray(unref(form).school_year) ? ssrLooseContain(unref(form).school_year, "") : ssrLooseEqual(unref(form).school_year, "")) ? " selected" : ""}${_scopeId}> Please Select School Year </option><!--[-->`);
            ssrRenderList(__props.graduationYears, (gy) => {
              _push2(`<option${ssrRenderAttr("value", gy)}${_scopeId}>${ssrInterpolate(gy)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.school_year
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-start justify-start mt-4"${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(form).processing || _ctx.graduatesForm.processing) ? " disabled" : ""}${_scopeId}> Export </button></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(exportExcel, ["prevent"]),
                        method: "POST",
                        class: "mb-20"
                      }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3 mb-6" }, [
                          createVNode("div", { class: "w-full md:w-2/4 px-3 mb-4 md:mb-0" }, [
                            createVNode(_sfc_main$2, {
                              for: "school_year",
                              value: "School Year"
                            }),
                            withDirectives(createVNode("select", {
                              id: "school_year",
                              class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                              name: "school_year",
                              value: "",
                              "onUpdate:modelValue": ($event) => unref(form).school_year = $event
                            }, [
                              createVNode("option", {
                                value: "",
                                hidden: ""
                              }, " Please Select School Year "),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.graduationYears, (gy) => {
                                return openBlock(), createBlock("option", {
                                  key: gy,
                                  value: gy
                                }, toDisplayString(gy), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).school_year]
                            ]),
                            createVNode(_sfc_main$3, {
                              class: "mt-2",
                              message: unref(form).errors.school_year
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-start justify-start mt-4" }, [
                          createVNode("button", {
                            class: ["ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing || _ctx.graduatesForm.processing
                          }, " Export ", 10, ["disabled"])
                        ])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Students/Export.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
