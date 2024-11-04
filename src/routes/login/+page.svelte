<main>
    <div class="container">
        <div class="flexbox">
            <h1>Log IN!!</h1><div>
            <form>
                
    <label for="name">What was your precious E-Mail again?</label>
    <input type="email" id="email" bind:value={email}>
    
    <label for="name">What's your password!</label>
    <input type="password" id="pass" bind:value={pass}>

    </form>
    </div>
    <div class="logreg">
        <form on:submit|preventDefault={handleSubmit}>
            <input type="submit" id="login" value="Log in">
        </form>
            <h4>Don't have an Account? <a href="/register"><i>Register</i></a></h4>
    </div>
    
    </div>
    </main>
    
    <style>
    main{
        background-image: url("https://soybooru.com/_images/eb6a5161b4ae21dde376321fe6910b12/16365%20-%20SoyBooru.gif");
        background-size: cover;
        width: auto;
        height: auto;
        padding-top:250px;
        padding-bottom:300px;
        padding-left: 600px;
        padding-right:600px;
        }
    
    .container{
            border: solid 5px rgb(0, 0, 0);
            border-radius: 10px;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            margin: auto;
            padding-top:70px;
            min-width: 300px;
            min-height: 500px;
    }     
    .flexbox{
        padding-top:40px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height:300px;
    }
    .flexbox form{
        display:flex;
        align-items:center;
        flex-direction: column;
    }
    h1{
        font-size: 32px;
        padding-top:30px;
        padding-bottom: 5px;
    }
    h4{
        padding-top: 10px;
    }
        .flexbox label{
            padding-top:20px;
        }
    
        .logreg{
            padding-top:10px;
        }
        .logreg input{
            padding-left:5px;
            padding-right:5px;
            border-radius: 20px;
            background-color: rgb(0, 255, 0);   
        }
</style>

<script>
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    
    onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }});

let users = [];
let name ="";
let pass ="";
let email ="";

function handleSubmit(){
    let new_user = {username: name, pass: pass, email: email};
    console.log(new_user)
    let fList = users.filter(user =>  user.email == new_user.email)

    console.log(fList)

    if (fList.length != 0 &&fList[0].pass === new_user.pass){
        console.log("list not empty") //penis koe ojeje 
        {
            alert("You logged in! What a Gem!")
        }
    } 
    else
    {
        console.log("list empty")
        alert("User not found, or password wrong.")
    }
}
</script>