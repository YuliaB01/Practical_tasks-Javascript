var quizQuestions = [];
var quizIsOver = false;

quizQuestions.push({
    question: "Cкільки буде 2 + 2?",
    answers: [
        "4", "6", "5", "3"
    ],
    correctAnswerIndex: 0
});

quizQuestions.push({
    question: "Cкільки буде 5 + 5?",
    answers: [
        "4", "10", "5", "3"
    ],
    correctAnswerIndex: 1
});

quizQuestions.push({
    question: "Cкільки буде 7 + 5?",
    answers: [
        "4", "6", "12", "3"
    ],
    correctAnswerIndex: 2
});

quizQuestions.push({
    question: "Cкільки буде 4 + 2?",
    answers: [
        "4", "6", "5", "3"
    ],
    correctAnswerIndex: 1
});

quizQuestions.push({
    question: "Cкільки буде 15 + 20?",
    answers: [
        "46", "64", "25", "35"
    ],
    correctAnswerIndex: 3
});

quizQuestions.push({
    question: "Cкільки буде 45 + 20?",
    answers: [
        "49", "60", "65", "35"
    ],
    correctAnswerIndex: 2
});

quizQuestions.push({
    question: "Cкільки буде 56 + 6?",
    answers: [
        "45", "62", "50", "35"
    ],
    correctAnswerIndex: 1
});

quizQuestions.push({
    question: "Cкільки буде 49 + 2?",
    answers: [
        "41", "61", "51", "31"
    ],
    correctAnswerIndex: 2
});

quizQuestions.push({
    question: "Cкільки буде 400 + 200?",
    answers: [
        "400", "650", "500", "600"
    ],
    correctAnswerIndex: 3
});

quizQuestions.push({
    question: "Cкільки буде 540 + 25?",
    answers: [
        "445", "665", "565", "365"
    ],
    correctAnswerIndex: 2
});

var questionElement = document.getElementById("question");
var input = document.getElementById("input");
var possibleAnswers = document.getElementById("possibleAnswers");

var correctAnswers = [];
var incorrectAnswers = [];

var currentQuestionIndex = 0;

function showNextQuestion() {
    currentQuestionIndex++;

    if (quizQuestions[currentQuestionIndex]) {
        showQuestion();
    }
}

function showQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    possibleAnswers.innerText = "Possible answers: " + currentQuestion.answers.join(", ");

    input.focus();
}

function isLastQuestion() {
    return (1 + currentQuestionIndex === quizQuestions.length);
}

function clearAnswerInput() {
    input.value = '';
}

function getCurrentAnswer() {
    return input.value;
}

function processAnswer() {
    if (quizIsOver) {
        return;
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];
    var answer = getCurrentAnswer();

    if (currentQuestion.answers.indexOf(answer) === currentQuestion.correctAnswerIndex) {
        correctAnswers.push(answer);
        console.log("Correct");
    } else {
        incorrectAnswers.push(answer);
        console.log("Incorrect");
    }

    clearAnswerInput();

    if (isLastQuestion()) {
        showQuizSummary();
    } else {
        showNextQuestion();
    }
}

function showQuizSummary() {
    var quizSummaryElement = document.getElementById("quiz-summary");
    var quizSummary = "Number of correct answers: " + correctAnswers.length + "\n";
    quizSummary += "Number of incorrect answers: " + incorrectAnswers.length;

    quizSummaryElement.innerText = quizSummary;
    quizIsOver = true;
}

showQuestion();
