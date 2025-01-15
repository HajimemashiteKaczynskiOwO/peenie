<main>
    <slot>

    </slot>
</main>

<div class="backdrop">

</div>

<style>
main {
    width:80vw;
    height:100vh;
    background-color: rgb(1,73,149);
    margin:5vh auto;
    border-radius: 3px;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.backdrop {
    margin:auto;
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    z-index:-1;
    background-color:rgb(1,46,87);

}
</style>