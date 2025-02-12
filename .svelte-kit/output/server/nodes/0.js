import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DZ2fG4Fq.js","_app/immutable/chunks/scheduler.Bs8F_AUP.js","_app/immutable/chunks/index.B5tQNggO.js","_app/immutable/chunks/paths.DxYfk_L2.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js","_app/immutable/chunks/index.Cq4WKqZ9.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.C2kRxfa2.js"];
export const stylesheets = ["_app/immutable/assets/0.w2kadNvS.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];
