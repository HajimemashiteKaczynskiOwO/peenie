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
const css$1 = {
  code: "body,html{margin:0%;padding:0%;height:100vh;width:100vw}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<nav>\\n\\t<a href=\\"{base}/\\"><b>Beautiful House</b></a>\\n\\t<a href=\\"{base}/photoapp\\"><b>The Wondrous and Amazing Photo App</b></a>\\n\\t<a href=\\"{base}/about\\">About</a>\\n\\t<a href=\\"https://soyjak.party/caca/\\"> </a>\\n\\t\\n\\n</nav>\\n<script>\\n\\timport '../app.postcss';\\n\\timport { base } from '$app/paths';\\n\\t// Highlight JS\\n\\timport hljs from 'highlight.js/lib/core';\\n\\timport 'highlight.js/styles/github-dark.css';\\n\\timport { storeHighlightJs } from '@skeletonlabs/skeleton';\\n\\timport xml from 'highlight.js/lib/languages/xml'; // for HTML\\n\\timport css from 'highlight.js/lib/languages/css';\\n\\timport javascript from 'highlight.js/lib/languages/javascript';\\n\\timport typescript from 'highlight.js/lib/languages/typescript';\\n\\n\\thljs.registerLanguage('xml', xml); // for HTML\\n\\thljs.registerLanguage('css', css);\\n\\thljs.registerLanguage('javascript', javascript);\\n\\thljs.registerLanguage('typescript', typescript);\\n\\tstoreHighlightJs.set(hljs);\\n\\n\\t// Floating UI for Popups\\n\\timport { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';\\n\\timport { storePopup } from '@skeletonlabs/skeleton';\\n\\tstorePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });\\n<\/script>\\n<style>\\n\\n:global(body), :global(html){\\nmargin: 0%;\\npadding: 0%;\\nheight: 100vh;\\nwidth: 100vw;\\n}    \\n\\n</style>\\n\\n<slot />\\n"],"names":[],"mappings":"AAiCQ,IAAK,CAAU,IAAK,CAC5B,MAAM,CAAE,EAAE,CACV,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACP"}`
};
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
  $$result.css.add(css$1);
  return `<nav data-svelte-h="svelte-c2ratu"><a href="${escape(base, true) + "/"}"><b>Beautiful House</b></a> <a href="${escape(base, true) + "/photoapp"}"><b>The Wondrous and Amazing Photo App</b></a> <a href="${escape(base, true) + "/about"}">About</a> <a href="https://soyjak.party/caca/"></a></nav>   ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
