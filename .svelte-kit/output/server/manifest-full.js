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
		client: {"start":"_app/immutable/entry/start.BWUwh1dl.js","app":"_app/immutable/entry/app.DFoNYIk6.js","imports":["_app/immutable/entry/start.BWUwh1dl.js","_app/immutable/chunks/entry.BGED86A5.js","_app/immutable/chunks/scheduler.be47Yvb9.js","_app/immutable/chunks/index.Rte9RDnY.js","_app/immutable/chunks/paths.GXY8i-_z.js","_app/immutable/entry/app.DFoNYIk6.js","_app/immutable/chunks/scheduler.be47Yvb9.js","_app/immutable/chunks/index.DoppXiCa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
