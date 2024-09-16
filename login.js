document.getElementById('bt_submit').addEventListener('click', function(event) {
    event.preventDefault(); 

    const url = "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp";

    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');
    let userFound = false;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email";
        return;
    }

    if (pass.length < 8) {
        errorMessage.textContent = "Password should be at least 8 characters";
        return;
    }

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    })
    .then((res) => res.json())
    .then((data) => {
        data.forEach((user) => {
            if (user.Email === email && user.Password === pass) {
                userFound = true;
                sessionStorage.setItem('userName', user.Name);
                window.location.href = `Personal.html?name=${user.Name}`;
            }
        });

        if (!userFound) {
            errorMessage.textContent = "Invalid email or password";
        }
    })
    
});
