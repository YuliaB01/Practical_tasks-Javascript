//1. Створити масив з 10 елементів. Це мають бути випадкові числа.
//І вивести всі числа з інтервалом в 1 секунду на консоль.

var arr = [];
console.log("%cЗгенерований масив з випадкових чисел:", "color: blue");

function generateRandomArray(array) {
  for (var i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 100));
  }
  console.log(array);
}
generateRandomArray(arr);

console.log("%cВиведення елементів масиву з інтервалом в 1 секунду:", "color: blue");

function logArrayWithInterval(array) {
  for (var i = 0; i < array.length; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(array[i]);
      }, 1000 * i);
    })(i);
  };
}

logArrayWithInterval(arr);
