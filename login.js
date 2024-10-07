const signup = document.getElementById('signup');
if (signup) {
    signup.addEventListener('submit', function (event) {
        const pass = document.getElementById('pass').value;
        const confirmPass = document.getElementById('confirm_pass').value;

        if (pass.length !== 8) {
            event.preventDefault();
            alert("Password must be exactly 8 characters long.");
            return;
        }

        if (confirmPass.length !== 8) {
            event.preventDefault();
            alert("Password must be exactly 8 characters long.");
            return;
        }

        if (pass !== confirmPass) {
            event.preventDefault();
            alert("Passwords do not match.");
        }
    });
}

const login = document.getElementById('login');
if (login) {
    login.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Login successful!");
    });
}

const forgotPass = document.getElementById('forgotPass');
if (forgotPass) {
    forgotPass.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Password reset link has been sent to your email.");
    });
}
