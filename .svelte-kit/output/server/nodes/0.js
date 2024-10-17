import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.jkppXWgM.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.Di7sCZ5T.js","_app/immutable/chunks/index.BJO6p95h.js"];
export const stylesheets = ["_app/immutable/assets/0.BNJR5tEq.css"];
export const fonts = [];
