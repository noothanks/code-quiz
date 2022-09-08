//create start btn
const startBtnEl = document.getElementById('startBtn');

//highscores div
const highscoresEl = document.querySelector('.highscores');

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

//misc DOM elements
const headerEl = document.getElementById('headerEl');
const showHighScoresBtn = document.getElementById('showHighScores');

//save separated elements as arrays
const questions = [question1, question2, question3, question4, question5];
const answers = [answer1, answer2, answer3, answer4, answer5];
const messages = [message1, message2, message3, message4, message5];
// let highscores = [];
let questionNum = 0;

const timer = document.querySelector(".timer");

let currentAnswer = 0;
let currentTime = 20;

let capturedAnswers = [];
let capturedScores = [];


//starting the timer and calling the first question
const startQuiz = function() {

    startTimer();
    headerEl.classList.add('header');
    timer.classList.remove('hidden');
    question1.classList.remove('hidden');
    // nextQuestion();
}

const setScore = function(){
        let highscores = getScores();

        
        if (true) {
            highscores.push(currentTime);
            highscores.sort();
            highscores.reverse();
        } 

        for (i = 0; i < highscores[9]; i++) {
            if (highscores[i] < currentTime) {
                //remove lowest highscore
                highscores.pop();
                //add new highscore to the end
                highscores.push(currentTime);
                //sort the array (ascending)
                highscores.sort();
                //reorder (descending);
                highscores.reverse();

               return highscores;
            }
        }
        
        //loop through array and compare current score and highscores
        //if current score is higher than any of the top 10 scores,
        //update/replace/reorder accordingly
        //update local storage
        localStorage.setItem("highscores", JSON.stringify(highscores));
}

const getScores = function() {
    //get local storage array
    let highscores = localStorage.getItem("highscores");

    //create one if it doesnt exist
    if (!highscores) { 
        highscores = [];

        return highscores;
    } else { //otherwise compare current score to top 10
        // highscores = JSON.parse("highscores");
        // highscores.sort();
        // highscores.reverse();

        return JSON.parse(highscores);
    }
}

const displayScores = function() {

    let highscores = getScores();
    
    highscoresEl.classList.remove("hidden");

    for (i=0; i<highscores.length; i++) {
        const scoreEl = document.createElement("h3");

        scoreEl.innerHTML = highscores[i]
        highscoresEl.appendChild(scoreEl);
    }
}

const nextQuestion = function() {

        let currentQuestionEl = questions[questionNum];
        let nextQuestionEl = questions[questionNum + 1];

        currentQuestionEl.classList.add('hidden');
        nextQuestionEl.classList.remove('hidden');

        console.log(currentQuestionEl);
        console.log(nextQuestionEl);

        questionNum++;

        console.log(questionNum);
    if (questionNum >= 4 || currentTime <= 0) {
        setScore(); 
    }
};

//checking selected answer against correct answer
const checkAnswer = function(event) {
        //capture selected answer
        selectedAnswer = event.target.innerHTML; 
        console.log(selectedAnswer)

    //get correct answer and current message container
                let correctAnswer = answers[currentAnswer];

                console.log(correctAnswer);
    
                let currentMessageEl = messages[currentAnswer];
                console.log(currentMessageEl);
    
                //compare selected answer to correct answer
                if (selectedAnswer === correctAnswer) {
                    currentMessageEl.innerHTML = "Correct!";
                    setTimeout(function() {
                        nextQuestion(currentAnswer);
                    }, 1000);
                    capturedAnswers.push(correctAnswer);
                    currentAnswer++;
                } else {
                    currentMessageEl.innerHTML = "Incorrect!";
                    selectedAnswer = false;
                    setTimeout(function() {
                        nextQuestion(currentAnswer);
                    }, 1000);
                    capturedAnswers.push(correctAnswer);
                    currentAnswer++;
                }

    selectedAnswer = '';
}

const startTimer = function() {

    
    const countdown = setInterval(function(){
        timer.innerHTML = `Time remaining: ` + currentTime--;
        
        if (!selectedAnswer) {
            currentTime--;
        }

        if (currentTime < 0 || capturedAnswers.length >=  5) {
            clearInterval(countdown);
            //return currentTime;
        }
    }, 1000);
}

question1.addEventListener('click', checkAnswer);
question2.addEventListener('click', checkAnswer);
question3.addEventListener('click', checkAnswer);
question4.addEventListener('click', checkAnswer);
question5.addEventListener('click', checkAnswer);

startBtnEl.addEventListener('click', startQuiz);
showHighScoresBtn.addEventListener('click', displayScores);