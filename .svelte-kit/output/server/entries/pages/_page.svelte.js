import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-rm6k6h{margin:auto;width:80vw;height:70vh;display:grid;grid-template-columns:repeat(2,50%);overflow:hidden}h1.svelte-rm6k6h{color:red}h2.svelte-rm6k6h{color:rgb(0, 241, 245)}h3.svelte-rm6k6h{color:brown}div.svelte-rm6k6h{margin:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<!--Delar upp sidan i två delar-->\\n<main>\\n\\t<div>\\n\\n\\t\\t<h1> <strong>George Flowberry</strong> </h1>\\n<h2>Since my time in Tilted Towers.. I have figured out how to successfully fabricate a 20 dollar vbuck card...!</h2>\\n<h3>This is how i Did it, follow my guide at this link: </h3><p>\\n<a href=\\"/photoapp\\"><b>The Wondrous and Amazing Photo App</b></a> </p>\\n<!--Under denna kommer vi lägga till fler element-->\\n\\n<p id=\\"inspo\\">\\n    \\"We need to build a reinforced metal wall.\\" - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.\\n</p>\\n\\n<p>\\n    \\"I Actually came here just to pick up a Slurpfish.\\" - <span>EatDatSlurpfish445, Pedophile.</span>.\\n</p>\\n.\\n.\\n.\\n<!-- Lägg till detta inom <style>-taggen -->\\n\\n\\t</div>\\n<!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  \\n\\n\\n</main>\\n<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 1440 320\\"><path fill=\\"#5000ca\\" fill-opacity=\\"1\\" d=\\"M0,0L7.1,16C14.1,32,28,64,42,101.3C56.5,139,71,181,85,218.7C98.8,256,113,288,127,266.7C141.2,245,155,171,169,122.7C183.5,75,198,53,212,74.7C225.9,96,240,160,254,197.3C268.2,235,282,245,296,229.3C310.6,213,325,171,339,165.3C352.9,160,367,192,381,213.3C395.3,235,409,245,424,245.3C437.6,245,452,235,466,224C480,213,494,203,508,165.3C522.4,128,536,64,551,53.3C564.7,43,579,85,593,112C607.1,139,621,149,635,181.3C649.4,213,664,267,678,277.3C691.8,288,706,256,720,256C734.1,256,748,288,762,293.3C776.5,299,791,277,805,261.3C818.8,245,833,235,847,202.7C861.2,171,875,117,889,85.3C903.5,53,918,43,932,69.3C945.9,96,960,160,974,176C988.2,192,1002,160,1016,133.3C1030.6,107,1045,85,1059,74.7C1072.9,64,1087,64,1101,58.7C1115.3,53,1129,43,1144,58.7C1157.6,75,1172,117,1186,144C1200,171,1214,181,1228,176C1242.4,171,1256,149,1271,165.3C1284.7,181,1299,235,1313,218.7C1327.1,203,1341,117,1355,117.3C1369.4,117,1384,203,1398,234.7C1411.8,267,1426,245,1433,234.7L1440,224L1440,320L1432.9,320C1425.9,320,1412,320,1398,320C1383.5,320,1369,320,1355,320C1341.2,320,1327,320,1313,320C1298.8,320,1285,320,1271,320C1256.5,320,1242,320,1228,320C1214.1,320,1200,320,1186,320C1171.8,320,1158,320,1144,320C1129.4,320,1115,320,1101,320C1087.1,320,1073,320,1059,320C1044.7,320,1031,320,1016,320C1002.4,320,988,320,974,320C960,320,946,320,932,320C917.6,320,904,320,889,320C875.3,320,861,320,847,320C832.9,320,819,320,805,320C790.6,320,776,320,762,320C748.2,320,734,320,720,320C705.9,320,692,320,678,320C663.5,320,649,320,635,320C621.2,320,607,320,593,320C578.8,320,565,320,551,320C536.5,320,522,320,508,320C494.1,320,480,320,466,320C451.8,320,438,320,424,320C409.4,320,395,320,381,320C367.1,320,353,320,339,320C324.7,320,311,320,296,320C282.4,320,268,320,254,320C240,320,226,320,212,320C197.6,320,184,320,169,320C155.3,320,141,320,127,320C112.9,320,99,320,85,320C70.6,320,56,320,42,320C28.2,320,14,320,7,320L0,320Z\\" style=\\"--darkreader-inline-fill: #3a0092;\\" data-darkreader-inline-fill=\\"\\"></path></svg>\\n<style>\\n\\tmain{\\n\\t  /*Styling för att dela upp sidan i två delar. */\\n/*Vi kommer gå igenom detta i detalj senare*/\\nmargin: auto;\\nwidth: 80vw;\\nheight: 70vh;\\ndisplay: grid;\\ngrid-template-columns: repeat(2,50%);\\noverflow: hidden;\\n\\t}\\nh1{\\n\\tcolor:red;\\n}\\nh2{\\n\\tcolor:rgb(0, 241, 245);\\n}\\nh3{\\n\\tcolor:brown;\\n}\\n\\tdiv{\\n/*Styling för att centrera texten i behållaren*/\\nmargin: auto;\\n\\t}\\n\\n\\t</style>\\n\\n\\n"],"names":[],"mappings":"AA8BC,kBAAI,CAGL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,GAAG,CAAC,CACpC,QAAQ,CAAE,MACT,CACD,gBAAE,CACD,MAAM,GACP,CACA,gBAAE,CACD,MAAM,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACtB,CACA,gBAAE,CACD,MAAM,KACP,CACC,iBAAG,CAEJ,MAAM,CAAE,IACP"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-rm6k6h" data-svelte-h="svelte-g9vsrh"><div class="svelte-rm6k6h"><h1 class="svelte-rm6k6h"><strong>George Flowberry</strong></h1> <h2 class="svelte-rm6k6h">Since my time in Tilted Towers.. I have figured out how to successfully fabricate a 20 dollar vbuck card...!</h2> <h3 class="svelte-rm6k6h">This is how i Did it, follow my guide at this link: </h3><p><a href="/photoapp"><b>The Wondrous and Amazing Photo App</b></a></p>  <p id="inspo">&quot;We need to build a reinforced metal wall.&quot; - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.</p> <p>&quot;I Actually came here just to pick up a Slurpfish.&quot; - <span>EatDatSlurpfish445, Pedophile.</span>.</p>
.
.
.
</div> </main> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,0L7.1,16C14.1,32,28,64,42,101.3C56.5,139,71,181,85,218.7C98.8,256,113,288,127,266.7C141.2,245,155,171,169,122.7C183.5,75,198,53,212,74.7C225.9,96,240,160,254,197.3C268.2,235,282,245,296,229.3C310.6,213,325,171,339,165.3C352.9,160,367,192,381,213.3C395.3,235,409,245,424,245.3C437.6,245,452,235,466,224C480,213,494,203,508,165.3C522.4,128,536,64,551,53.3C564.7,43,579,85,593,112C607.1,139,621,149,635,181.3C649.4,213,664,267,678,277.3C691.8,288,706,256,720,256C734.1,256,748,288,762,293.3C776.5,299,791,277,805,261.3C818.8,245,833,235,847,202.7C861.2,171,875,117,889,85.3C903.5,53,918,43,932,69.3C945.9,96,960,160,974,176C988.2,192,1002,160,1016,133.3C1030.6,107,1045,85,1059,74.7C1072.9,64,1087,64,1101,58.7C1115.3,53,1129,43,1144,58.7C1157.6,75,1172,117,1186,144C1200,171,1214,181,1228,176C1242.4,171,1256,149,1271,165.3C1284.7,181,1299,235,1313,218.7C1327.1,203,1341,117,1355,117.3C1369.4,117,1384,203,1398,234.7C1411.8,267,1426,245,1433,234.7L1440,224L1440,320L1432.9,320C1425.9,320,1412,320,1398,320C1383.5,320,1369,320,1355,320C1341.2,320,1327,320,1313,320C1298.8,320,1285,320,1271,320C1256.5,320,1242,320,1228,320C1214.1,320,1200,320,1186,320C1171.8,320,1158,320,1144,320C1129.4,320,1115,320,1101,320C1087.1,320,1073,320,1059,320C1044.7,320,1031,320,1016,320C1002.4,320,988,320,974,320C960,320,946,320,932,320C917.6,320,904,320,889,320C875.3,320,861,320,847,320C832.9,320,819,320,805,320C790.6,320,776,320,762,320C748.2,320,734,320,720,320C705.9,320,692,320,678,320C663.5,320,649,320,635,320C621.2,320,607,320,593,320C578.8,320,565,320,551,320C536.5,320,522,320,508,320C494.1,320,480,320,466,320C451.8,320,438,320,424,320C409.4,320,395,320,381,320C367.1,320,353,320,339,320C324.7,320,311,320,296,320C282.4,320,268,320,254,320C240,320,226,320,212,320C197.6,320,184,320,169,320C155.3,320,141,320,127,320C112.9,320,99,320,85,320C70.6,320,56,320,42,320C28.2,320,14,320,7,320L0,320Z" style="--darkreader-inline-fill: #3a0092;" data-darkreader-inline-fill=""></path></svg>`;
});
export {
  Page as default
};
