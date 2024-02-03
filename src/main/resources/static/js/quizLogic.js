//
//
// Variables
var qList = loadQuestionDataFromHTML()
var currentQID = 0
// Boolean flag to indicate if all questions have been answered.
var quizComplete = false
var quizSubmitted = false
var score = 0

// I really wish I didn't choose to store all the data in the HTML file.
loadTrueAnswersHardcoded()

console.log(qList)

// Uncomment this to fill answers.
// qList.every((question) => (question.aUser = 2))

refreshQuestionBlock()

//
//
// Event Listeners
document.querySelector("#bNext").addEventListener("click", () => {
    console.log("Next button clicked.")
    currentQID++
    console.log(`Moving to question ${currentQID + 1}.`)
    refreshQuestionBlock()
})

document.querySelector("#bPrev").addEventListener("click", () => {
    console.log("Previous button clicked.")
    currentQID--
    console.log(`Moving to question ${currentQID + 1}.`)
    refreshQuestionBlock()
})

// All the answer buttons for all the questions.
qList.forEach((question, i) => {
    question.aList.forEach((answer, j) => {
        question.self.querySelector(`.choices button:nth-child(${j + 1})`).addEventListener("click", () => {
            console.log(`Question ${i + 1} button ${j + 1} clicked.`)
            question.aUser = j
            refreshQuestionBlock()
        })
    })
})

document.querySelector("#bSubmit").addEventListener("click", () => {
    console.log("Submit button clicked.")
    submitQuiz()
})

//
//
// Functions
function loadQuestionDataFromHTML() {
    return Array.from({ length: 5 }, (_, i) => {
        let self = document.querySelector(`#q${i + 1}`)
        return {
            self: self,
            qText: self.querySelector(".qText").textContent,
            aList: Array.from(self.querySelectorAll(".choices button")).map((button) => button.textContent),
            // When the user hasn't answered the question yet, aUser = -1.
            aUser: -1,
        }
    })
}

function loadTrueAnswersHardcoded() {
    qList[0].aTrue = 0
    qList[1].aTrue = 1
    qList[2].aTrue = 2
    qList[3].aTrue = 3
    qList[4].aTrue = 4
}

function refreshQuestionBlock() {
    hideQuestions()
    displayQuestion(currentQID)
    checkIfDisplaySubmit()
}

function hideQuestions() {
    return qList.forEach((question) => {
        question.self.style.display = "none"
    })
}

function displayQuestion(id) {
    qList[id].self.style.display = "block"
    qList[id].self.querySelector(".userAnswer").textContent = `Your Answer: ${qList[id].aUser === -1 ? " " : qList[id].aList[qList[id].aUser]}`

    if (currentQID === qList.length - 1 || qList[currentQID].aUser === -1) {
        document.querySelector("#bNext").disabled = true;
    } else {
        document.querySelector("#bNext").disabled = false;
    }

    if (currentQID === 0) {
        document.querySelector("#bPrev").disabled = true;
    } else {
        document.querySelector("#bPrev").disabled = false;
    }
}

function checkIfDisplaySubmit() {
    if (!quizSubmitted && checkCompletion()) {
        document.querySelector("#bSubmit").disabled = false;
        return true;
    } else {
        document.querySelector("#bSubmit").disabled = true;
        return false;
    }
}

function checkCompletion() {
    if (quizComplete) {
        return quizComplete
    }
    quizComplete = qList.every((question) => question.aUser !== -1)
    console.log(`quizComplete: ${quizComplete}`)
    return quizComplete
}

function submitQuiz() {
    quizSubmitted = true
    score = 0
    qList.forEach((question) => {
        if (question.aUser === question.aTrue) {
            score++
        }
    })
    document.querySelector("#resultText").textContent = `You got ${score} out of 5 correct!`
    document.querySelector("#resultBlock").style.display = "block"

    // Disable all answer buttons
    document.querySelectorAll(".choices button").forEach((button) => {
        button.disabled = true
    })

    // Show all the correct answers
    document.querySelectorAll(".trueAnswer").forEach((trueAnswer) => {
        trueAnswer.style.display = "block"
    })

    refreshQuestionBlock()
}



// TODO
// 1. Highlighting the user's answer and the correct answer
// 2. Upon submitting the quiz, display the user's score and correct answers for each question.
// 3. CSS
// 4. Make more sensible questions.