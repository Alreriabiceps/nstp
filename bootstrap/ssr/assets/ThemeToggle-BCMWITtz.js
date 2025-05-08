import { ref, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "@inertiajs/vue3";
const useThemeStore = () => {
  const theme = ref(localStorage.getItem("theme") || "light");
  watch(theme, (newTheme) => {
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, { immediate: true });
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };
  return {
    theme,
    toggleTheme
  };
};
const _sfc_main = {
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme, toggleTheme } = useThemeStore();
    const isDark = computed(() => theme.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "transition-colors duration-200 rounded-full p-2 dark:text-white text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700",
        title: isDark.value ? "Switch to light mode" : "Switch to dark mode"
      }, _attrs))}>`);
      if (isDark.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  useThemeStore as u
};
