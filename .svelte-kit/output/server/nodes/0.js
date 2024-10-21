import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D9bSIbaU.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.DBd_pBat.js","_app/immutable/chunks/paths.BcLaRVmY.js"];
export const stylesheets = ["_app/immutable/assets/0.Covi_c_X.css"];
export const fonts = [];
