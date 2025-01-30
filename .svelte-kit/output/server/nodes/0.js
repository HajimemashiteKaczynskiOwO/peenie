import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B-no9fGY.js","_app/immutable/chunks/scheduler.B7_pnvhY.js","_app/immutable/chunks/index.CaQqG0vX.js","_app/immutable/chunks/paths.D6l-ACrB.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js"];
export const stylesheets = ["_app/immutable/assets/0.D7XSB962.css"];
export const fonts = [];
