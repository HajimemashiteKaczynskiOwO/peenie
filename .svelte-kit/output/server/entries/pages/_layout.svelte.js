import { g as get_store_value, c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import hljs from "highlight.js/lib/core";
import { w as writable, r as readable } from "../../chunks/index2.js";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
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
  code: 'div.svelte-1t5ubfh{background-image:url("https://64.media.tumblr.com/1ab78cb3a68fda2be8acb21ac2dd4cbc/tumblr_o2vkno6Isj1tn9inco1_r1_540.gifv");background-size:stretch;width:auto;height:auto}.links.svelte-1t5ubfh{display:flex;align-items:center;justify-content:space-evenly;color:white}a.svelte-1t5ubfh{padding:10px;padding-top:10px;margin-right:10px;margin-left:10px}body,html{margin:0%;padding:0%;height:100vh;width:100vw}',
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<nav>\\n\\t<div class=\\"links\\">\\n\\t\\t<a href=\\"{base}/\\"><b>Beautiful House</b></a>\\n\\t\\t<a href=\\"{base}/photoapp\\"><b>The Wondrous and Amazing Photo App</b></a>\\n\\t\\t<a href=\\"{base}/shoppinglist\\"><b>Shopping List</b></a>\\n\\t\\t<a href=\\"{base}/search\\"><b>Search</b></a>\\n\\t\\t<a href=\\"{base}/register\\"><b>Register</b></a>\\n\\t\\t<a href=\\"{base}/login\\"><b>Login</b></a>\\n\\t\\t<a href=\\"{base}/memory\\"><b>Memory</b></a>\\n\\t\\t<a href=\\"{base}/chat\\"><b>DroydAI</b></a>\\n\\t</div>\\n\\t\\n\\n</nav>\\n<script>\\n\\timport '../app.postcss';\\n\\timport { base } from '$app/paths';\\n\\t// Highlight JS\\n\\timport hljs from 'highlight.js/lib/core';\\n\\timport 'highlight.js/styles/github-dark.css';\\n\\timport { storeHighlightJs } from '@skeletonlabs/skeleton';\\n\\timport xml from 'highlight.js/lib/languages/xml'; // for HTML\\n\\timport css from 'highlight.js/lib/languages/css';\\n\\timport javascript from 'highlight.js/lib/languages/javascript';\\n\\timport typescript from 'highlight.js/lib/languages/typescript';\\n\\n\\thljs.registerLanguage('xml', xml); // for HTML\\n\\thljs.registerLanguage('css', css);\\n\\thljs.registerLanguage('javascript', javascript);\\n\\thljs.registerLanguage('typescript', typescript);\\n\\tstoreHighlightJs.set(hljs);\\n\\n\\t// Floating UI for Popups\\n\\timport { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';\\n\\timport { storePopup } from '@skeletonlabs/skeleton';\\n\\tstorePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });\\n<\/script>\\n<style>\\ndiv{\\n\\tbackground-image: url(\\"https://64.media.tumblr.com/1ab78cb3a68fda2be8acb21ac2dd4cbc/tumblr_o2vkno6Isj1tn9inco1_r1_540.gifv\\");\\n        background-size:stretch;\\n        width: auto;\\n        height: auto;\\n}\\n.links {\\ndisplay:flex;\\nalign-items: center;\\njustify-content: space-evenly;\\ncolor:white;\\n}\\na{\\n\\tpadding:10px;\\n\\tpadding-top:10px;\\n\\n\\tmargin-right: 10px;\\n\\tmargin-left:10px;\\n}\\n\\n:global(body), :global(html){\\nmargin: 0%;\\npadding: 0%;\\nheight: 100vh;\\nwidth: 100vw;\\n}    \\n</style>\\n\\n<slot />\\n"],"names":[],"mappings":"AAsCA,kBAAG,CACF,gBAAgB,CAAE,0GAA0G,CACrH,gBAAgB,OAAO,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAChB,CACA,qBAAO,CACP,QAAQ,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,YAAY,CAC7B,MAAM,KACN,CACA,gBAAC,CACA,QAAQ,IAAI,CACZ,YAAY,IAAI,CAEhB,YAAY,CAAE,IAAI,CAClB,YAAY,IACb,CAEQ,IAAK,CAAU,IAAK,CAC5B,MAAM,CAAE,EAAE,CACV,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACP"}`
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
  return `<nav data-svelte-h="svelte-nq4m1z"><div class="links svelte-1t5ubfh"><a href="${escape(base, true) + "/"}" class="svelte-1t5ubfh"><b>Beautiful House</b></a> <a href="${escape(base, true) + "/photoapp"}" class="svelte-1t5ubfh"><b>The Wondrous and Amazing Photo App</b></a> <a href="${escape(base, true) + "/shoppinglist"}" class="svelte-1t5ubfh"><b>Shopping List</b></a> <a href="${escape(base, true) + "/search"}" class="svelte-1t5ubfh"><b>Search</b></a> <a href="${escape(base, true) + "/register"}" class="svelte-1t5ubfh"><b>Register</b></a> <a href="${escape(base, true) + "/login"}" class="svelte-1t5ubfh"><b>Login</b></a> <a href="${escape(base, true) + "/memory"}" class="svelte-1t5ubfh"><b>Memory</b></a> <a href="${escape(base, true) + "/chat"}" class="svelte-1t5ubfh"><b>DroydAI</b></a></div></nav>   ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
