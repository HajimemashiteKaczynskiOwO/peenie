import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-fsxgby{margin:auto;width:80vw;height:70vh;display:grid;grid-template-columns:repeat(2,50%);overflow:hidden}h1.svelte-fsxgby{color:rgb(4, 105, 220)}h2.svelte-fsxgby{color:rgb(0, 241, 245)}.calm.svelte-fsxgby{font-family:Arial, Helvetica, sans-serif;font-size:128px;margin-bottom:40px;margin-left:100px}div.svelte-fsxgby{margin:auto}#calm.svelte-fsxgby{margin-left:auto;margin-right:auto;margin-bottom:50px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<!--Delar upp sidan i två delar-->\\n<main>\\n\\t<div>\\n\\n\\t\\t<h1 class=\\"calm\\"> <strong>/calm/</strong> </h1>\\n<h2>\\"This is the greatest website of All Time\\" - Wet Charles</h2>\\n<!--Under denna kommer vi lägga till fler element-->\\n\\n<p id=\\"inspo\\">\\n    \\"We need to build a reinforced metal wall.\\" - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.\\n</p>\\n\\n<p>\\n    \\"I Actually came here just to pick up a Slurpfish.\\" - <span>EatDatSlurpfish445, Pedophile.</span>.\\n</p>\\n<iframe frameborder=\\"0\\" src=\\"https://itch.io/embed/2740255?bg_color=ffffff&amp;fg_color=000000&amp;link_color=4b92f3\\" width=\\"552\\" height=\\"167\\"><a href=\\"https://insanitial.itch.io/spitsadventure\\">DJ Spits Adventure by pingplong</a></iframe><!-- Lägg till detta inom <style>-taggen -->\\n\\n\\t</div>\\n<img id=\\"calm\\" src=\\"images/calm.gif\\" height=\\"700\\" width=\\"600\\" alt=\\"calm\\">\\n\\n\\n</main>\\n<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 1440 320\\"><path fill=\\"#2c8efd\\" fill-opacity=\\"1\\" d=\\"M0,192L9.2,186.7C18.5,181,37,171,55,192C73.8,213,92,267,111,250.7C129.2,235,148,149,166,149.3C184.6,149,203,235,222,234.7C240,235,258,149,277,122.7C295.4,96,314,128,332,160C350.8,192,369,224,388,240C406.2,256,425,256,443,224C461.5,192,480,128,498,128C516.9,128,535,192,554,218.7C572.3,245,591,235,609,224C627.7,213,646,203,665,202.7C683.1,203,702,213,720,229.3C738.5,245,757,267,775,250.7C793.8,235,812,181,831,160C849.2,139,868,149,886,128C904.6,107,923,53,942,58.7C960,64,978,128,997,176C1015.4,224,1034,256,1052,266.7C1070.8,277,1089,267,1108,224C1126.2,181,1145,107,1163,117.3C1181.5,128,1200,224,1218,224C1236.9,224,1255,128,1274,106.7C1292.3,85,1311,139,1329,170.7C1347.7,203,1366,213,1385,197.3C1403.1,181,1422,139,1431,117.3L1440,96L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z\\" style=\\"--darkreader-inline-fill: #024c9f;\\" data-darkreader-inline-fill=\\"\\"></path></svg><style>\\n\\n\\n\\tmain{\\n\\t  /*Styling för att dela upp sidan i två delar. */\\n/*Vi kommer gå igenom detta i detalj senare*/\\nmargin: auto;\\nwidth: 80vw;\\nheight: 70vh;\\ndisplay: grid;\\ngrid-template-columns: repeat(2,50%);\\noverflow: hidden;\\n\\t}\\nh1{\\n\\tcolor:rgb(4, 105, 220);\\n\\n}\\nh2{\\n\\tcolor:rgb(0, 241, 245);\\n}\\n.calm{\\n\\tfont-family: Arial, Helvetica, sans-serif;\\n\\tfont-size: 128px;\\n\\tmargin-bottom:40px;\\n\\tmargin-left: 100px;\\n}\\n\\n\\tdiv{\\n/*Styling för att centrera texten i behållaren*/\\nmargin: auto;\\n\\t}\\n\\n\\t#calm{\\n\\t\\tmargin-left:auto;\\n\\t\\tmargin-right:auto;\\n\\t\\tmargin-bottom: 50px;\\n\\t}\\n\\n\\t</style>\\n\\n\\n"],"names":[],"mappings":"AA0BC,kBAAI,CAGL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,GAAG,CAAC,CACpC,QAAQ,CAAE,MACT,CACD,gBAAE,CACD,MAAM,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAEtB,CACA,gBAAE,CACD,MAAM,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACtB,CACA,mBAAK,CACJ,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UAAU,CACzC,SAAS,CAAE,KAAK,CAChB,cAAc,IAAI,CAClB,WAAW,CAAE,KACd,CAEC,iBAAG,CAEJ,MAAM,CAAE,IACP,CAEA,mBAAK,CACJ,YAAY,IAAI,CAChB,aAAa,IAAI,CACjB,aAAa,CAAE,IAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-fsxgby" data-svelte-h="svelte-16umuke"><div class="svelte-fsxgby"><h1 class="calm svelte-fsxgby"><strong>/calm/</strong></h1> <h2 class="svelte-fsxgby">&quot;This is the greatest website of All Time&quot; - Wet Charles</h2>  <p id="inspo">&quot;We need to build a reinforced metal wall.&quot; - <strong>Donald Pump</strong>, The 45Th Victory Royale winner in Tilted Towers.</p> <p>&quot;I Actually came here just to pick up a Slurpfish.&quot; - <span>EatDatSlurpfish445, Pedophile.</span>.</p> <iframe frameborder="0" src="https://itch.io/embed/2740255?bg_color=ffffff&amp;fg_color=000000&amp;link_color=4b92f3" width="552" height="167"><a href="https://insanitial.itch.io/spitsadventure">DJ Spits Adventure by pingplong</a></iframe></div> <img id="calm" src="images/calm.gif" height="700" width="600" alt="calm" class="svelte-fsxgby"></main> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2c8efd" fill-opacity="1" d="M0,192L9.2,186.7C18.5,181,37,171,55,192C73.8,213,92,267,111,250.7C129.2,235,148,149,166,149.3C184.6,149,203,235,222,234.7C240,235,258,149,277,122.7C295.4,96,314,128,332,160C350.8,192,369,224,388,240C406.2,256,425,256,443,224C461.5,192,480,128,498,128C516.9,128,535,192,554,218.7C572.3,245,591,235,609,224C627.7,213,646,203,665,202.7C683.1,203,702,213,720,229.3C738.5,245,757,267,775,250.7C793.8,235,812,181,831,160C849.2,139,868,149,886,128C904.6,107,923,53,942,58.7C960,64,978,128,997,176C1015.4,224,1034,256,1052,266.7C1070.8,277,1089,267,1108,224C1126.2,181,1145,107,1163,117.3C1181.5,128,1200,224,1218,224C1236.9,224,1255,128,1274,106.7C1292.3,85,1311,139,1329,170.7C1347.7,203,1366,213,1385,197.3C1403.1,181,1422,139,1431,117.3L1440,96L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z" style="--darkreader-inline-fill: #024c9f;" data-darkreader-inline-fill=""></path></svg>`;
});
export {
  Page as default
};
