import { g as get_store_value, c as create_ssr_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import hljs from "highlight.js/lib/core";
import { w as writable, r as readable } from "../../chunks/index.js";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
import { e as escape } from "../../chunks/escape.js";
const storeHighlightJs = writable(void 0);
const storePopup = writable(void 0);
const stores = {};
function localStorageStore(key, initialValue, options) {
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  storeHighlightJs.set(hljs);
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  return `<nav data-svelte-h="svelte-tgwt5d"><a href="${escape(base, true) + "/"}"><b>Beautiful House</b></a> <a href="${escape(base, true) + "/photoapp"}"><b>The Wondrous and Amazing Photo App</b></a> <a href="${escape(base, true) + "/about"}">About</a> <a href="/maf"></a></nav>  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
