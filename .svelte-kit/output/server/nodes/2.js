

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Ciu0GbrY.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.ZIBYT5Ou.js"];
export const stylesheets = ["_app/immutable/assets/2.CPso3iBf.css"];
export const fonts = [];
