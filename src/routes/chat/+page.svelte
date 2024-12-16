<script>
import ElizaBot from "elizabot";
import { enhance } from "$app/forms";


const eliza = new ElizaBot();
let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
let botName ="Droyd"

async function write(message) {
    console.log(message)
    chat.push({user : "user", message :message})
    chat = chat


//Hämta HTML-elementet med id:et visible
var element = document.getElementById("visible");
//Ändrar elementets CSS-egenskap display till default
element.style.display = "block"; // Visa elementet
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none";
    //TODO: Add Eliza's response to the chat
    let response = eliza.transform(message)
    chat.push({user : botName, message : response})
    chat=chat
}

</script>

<main>
    <div class="chatHead">
        <section class="msgSection">
            {#each chat as message}
                <article class="replies">
                        <p class="paragraph">
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
          // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?
        formElement.reset()
    }}>
    <input type="text" name="text" class="textBox" minlength=1 maxlength="32" placeholder="Express your love...">
    <input type="submit" name="submit">
        </form>
    </div>
</main>

<style>
.chatHead{
    margin: auto;
    background-color: rgb(68, 46, 179);
    width: 60vw;
    height: 70vh;
}
.chatTalk{
    display:flex;
    justify-content: center;
    padding: 10px;
    
}
.msgSection{
    color:red;
    height:90%;
    overflow-y: scroll;
}
.replies{
    margin:10px;
    padding:10px;
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
}

@keyframes animationBall {
    0% { transform: scale(1); }
    50% { transform: scale(1.4); }
    100% { transform: scale(1); }
}
.myAnim {
  animation-name: animationBall;
  animation-duration: 3s; /* Längd på animationen (till exempel 3 sekunder) */
  animation-timing-function: ease-in-out; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
}
</style>