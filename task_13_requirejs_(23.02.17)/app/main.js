require(["PromptData", "Validation", "Request"], function(PromptData, Validation, Request) {
    var emailAnswer = null,
        passwordAnswer = null;

    do {
        emailAnswer = PromptData("Please, enter your email");
    } while (!Validation.isEmailValid(emailAnswer));

    do {
        passwordAnswer = PromptData("Please, enter your password");
    } while (!Validation.isPasswordValid(passwordAnswer));

    Request.post("/", function() {
        console.log('Request success!');
    }, {
        email: emailAnswer,
        password: passwordAnswer
    });
});