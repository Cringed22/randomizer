const login = document.getElementById('login');
if (login) {
    login.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('login_email').value;
        const password = document.getElementById('login_password').value;

        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        let hasError = false;

        if (email === "") {
            document.getElementById('emailError').textContent = 'Email is required!';
            hasError = true;
        }

        if (password === "") {
            document.getElementById('passwordError').textContent = "Password is required!";
            hasError = true;
        } else if (password.length < 8) {
            document.getElementById('passwordError').textContent = "Password must be at least 8 characters long!";
            hasError = true;
        }

        if (!hasError) {
            alert('Log-in Successful!');
            login.reset();
        }
    });
}


const forgotPass = document.getElementById('forgotPass');
if (forgotPass) {
    forgotPass.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('forgot_email');
        const email = emailInput.value.trim();
        const errorMessage = document.getElementById('error');

        errorMessage.textContent = '';
        let hasError = false;

        if (email === "") {
          errorMessage.textContent = 'Please enter your email address!';
          hasError = true;
        }

        if (!hasError) {
          alert("Password reset link has been sent to your email.");
          forgotPass.reset();
        }
    });
}


const signup = document.getElementById('signup');
if (signup) {
    signup.addEventListener('submit', function (event) {
        let hasError = false;

        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => span.textContent = '');

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('signup_email').value.trim();
        const pass = document.getElementById('pass').value;
        const confirmPass = document.getElementById('confirm_pass').value;

        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

        if (fullname === "") {
            hasError = true;
            document.querySelector('#fullname + .error').textContent = "Full Name is required!";
        }

        if (email === "") {
            hasError = true;
            document.querySelector('#signup_email + .error').textContent = "Email is required!";
        }

        if (pass === ""){
          hasError = true;
          document.querySelector('#pass + .error').textContent = "Password is required!"
        }

        if (pass.length < 8) {
            hasError = true;
            document.querySelector('#pass + .error').textContent = "Password must be at least 8 characters long!";
        }

        if (!specialCharPattern.test(pass)) {
            hasError = true;
            document.querySelector('#pass + .error').textContent = "Password must contain at least one special character!";
        }

        if (confirmPass === ""){
          hasError = true;
          document.querySelector('#confirm_pass + .error').textContent = "Confirm Password!"
        }

        if (pass !== confirmPass) {
            hasError = true;
            document.querySelector('#confirm_pass + .error').textContent = "Passwords do not match!";
        }

        if (hasError) {
            event.preventDefault();
        } else {
            alert('Sign Up Successful!');
            signup.reset();
        }
    });
}
