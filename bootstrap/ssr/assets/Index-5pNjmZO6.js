import { ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-Bg1mrgu1.js";
import { useForm, Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: {
      type: Array,
      default: []
    },
    students: {
      type: Array,
      default: []
    },
    graduationYears: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    useForm({
      student_ids: [],
      certificate_date: null
    });
    ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Students" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Courses </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Courses ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="flex justify-end space-x-2 p-2"${_scopeId}><a href="/courses/create" type="button" class="py-2 px-4 bg-blue-500 text-white rounded text-sm"${_scopeId}>Add Course</a></div><div class="p-2"${_scopeId}><form method="GET" action=""${_scopeId}><div class="mb-4"${_scopeId}><label for="search" value="Search"${_scopeId}></label><input id="search" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" type="text" name="search" placeholder="Search" value=""${_scopeId}></div><button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded"${_scopeId}> Filter </button></form></div><table class="w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"${_scopeId}> ID </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Code </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(`<tr${_scopeId}><td class="px-2 py-1 whitespace-nowrap"${_scopeId}>${ssrInterpolate(course.id)}</td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(course.code)}</td><td class="px-2 py-1 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(course.name)}</td><td class="px-2 py-1 whitespace-nowrap text-sm"${_scopeId}><a href="/courses/1/edit" class="text-green-600 hover:text-indigo-900"${_scopeId}>Edit</a><a href="/courses/1/delete" class="text-red-600 hover:text-indigo-900"${_scopeId}>Delete</a></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "flex justify-end space-x-2 p-2" }, [
                      createVNode("a", {
                        href: "/courses/create",
                        type: "button",
                        class: "py-2 px-4 bg-blue-500 text-white rounded text-sm"
                      }, "Add Course")
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("form", {
                        method: "GET",
                        action: ""
                      }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "search",
                            value: "Search"
                          }),
                          createVNode("input", {
                            id: "search",
                            class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",
                            type: "text",
                            name: "search",
                            placeholder: "Search",
                            value: ""
                          })
                        ]),
                        createVNode("button", {
                          type: "submit",
                          class: "py-2 px-4 bg-blue-500 text-white rounded"
                        }, " Filter ")
                      ])
                    ]),
                    createVNode("table", { class: "w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"
                          }, " ID "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Code "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Name "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          }, " Actions ")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                          return openBlock(), createBlock("tr", {
                            key: course.id
                          }, [
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap" }, toDisplayString(course.id), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(course.code), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-xs" }, toDisplayString(course.name), 1),
                            createVNode("td", { class: "px-2 py-1 whitespace-nowrap text-sm" }, [
                              createVNode("a", {
                                href: "/courses/1/edit",
                                class: "text-green-600 hover:text-indigo-900"
                              }, "Edit"),
                              createVNode("a", {
                                href: "/courses/1/delete",
                                class: "text-red-600 hover:text-indigo-900"
                              }, "Delete")
                            ])
                          ]);
                        }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
