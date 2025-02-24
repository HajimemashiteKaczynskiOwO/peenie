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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/about": [6],
		"/chat": [7],
		"/login": [8],
		"/maf": [9],
		"/memory": [10],
		"/photoapp": [11],
		"/register": [12],
		"/search": [13,[2]],
		"/search/[pokemon]": [14,[2,3],[,4]],
		"/shoppinglist": [15],
		"/trials": [16],
		"/trials/diffShit": [17],
		"/trials/diffShit/finished": [18],
		"/trials/diffShit/registerPage": [19],
		"/trials/elStore": [20],
		"/trials/snakelog": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';