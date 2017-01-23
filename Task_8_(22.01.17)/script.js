var form = document.forms.demo;
var fname = document.getElementById("firstName"),
    lname = document.getElementById("lastName"),
    phone = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    select = document.getElementById("select"),
    lang = document.getElementById("language");


var successShown = false;

function validationSuccess(target) {
    if (!successShown) {
        var span = document.createElement("span");
        span.innerHTML = "&#9989;";

        target.parentElement.appendChild(span);
        successShown = true;
    }
}

function validationFail(target) {
    var errorMessage = 'Invalid input!';
    var p = document.createElement('p');
    var textNode = document.createTextNode(errorMessage);
    p.appendChild(textNode);
    p.style.color = "red";
    target.parentElement.appendChild(p);
    target.focus();
}


function validationEmptyInput(target) {
    var errorMessage = 'This field is required!';
    var p = document.createElement('p');
    var textNode = document.createTextNode(errorMessage);
    p.appendChild(textNode);
    p.style.color = "red";
    target.parentElement.appendChild(p);
    target.focus();
}
fname.addEventListener("blur", function() {
    var value = event.target.value;
    if (value == "") {
        validationEmptyInput(event.target);
    } else if (!isNaN(value) || value.length < 3 || value.length > 10 ) {
        validationFail(event.target);
    } else {
        validationSuccess(event.target);
    }
});


lname.addEventListener("blur", function() {
    var value = event.target.value;
    if (value == "") {
        validationEmptyInput(event.target);
    } else if(!isNaN(value) || value.length < 3 || value.length > 15) {
        validationFail(event.target);
    } else {
        validationSuccess(event.target);
    }
});


phone.addEventListener("blur", function() {
    var value = event.target.value;
    if (value == "") {
        validationEmptyInput(event.target);
    } else if (isNaN(value) || value.length < 10 || value.length > 10) {
        validationFail(event.target);
    } else {
        validationSuccess(event.target);
    }
});


email.addEventListener("blur", function validateEmail() {
    var value = event.target.value;
    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value == "") {
        validationEmptyInput(event.target);
    } else if (value.match(emailRegExp)) {
        validationSuccess(event.target);
    } else {
        validationFail(event.target);
    }
});


select.addEventListener("change", function() {

    if (this.value == "developer") {
        lang.style.display = "block";
    } else {
        lang.style.display = "none";
    }
});

lang.addEventListener("blur", function() {
    var value = event.target.value;
    if (value =="") {
        validationEmptyInput(event.target);
    } else if(value == "") {
        validationFail(event.target);
    } else {
        validationSuccess(event.target);
    }
});

