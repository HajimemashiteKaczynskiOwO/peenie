export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CsP2aAfV.js","app":"_app/immutable/entry/app.D8kG3JGD.js","imports":["_app/immutable/entry/start.CsP2aAfV.js","_app/immutable/chunks/entry.BmXqya_i.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.BJO6p95h.js","_app/immutable/entry/app.D8kG3JGD.js","_app/immutable/chunks/scheduler.DZs670Vv.js","_app/immutable/chunks/index.Di7sCZ5T.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
