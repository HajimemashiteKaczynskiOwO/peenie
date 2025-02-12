<nav>
	<div class="links">
		<a href="{base}/"><b>Beautiful House</b></a>
		<a href="{base}/photoapp"><b>The Wondrous and Amazing Photo App</b></a>
		<a href="{base}/shoppinglist"><b>Shopping List</b></a>
		<a href="{base}/search"><b>Pokésearch</b></a>
		<a href="{base}/register"><b>Register</b></a>
		<a href="{base}/login"><b>Login</b></a>
		<a href="{base}/memory"><b>Memory</b></a>
		<a href="{base}/chat"><b>DroydAI</b></a>
		<a href="{base}/trials"><b>Trials</b></a>
	</div>
	

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
div{
	background-image: url("https://64.media.tumblr.com/1ab78cb3a68fda2be8acb21ac2dd4cbc/tumblr_o2vkno6Isj1tn9inco1_r1_540.gifv");
        background-size:stretch;
        width: auto;
        height: auto;
}
.links {
display:flex;
align-items: center;
justify-content: space-evenly;
color:white;
}
a{
	padding:10px;
	padding-top:10px;

	margin-right: 10px;
	margin-left:10px;
}

:global(body), :global(html){
margin: 0%;
padding: 0%;
height: 100vh;
width: 100vw;
}    
@font-face {
	font-family: 'sixcaps';
	src: url('https://fonts.googleapis.com/css2?family=Six+Caps&display=swap');
}
</style>

<slot />
