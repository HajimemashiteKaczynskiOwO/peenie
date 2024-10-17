import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-pthbrd{margin:auto;width:80vw;height:70vh;display:grid;grid-template-columns:repeat(2,50%);overflow:hidden}div.svelte-pthbrd{margin:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<!--Delar upp sidan i två delar-->\\n<main>\\n\\t<div>\\n\\n<h1> squeazy peasy </h1>\\n<h2>super skiidi dibidi!</h2>\\n<h3>inspirerade mig för mitt memorial till george flowberry:</h3>\\n<img src=\\"src/pictures/parlor.jpg\\" alt=\\"xd\\" width=\\"500\\" height=\\"600\\"> \\n<h4>skibidibidibidbidbidbidbidbdibdi</h4>\\n<!--Under denna kommer vi lägga till fler element-->\\n\\n\\t</div>\\n<!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  \\n\\n</main>\\n\\n<style>\\n\\tmain{\\n\\t  /*Styling för att dela upp sidan i två delar. */\\n/*Vi kommer gå igenom detta i detalj senare*/\\nmargin: auto;\\nwidth: 80vw;\\nheight: 70vh;\\ndisplay: grid;\\ngrid-template-columns: repeat(2,50%);\\noverflow: hidden;\\n\\t}\\n\\tdiv{\\n/*Styling för att centrera texten i behållaren*/\\nmargin: auto;\\n\\t}\\n\\t</style>\\n"],"names":[],"mappings":"AAkBC,kBAAI,CAGL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,GAAG,CAAC,CACpC,QAAQ,CAAE,MACT,CACA,iBAAG,CAEJ,MAAM,CAAE,IACP"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-pthbrd" data-svelte-h="svelte-1gbi0fb"><div class="svelte-pthbrd"><h1>squeazy peasy</h1> <h2>super skiidi dibidi!</h2> <h3>inspirerade mig för mitt memorial till george flowberry:</h3> <img src="src/pictures/parlor.jpg" alt="xd" width="500" height="600"> <h4>skibidibidibidbidbidbidbidbdibdi</h4> </div>  </main>`;
});
export {
  Page as default
};
