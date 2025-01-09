export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","images/1727730631300u.png","images/calm.gif","images/calmfly.png","images/calmy.png","images/droyda.png","images/droydCord.png","images/fact.png","images/gem.png","images/inans.png","images/parlor.jpg","images/peace.gif","images/pou.jpeg","images/screaming-baby-made-of-ash-v0-7nskgql0k1w91.webp","images/static-assets-upload10830305506337304706.webp","images/tits.webp","mp3/fauci.mp3","mp3/toujours.mp3"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BFRxnT2l.js","app":"_app/immutable/entry/app.Dqh9AVyc.js","imports":["_app/immutable/entry/start.BFRxnT2l.js","_app/immutable/chunks/entry.0pfXu50V.js","_app/immutable/chunks/scheduler.CxAnwkWf.js","_app/immutable/chunks/index.DIofH2Xi.js","_app/immutable/chunks/paths.B84JFsMd.js","_app/immutable/entry/app.Dqh9AVyc.js","_app/immutable/chunks/scheduler.CxAnwkWf.js","_app/immutable/chunks/index.D6RuoAkh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/maf",
				pattern: /^\/maf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/memory",
				pattern: /^\/memory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photoapp",
				pattern: /^\/photoapp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/shoppinglist",
				pattern: /^\/shoppinglist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
