<script>
    import {goto} from "$app/navigation";
    let search =""

</script>
<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Search for a Pokemon" bind:value={search} />
</form>
