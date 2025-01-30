<script>
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';
    let ageCheck = "no";  // Bind to the select element
    let age = "";         // Bind to the input element
    function handleSubmit() {
        const numericAge = Number(age);
        
        // Correct conditional check
        if (ageCheck === "yes" && numericAge >= 17 && numericAge < 88) {
            goto(`${base}/diffShit/registerPage/`);
        } else {
            alert("Too Bad!");
            goto(`${base}/diffShit/`);
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