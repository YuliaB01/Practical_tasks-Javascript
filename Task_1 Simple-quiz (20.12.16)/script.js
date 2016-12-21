var answer1 = prompt("What is the largest freshwater lake in the world?");
var total = 0;

if (answer1.toLowerCase() == "lake superior" || answer1.toLowerCase() == "superior") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}


var answer2 = prompt("Where would you find the Sea of Tranquility?");

if (answer2.toLowerCase() == "the moon" || answer2.toLowerCase() == "on the Moon" ||  answer2.toLowerCase() == "moon") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer3 = prompt("What is the seventh planet from the sun?");

if (answer3.toLowerCase() == "uranus") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer4 = prompt("What is the world's biggest island?");

if (answer4.toLowerCase() == "greenland") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer5 = prompt("What is the world's longest river?");

if (answer5.toLowerCase() == "amazon") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer6 = prompt("What is the world's largest ocean?");

if (answer6.toLowerCase() == "pacific" || answer6.toLowerCase() == "the pacific") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer7 = prompt("What is the capital city of Spain?");

if (answer7.toLowerCase() == "madrid") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer8 = prompt("What item of clothing was named after its Scottish inventor?");

if (answer8.toLowerCase() == "a mackintosh" || answer8.toLowerCase() == "mackintosh") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer9 = prompt("Which is the only American state to begin with the letter 'p'?");

if (answer9.toLowerCase() == "pennsylvania") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

var answer10 = prompt("Who played Neo in The Matrix?");

if (answer10.toLowerCase() == "keanu reeves") {
    total++;
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}

document.write("Your total is: " + total);