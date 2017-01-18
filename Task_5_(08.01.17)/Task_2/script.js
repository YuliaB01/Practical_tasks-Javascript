// 2. Створити масив об'єктів такого виду:
// {
//     question: "Скільки буде 2+2",
//     answers: [
//         "10", "5", "3", "4"
//     ],
//     correctAnswerIndex: 3,
//     userAnswerIndex: null
// }
// Підготувати 20-30 запитань і заповнити масив такими об'єктами.


var quiz = [];

quiz.push({
  question: "Cкільки буде 2 + 2?",
  answers: [
    "4", "6", "5", "3"
  ],
  correctAnswerIndex: 0,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 5 + 5?",
  answers: [
    "4", "10", "5", "3"
  ],
  correctAnswerIndex: 1,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 7 + 5?",
  answers: [
    "4", "6", "12", "3"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 4 + 2?",
  answers: [
    "4", "6", "5", "3"
  ],
  correctAnswerIndex: 1,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 15 + 20?",
  answers: [
    "46", "64", "25", "35"
  ],
  correctAnswerIndex: 3,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 45 + 20?",
  answers: [
    "49", "60", "65", "35"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 56 + 6?",
  answers: [
    "45", "62", "50", "35"
  ],
  correctAnswerIndex: 1,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 49 + 2?",
  answers: [
    "41", "61", "51", "31"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 400 + 200?",
  answers: [
    "400", "650", "500", "600"
  ],
  correctAnswerIndex: 3,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 540 + 25?",
  answers: [
    "445", "665", "565", "365"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 250 + 25?",
  answers: [
    "275", "300", "285", "375"
  ],
  correctAnswerIndex: 0,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 450 + 35?",
  answers: [
    "485", "685", "585", "385"
  ],
  correctAnswerIndex: 0,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 430 + 220?",
  answers: [
    "450", "650", "550", "350"
  ],
  correctAnswerIndex: 1,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 480 + 20?",
  answers: [
    "450", "600", "500", "350"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

quiz.push({
  question: "Cкільки буде 460 + 20?",
  answers: [
    "480", "600", "500", "350"
  ],
  correctAnswerIndex: 2,
  userAnswerIndex: null
});

var quizTime = quiz.length * 10 * 10;
var quizExpired = false;
var correctAnswers = 0;
var incorrectAnswers = quiz.length;

setTimeout(function() {
  quizExpired = true;
  console.log("Time expired!");
}, quizTime);

for (var i in quiz) {
  if (!quizExpired) {
    var posAnswers = " Possible answers: " + quiz[i].answers.join(", ");
    var answer = prompt(quiz[i].question + posAnswers);

    if (quiz[i].answers.indexOf(answer) === quiz[i].correctAnswerIndex) {
      incorrectAnswers--;
      correctAnswers++;
    }
  } else {
    alert("There is no time anymore!");
    break;
  }
}

console.log("Number of correct answers is: " + correctAnswers);
console.log("Number of incorrect answers is: " + incorrectAnswers);
