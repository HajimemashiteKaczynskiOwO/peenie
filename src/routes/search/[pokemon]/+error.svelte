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
  </form>

  <section class="error-container">
      <div class="error-heading">ERROR!</div>
      <div class="error-subheading">Invalid Pokemon</div>
      
      <!-- Existing error details -->
      <h1 class="search-query">{"You searched for: " + $page.params.pokemon}</h1>
      <hr />
  </section>
</main>
<div class="error-status">
  <h2 class="error-details">{$page.status}: {$page.error.message}</h2>
</div>
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
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 80vh;
        padding-top: 5rem;
    }
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }
    .error-container {
        text-align: center;
        margin: 2rem 0;
        padding: 2rem;
    }
    .error-heading {
        font-size: 9rem;
        color: #fcb328;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        margin-bottom: 5rem; /* Increased spacing */
    }
    .error-subheading {
        font-size: 4rem;
        color: #fcb328;
        margin-bottom: 2rem;
    }

    .error-details {
        font-size: 1.2rem;
        color: #ffffff90;
        margin-top: 1rem;
    }
    .error-status {
        position: fixed;
        bottom: 100px;
        width: 100%;
        text-align: center;
        padding: 0 2rem;
    }
    input {
        width: 50vw;
        border-radius: 100px;
        padding: 12px 24px;
        font-size: 1.1rem;
        transition: transform 0.3s ease;
        margin-top: 2rem;
    }

    .search-query {
        font-size: 1.5rem;
        color: #ffffff;
        margin: 2rem 0;
    }

    hr {
        width: 50%;
        margin: 0 auto;
        border-color: #ffffff30;
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