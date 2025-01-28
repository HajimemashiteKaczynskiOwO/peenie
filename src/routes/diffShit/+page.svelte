<script>
    import { onMount } from "svelte";

    let lettersString = "abcefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")
    let numbersString = "01234567890123456789012345678901234567890123456789".split("")
    let randA = 1;
    let randB = 1;
    let randC = 1;
    let numbers = [];
    let password="";
    let letters = [];
    let username = "";
    $: maskedPassword = "*".repeat(password.length);


    // max %
    let maxWidth = 95;
    let maxHeight = 90;

    function randomizeLetter(letter){
        let tempLeft;
        let tempTop;
        let leftRad;
        let topRad;
        let i = 0;

        //random left
        tempLeft = maxWidth*Math.random()
        // Find all letters within 5% radius of left
        leftRad = letters.filter((value)=> Math.abs(value.left-tempLeft)<10)
        // Try for 10 iterations to get unique position
        do{
            i++
            tempTop = maxHeight*Math.random() 
            // Find alla letters from leftRad which is also within 5% radius of top 
            topRad = leftRad.filter((value)=> Math.abs(value.top-tempTop)<5)
        
        } while(topRad.length>0 && i<10)

        return {letter:letter,top:tempTop,left:tempLeft,ani:false}
    }
    function randomizeNumber(number) {
    let tempLeft;
    let tempTop;
    let leftRad;
    let topRad;
    let i = 0;
    

    // Random left
    tempLeft = maxWidth * Math.random();
    // Find all numbers within 5% radius of left
    leftRad = numbers.filter((value) => Math.abs(value.left - tempLeft) < 10);
    // Try for 10 iterations to get unique position
    do {
        i++;
        tempTop = maxHeight * Math.random();
        // Find all numbers from leftRad which is also within 5% radius of top
        topRad = leftRad.filter((value) => Math.abs(value.top - tempTop) < 5);
    } while (topRad.length > 0 && i < 10);

    return { number: number, top: tempTop, left: tempLeft, ani: false };
}

function randomizeNumbers() {
    numbers = [];
    for (let number of numbersString) {
        numbers.push(randomizeNumber(number));
    }
}


    function randomizeLetters(){
        letters = [];
        for(let letter of lettersString){
            letters.push(randomizeLetter(letter))
        }
    }
    

    // När sidan laddats in, skapa bokstäverna och starta intervallet
    onMount(() => {
        randomizeLetters();
        randomizeNumbers();

        // Update all positions every 1 second for letters
        setInterval(() => {
            randomizeLetters();
        }, 1500);

        // Update all positions every 0.5 seconds for numbers
        setInterval(() => {
            randomizeNumbers();
        }, 1000);

        // Set random background color every 250ms
        setInterval(() => {
            randA = Math.floor(Math.random() * 256); // Random value between 0-255
            randB = Math.floor(Math.random() * 256);
            randC = Math.floor(Math.random() * 256);

            // Update CSS variables for root element
            document.documentElement.style.setProperty("--randA", randA);
            document.documentElement.style.setProperty("--randB", randB);
            document.documentElement.style.setProperty("--randC", randC);
        }, 500);
    });

    

    function addLetter(letter,i){
        // remove last letter
        if(letter === "<"){
            username = username.substring(0,username.length-1)
            return
        }
        username += letter;
        letters[i] = randomizeLetter(letter)
        // animation on move
        letters[i].ani = true;
        letters = letters;
        //set to false to trigger animation on next move
        setTimeout(()=>{letters[i].ani = false},1000)


    }
    function addNumber(number, i) {
        if (number === "<") {
            password = password.substring(0, password.length - 1);
            return;
        }
        password += number;
        numbers[i] = randomizeNumber(number);
        numbers[i].ani = true;
        numbers = numbers;

        setTimeout(() => {
            numbers[i].ani = false;
        }, 1000);
    }

</script>
<div>
<button class ="register" on:click={()=>{alert(username!=""?"Register as "+username+"?":"Enter username!")}}>Register as {username}</button>
</div>
<div>
<button class ="passwordClick" on:click={()=>{alert(password!=""?"Are you sure about your password being "+maskedPassword+"?":"You need a password!")}}>Your password will be {maskedPassword}</button>
</div>
<div>
<button class="registerButton" on:click={()=>{username="";password="";}}> <img src="/images/registermf.png"> </button>
</div>
<button style="bottom:0;" on:click={()=>{password+=username;}}>Add username to password</button>

<div class="containerName">
    {#each letters as {letter,top,left,ani},i}
        <button class:ani={ani} on:click={()=>addLetter(letter,i)} 
                style="top:{top}%; left:{left}%;">
            {letter}
        </button>
    {/each}
</div>
<div class="containerPass">
    {#each numbers as {number,top,left,ani},i}
        <button class:ani={ani} on:click={()=>addNumber(number,i)} 
                style="top:{top}%; left:{left}%;">
            {number}
        </button>
    {/each}
</div>


<style>
    .registerButton {
        padding: 0.5rem 1rem;
        background-color: #00ff6a;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.2s;
        margin-top:200px;
    }

    .registerButton:hover {
        background-color: #25eb50;
    }

    .registerButton:active {
        background-color: #d81d1d;
    }
    .register{
        background-color: red;
    }
    .passwordClick{
        margin-top: 10vh;
        margin-left:5vw;
        top:0;
        background-color: rgb(255, 0, 0);
    }
    .containerName{
        border: 2px solid rgb(182, 37, 255);
        width: 700px;
        height: 500px;
        margin: auto;
        position: relative;
    }
    .containerPass{
        border: 2px solid rgb(182, 37, 255);
        width: 700px;
        height: 250px;
        margin: auto;
        position: relative;
    }
    button{
        background-color: rgb(var(--randA, 0), var(--randB, 100), var(--randC, 0));
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
        padding: 1px 2px;
        position: absolute;
    }
    @keyframes fader{
        0% {opacity: 30%; transform: scale(0.25);}
        50% {opacity: 70%; transform: scale(0.75);}
        100% {opacity: 100%; transform: scale(1);}
    }
    .ani{
        animation: fader 500ms linear;
        animation-iteration-count: initial;
    }
</style>