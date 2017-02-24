define([], function() {
    function isEmailValid(email) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email == "" || email === null || !email.match(emailRegEx)) {
            return false;
        }

        return true;
    }

    function isPasswordValid(password) {
        if(password.length < 8) {
            return false;
        }

        return true;
    }

    return {
        isPasswordValid: isPasswordValid,
        isEmailValid: isEmailValid
    };
});