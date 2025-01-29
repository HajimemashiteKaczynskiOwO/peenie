export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/about": [6],
		"/chat": [7],
		"/diffShit": [8],
		"/diffShit/finished": [9],
		"/diffShit/registerPage": [10],
		"/login": [11],
		"/maf": [12],
		"/memory": [13],
		"/photoapp": [14],
		"/register": [15],
		"/search": [16,[2]],
		"/search/[pokemon]": [17,[2,3],[,4]],
		"/shoppinglist": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';