let questionsArea = document.getElementById('question');
let answersArea = document.getElementById('answers');
let optionOne = document.getElementById('1');
let optionTwo = document.getElementById('2');
let optionThree = document.getElementById('3');
let quiz = document.getElementById('quiz');
let startBtn = document.getElementById('start-btn')
let timeLeft = 75;
let startScore = 0
let timer = document.getElementById('timer')

const questions = [
    {
        question: 'A boolean is a ______',
        optionOne: 'A number',
        optionTwo: 'A sentence',
        optionThree: 'Something that is either true or false',
        correct: 'Something that is either true or false'
    },
    {
        question: 'What is the foundation of web development?',
        optionOne: 'HTML',
        optionTwo: 'JS',
        optionThree: 'CSS',
        correct: 'HTML'
    },
    {
        question: 'What does JS stand for?',
        optionOne: "Jerry's soup",
        optionTwo: 'JavaScript',
        optionThree: 'Jump soon',
        correct: 'JavaScript'
    },
    {
        question: 'Which of these added style to the webpage?',
        optionOne: 'MS Paint',
        optionTwo: 'HTML',
        optionThree: 'CSS',
        correct: 'CSS'
    }
];
let lastQuestion = questions.length -1;
let questionIndex = 0;

timer.textContent = "Time Remaining: " + startScore + "s"

startBtn.addEventListener('click', start)

function start() {
    const timeInterval = setInterval(function() {
        timer.textContent = "Time remaining: " + timeLeft + 's';
        timeLeft -=1;
        if(timeLeft === 0 || questions.length === questionIndex+1){
            score();
            clearInterval(timeInterval);
            timer.textContent = 'Time remaining:' + timeLeft + 's'
        }
    }, 1000);
    loadQuestion();
};

function loadQuestion() {
    let question = questions[questionIndex]
    questionsArea.innerHTML = question.question;
    optionOne.innerHTML = question.optionOne;
    optionTwo.innerHTML = question.optionTwo;
    optionThree.innerHTML = question.optionThree;
};

function check(answer){
    if(questions[questionIndex].correct === answer) {
        answerOutput.textContent = "Correct"
    } else {
        answerOutput.textContent = 'incorrect'
    }

    if (questions.length === questionIndex+1){
        loadResult();
        return;
    }
    questionIndex++;
    loadQuestion();
};

function loadResult