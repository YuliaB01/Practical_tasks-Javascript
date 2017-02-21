define(["module2"], function(module2) {
    function sortNumbers(a, b) {
        return a - b;
    }
    module2.sort(sortNumbers);

    return sortNumbers;
});