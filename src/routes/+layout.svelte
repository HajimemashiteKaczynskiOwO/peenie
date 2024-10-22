<nav>
	<a href="{base}/"><b>Beautiful House</b></a>
	<a href="{base}/photoapp"><b>The Wondrous and Amazing Photo App</b></a>
	<a href="{base}/about">About</a>
	<a href="https://soyjak.party/caca/"> </a>
	

</nav>
<script>
	import '../app.postcss';
	import { base } from '$app/paths';
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<style>

:global(body), :global(html){
margin: 0%;
padding: 0%;
height: 100vh;
width: 100vw;
}    

</style>

<slot />
