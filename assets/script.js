let questionsArea = document.getElementById('question');
let answersArea = document.getElementById('answers');
let optionOne = document.getElementById('1');
let optionTwo = document.getElementById('2');
let optionThree = document.getElementById('3');
let quiz = document.getElementById('quiz');
let startBtn = document.getElementById('start-btn')
let timeLeft = 90;
let holdInterval = 0
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

timer.style.display = "none"

startBtn.addEventListener('click', start)

function start() {
    if(holdInterval === 0){
        holdInterval = setInterval(function(){
            timer.style.display = "block"
            timeLeft--;
            timer.textContent = "Time Remaining: " + timeLeft + " seconds"
                    
            if(timeLeft <=0 ){
                clearInterval(holdInterval);
                questionsArea.textContent = "Sorry you ran out of time :("
            }
            loadQuestion()
        }, 1000)
    }
};

function loadQuestion() {
    questionsArea.innerHTML = questions[questionIndex].question;
    optionOne.innerHTML = questions[questionIndex].optionOne;
    optionTwo.innerHTML = questions[questionIndex].optionTwo;
    optionThree.innerHTML = questions[questionIndex].optionThree;
};


function check(answer){
    if(questions[questionIndex].correct == answer) {
        answerOutput.textContent = "Correct";
        score++;
        console.log(score);
    } else {
        answerOutput.textContent = 'Incorrect';
        score--;
        console.log(score);
    }
    console.log(answer);
    questionIndex++;

    if (questionIndex < questions.length){
        loadQuestion();
    } else {
        loadResult()
        questionsArea.textContent = 'Your Done!'
    }
};

function loadResult() {
    answersArea.style.display = "none"
    answerOutput.textContent = ""
    result.textContent = 'Final Score: ' + score + '';
};