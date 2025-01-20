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
		client: {"start":"_app/immutable/entry/start.dESiEO8u.js","app":"_app/immutable/entry/app.BWvNCdWW.js","imports":["_app/immutable/entry/start.dESiEO8u.js","_app/immutable/chunks/entry.CI8IauIy.js","_app/immutable/chunks/scheduler.C7I-Luai.js","_app/immutable/chunks/index.DAK7eFfL.js","_app/immutable/chunks/paths.BQLCjYGo.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BWvNCdWW.js","_app/immutable/chunks/scheduler.C7I-Luai.js","_app/immutable/chunks/index.CSBj2gkp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/maf",
				pattern: /^\/maf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/memory",
				pattern: /^\/memory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/photoapp",
				pattern: /^\/photoapp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/search/[pokemon]",
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: [{"name":"pokemon","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,4,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/shoppinglist",
				pattern: /^\/shoppinglist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
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
