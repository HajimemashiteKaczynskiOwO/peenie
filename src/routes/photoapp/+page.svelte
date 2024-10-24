<main>
<div class="photos">
    <div class="image-wrapper"><img src="images/fact.png" alt="teeee" ></div>
    <div class="image-wrapper"><img src="images/gem.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/parlor.jpg" alt="nug"></div>
    <div class="image-wrapper"><img src="images/fact.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/gem.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/parlor.jpg" alt="nug"></div>
    <div class="image-wrapper"><img src="images/fact.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/gem.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/parlor.jpg" alt="nug"></div>
    <div class="image-wrapper"><img src="images/fact.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/gem.png" alt="teeee"></div>
    <div class="image-wrapper"><img src="images/parlor.jpg" alt="nug"></div>
</div>
</main>
<style>
    .photos {
        display:flex;
        width:100vw;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        background-color:gainsboro;
        padding-bottom: 1920px;
}
    .image-wrapper {
        transition:flex 120ms ease-in-out normal;
        max-width: 35%;
        order: 1;
    }
    .image-wrapper img{
        width:100%;

        flex:1;

        max-height: 350px;

        border-radius: 20px;

        box-shadow: 4px 8px 0px rgba(0,0,0,0.2);

        margin:10px;
    }
    .image-wrapper:hover{
        flex-grow:2;
    }
    .image-wrapper:active{
        transition:transform 10ms ease-in-out normal;
        transform: scale(1.2);
    }
</style>
