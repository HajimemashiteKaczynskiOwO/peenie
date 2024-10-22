<main>
<div class="container">
    <div class="flexbox">
        <h1>REGISTRATION!!</h1><div>
        <form>
<label for="name">What is your name? ❤️:</label>
<input type="text" id="name" >
<label for="name">What is your precious E-Mail?</label>
<input type="email" id="email" >
<label for="name">Give me your password, all of it!</label>
<input type="password" id="pass" >
<label for="favoritecol">At last, what's your favorite color?</label>
<select id="favoritecol" name="favoritecol">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    <option value="light-pink">Light Pink</option>
    <option value="purple">Purple</option>
</select>
<input type="submit" id="pass" value="Register">


</form>
    </div>

</div>
</main>

<style>
main{
        background-image: url("https://s11.gifyu.com/images/SOwIF.gif");
        background-size: cover;
        width: auto;
        height: auto;
        padding:40%;
    }

.container{
        border: solid 5px rgb(0, 0, 0);
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        margin: auto;
        padding:20px;
}     
.flexbox{
display:flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
height:300px;
}
.flexbox form{
    display:flex;
    align-items:center;
    flex-direction: column;
}
h1{
    font-size: 32px;
}
        
</style>