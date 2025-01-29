<script>
    let username = '';
    let password = '';

    function handleSubmit() {
        if (username && password) {
            window.location.href = 'https://x.com';
        }
    }
</script>

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

<div class="register-text">register</div>

<div class="form-container">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username} />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
    </div>
    <button class="submit-button" on:click={handleSubmit}>Submit</button>
</div>