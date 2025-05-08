import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useThemeStore, _ as _sfc_main$2 } from "./ThemeToggle-BCMWITtz.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<template${ssrRenderAttrs(_attrs)}><img src="/logo/nstp-logo.png" alt="Logo" height="200px" class="shadow-md rounded-full"></template>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NstpLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NstpLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900" }, _attrs))}><div class="flex-grow flex flex-col items-center justify-center py-6 pb-16"><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(NstpLogo, { class: "block fill-current text-gray-800 dark:text-white" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { class: "mt-2" }, null, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><footer class="sticky bottom-0 w-full py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-10"><div class="text-center text-gray-500 dark:text-gray-400 text-sm"> © 2024 NSTP Management System. All rights reserved. <div class="mt-1"><a href="https://www.linkedin.com/in/russelle-roxas-173831334/" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer"> Let&#39;s connect on LinkedIn! </a></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
