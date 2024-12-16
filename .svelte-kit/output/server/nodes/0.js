import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BThhX4Vn.js","_app/immutable/chunks/scheduler.BtxPl-uW.js","_app/immutable/chunks/index.DCzoMOBC.js","_app/immutable/chunks/paths.Ci6VNGXn.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js","_app/immutable/chunks/index.Cs6ubN1V.js"];
export const stylesheets = ["_app/immutable/assets/0.C8eCTZHW.css"];
export const fonts = [];
