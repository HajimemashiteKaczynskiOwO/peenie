

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ovwTkCqH.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.BpjUPigT.js"];
export const stylesheets = ["_app/immutable/assets/2.BoQhueyA.css"];
export const fonts = [];
