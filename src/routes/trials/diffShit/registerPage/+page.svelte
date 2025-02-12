<script>
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';
    let ageCheck = "no";
    let age = "";  // This should be a string initially

    function handleSubmit() {
        const numericAge = Number(age);  // Convert the age input to number
        
        if (ageCheck === "yes" && numericAge >= 17 && numericAge < 88) {
            goto(`${base}/trials/diffShit/finished/`);
        } else {
            alert("Too Bad! You entered Age: " + age + " and Selection: " + ageCheck);
            goto(`${base}/trials/diffShit/`);
        }
    }
</script>

<div class="register-text">register</div>

<div class="form-container">
    <div class="form-group">
        <label for="ageCheck">How Old Are you? Are you Olds but Youngs enough..?</label>
        <!-- Add bind:value here -->
        <select id="ageCheck" bind:value={ageCheck} name="ageCheck">
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select>
    </div>

    <div class="form-group">
        <label for="age">Age</label>
        <!-- Add bind:value and change input type -->
        <input type="number" id="age" bind:value={age} />
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