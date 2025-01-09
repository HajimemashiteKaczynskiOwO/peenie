import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D8uC62La.js","_app/immutable/chunks/scheduler.CxAnwkWf.js","_app/immutable/chunks/index.D6RuoAkh.js","_app/immutable/chunks/paths.B84JFsMd.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js","_app/immutable/chunks/index.DIofH2Xi.js"];
export const stylesheets = ["_app/immutable/assets/0.CEqtCXYk.css"];
export const fonts = [];
