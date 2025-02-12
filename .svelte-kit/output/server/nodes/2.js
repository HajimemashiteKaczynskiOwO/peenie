

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B0LIkh53.js","_app/immutable/chunks/scheduler.Bs8F_AUP.js","_app/immutable/chunks/index.B5tQNggO.js"];
export const stylesheets = ["_app/immutable/assets/2.CdkYyiIj.css"];
export const fonts = [];
