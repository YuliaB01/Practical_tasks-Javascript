//Цикл на 50 ітерацій. Всі парні числа зберігаються в масиві
var even  = [];
var sum = 0;
var product = 1;

for (var i = 0; i <= 50; i++) {
  if ((i % 2) == 0) {
    even.push(i);
  }
}
console.log(even);

//Сума чисел з масиву в діапазоні від 20 до 30
for (var i = 0; i < even.length; i++) {
  if (even[i] >= 20 && even[i] <= 30) {
    sum += even[i];
  }
}
console.log(sum);

//Добуток всіх чисел з масиву в діапазоні від 30 до 40
for (var i = 0; i < even.length; i++) {
  if (even[i] >=30 && even[i] <= 40) {
    product *= even[i];
  }
}
console.log(product);
