<script>
    // Sample user data (in a real-world scenario, you'd use a database)
    const users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" }
    ];

    // Function to handle login
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the username and password match any user in the users array
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Successful login, redirect to secured page
            document.getElementById("error").textContent = "Login successful. Redirecting to secured page.";
        } else {
            // Display error message for invalid credentials
            document.getElementById("error").textContent = "Invalid username or password";
        }
    });
</script>
