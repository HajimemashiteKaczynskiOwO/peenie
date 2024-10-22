import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D182rOce.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.ZIBYT5Ou.js","_app/immutable/chunks/paths.6emjlPG9.js"];
export const stylesheets = ["_app/immutable/assets/0.BgI2vPp2.css"];
export const fonts = [];
