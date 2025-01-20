<script>
import ElizaBot from "elizabot";
import { enhance } from "$app/forms";
import {  chat_store  } from "$lib/chat";
import {onMount} from 'svelte';


const eliza = new ElizaBot();
let chat = [{ user: 'Eliza', message: "My name is George Droyd. Shiiieeet, How can I assist you?" }];
let botName ="Eliza"
let userName ="user"
let isWriting=false
let userMessage="";

async function write(message) {
    if (isWriting) {return}
chat.push({user : "user", message :message})
var element = document.getElementById("visible");
chat = chat
//Ändrar elementets CSS-egenskap display till default
element.style.display = "block"; // Visa elementet
isWriting= true
chat = chat
await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
chat_store.update(chat_store.update(chat => [...chat, {user: 'user', message}]));
isWriting = false
chat = chat
element.style.display = "none";

let response = eliza.transform(message)
chat.push({user : botName, message : response})
chat=chat
}

function clearChat(){
    chat_store.set([{ user: 'Eliza', message: "My name is George Droyd. Shiiieeet, How can I assist you?" }]);
}
</script>
<audio controls autoplay loop=true disableremoteplayback class="audio">
    <source src="mp3/toujours.mp3" type="audio/mp3">
</audio>

<div class="entirewebsite">
<main>
    <div class="chatHead">
        <div class="TalkyHead">
            <img src="images/droyda.png" height="50px" width="50px">
            <h1>George Droyd</h1>
        </div>
        <section class="msgSection">
            {#each chat as message}
                <article class={ message.user }>
                        <p>
                            {message.message}
                        </p>
                    </article>
                {/each}
        <article id="visible" >
            <span class="dot"></span>
            <span  class="dot"></span>
            <span  class="dot"></span>
        </article>
        </section>


        <form class="chatTalk" method="post" use:enhance={({ formElement, formData, action, cancel }) => { cancel(); //don't post anything to server
        const text = formData.get("text"); // what does "text" refer to?
        write(text);
        formElement.reset()
    }}>
    <input type="text" name="text" class="textBox" minlength=2 placeholder="Express your love...">
    <input type="submit" class="subby" name="submit" minlength=2>
    <button class="clearshit" on:click={clearChat}>
            Clear the Chat
        </button>
        </form>
        
    </div>
</main>
</div>
<style>
    main{
        padding-top:30px;
    }
    .subby{
        display:none;
    }
.chatHead{
    margin:auto;
    background-color: rgb(68, 46, 179);
    width: 60vw;
    height: 70vh;
    border-radius:10px;
    border-color: red;
}
.chatTalk{
    display:flex;
    justify-content: center;
    margin-top: -5vh;
    border-style: ridge;
}
.msgSection{
    color:rgb(249, 245, 245);
    height:90%;
    overflow-y: scroll;
    font-size:40px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.replies{
    margin:10px;
    padding:10px;
}
.user{
    background-color:rgb(176, 148, 254);
    padding-top:0.3vh;
    height:3.5vh;
    padding-left:2px;
    font-size:30px;
    display:flex;
    color:black;
    justify-content: flex-end;
    justify-self: flex-start;
}
.Eliza{
    background-color: rgb(82, 9, 166);
    padding-top:0.3vh;
    height:3.5vh;
    padding-left:2px;
    font-size:30px;
}

.clearshit{
    color:red;
    margin:auto;
    cursor:pointer;
    border-radius: 100px;
}

#visible{
    width:100px;
    height:60px;
    padding:0%;
    display:none;
}
.dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    animation: animationBall 1000ms ease-in-out;
    animation-iteration-count: infinite;
}
.audio{
display:none;
}

.TalkyHead h1{
    color:white;
    font-style: italic;
    font-size:40px;
    padding:10px;
}
.TalkyHead{
    padding: auto;
    background-color: rgb(13, 0, 255);
    display:flex;
    align-items: center;
    
    
}
@keyframes animationBall {
    0% { transform: scale(1); }
    50% { transform: scale(1.4); }
    100% { transform: scale(1); }
}

.dot:nth-child(1) {
    animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.dot:nth-child(2) {
    animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.dot:nth-child(3) {
    animation-delay: 666ms; /* Starta animationen efter 666 ms */
}
.entirewebsite{
    background-image: url("https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif");
        background-size:stretch;
        width: auto;
        height: 1500px;
}
</style>