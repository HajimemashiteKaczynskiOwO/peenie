

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BJ4h5PL5.js","_app/immutable/chunks/scheduler.B7_pnvhY.js","_app/immutable/chunks/index.CaQqG0vX.js"];
export const stylesheets = ["_app/immutable/assets/2.CdkYyiIj.css"];
export const fonts = [];
