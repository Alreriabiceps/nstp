import { ref, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-nxojOztp.js";
import _sfc_main$5 from "./UpdateStudentForm-CeDDGa5C.js";
import _sfc_main$4 from "./UpdateAdminForm-iTxMN8pw.js";
import { Head } from "@inertiajs/vue3";
import _sfc_main$3 from "./UpdatePasswordForm-C8ivTvuC.js";
import _sfc_main$2 from "./UsernameForm-WQVZKYs_.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ThemeToggle-BCMWITtz.js";
import "./InputLabel-Dqwdm5HF.js";
import "./PrimaryButton-DcrIiEU-.js";
import "./TextInput-4IbYUary.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  setup(__props) {
    const showInstructions = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4"${_scopeId}><div class="p-3 border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20 cursor-pointer flex justify-between items-center"${_scopeId}><h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-300"${_scopeId}>Profile Management Instructions</h3><svg class="${ssrRenderClass([{ "rotate-180": showInstructions.value }, "h-5 w-5 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-200"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
            if (showInstructions.value) {
              _push2(`<div class="p-3 text-gray-700 dark:text-gray-300 text-sm"${_scopeId}><ul class="list-disc list-inside space-y-1"${_scopeId}><li${_scopeId}>On this page, you can update your account information and security settings.</li><li${_scopeId}>You can change your <span class="font-semibold"${_scopeId}>username</span> used for login.</li><li${_scopeId}>You can update your <span class="font-semibold"${_scopeId}>profile image</span> by clicking the &quot;Change Profile Image&quot; link.</li>`);
              if (_ctx.$page.props.auth.user.role === "Student") {
                _push2(`<li${_scopeId}>Update your <span class="font-semibold"${_scopeId}>student ID</span> and <span class="font-semibold"${_scopeId}>section</span> information as needed.</li>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.auth.user.role === "Admin") {
                _push2(`<li${_scopeId}>Update your personal information including <span class="font-semibold"${_scopeId}>name</span> and other details.</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<li${_scopeId}>To change your password, provide your <span class="font-semibold"${_scopeId}>current password</span> first for security.</li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="space-y-4"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-base font-medium text-gray-900 dark:text-gray-100"${_scopeId}>Security Settings</h3></div><div class="p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              user: _ctx.$page.props.user
            }, null, _parent2, _scopeId));
            _push2(`<div class="my-6 border-t border-gray-200 dark:border-gray-700"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</div></div></div><div${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-4 border-b border-gray-200 dark:border-gray-700"${_scopeId}><h3 class="text-base font-medium text-gray-900 dark:text-gray-100"${_scopeId}>Personal Information</h3></div><div class="p-4"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.role === "Admin") {
              _push2(ssrRenderComponent(_sfc_main$4, {
                user: _ctx.$page.props.user
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.auth.user.role === "Student") {
              _push2(ssrRenderComponent(_sfc_main$5, {
                student: _ctx.$page.props.student
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4" }, [
                    createVNode("div", {
                      onClick: ($event) => showInstructions.value = !showInstructions.value,
                      class: "p-3 border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20 cursor-pointer flex justify-between items-center"
                    }, [
                      createVNode("h3", { class: "text-lg font-medium text-indigo-800 dark:text-indigo-300" }, "Profile Management Instructions"),
                      (openBlock(), createBlock("svg", {
                        class: ["h-5 w-5 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-200", { "rotate-180": showInstructions.value }],
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
                      class: "p-3 text-gray-700 dark:text-gray-300 text-sm"
                    }, [
                      createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                        createVNode("li", null, "On this page, you can update your account information and security settings."),
                        createVNode("li", null, [
                          createTextVNode("You can change your "),
                          createVNode("span", { class: "font-semibold" }, "username"),
                          createTextVNode(" used for login.")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("You can update your "),
                          createVNode("span", { class: "font-semibold" }, "profile image"),
                          createTextVNode(' by clicking the "Change Profile Image" link.')
                        ]),
                        _ctx.$page.props.auth.user.role === "Student" ? (openBlock(), createBlock("li", { key: 0 }, [
                          createTextVNode("Update your "),
                          createVNode("span", { class: "font-semibold" }, "student ID"),
                          createTextVNode(" and "),
                          createVNode("span", { class: "font-semibold" }, "section"),
                          createTextVNode(" information as needed.")
                        ])) : createCommentVNode("", true),
                        _ctx.$page.props.auth.user.role === "Admin" ? (openBlock(), createBlock("li", { key: 1 }, [
                          createTextVNode("Update your personal information including "),
                          createVNode("span", { class: "font-semibold" }, "name"),
                          createTextVNode(" and other details.")
                        ])) : createCommentVNode("", true),
                        createVNode("li", null, [
                          createTextVNode("To change your password, provide your "),
                          createVNode("span", { class: "font-semibold" }, "current password"),
                          createTextVNode(" first for security.")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-4 border-b border-gray-200 dark:border-gray-700" }, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, "Security Settings")
                        ]),
                        createVNode("div", { class: "p-4" }, [
                          createVNode(_sfc_main$2, {
                            user: _ctx.$page.props.user
                          }, null, 8, ["user"]),
                          createVNode("div", { class: "my-6 border-t border-gray-200 dark:border-gray-700" }),
                          createVNode(_sfc_main$3)
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                        createVNode("div", { class: "p-4 border-b border-gray-200 dark:border-gray-700" }, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, "Personal Information")
                        ]),
                        createVNode("div", { class: "p-4" }, [
                          _ctx.$page.props.auth.user.role === "Admin" ? (openBlock(), createBlock(_sfc_main$4, {
                            key: 0,
                            user: _ctx.$page.props.user
                          }, null, 8, ["user"])) : createCommentVNode("", true),
                          _ctx.$page.props.auth.user.role === "Student" ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            student: _ctx.$page.props.student
                          }, null, 8, ["student"])) : createCommentVNode("", true)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
