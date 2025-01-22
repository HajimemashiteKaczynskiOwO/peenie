<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import {goto} from "$app/navigation";
    import { writable } from 'svelte/store';
    import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
    let search=""
    let recentSearches = writable([]);
  

    function onEnter(pokeName) {
        recentSearches.update(searches => {
            // Remove any existing instance of the pokeName
            searches = searches.filter(name => name !== pokeName);
            // Add the pokeName to the start of the list
            searches = [pokeName, ...searches];
            // Keep only the last 5 searches
            if (searches.length > 5) searches.pop();
            return searches;
        });
        return "";
    }
  </script>
  <main>
    <form on:submit|preventDefault={() => { goto(base+'/search/' + search); }}>
    <input class="searcher" type="text" placeholder="Search for a Pokemon" bind:value={search}/>
  </main>

  {#await data}
    <p>.. waiting</p>
  {:then pokemon}
  {onEnter(pokemon.response.name)} 
  <article>
    <h1 class="pokemonName">{pokemon.response.name}</h1>
    <h2>Height: {pokemon.response.height / 10}m</h2>
    <h2>Weight: {pokemon.response.weight / 10}kg</h2>
    <h2>PokéID: {pokemon.response.id}</h2>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
    
  </article>

  <section>
  </section>
  
  {/await}  
  <footer>
    <nav>
        <ul>
            {#each $recentSearches as recentSearch}
                <li><a href="#" on:click={() => goto(base+'/search/' + recentSearch)}>{recentSearch}</a></li>
            {/each}
        </ul>
    </nav>
</footer>
  <style>
    main{
        height:100vh;
        margin:auto;
        border-radius: 100px;
    }
    .pokemonName{
      padding-top:100px;
      font-size: 3em;
      position:absolute;
      margin:auto;
      font-family:"sixcaps";
      transition: transform 0.3s ease;
    }
    .pokemonName:hover{
      transform:scale(1.05)
    }
    .searcher{
      width:50vw;
      border-radius: 100px;
      transition: transform 0.3s ease;
    }
    .searcher:hover{
      
      transform:scale(1.05)
    }
    article{
        display:flex;
        width:90%;
        height:30%;
        gap: 1em;
    }
    footer {
        bottom: 0;
        width: 100%;
        background-color: #fcb328   ;
        color: white;
        text-align: center;
        padding: 10px 0;
    }
</style>
