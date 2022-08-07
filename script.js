//create start btn
const startBtnEl = document.querySelector('.start-btn');

//get question DOM elements
const question1 = document.getElementById('1');
const question2 = document.getElementById('2');
const question3 = document.getElementById('3');
const question4 = document.getElementById('4');
const question5 = document.getElementById('5');


//get answer DOM elements
const answer1 = document.getElementById('11').innerHTML;
const answer2 = document.getElementById('12').innerHTML;
const answer3 = document.getElementById('13').innerHTML;
const answer4 = document.getElementById('14').innerHTML;
const answer5 = document.getElementById('15').innerHTML;

//get message DOM elements
const message1 = document.getElementById('21');
const message2 = document.getElementById('22');
const message3 = document.getElementById('23');
const message4 = document.getElementById('24');
const message5 = document.getElementById('25');

//save as arrays
const questions = [question1, question2, question3, question4, question5];
const answers = [answer1, answer2, answer3, answer4, answer5];
const messages = [message1, message2, message3, message4, message5];

//starting the timer and calling the first question
const startQuiz = function() {
    question1.classList.remove('hidden');
    startTimer();
}

const nextQuestion = function() {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestionEl = questions[i];
        let nextQuestionEl = questions[i + 1];

        currentQuestionEl.classList.add('hidden');
        nextQuestionEl.classList.remove('hidden');

        console.log(currentQuestionEl);
        console.log(nextQuestionEl);

        return currentQuestionEl, nextQuestionEl
    }
    checkAnswer();
}

//checking selected answer against correct answer
const checkAnswer = function(event) {
    //capture selected answer
    selectedAnswer = event.target.innerHTML; 
    console.log(selectedAnswer)
    
    //get correct answer and current message container
    for (let i = 0; i < questions.length; i++) {
        let correctAnswer = answers[i];
        console.log(correctAnswer);

        let currentMessageEl = messages[i];
        console.log(currentMessageEl);

        //compare selected answer to correct answer
        if (selectedAnswer === correctAnswer) {
            currentMessageEl.innerHTML = "Correct!";
            return nextQuestion();
        } else {
            currentMessageEl.innerHTML = "Incorrect!";
            selectedAnswer = false;
            return nextQuestion();
        }
        
    }
}

const startTimer = function() {
    const timer = document.querySelector(".timer");
    let currentTime = 20;
    
    const countdown = setInterval(function(){
        timer.innerHTML = `Time remaining: ` + currentTime--;
        
        if (!selectedAnswer) {
            currentTime -= 1;
        }

        if (currentTime < 0) {
            clearInterval(countdown);
            return currentTime;
        }
    }, 1000);
}

question1.addEventListener('click', checkAnswer);

startBtnEl.addEventListener('click', startQuiz);

