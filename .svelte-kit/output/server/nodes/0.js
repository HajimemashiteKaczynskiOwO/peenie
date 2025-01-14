import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DuQpQm4V.js","_app/immutable/chunks/scheduler.C7I-Luai.js","_app/immutable/chunks/index.BT20E9VO.js","_app/immutable/chunks/paths.CKrZfdGM.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js","_app/immutable/chunks/index.DAK7eFfL.js"];
export const stylesheets = ["_app/immutable/assets/0.4vGPvzaR.css"];
export const fonts = [];
