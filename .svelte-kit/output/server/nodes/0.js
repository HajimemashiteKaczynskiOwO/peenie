import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DhILvrkx.js","_app/immutable/chunks/scheduler.be47Yvb9.js","_app/immutable/chunks/index.DoppXiCa.js","_app/immutable/chunks/paths.GXY8i-_z.js","_app/immutable/chunks/index.Rte9RDnY.js"];
export const stylesheets = ["_app/immutable/assets/0.8fBd-yRf.css"];
export const fonts = [];
