<script>
  /** @type {import('./$types').PageData} */
  export let data;
  $: if (data) {
    selectedSprite = ""; // Reset main sprite when new data loads
  }
  import {goto} from "$app/navigation";
  import { writable } from 'svelte/store';
  import { base } from '$app/paths';
import { afterNavigate } from '$app/navigation';
  let search=""
  let selectedSprite=""; //Sprite selected by user
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
  </form>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon}
  {onEnter(pokemon.response.name)} 
  
  <article>
    <!-- Pokemon Name -->
    <h1 class="pokemonName">{pokemon.response.name.toUpperCase()}</h1>

    <!-- Content Container -->
    <div class="content-container">
      <!-- Left Side - Sprites -->
      <div class="sprite-section">
        <div class="mainSprite">
          <img 
            src={selectedSprite || pokemon.response.sprites.front_default} 
            alt="{pokemon.response.name}"
          />
        </div>
        <div class="otherSprites">
          {#each Object.entries(pokemon.response.sprites) as [key, sprite]}
              {#if typeof sprite == "string" && key !== "front_default"}
                  <img 
                    src={sprite} 
                    alt="{pokemon.response.name}"
                    on:click={() => selectedSprite = sprite}
                    class:selected={sprite === selectedSprite}/>
              {/if}
          {/each}
        </div>
      </div>

      <!-- Right Side - Stats -->
      <div class="stats-section">
        <div class="pokemonStats">
          <h2>Height: {pokemon.response.height / 10}m</h2>
          <h2>Weight: {pokemon.response.weight / 10}kg</h2>
          <h2>PokéID: {pokemon.response.id}</h2>
        </div>
      </div>
    </div>
  </article>
  {/await}
</main>

<footer>
  <nav>
    <ul class="recent-searches">
      {#each $recentSearches as recentSearch}
          <li class="search-item">
              <a href="#" on:click={() => goto(base+'/search/' + recentSearch)}>
                  {recentSearch}
              </a>
          </li>
      {/each}
  </ul>
  </nav>
</footer>

<style>
   main {
    height: 100vh;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pokemonName {
    color: #fcb328;
    font-size: 4em;
    text-align: center;
    margin: 20px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
  }
  .content-container {
    display: flex;
    width: 100%;
    gap: 40px;
    margin-top: 30px;
  }
  .pokemonName:hover{
    transform:scale(1.05)
  }
  .sprite-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  .stats-section {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding-right: 5%;
  }
  .recent-searches {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
  }
  .search-item a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: transform 0.2s ease;
    display: block;
  }
  .search-item a::first-letter {
    font-size: 1em;
    color: white;
    text-transform: capitalize;
  }
  .search-item:hover a {
    transform: translateY(-2px);
  }
  .searcher{
    width:50vw;
    border-radius: 100px;
    transition: transform 0.3s ease;
    margin-top:20px;
  }
  .searcher:hover{
    transform:scale(1.05)
  }
  .pokemonStats {
    background: rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 15px;
    min-width: 300px;
  }
  .pokemonStats h2 {
    margin: 15px 0;
    font-size: 1.8em;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
  .mainSprite img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  .otherSprites {
    max-height: 300px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
    margin-top: 20px;
    width: 100%;
    padding: 10px 0;
  }
  .otherSprites img {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .otherSprites img:hover {
    transform: scale(1.1);
  }
  .otherSprites img.selected {
    border: 3px solid #fcb328;
    transform: scale(0.9);
  }

  article{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        height: 30%;
        gap: 1em;
    }
    .mainSprite {
        margin-top: 20px;
    }
  footer {
      bottom: 0;
      width: 100%;
      background-color: #fcb328   ;
      color: white;
      text-align: center;
      padding: 10px 0;
      z-index: 100;
  }
</style>
