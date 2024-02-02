//
//
// Variables
var qList = loadQuestionDataFromHTML()
// When currentQuestion = -1, the quiz is over.
var currentQuestion = 1

// I really wish I didn't choose to store all the data in the HTML file.
loadTrueAnswersHardcoded()

console.log(qList)

// qList.forEach((question) => {
//     console.log(question.self)
// })

qList[0].self.style.display = "block"

//
//
// Event Listeners
document.querySelector("#bNext").addEventListener("click", () => {
    console.log("Next button clicked.")
    displayQuestion(2)
})

document.querySelector("#bPrev").addEventListener("click", () => {
    console.log("Previous button clicked.")
})

document.querySelector("#bSubmit").addEventListener("click", () => {
    console.log("Submit button clicked.")
})

//
//
// Functions
function loadQuestionDataFromHTML() {
    qList = Array.from({ length: 5 }, (_, i) => {
        let self = document.querySelector(`#q${i + 1}`)
        return {
            self: self,
            qText: self.querySelector(".qText").textContent,
            aList: Array.from(self.querySelectorAll(".choices button")).map((button) => button.textContent),
            // When the user hasn't answered the question yet, aUser = 0
            aUser: 0,
        }
    })
    return qList
}

function loadTrueAnswersHardcoded() {
    qList[0].aTrue = 1
    qList[1].aTrue = 2
    qList[2].aTrue = 3
    qList[3].aTrue = 4
    qList[4].aTrue = 5
}

function displayQuestion(i) {
    qList[i - 1].self.style.display = "block"
}
