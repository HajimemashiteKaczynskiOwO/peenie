import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.F4i5YwNz.js","_app/immutable/chunks/scheduler.C71Ry-YS.js","_app/immutable/chunks/index.Bi00ghpL.js","_app/immutable/chunks/paths.CtUz56zb.js","_app/immutable/chunks/index.B7PCMYKV.js"];
export const stylesheets = ["_app/immutable/assets/0.8fBd-yRf.css"];
export const fonts = [];
