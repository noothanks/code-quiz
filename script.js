const startBtnEl = document.querySelector('.start-btn');

const question1 = document.getElementById('1');
const question2 = document.getElementById('2');
const question3 = document.getElementById('3');
const question4 = document.getElementById('4');
const question5 = document.getElementById('5');

const questions = [question1, question2, question3, question4, question5];

const startQuiz = function() {
    question1.classList.remove('hidden');
    startTimer();
}

const getQuestion2 = function() {
    question1.className = 'hidden';
    question2.classList.remove('hidden');
}

const checkAnswer = function(event) {
    selectedAnswer = event.target.innerHTML;
    console.log(selectedAnswer)
    
    if(selectedAnswer === correctAnswer) {
        getQuestion2();
    }
}

const startTimer = function() {
    const timer = document.querySelector(".timer");
    let currentTime = 10;
    
    const countdown = setInterval(function(){
        timer.innerHTML = `Time: ${currentTime--}`;
        if (currentTime < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

question1.addEventListener('click', checkAnswer);

startBtnEl.addEventListener('click', startQuiz);

checkAnswer();