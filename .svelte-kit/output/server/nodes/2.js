

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CFaUVTsj.js","_app/immutable/chunks/scheduler.C7I-Luai.js","_app/immutable/chunks/index.CDPvuN8m.js"];
export const stylesheets = ["_app/immutable/assets/2.CdkYyiIj.css"];
export const fonts = [];
