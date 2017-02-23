define([], function() {
    var numberArray = [];

    for (var i = 0, j = 35; i < j; i++) {
        numberArray.push(Math.round(Math.random() * 500));
    }

    return numberArray;
});