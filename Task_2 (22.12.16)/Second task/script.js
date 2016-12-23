var num = +prompt("Enter a number from 0 to 50");

if (isNaN(num)) {
  alert("Value must be a number.");
  num = +prompt("Enter a number from 0 to 50");
} else if (num > 50 || num < 0) {
  alert("Value must be a number from 0 to 50");
  num = +prompt("Enter a number from 0 to 50");
}
console.log(num);

var userNum = [];
var sum = 0;

for (var i = 1; i <= 500; i++) {
  if((i % num) == 0) {
    userNum.push(i);
  }
}
console.log(userNum);

for (var i = userNum.length - 1; i >= 0; i--){
  console.log(userNum[i]);
}

for (var i = 0; i < userNum.length; i++) {
  sum += userNum[i];
}
console.log(sum);
