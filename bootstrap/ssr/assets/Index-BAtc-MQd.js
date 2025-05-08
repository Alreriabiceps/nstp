import { ref, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import { Head, router } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showDeleteModal = ref(false);
    const courseToDelete = ref(null);
    const showInstructions = ref(false);
    const confirmDelete = (course) => {
      courseToDelete.value = course;
      showDeleteModal.value = true;
    };
    const cancelDelete = () => {
      showDeleteModal.value = false;
      courseToDelete.value = null;
    };
    const deleteCourse = () => {
      if (courseToDelete.value) {
        router.delete(route("courses.destroy", courseToDelete.value.id), {
          onSuccess: () => {
            showDeleteModal.value = false;
            courseToDelete.value = null;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Courses" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Courses </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Courses ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/20 cursor-pointer flex justify-between items-center"${_scopeId}><h3 class="text-lg font-medium text-green-800 dark:text-green-300"${_scopeId}>Course Management Instructions</h3><svg class="${ssrRenderClass([{ "rotate-180": showInstructions.value }, "h-5 w-5 text-green-600 dark:text-green-400 transform transition-transform duration-200"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
            if (showInstructions.value) {
              _push2(`<div class="p-6 text-gray-700 dark:text-gray-300"${_scopeId}><ul class="list-disc list-inside space-y-2"${_scopeId}><li${_scopeId}>This page displays all available courses in the NSTP management system.</li><li${_scopeId}>Each course has a unique <span class="font-semibold"${_scopeId}>code</span> (e.g., BSIT) and <span class="font-semibold"${_scopeId}>name</span> (e.g., Bachelor of Science in Information Technology).</li><li${_scopeId}>Click the <span class="font-semibold"${_scopeId}>Add Course</span> button to create a new course.</li><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>Edit</span> link to modify existing course details.</li><li${_scopeId}>Use the <span class="font-semibold"${_scopeId}>Delete</span> link to remove a course (this will not affect existing students).</li><li${_scopeId}>Courses added here will be available in dropdown menus throughout the system.</li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>Course List</h3><a${ssrRenderAttr("href", _ctx.route("courses.create"))} class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors"${_scopeId}> Add Course </a></div><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-gray-700"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> ID </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Code </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-gray-700"${_scopeId}><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(course.id)}</td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(course.code)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(course.name)}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("courses.edit", course.id))} class="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 mr-3"${_scopeId}> Edit </a><button class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"${_scopeId}> Delete </button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.courses.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}> No courses found </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div></div>`);
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"${_scopeId}><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"${_scopeId}></div><div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"${_scopeId}><div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title"${_scopeId}> Delete Course </h3><div class="mt-2"${_scopeId}><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Are you sure you want to delete the course &quot;${ssrInterpolate((_a = courseToDelete.value) == null ? void 0 : _a.name)}&quot;? This action cannot be undone. </p></div></div></div></div><div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"${_scopeId}><button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"${_scopeId}> Delete </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"${_scopeId}> Cancel </button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6" }, [
                    createVNode("div", {
                      onClick: ($event) => showInstructions.value = !showInstructions.value,
                      class: "p-4 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/20 cursor-pointer flex justify-between items-center"
                    }, [
                      createVNode("h3", { class: "text-lg font-medium text-green-800 dark:text-green-300" }, "Course Management Instructions"),
                      (openBlock(), createBlock("svg", {
                        class: ["h-5 w-5 text-green-600 dark:text-green-400 transform transition-transform duration-200", { "rotate-180": showInstructions.value }],
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          "clip-rule": "evenodd"
                        })
                      ], 2))
                    ], 8, ["onClick"]),
                    showInstructions.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-6 text-gray-700 dark:text-gray-300"
                    }, [
                      createVNode("ul", { class: "list-disc list-inside space-y-2" }, [
                        createVNode("li", null, "This page displays all available courses in the NSTP management system."),
                        createVNode("li", null, [
                          createTextVNode("Each course has a unique "),
                          createVNode("span", { class: "font-semibold" }, "code"),
                          createTextVNode(" (e.g., BSIT) and "),
                          createVNode("span", { class: "font-semibold" }, "name"),
                          createTextVNode(" (e.g., Bachelor of Science in Information Technology).")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Click the "),
                          createVNode("span", { class: "font-semibold" }, "Add Course"),
                          createTextVNode(" button to create a new course.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "Edit"),
                          createTextVNode(" link to modify existing course details.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("Use the "),
                          createVNode("span", { class: "font-semibold" }, "Delete"),
                          createTextVNode(" link to remove a course (this will not affect existing students).")
                        ]),
                        createVNode("li", null, "Courses added here will be available in dropdown menus throughout the system.")
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, "Course List"),
                      createVNode("a", {
                        href: _ctx.route("courses.create"),
                        class: "py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors"
                      }, " Add Course ", 8, ["href"])
                    ]),
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode("table", { class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700" }, [
                        createVNode("thead", { class: "bg-gray-50 dark:bg-gray-700" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " ID "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Code "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Name "),
                            createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            }, " Actions ")
                          ])
                        ]),
                        createVNode("tbody", { class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                            return openBlock(), createBlock("tr", {
                              key: course.id,
                              class: "hover:bg-gray-50 dark:hover:bg-gray-700"
                            }, [
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300" }, toDisplayString(course.id), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300" }, toDisplayString(course.code), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300" }, toDisplayString(course.name), 1),
                              createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                                createVNode("a", {
                                  href: _ctx.route("courses.edit", course.id),
                                  class: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 mr-3"
                                }, " Edit ", 8, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => confirmDelete(course),
                                  class: "text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                                }, " Delete ", 8, ["onClick"])
                              ])
                            ]);
                          }), 128)),
                          __props.courses.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "4",
                              class: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                            }, " No courses found ")
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 overflow-y-auto",
                "aria-labelledby": "modal-title",
                role: "dialog",
                "aria-modal": "true"
              }, [
                createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    "aria-hidden": "true",
                    onClick: cancelDelete
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" }, [
                    createVNode("div", { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                      createVNode("div", { class: "sm:flex sm:items-start" }, [
                        createVNode("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-6 w-6 text-red-600 dark:text-red-400",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            })
                          ]))
                        ]),
                        createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                          createVNode("h3", {
                            class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                            id: "modal-title"
                          }, " Delete Course "),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, ' Are you sure you want to delete the course "' + toDisplayString((_b = courseToDelete.value) == null ? void 0 : _b.name) + '"? This action cannot be undone. ', 1)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: deleteCourse,
                        class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      }, " Delete "),
                      createVNode("button", {
                        type: "button",
                        onClick: cancelDelete,
                        class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      }, " Cancel ")
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
