<script>
    import { onMount } from "svelte";
    import {base} from '$app/paths';
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
    $: isRegisterDisabled = !(username.length >= 3 && password.length >= 8) || proveButtons.length > 0;
    let proveButtons = [];
    let proveButtonInterval;
    let backgroundColor = 'black';
    let registerButtonPosition = 'left';
    let maxWidth = 95;
    let maxHeight = 90;
    let headerPosition = 'left';

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

        // Update all positions 
        setInterval(() => {
            randomizeLetters();
        }, 850);
        setInterval(() => {
            randomizeNumbers();
        }, 750);
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
        setInterval(() => {
            const color = Math.random() > 0.5 ? 'red' : 'green';
            const top = Math.random() * (window.innerHeight - 100);
            const left = Math.random() * (window.innerWidth - 100);
            proveButtons = [...proveButtons, { id: Date.now(), color, top, left }];
        }, 2200);
        setInterval(() => {
            backgroundColor = backgroundColor === 'black' ? 'white' : 'black';
        }, 5500);
        setInterval(() => {
            registerButtonPosition = registerButtonPosition === 'left' ? 'right' : 'left';
        }, 1500);
    });
    function removeProveButton(id) {
        proveButtons = proveButtons.filter(button => button.id !== id);
    }
    onMount(() => {
        proveButtonInterval = setInterval(() => {
            const color = Math.random() > 0.5 ? 'red' : 'green';
            const top = Math.random() * (window.innerHeight - 100);
            const left = Math.random() * (window.innerWidth - 100);
            proveButtons.push({ id: Date.now(), color, top, left });
        }, 2000);
    });

    // Switch header position every 5 seconds
    setInterval(() => {
        headerPosition = headerPosition === 'left' ? 'right' : 'left';
    }, 2000);

    // Switch background color every 10 seconds
    setInterval(() => {
        backgroundColor = backgroundColor === 'white' ? 'white' : 'black';
    }, 2000);
    

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

    function yaAssAccepted() {
        if (!isRegisterDisabled) {
            window.location.href = {base}+'diffShit/registerPage';
        }
    }

</script>

<div style="background-color: {backgroundColor}; position: fixed; top: 0; left: 0; right: 0; bottom: 0; transition: background-color 1s;">
    <div class="subText">
        <h1>make a temporary account to prove youre not a bot, MINIMUM 3 username characters and 8 characters in your password.</h1>
    </div>


<div class="button-container">
    <button class="register" on:click={()=>{alert(username!=""?"Register as "+username+"?":"Enter username!")}}>Register as {username}</button>
    <button class="passwordClick" on:click={()=>{alert(password!=""?"Are you sure about your password being "+maskedPassword+"?":"You need a password!")}}>Your password will be {maskedPassword}</button>
</div>
<div class="registerButton-container">
    <button 
        class="registerButton" 
        on:click={yaAssAccepted} 
        disabled={isRegisterDisabled}
    > 
        <img src="https://i.imgur.com/M8WdY7Q.png" alt="Register"> 
    </button></div>

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

{#each proveButtons as { id, color, top, left }}
        <button 
            class="prove-button" 
            style="background-color: {color}; top: {top}px; left: {left}px;" 
            on:click={() => removeProveButton(id)}
        >
            Click to confirm humanity
        </button>
    {/each}

</div>
<style>

    .registerButton {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .registerButton {
        padding: 0.5rem 1rem;
        background-color: #00ff6a;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.2s;
        margin-top: 200px;
        width: 20vw;
        height: 12vh;
    }

    .registerButton:hover {
        background-color: #25eb50;
    }

    .registerButton:active {
        background-color: #d81d1d;
    }
    .register {
        background-color: red;
        position: absolute;
        left: 10px;
        top: 10vh;
    }
    .passwordClick {
        background-color: rgb(255, 0, 0);
        position: absolute;
        right: 5vw;
        top: 10vh;
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
    .registerButton:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #cccccc !important;
    }
    .prove-button {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: fixed;
        color: white;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s;
        animation: shake 2s infinite;
    }
    .button-container {
        position: relative;
        height: 100px;
    }
    .registerButton-container {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        text-align: center;
        animation: switchPosition 1.5s infinite alternate;
    }
    .registerButton img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
    @keyframes switchPosition {
        0% { left: 0; }
        100% { right: 0; }
    }
    @keyframes shake {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            10% { transform: translate(-5px, -5px) rotate(-10deg); }
            20% { transform: translate(5px, 5px) rotate(10deg); }
            30% { transform: translate(-5px, 5px) rotate(-10deg); }
            40% { transform: translate(5px, -5px) rotate(10deg); }
            50% { transform: translate(0px, 0px) rotate(0deg); }
            60% { transform: translate(-5px, 5px) rotate(-10deg); }
            70% { transform: translate(5px, -5px) rotate(10deg); }
            80% { transform: translate(5px, 5px) rotate(10deg); }
            90% { transform: translate(-5px, -5px) rotate(-10deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
    }
    .ani{
        animation: fader 500ms linear;
        animation-iteration-count: initial;
    }
</style>