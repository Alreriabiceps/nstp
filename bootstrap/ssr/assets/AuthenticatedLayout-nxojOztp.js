import { useSSRContext, onMounted, onUnmounted, computed, ref, mergeProps, unref, withCtx, renderSlot, createVNode, createTextVNode, openBlock, createBlock, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Link } from "@inertiajs/vue3";
import { u as useThemeStore, _ as _sfc_main$7 } from "./ThemeToggle-BCMWITtz.js";
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<template${ssrRenderAttrs(_attrs)}><img src="/logo/eca-logo.png" alt="Logo" height="45" width="45"></template>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white dark:bg-gray-800"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "get"
    },
    as: {
      type: String,
      default: "a"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as === "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition duration-150 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          method: __props.method,
          as: "button",
          class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition duration-150 ease-in-out"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    },
    as: {
      type: String,
      default: "inertia"
    },
    method: {
      type: String,
      default: "get"
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as === "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-start"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          method: __props.method,
          as: "button",
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "LogoutLink",
  __ssrInlineRender: true,
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const classes = props.isMobile ? "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out" : "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition duration-150 ease-in-out";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="${ssrRenderClass(unref(classes))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Log Out`);
      }, _push, _parent);
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LogoutLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><div class="flex flex-col flex-grow bg-gray-100 dark:bg-gray-900"><nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.$page.props.auth.user.role == "Admin" ? _ctx.route("dashboard") : _ctx.route("certificate")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "max-h-11 block fill-current text-gray-800 dark:text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "max-h-11 block fill-current text-gray-800 dark:text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.auth.user.role == "Admin") {
        _push(`<div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Dashboard `);
            } else {
              return [
                createTextVNode(" Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          href: _ctx.route("students.index"),
          active: _ctx.route().current("students.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Students `);
            } else {
              return [
                createTextVNode(" Students ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          href: _ctx.route("courses.index"),
          active: _ctx.route().current("courses.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Courses `);
            } else {
              return [
                createTextVNode(" Courses ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          href: _ctx.route("nstp.status"),
          active: _ctx.route().current("nstp.status")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` NSTP Status `);
            } else {
              return [
                createTextVNode(" NSTP Status ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          href: _ctx.route("certificate"),
          active: _ctx.route().current("certificate")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Certificate `);
            } else {
              return [
                createTextVNode(" Certificate ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="hidden sm:flex sm:items-center sm:ms-6"><div class="mr-4">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div><div class="ms-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex items-center rounded-md"${_scopeId}><div class="flex items-center"${_scopeId}><div class="h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-2 flex-shrink-0"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.image) {
              _push2(`<img${ssrRenderAttr("src", `/storage/${_ctx.$page.props.auth.user.image}`)} class="h-full w-full object-cover" alt="Profile Photo"${_scopeId}>`);
            } else {
              _push2(`<div class="h-full w-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900"${_scopeId}><span class="text-indigo-800 dark:text-indigo-200 text-sm font-bold"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name.charAt(0).toUpperCase() : "")}</span></div>`);
            }
            _push2(`</div><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"${_scopeId}><div class="text-left mr-1"${_scopeId}><div class="font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name + " " + (_ctx.$page.props.auth.user.last_name || "") : _ctx.$page.props.auth.user.username)}</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.role)}</div></div><svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></div></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex items-center rounded-md" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-2 flex-shrink-0" }, [
                    _ctx.$page.props.auth.user.image ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: `/storage/${_ctx.$page.props.auth.user.image}`,
                      class: "h-full w-full object-cover",
                      alt: "Profile Photo"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "h-full w-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900"
                    }, [
                      createVNode("span", { class: "text-indigo-800 dark:text-indigo-200 text-sm font-bold" }, toDisplayString(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name.charAt(0).toUpperCase() : ""), 1)
                    ]))
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  }, [
                    createVNode("div", { class: "text-left mr-1" }, [
                      createVNode("div", { class: "font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name + " " + (_ctx.$page.props.auth.user.last_name || "") : _ctx.$page.props.auth.user.username), 1),
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$page.props.auth.user.role), 1)
                    ]),
                    (openBlock(), createBlock("svg", {
                      class: "ms-2 -me-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              href: _ctx.route("logout")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$1, {
                href: _ctx.route("logout")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500 dark:focus:text-gray-200 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value
      }, "sm:hidden"])}">`);
      if (_ctx.$page.props.auth.user.role === "Admin") {
        _push(`<div class="pt-2 pb-3 space-y-1">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Dashboard `);
            } else {
              return [
                createTextVNode(" Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          href: _ctx.route("students.index"),
          active: _ctx.route().current("students.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Students `);
            } else {
              return [
                createTextVNode(" Students ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          href: _ctx.route("courses.index"),
          active: _ctx.route().current("courses.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Courses `);
            } else {
              return [
                createTextVNode(" Courses ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          href: _ctx.route("nstp.status"),
          active: _ctx.route().current("nstp.status")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` NSTP Status `);
            } else {
              return [
                createTextVNode(" NSTP Status ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700"><div class="px-4 flex items-center"><div class="h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-3 flex-shrink-0">`);
      if (_ctx.$page.props.auth.user.image) {
        _push(`<img${ssrRenderAttr("src", `/storage/${_ctx.$page.props.auth.user.image}`)} class="h-full w-full object-cover" alt="Profile Photo">`);
      } else {
        _push(`<div class="h-full w-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900"><span class="text-indigo-800 dark:text-indigo-200 text-sm font-bold">${ssrInterpolate(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name.charAt(0).toUpperCase() : "")}</span></div>`);
      }
      _push(`</div><div><div class="font-medium text-base text-gray-800 dark:text-gray-200">${ssrInterpolate(_ctx.$page.props.auth.user.first_name ? _ctx.$page.props.auth.user.first_name + " " + (_ctx.$page.props.auth.user.last_name || "") : _ctx.$page.props.auth.user.username)}</div><div class="font-medium text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { isMobile: true }, null, _parent));
      _push(`<div class="px-4 py-2 flex items-center"><span class="text-sm text-gray-600 dark:text-gray-400 mr-2">Theme:</span>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div></div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white dark:bg-gray-800 shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="flex-grow pb-16">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div><footer class="sticky bottom-0 w-full bg-gray-200 dark:bg-gray-800 py-4 border-t border-gray-300 dark:border-gray-700 z-10"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center text-gray-500 dark:text-gray-400"> Nstp Web-based Profile Management System 2024. © All rights reserved. <div class="mt-1"><a href="https://www.linkedin.com/in/russelle-roxas-173831334/" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer"> Russelle Roxas </a><span class="mx-2">•</span><a href="https://ph.linkedin.com/in/pangilinan-mariella-faye-c-617478364" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer"> Mariella Faye Pangilinan </a><span class="mx-2">•</span><a href="https://ph.linkedin.com/in/dane-paguinto-663478364" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer"> Denmark Paguinto </a></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
