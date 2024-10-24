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
</form>
</div>
<div class="logreg">
    <form on:submit|preventDefault={handleSubmit}>
        <input type="submit" id="register" value="Create your account">
    </form>
        <h4>Already have an Account? <a href="/login"><i>Login</i></a> </h4>
</div>

</div>
</main>

<style>
main{
        background-image: url("https://s3.ezgif.com/tmp/ezgif-3-be802b7d94.gif");
        background-size: cover;
        width: auto;
        height: auto;
        padding-top:250px;
        padding-bottom:300px;
        padding-left: 600px;
        padding-right:600px;
    }

.container{
        border: solid 5px rgb(0, 0, 0);
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        margin: auto;
        padding-top:70px;
        min-width: 300px;
        min-height: 500px;
}     
.flexbox{
    padding-top:40px;
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
    padding-top:30px;
    padding-bottom: 5px;
}
h4{
    padding-top: 10px;
}
    .flexbox label{
        padding-top:20px;
    }

    .logreg{
        padding-top:10px;
    }
    .logreg input{
        padding-left:5px;
        padding-right:5px;
        border-radius: 20px;
        background-color: rgb(0, 255, 0);   
    }
</style>
<script>



    function handleSubmit(){
    alert("Welcome!!!")
}

</script>