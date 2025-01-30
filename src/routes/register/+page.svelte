<main>
<div class="container">
    <div class="flexbox">
        <h1>REGISTRATION!!</h1><div>
        <form>
            
<label for="name">What is your name? ❤️:</label>
<input type="text" id="name" >

<label for="email">What is your precious E-Mail?</label>
<input type="email" id="email" bind:value={email}>

<label for="pass">Give me your password, all of it!</label>
<input type="password" id="pass"bind:value={pass} >

<label for="favoritecol">At last, what's your favorite color?</label>
<select id="favoritecol" name="favoritecol">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    <option value="light-pink">Light Pink</option>
    <option value="purple">Purple</option>
</select>
</form>
</div>
<div class="logreg">
    <form on:submit|preventDefault={handleSubmit}>
        <input type="submit" id="register" value="Create your account">
    </form>
        <h4>Already have an Account? <a href="{base}/login"><i>Login</i></a> </h4>
</div>

</div>
</main>

<style>
main{
        background-image: url("https://s11.gifyu.com/images/SOwIF.gif");
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



import { goto } from '$app/navigation';
import { onMount } from 'svelte';
onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});
let users =[];
let name ="";
let pass ="";
let email ="";

import {users_store} from "$lib/user";

function handleSubmit(){
    let new_user = {username: name, pass: pass, email: email, favoritecol: favoritecol};
    let fList = users.filter(user =>  user.email == new_user.email)

    console.log(new_user)

    if (fList.length != 0){
        alert("User Already Exists!")
    } 
    else{
        alert("Thank you!")
        users = [...users, new_user];
        $users_store = JSON.stringify(users);
        goto(`${base}/login/`);
    }
}



//courtesy of samir's big big brain


import { base } from '$app/paths';
</script>