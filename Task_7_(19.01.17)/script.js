// Напишіть програму, де буде два поля вводу - імя, прізвище. Під ними створіть один `p`, в який буде виводитись інформація в такому форматі:
// "Привіт, <firstName> <lastName>"
// 'firstName' - дані з поля вводу імені
// 'lastName' - дані з поля прізвища

var userFirstName = document.getElementById("firstName");
var userLastName = document.getElementById("lastName");
var userFullName = document.getElementById("fullName");

userFirstName.addEventListener("keyup", myFunction);
userLastName.addEventListener("keyup", myFunction);

function myFunction() {
    userFullName.innerText = "Hello, " + userFirstName.value + " " + userLastName.value + "!";
}



// document.getElementById("btn").addEventListener("click", function(){
//   userFullName.innerText = "Hello, " + userFirstName.value + " " + userLastName.value + "!";
//
// });