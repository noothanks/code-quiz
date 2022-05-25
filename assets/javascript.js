var timer = 100;
var timeInterval;
var questionIndex = 0;
var currentQuestion = questions[questionIndex];
var correctAnswer = currentQuestion.answer;
var choices = currentQuestion.choices;
//storing each question as an array of objects
var questions = [
    {
        question: 'First Question',
        choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        answer: 'Answer 2'
    },
    {
        question: 'Second Question',
        choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        answer: 'Answer 4'
    },
    {
        question: 'Third Question',
        choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        answer: 'Answer 1' 
    },
    {
        question: 'Fourth Question',
        choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        answer: 'Answer 4' 
    },
]

//defining HTML elements as variables

//defining start quiz button
var startButton = document.querySelector('#start-quiz-button');
//defining display on quiz start
var startDisplay = document.querySelector('#star-quiz-screen');
//defining timer display
var timerDisplay = document.querySelector('#time-display');
//defining question display
var questionDisplay = document.querySelector('#quiz-questions-screen');
//defining choice display
var choicesDisplay = document.querySelector('#question-choices');
//displays if answer was correct or not
var questionResults = document.querySelector('#results');
//displays current question text
var questionText = document.querySelector('#question-text');
//defining display on quiz end
var endDisplay = document.querySelector('#end-quiz-screen');



//ending the quiz
var endQuiz = function() {
    clearInterval(timeInterval);
    questionDisplay.classList.add('hidden');
    endQuizScreen.classList.remove('hidden');
}

//checking if answer is correct
var checkAnswer = function(event) {
    //get current question from array
    currentQuestion;
    //get user choice
    var userChoice = event.target;
    //get correct answer
    correctAnswer;

    //compare selected answer to correct choice
    if (correctAnswer === userChoice.textContent) {
        //if answer is correct
        questionResults.textContent = "Your answer is correct! Great job!";
    } else {
        questionResults.textContent = "Your answer is incorrect.";

        //penalize user for incorrect answer
        if (timer < 10) {
            //score becomes 0 if less than 0
            timer = 0;
        } else {
            //otherwise subtract 10 from the timer to get current score
            timer -= 10;
            timerDisplay.textContent = timer;
        }
        //updating timer display
        timerDisplay.textContent = timer;
    }

    //getting rid of result response after question completion
    setTimeout(function () {
        questionResults.textContent = '';
    }, 750);

    //move to the next question
    currentQuestion += 1;
    nextQuestion();
}

//displaying the next question
var nextQuestion = function() {
    //check if any questions are left
    if (questionIndex < questions.length) {
        //if yes display next question
        questionText.textContent = currentQuestion.question;
        //change answers to fit new question
        choices;
        choicesDisplay.innerHTML = '';
        //create button for each choice
        for (var i = 0; i < choices.length; i++) {
            var button = document.createElement('button');
            button.textContent = choices[i];
            button.addEventListener('click', checkAnswer);
            choicesDisplay.appendChild(button);
          }
    } 
    else {
        //if no question are left
        endQuiz();
    }
}

//Starting the timer
var startTimer = function() {
    timeInterval = setInterval(function() {
      timer -= 1;
  
      if (timer < 0)
        timer = 0;
  
      timerDisplay.textContent = timer;
  
      if (timer === 0) {
        endQuiz();
      }
    }, 1000);
  }

var startQuiz = function() {
    startDisplay.classList.add('hidden');
    questionDisplay.classList.remove('hidden');
    nextQuestion();
    startTimer();
}
startButton.addEventListener('click', startQuiz);

//resetting timer display
timerDisplay.textContent = timer;