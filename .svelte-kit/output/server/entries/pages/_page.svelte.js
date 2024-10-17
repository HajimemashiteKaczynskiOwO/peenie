import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-pthbrd{margin:auto;width:80vw;height:70vh;display:grid;grid-template-columns:repeat(2,50%);overflow:hidden}div.svelte-pthbrd{margin:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<!--Delar upp sidan i två delar-->\\n<main>\\n\\t<div>\\n\\n\\t\\t<h1> <b>George Flowberry</b> </h1>\\n<h2>Since my time in Tilted Towres.. I have figured out how to successfully fabricate a 20 dollar vbuck card...!</h2>\\n<h3>This is how i Did it:</h3>\\n<!--Under denna kommer vi lägga till fler element-->\\n\\n<p id=\\"inspo\\">\\n    \\"We need to build a reinforced metal wall.\\" - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.\\n</p>\\n\\n<p style=\\"background-color:pink\\">\\n    \\"I Actually came here just to pick up a Slurpfish.\\" - <span>EatDatSlurpfish445, Pedophile.</span>.\\n</p>\\n.\\n.\\n.\\n<!-- Lägg till detta inom <style>-taggen -->\\n\\n\\t</div>\\n<!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  \\n\\n</main>\\n\\n<style>\\n\\tmain{\\n\\t  /*Styling för att dela upp sidan i två delar. */\\n/*Vi kommer gå igenom detta i detalj senare*/\\nmargin: auto;\\nwidth: 80vw;\\nheight: 70vh;\\ndisplay: grid;\\ngrid-template-columns: repeat(2,50%);\\noverflow: hidden;\\n\\t}\\n\\tdiv{\\n/*Styling för att centrera texten i behållaren*/\\nmargin: auto;\\n\\t}\\n\\t</style>\\n"],"names":[],"mappings":"AA4BC,kBAAI,CAGL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,GAAG,CAAC,CACpC,QAAQ,CAAE,MACT,CACA,iBAAG,CAEJ,MAAM,CAAE,IACP"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-pthbrd" data-svelte-h="svelte-eaos8p"><div class="svelte-pthbrd"><h1><b>George Flowberry</b></h1> <h2>Since my time in Tilted Towres.. I have figured out how to successfully fabricate a 20 dollar vbuck card...!</h2> <h3>This is how i Did it:</h3>  <p id="inspo">&quot;We need to build a reinforced metal wall.&quot; - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.</p> <p style="background-color:pink">&quot;I Actually came here just to pick up a Slurpfish.&quot; - <span>EatDatSlurpfish445, Pedophile.</span>.</p>
.
.
.
</div>  </main>`;
});
export {
  Page as default
};
