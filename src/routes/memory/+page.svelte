<script>
    let images = [
        "images/1727730631300u.png",
        "images/tits.webp",
        "images/calmfly.png",
        "images/pou.jpeg",
        "images/screaming-baby-made-of-ash-v0-7nskgql0k1w91.webp",
        "images/static-assets-upload10830305506337304706.webp"
    ];
    let images_alt = [
        "meh",
        "tits",
        "meh4",
        "tit2s",
        "m3eh",
        "tits1"
    ];

    let cards = [];
    let flipCount = 0;
    let amount_of_cards = 12;
    let flippedCards = [];
    let bluePoints = 0;
    let redPoints = 0;
    let blueTurn = true;

    for (let i = 0; i < amount_of_cards; i++) { // SKAPA KORTEN!!!
        cards.push({
            id: i,
            image: images[i % images.length],
            alt: images_alt[i % images_alt.length],
            flipped: false,
            matched: false,
        });
    }

    cards.sort(() => Math.random() - 0.50000000069); // randomize the cards

    function flipCard(card) {
        if (card.flipped || card.matched || flipCount === 2) {
            return;
        }
        
        card.flipped = true; // mark this card as flipped
        flipCount++;
        flippedCards.push(card);

        // Update the cards array to reflect the new state
        cards = [...cards]; 

        if (flipCount === 2) {
            checkForMatch();
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (flippedCards.length === 2) {
            if (card1.image === card2.image) {
                if (blueTurn) {
                    bluePoints += 1;
                } else {
                    redPoints += 1;
                }
                card1.matched = true;
                card2.matched = true;
                // Update cards to reflect the matched state
                cards = [...cards];
            }
            // If cards do not match, flip them back after 1 second
            setTimeout(() => {
                cards.forEach((card) => {
                    card.flipped = card.matched;
                });
                flipCount = 0; // Reset flip count
                flippedCards = []; // Reset flipped cards array
                cards = [...cards]; // Update cards array to reflect new state
            }, 1000);
            blueTurn = !blueTurn;
        }
    }

    // Function to flip all cards
    function flipCards() {
        cards.forEach((card) => {
            card.flipped = false; // Set all cards to flipped = false
            card.matched = false; // Optionally reset matched status
        });
        cards.sort(() => Math.random() - 0.50000000069); // randomize the cards
        flipCount = 0; // Reset flip count
        flippedCards = []; // Reset flipped cards array
        cards = [...cards]; // Update cards array to reflect new state
    }
</script>
<div class="bigAssbackground">
<div class="Header"><h1>The Beautiful Memory Game</h1></div>

<div class="centerShit">
    <main class="mainHead">
        {#each cards as card (card.id)}
        <div class="card" class:flipped={card.flipped} on:click={() => flipCard(card)}>
            <img class="front" src="{card.image}" alt="{card.alt}">
            <img src="images/droydCord.png" alt="Backside">
        </div>
        {/each}
        <button class="reset"><img class="resetPic" src="https://static.vecteezy.com/system/resources/thumbnails/002/205/850/small/refresh-icon-free-vector.jpg" on:click={flipCards}></button>
    </main></div>

<aside class="blue">
    <p>Blue: {bluePoints}</p>
</aside>
<aside>
    <p>Red: {redPoints}</p>
</aside>
<aside class="turn" class:blue={blueTurn}></aside>
</div>
<style>
    .resetPic{
        border-radius: 100px;
        transform: scale(0.7);
    }
    .resetPic:hover{
        transform: scale(0.75);
    }
    .card:not(.flipped){
        transition: transform 0.3s ease;
    }
    .card:not(.flipped):hover{
        transform: scale(1.2);
    }
    .bigAssbackground{
        background-image: url("https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif");
        background-size:stretch;
        width: auto;
        height: 1500px;
    }
.centerShit{
    padding-top:30px;
    display:flex;
    justify-content: center;}
.Header h1{
    display:flex;
        align-items: center;
        justify-content: space-evenly;
        font-size:32px;
        color: black; }
.mainHead {
    display:grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat( 3, 100px);
    grid-column-gap:5px;
    grid-row-gap:5px;}
.card {
    position: relative;
    width: 100px;
    height: 100px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    cursor: pointer;
}
.reset{
    display:flex;
    background-color: rgb(174, 0, 255);
}

img{
    height:100px;
    width:100px;
    backface-visibility: hidden; 
    position: absolute;

}
.front {
    transform: rotateY(180deg);
}

aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blue {
    left:10px;
    background-color: rgb(49, 0, 128);
}

p{
    font-size: 30px;}

.turn {
    box-shadow: 0 0 10px 10px rgb(5, 0, 0);
    z-index: -1;
}
.card.flipped {
    transform: rotateY(180deg);
}
.flipped{
    transform: rotateY(180deg);

}

@media (min-height: 500px){
  main{
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
  }
}
@media (max-height: 500px){
  main{
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
  }
}
          
</style>    