var formContainer1 = document.getElementById("form-container"),
    formContainer2 = document.getElementById("form-container2"),
    form1 = document.forms.loginForm,
    form2 = document.forms.registerForm,
    loginLink = document.getElementById("loginLink"),
    registerLink = document.getElementById("createAccountLink"),
    login = document.getElementById("login"),
    password = document.getElementById("password"),
    email = document.getElementById("email"),
    login2 = document.getElementById("login2"),
    password2 = document.getElementById("password2"),
    confirmPassword = document.getElementById("confirm-password");

registerLink.addEventListener("click", function(e) {
    e.preventDefault();
    formContainer1.style.display = "none";
    formContainer2.style.display = "block";
});

loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    formContainer2.style.display = "none";
    formContainer1.style.display = "block";
});

email.addEventListener("input", isEmailValid);
login2.addEventListener("input", function(e) {
    isLoginValid(e, login2, "login2ErrorMessage");
});
password2.addEventListener("input", function(e) {
    isPasswordValid(e, password2, "password2ErrorMessage");
});
confirmPassword.addEventListener("input", passwordConfirmation);

function isEmailValid(e) {
    var errorMessagePlaceholder = document.getElementById("emailErrorMessage");
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.value.match(emailRegEx)) {
        e.preventDefault();
        errorMessagePlaceholder.textContent = "Please, include an '@' in your email address!";
    } else if(email.value.trim() == "" || !email.value) {
        e.preventDefault();
        errorMessagePlaceholder.textContent = "Invalid input! Please, enter your email address!";
    } else {
        errorMessagePlaceholder.textContent = "";
    }
}


function passwordConfirmation(e) {
    var errorMessagePlaceholder = document.getElementById("confirmErrorMessage");
    if(confirmPassword.value != password2.value) {
        e.preventDefault();
        errorMessagePlaceholder.textContent = "Passwords do not match!";
    } else {
        errorMessagePlaceholder.textContent = "";
    }
}

form2.addEventListener("submit", function(e) {
    if(!isEmailValid) {
        e.preventDefault();
    }

    if(!isLoginValid(e, login2, "login2ErrorMessage")) {
        e.preventDefault();
    }

    if(!isPasswordValid(e, password2, "password2ErrorMessage")) {
        e.preventDefault();
    }

    if(!passwordConfirmation) {
        e.preventDefault();
    }
});


login.addEventListener("input", function(e) {
    isLoginValid(e, login, "loginErrorMessage");
});
password.addEventListener("input", function(e) {
    isPasswordValid(e, password, "passwordErrorMessage");
});

function isLoginValid(e, loginInput, identifier) {
    var errorMessagePlaceholder = document.getElementById(identifier);
    if(loginInput.value.trim() == "") {
        errorMessagePlaceholder.textContent = "Login cannot be blank";
        e.preventDefault();
    } else if(loginInput.value.length <= 3 || loginInput.value.length > 20) {
        errorMessagePlaceholder.textContent = "Login should be 4-10 characters long!";
        e.preventDefault();
    } else {
        errorMessagePlaceholder.textContent = "";
    }
}

function isPasswordValid(e, passwordInput, identifier) {
    var errorMessagePlaceholder = document.getElementById(identifier);

    if(passwordInput.value.trim() == "") {
        errorMessagePlaceholder.textContent = "Password cannot be blank";
        e.preventDefault();
    } else if(!isComplexPassword(passwordInput.value)) {
        errorMessagePlaceholder.textContent = "Weak password!";
        e.preventDefault();
    } else {
        errorMessagePlaceholder.textContent = "";
    }
}

function isComplexPassword(password) {
    if (password.length < 8) {
        return false;
    }

    return /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /\W/.test(password);
}

form1.addEventListener("submit", function(e) {
    if(!isLoginValid(e, login, "loginErrorMessage")) {
        e.preventDefault();
    }

    if(isPasswordValid(e, password, "passwordErrorMessage")) {
        e.preventDefault();
    }
});


