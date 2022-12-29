let questionsArea = document.getElementById('question');
let answersArea = document.getElementById('answers');
let optionOne = document.getElementById('1');
let optionTwo = document.getElementById('2');
let optionThree = document.getElementById('3');
let quiz = document.getElementById('quiz');
let startBtn = document.getElementById('start-btn')
let timeLeft = 75;
let score = 0
let timer = document.getElementById('timer')
let scoreArea = document.getElementById('score')

const questions = [
    {
        question: 'A boolean is a ______',
        optionOne: 'A number',
        optionTwo: 'A sentence',
        optionThree: 'Something that is either true or false',
        correct: '3'
    },
    {
        question: 'What is the foundation of web development?',
        optionOne: 'HTML',
        optionTwo: 'JS',
        optionThree: 'CSS',
        correct: '1'
    },
    {
        question: 'What does JS stand for?',
        optionOne: "Jerry's soup",
        optionTwo: 'JavaScript',
        optionThree: 'Jump soon',
        correct: '2'
    },
    {
        question: 'Which of these added style to the webpage?',
        optionOne: 'MS Paint',
        optionTwo: 'HTML',
        optionThree: 'CSS',
        correct: '3'
    }
];

let lastQuestion = questions.length -1;
let questionIndex = 0;

timer.textContent = "Time Remaining: 0 seconds"

startBtn.addEventListener('click', start)

function start() {
    const timeInterval = setInterval(function() {
        timer.textContent = "Time remaining: " + timeLeft + ' seconds';
        timeLeft -=1;
        if(timeLeft === 0 || lastQuestion){
            clearInterval(timeInterval);
            timer.textContent = 'Time remaining:' + timeLeft + ' seconds'
        }
    }, 1000);
    loadQuestion();
};

function loadQuestion() {
    questionsArea.innerHTML = questions[questionIndex].question;
    optionOne.innerHTML = questions[questionIndex].optionOne;
    optionTwo.innerHTML = questions[questionIndex].optionTwo;
    optionThree.innerHTML = questions[questionIndex].optionThree;
};

function check(answer){
    if(questions[questionIndex].correct == answer) {
        answerOutput.textContent = "Correct"
        score = score + 1;
        console.log(score)
    } else {
        answerOutput.textContent = 'Incorrect'
        score = score - 1
        console.log(score)
    }
    console.log(answer)
    questionIndex++;
    loadQuestion();
};

scoreArea.textContent = "Score:" + score; 

function loadResult() {
    result.textContent = 'Score: ' + score + '';
};