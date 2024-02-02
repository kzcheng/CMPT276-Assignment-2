// This is a global variable that will be used to store the questions and answers.
// Also this is a bad idea so I commented it out.
// var questions = [
//     {
//         // Ok, I'll admit that the process of loading the questions and answers is... pretty stupid and obviously AI generated.
//         // But... it works and it'll do for now.
//         question: document.querySelector("#question1 .question").textContent,
//         answers: [...document.querySelectorAll('#question1 .choices button')].reduce((obj, button, index) => {
//             obj[index + 1] = button.textContent
//             return obj
//           }, {}),
//         correctAnswer: 1,
//     },
//     {
//         question: document.querySelector("#question2 .question").textContent,
//         answers: [...document.querySelectorAll('#question2 .choices button')].reduce((obj, button, index) => {
//             obj[index + 1] = button.textContent
//             return obj
//           }, {}),
//         correctAnswer: 2,
//     },
//     {
//         question: document.querySelector("#question3 .question").textContent,
//         answers: [...document.querySelectorAll('#question3 .choices button')].reduce((obj, button, index) => {
//             obj[index + 1] = button.textContent
//             return obj
//           }, {}),
//         correctAnswer: 3,
//     },
//     {
//         question: document.querySelector("#question4 .question").textContent,
//         answers: [...document.querySelectorAll('#question4 .choices button')].reduce((obj, button, index) => {
//             obj[index + 1] = button.textContent
//             return obj
//           }, {}),
//         correctAnswer: 4,
//     },
//     {
//         question: document.querySelector("#question5 .question").textContent,
//         answers: [...document.querySelectorAll('#question5 .choices button')].reduce((obj, button, index) => {
//             obj[index + 1] = button.textContent
//             return obj
//           }, {}),
//         correctAnswer: 5,
//     },
// ];

var qList = []

loadQuestionDataFromHTML(qList)

// I really wish I didn't choose to store all the data in the HTML file.
loadTrueAnswersHardcoded()

console.log(qList)

qList[1].self.style.display = "block"

// 
// 
// Event Listeners



// 
// 
// Functions
function loadQuestionDataFromHTML(qList) {
    for (let i = 1; i <= 5; i++) {
        // haha array starts at 1 go brrr!
        // Ignoring that, the other problem is, are there any scope issues with this?
        // Am I like, declaring a new object every time globally without var or let?
        // I guess it should be fine? Since qList itself is declared with var.
        qList[i] = {}
        qList[i].self = document.querySelector(`#question${i}`)
        qList[i].qText = qList[i].self.querySelector(".question").textContent
        qList[i].aList = [...qList[i].self.querySelectorAll('.choices button')].reduce((obj, button, index) => {
            obj[index + 1] = button.textContent
            return obj
        }, {})
    }
}

function loadTrueAnswersHardcoded() {
    qList[1].aTrue = 1
    qList[2].aTrue = 2
    qList[3].aTrue = 3
    qList[4].aTrue = 4
    qList[5].aTrue = 5
}