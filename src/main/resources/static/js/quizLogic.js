// questions is a global variable that will be used to store the questions and answers
var questions = [
    {
        // Ok, I'll admit that the process of loading the questions and answers is... pretty stupid and obviously AI generated.
        // But... it works and it'll do for now.
        question: document.querySelector("#question1 .question").textContent,
        answers: [...document.querySelectorAll('#question1 .choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
          }, {}),
        correctAnswer: 1,
    },
    {
        question: document.querySelector("#question2 .question").textContent,
        answers: [...document.querySelectorAll('#question2 .choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
          }, {}),
        correctAnswer: 2,
    },
    {
        question: document.querySelector("#question3 .question").textContent,
        answers: [...document.querySelectorAll('#question3 .choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
          }, {}),
        correctAnswer: 3,
    },
    {
        question: document.querySelector("#question4 .question").textContent,
        answers: [...document.querySelectorAll('#question4 .choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
          }, {}),
        correctAnswer: 4,
    },
    {
        question: document.querySelector("#question5 .question").textContent,
        answers: [...document.querySelectorAll('#question5 .choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
          }, {}),
        correctAnswer: 5,
    },
];



console.log(questions);

