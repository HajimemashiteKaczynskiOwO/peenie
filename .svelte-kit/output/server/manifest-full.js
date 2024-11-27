export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","images/calm.gif","images/calmy.png","images/fact.png","images/gem.png","images/parlor.jpg","images/peace.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Di-6PIDF.js","app":"_app/immutable/entry/app.CpIdfqiN.js","imports":["_app/immutable/entry/start.Di-6PIDF.js","_app/immutable/chunks/entry.74Hx0qWc.js","_app/immutable/chunks/scheduler.C71Ry-YS.js","_app/immutable/chunks/index.B7PCMYKV.js","_app/immutable/chunks/paths.CtUz56zb.js","_app/immutable/entry/app.CpIdfqiN.js","_app/immutable/chunks/scheduler.C71Ry-YS.js","_app/immutable/chunks/index.Bi00ghpL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/maf",
				pattern: /^\/maf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photoapp",
				pattern: /^\/photoapp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/shoppinglist",
				pattern: /^\/shoppinglist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
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
