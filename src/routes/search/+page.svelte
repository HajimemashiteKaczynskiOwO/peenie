<script>
    import {goto} from "$app/navigation";
    import { writable } from 'svelte/store';

    let search = "";
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
<form on:submit|preventDefault={() => { goto('/search/' + search); addSearch(); }}>
    <input type="text" placeholder="Search for a Pokemon" bind:value={search}/>
</form>
</main>
<footer>
    <nav>
        <ul>
            {#each $recentSearches as recentSearch}
                <li><a href="#" on:click={() => goto('/search/' + recentSearch)}>{recentSearch}</a></li>
            {/each}
        </ul>
    </nav>
</footer>

<style>
    main{
        height:100vh;
        margin:auto;
    }
    footer {
        bottom: 0;
        width: 100%;
        background-color: #fcb328   ;
        color: white;
        text-align:center;
        padding: 10px 0;
    }

</style>