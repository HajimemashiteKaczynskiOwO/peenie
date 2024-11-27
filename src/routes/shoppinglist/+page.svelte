<script>
    let items_bought =[];
    let items_to_buy = [];
    let new_vara_name =""

function handleSubmit(){
    let new_item = {name : new_vara_name, price : 0}

    items_to_buy.push(new_item)
    items_to_buy = items_to_buy
}

function removeItem(vara_index){
    items_to_buy.splice(vara_index,1)
    items_to_buy = items_to_buy
    items_bought =items_bought

}
function buyItem(vara_index){
    items_bought.push(items_to_buy[vara_index])
    items_to_buy.splice(vara_index,1)
    items_to_buy = items_to_buy
    items_bought =items_bought
}
function removeBoughtItem(vara_index){
    items_bought.splice(vara_index,1)
    items_to_buy = items_to_buy
    items_bought =items_bought

}
    </script>

<main>
    <div class="grid-container">
        <div class="container">
            <h1>Shoppinglist</h1>
            <div class="categories_container">
                <section class="section">
                    <h2>Inköpslista</h2>
                    <ol class="list">
                        {#each items_to_buy as vara,i}
                            <li>{vara.name}
                                <form class="taBort" action="" on:submit|preventDefault={()=>removeItem(i)}>
                                    <input type="submit" value="   (Ta bort)"></form>
                                <form class="taBort" action="" on:submit|preventDefault={()=>buyItem(i)}>
                                    <input type="submit" value=" (Köp vara)">
                                </form>
                            </li>
                        {/each}
                    </ol>
                </section>

                <section class="section">
                    <h2>Köpt</h2>
                    <ul class="list">
                        {#each items_bought as vara,i}
                        <li>{vara.name} 
                            <form class="taBort" action="" on:submit|preventDefault={()=>removeBoughtItem(i)}>
                            <input type="submit" value="   (Ta bort)"></form></li>
                        {/each}
                    </ul>
                </section>
            </div>
                <form class="negroid" action="" on:submit|preventDefault={handleSubmit}>
                    <input type="text" class="itemType" minlength=1 bind:value={new_vara_name}>
                    <input type="submit" minlength=1 value="Lägg till vara">    
                </form>
        </div>
    </div>
</main>

<style>
    .grid-container {
        position: absolute;
        top:50%;
        left:50%;

        transform: translateX(-50%) translateY(-50%);

        align-content: center;
        grid-template-columns: repeat(auto-fill, 150px);
        grid-template-rows: 1fr 9fr 1fr;
            
    }
    .container{
        display:grid;
        background-color: rgb(43, 0, 255);
        width: 60vw;
        height: 70vh;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
    }
    .container h1{
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        font-size:32px;
        olor: white;
    }
    .categories_container {
        display:grid;
        height: 100%;
        background-color: rgb(12, 0, 139);
        grid-template-columns:repeat(2,1fr);
        border-radius: 20px;
        
    }
    .categories_container section:nth-child(even){
        background-color: rgba(0, 0, 0, 0.1)}
    .categories_container section:nth-child(odd){
        background-color: rgba(0, 0, 0, 0.3)}
    .categories_container h2{
        font-size:30px;
        text-align: center;
        padding-top:10px;}
        .section {
        height:57vh;
        overflow-y:scroll;
        }
        .section h2{
        padding-bottom: 20px;
        color: white;
        }

    .list {
        list-style-position:inside;
        list-style: circle;
        padding-left: 20%;
        color: white;
    }

    .negroid {
        display:flex;
        justify-content: center;
        align-items:center;
    }
</style>