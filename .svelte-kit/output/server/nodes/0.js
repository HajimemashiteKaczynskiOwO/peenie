import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ByGoAQbg.js","_app/immutable/chunks/scheduler.C7I-Luai.js","_app/immutable/chunks/index.C5Gq5ESH.js","_app/immutable/chunks/paths.Ddmgs5xB.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js"];
export const stylesheets = ["_app/immutable/assets/0.D7XSB962.css"];
export const fonts = [];
