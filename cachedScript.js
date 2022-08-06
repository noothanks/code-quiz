const currentQuestionContainer = document.querySelector('#current-question');
const choicesContainer = document.querySelector('#choices-container');
const pageBody = document.querySelector('body');

var questions = ['question 1', 'question 2', 'quesion 3', 'question 4'];
var choices = [Array('a', 'b', 'c', 'd'), Array('e', 'f', 'g', 'h'), Array('i', 'j', 'k', 'l'), Array('m', 'n', 'o', 'p')];

const createDiv = function() {
    const questionDivEl = document.createElement('div');
    questionDivEl.id = 'question-container';
    pageBody.appendChild(questionDivEl);

    let questionContainer = document.querySelector('#question-container');

    const createBtnEl = function() {
        let answerId = 0;
        for(let i = 0; i < choices.length; i++) {
            for (let j = 0; j < choices[i].length; j++) {
                const answerBtnEl = document.createElement('button');
                answerBtnEl.id = answerId;
                answerId++;
        
                answerBtnEl.innerHTML = `${choices[j]}`;
                answerBtnEl.setAttribute
                questionContainer.appendChild(answerBtnEl);
            }
        }
    }

    const createQuestionEl = function() {
        let questionId = 0;
        for (let i = 0; i < questions.length; i++) {
            const questionEl = document.createElement('h2');
            questionEl.id = questionId;
            questionId++;
    
            questionEl.innerHTML = `${questions[i]}`;
            questionEl.setAttribute("hidden", "true");
            questionContainer.appendChild(questionEl);
        }
    }

    createQuestionEl();
    createBtnEl();
}

const getCurrentQuestion = function() {

}