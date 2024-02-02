//
//
// Variables
var qList = []
// When currentQuestion = -1, the quiz is over.
var currentQuestion = 1

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
        qList[i].self = document.querySelector(`#q${i}`)
        qList[i].qText = qList[i].self.querySelector(".qText").textContent
        qList[i].aList = Array.from(qList[i].self.querySelectorAll(".choices button")).map((button, index) => {
            return button.textContent;
        });
        // When the user hasn't answered the question yet, aUser = 0
        qList[i].aUser = 0
    }
}

function loadTrueAnswersHardcoded() {
    qList[1].aTrue = 1
    qList[2].aTrue = 2
    qList[3].aTrue = 3
    qList[4].aTrue = 4
    qList[5].aTrue = 5
}
