const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },
    {
        question: "Which is first successful nation to land on Moon's South pole successfully?",
        answers: [
            {text: "India [ Chandrayaaan-3 ]" , correct: true},
            {text: "Russia [ Luna-25 ]" , correct: false},
            {text: "USA [ Appolo-11 ]" , correct: false},
            {text: "Japan [ HALCA ]" , correct: false},
        ]
    },
    {
        question: "Who scored the fastest Hundendred in ODI cricket?",
        answers: [
            {text: "Chris Gayle" , correct: false},
            {text: "Brendon McCullum" , correct: false},
            {text: "Virat Kohli" , correct: false},
            {text: "A B de Villiers" , correct: true},
        ]
    },
    {
        question: "Who is the first Indian Cricketer to score 10,000 test runs?",
        answers: [
            {text: "Mohammad Aziruddin" , correct: false},
            {text: "Sachin Tendulkar" , correct: false},
            {text: "Sunil Gavaskhar" , correct: true},
            {text: "Kapil Dev" , correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Gobi desert" , correct: false},
            {text: "Arabian desert" , correct: false},
            {text: "Thar desert" , correct: false},
            {text: "Sahara desert" , correct: true},
        ]
    }
];
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function beginQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    // resetting the question state to get rid of default ans options entered in html
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        // this will remove all the 1st elements i.e, default options
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

beginQuiz();
