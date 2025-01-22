<script>
    import { page } from "$app/stores";
    import {goto} from "$app/navigation";
    import { writable } from 'svelte/store';
    import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
    let search=""
    let recentSearches = writable([]);

    function onEnter(pokeName) {
        recentSearches.update(searches => {
            searches = [pokeName, ...searches];
            if (searches.length > 5) searches.pop(); // Keep only the last 5 searches
            return searches;
        })
        
        return "";
    }
  </script>
  <main>
    <form on:submit|preventDefault={() => { goto(base+'/search/' + search); }}>
    <input type="text" placeholder="Search for a Pokemon" bind:value={search}/>
  </main>
  <footer>
    <nav>
        <ul>
            {#each $recentSearches as recentSearch}
                <li><a href="#" on:click={() => goto(base+'/search/' + recentSearch)}>{recentSearch}</a></li>
            {/each}
        </ul>
    </nav>
</footer>
  <section>
  
    <h1>{"You searched for: " + $page.params.pokemon}</h1>
    <hr />
    <h2>{$page.status}: {$page.error.message}</h2>
  </section>
    <style>
      footer {
        bottom: 0;
        width: 100%;
        background-color: #fcb328   ;
        color: white;
        text-align: center;
        padding: 10px 0;
    }
    </style>