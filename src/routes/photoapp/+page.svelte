<h1>the AWESOME PHOTO APPP!!!!!!!!!!!!!!!!!!!1</h1>
<main>
<div class="photos">
    <div class="image-wrapper">
        <img src="images/fact.png" alt="teeee" width="500" height="300">
    </div>
    <div class="image-wrapper">
        <img src="images/gem.png" alt="teeee" width="500" height="300">
    </div>
    <div class="image-wrapper">
        <img src="images/parlor.jpg" alt="nug" width="500" height="300">
    </div>
</div>
</main>
<style>
    .photos {
        display:flex;
        width:60vw;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        
        
}
h1{
    color:red;
}
    .image-wrapper img{
        width:100%;
        flex:1;
        height:300px;
        border-radius: 20px;
        box-shadow: 4px 8px 0px rgba(0,0,0,0.2);
        margin:10px;
    }
    .image-wrapper:hover{
        flex:1.5;
    }
    .image-wrapper:active{
        transform: scale(1.2);
    }
</style>
