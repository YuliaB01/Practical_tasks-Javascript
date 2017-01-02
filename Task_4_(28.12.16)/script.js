var someArray = ["BMW", "Audi", "Ford", "Volkswagen", "Mercedes", "Mazda", "Lexus", "Honda", "Chevrolet"];

console.log("Масив: " + someArray.join(", "));

// Написати функцію, яка буде виводити переданий їй масив через 1 елемент.
function showArray(array) {
  console.log("%cВиведення масиву через один елемент:", "color: blue");

  for (var i = 0; i < array.length - 1; i++) {
    i = i + 1;
    console.log(array[i]);
  }
}

showArray(someArray);

// Написати функцію, яка буде виводити переданий масив з вказаним кроком. Величина кроку також передається, як аргумент. (Приклад виклику: printArray([1,2,3,4,5,6, 7], 3). Перший аргумент масив, який буде виведено, а другий - крок. Тобто виводом буде 1,4,7)
function showArrayWithStep(array, step) {
  console.log("%cВиведення масиву із заданим кроком:", "color: blue");

  for (var i = 0; i < array.length; i++) {
    i = i + step;
    console.log(array[i]);
  }
}

showArrayWithStep(someArray, 2);

// Написати функцію, яка буде шукати найменший елемент в масиві.
function findShortestElement(array) {
  console.log("%cВиведення найкоротшого елементу в масиві:", "color: blue");
  var smallest = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < smallest - 1) {
        smallest = array[i];
    }
  }

  console.log("The smallest element in array is: " + smallest);
}

findShortestElement(someArray);

//Написати функцію, яка буде шукати найбільший елемент в масиві.
function findLongestElement(array) {
   console.log("%cВиведення найдовшого елементу в масиві:", "color: blue");
  var longest = array[0];

  for(var i = 0; i < array.length; i++) {
    if(array[i] > longest) {
        longest = array[i];
    }
  }
  console.log("The longest element in array is: " + longest);
}
findLongestElement(someArray);
