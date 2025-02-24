<script>
    import {base} from '$app/paths';
</script>
<div class="holder">
    <button on:click={() => {window.location.href = base + "/trials/diffShit";}}>Attempt Registration</button>
    <button on:click={() => {window.location.href = base + "/trials/snakelog";}}>Unscary Maze Game</button>
    <button on:click={() => {window.location.href = base + "/trials/elStore";}}>Elektroniki Butiki</button>
</div>
<!-- </style> -->
<style>
    .holder{
        display:flex;
        
        justify-content: center;
    }
    button{
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 36px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>