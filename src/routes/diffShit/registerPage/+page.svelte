<script>
    import {base} from '$app/paths';
    function handleSubmit() {
        // Get values from the form
        let ageCheck = document.getElementById("ageCheck").value;  // Getting value from <select>
        let age = document.getElementById("age").value;            // Getting value from <input>
        age = Number(age);
        // Check if conditions are met
        if (ageCheck === "yes" && 88 > age >= 17) {
            window.location.href = {base}+'/diffShit/finished';
        } else {
            alert("Too Bad!");
            window.location.href = {base}+'/diffShit/';
        }
    }
</script>

<div class="register-text">register</div>

<div class="form-container">
    <div class="form-group">
        <label for="ageCheck">How Old Are you? Are you Olds but Youngs enough..?</label>
<select id="ageCheck" name="ageCheck">
    <option value="no">No</option>
    <option value="yes">Yes</option>
</select>
    </div>

    <div class="form-group">
        <label for="age">Age</label>
        <input type="age" id="age"/>
    </div>
    <button class="submit-button" on:click={handleSubmit}>Submit</button>
</div>
<style>
    .register-text {
        position: absolute;
        top: 10vh;
        right: 10px;
        font-size: 48px;
        font-family: 'Comic Sans MS', cursive, sans-serif;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .form-group {
        margin: 10px 0;
    }

    .submit-button {
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 50%;
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>