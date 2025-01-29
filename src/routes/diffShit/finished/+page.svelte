<script>
    import { onMount } from 'svelte';

    let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    let buttonColor = colors[0];
    let interval;

    onMount(() => {
        interval = setInterval(() => {
            buttonColor = colors[Math.floor(Math.random() * colors.length)];
        }, 2500);

        return () => clearInterval(interval);
    });

    function createConfetti() {
        const confetti = [];
        for (let i = 0; i < 100; i++) {
            confetti.push({
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
            });
        }
        return confetti;
    }

    const confetti = createConfetti();

    function handleSubmit() {
        window.location.href = '/register/';
    }
</script>

<style>
    .container {
        background-color: green;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
    }

    .congrats {
        font-size: 5rem;
        color: white;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 20%;
    }

    .box {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
    }

    .button {
        font-size: 2rem;
        padding: 1rem 2rem;
        border: none;
        cursor: pointer;
        animation: flash 2.5s infinite;
    }

    @keyframes flash {
        0%, 100% { background-color: red; }
        50% { background-color: blue; }
    }

    .confetti {
        position: absolute;
        width: 10px;
        height: 20px;
        top: -20px;
        animation: fall linear infinite;
        z-index: 99;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
</style>

<div class="container">
    <div class="congrats">CONGRATSULATION!</div>
    <div class="box">
        <button on:click={handleSubmit} class="button" style="background-color: {buttonColor};">PROCEED</button>
    </div>
    {#each confetti as piece}
        <div class="confetti" style="left: {piece.left}; animation-delay: {piece.animationDelay}; background-color: {piece.backgroundColor};"></div>
    {/each}
</div>