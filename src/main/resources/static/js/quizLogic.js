/**
 * This file contains the logic for a quiz application.
 * It includes functions to load question data from HTML, display questions, check completion status, submit the quiz, and more.
 * The user can navigate through the questions, select an answer, and submit the quiz to see the result.
 * The result is displayed with the score and the correct answers highlighted.
 * The file also includes event listeners for navigation buttons and answer buttons.
 */

//
//
// #region -- Global Variables and Main Code --
// The main question list.
var qList = loadQuestionDataFromHTML()
// Indicates if all questions have been answered.
var quizComplete = false
// Indicates if the quiz has been submitted.
var quizSubmitted = false
// ID of the current question. Starts at 0.
var currentQID = 0
// The user's score.
var score = 0

// I really wish I didn't choose to store all the data in the HTML file.
loadTrueAnswersHardcoded()

console.log(qList)

// Uncomment this to fill answers for testing.
// qList.every((question) => (question.aUser = 2))

refreshQuestionBlock()

// #endregion

//
//
// #region -- Event Listeners --
addNavigationListeners()
addAnswerButtonListeners()
addSubmitButtonListener()
// #endregion

//
//
// #region -- Functions --

/**
 * Adds event listeners to the next and previous buttons for navigation.
 * Increments or decrements the current question ID and refreshes the question block accordingly.
 */
function addNavigationListeners() {
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
}

/**
 * Adds event listeners to the answer buttons for all the questions.
 * Changes the user's answer and refreshes the question block accordingly.
 */
function addAnswerButtonListeners() {
    // All the answer buttons for all the questions.
    qList.forEach((question, i) => {
        question.aList.forEach((answer, j) => {
            let button = question.self.querySelector(`.choices button:nth-child(${j + 1})`)
            button.addEventListener("click", () => {
                console.log(`Question ${i + 1} button ${j + 1} clicked.`)
                question.aUser = j

                // Change all buttons back to their default color
                question.self.querySelectorAll(".choices button").forEach((btn) => {
                    btn.style.backgroundColor = ""
                })

                refreshQuestionBlock()
            })
        })
    })
}

/**
 * Adds a listener to the submit button that triggers the submitQuiz function when clicked.
 * This button should be disabled until the quiz is complete.
 */
function addSubmitButtonListener() {
    document.querySelector("#bSubmit").addEventListener("click", () => {
        console.log("Submit button clicked.")
        submitQuiz()
    })
}

/**
 * Loads question data from HTML and returns an array of question objects.
 * @returns {Array} The array of question objects.
 */
function loadQuestionDataFromHTML() {
    return Array.from({ length: 5 }, (_, i) => {
        let self = document.querySelector(`#question${i + 1}`)
        return {
            self: self,
            // q usually means "question" and a usually means "answer".
            // If quiz needs to be referred to, use "quiz" instead.
            qText: self.querySelector(".questionText").textContent,
            aList: Array.from(self.querySelectorAll(".choices button")).map((button) => button.textContent),
            // When the user hasn't answered the question yet, aUser = -1.
            aUser: -1,
        }
    })
}

/**
 * Loads the true answers for the quiz questions by hardcoding the values.
 */
function loadTrueAnswersHardcoded() {
    qList[0].aTrue = 0
    qList[1].aTrue = 1
    qList[2].aTrue = 2
    qList[3].aTrue = 3
    qList[4].aTrue = 4
}

/**
 * Submits the quiz and triggers the end of quiz screen.
 */
function submitQuiz() {
    quizSubmitted = true
    score = 0
    qList.forEach((question) => {
        if (question.aUser === question.aTrue) {
            score++
        }
    })
    displayEndOfQuizScreen()
}

/**
 * Refreshes the question block by performing the following actions:
 * - Hides the questions if the quiz has been submitted
 * - Checks and displays the submit button
 * - Updates the color of the answer buttons
 * - Displays the current question
 */
function refreshQuestionBlock() {
    if (!quizSubmitted) hideAllQuestions()
    checkAndDisplaySubmit()
    updateAnswerButtonsColor()
    displayQuestion(currentQID)
}

/**
 * Displays a question with the given ID.
 * Updates the user's answer display and enables/disables the next and previous buttons accordingly.
 * @param {number} id - The ID of the question to display.
 */
function displayQuestion(id) {
    qList[id].self.style.display = "block"
    // Update the user's answer displayed.
    qList[id].self.querySelector(".userAnswer").textContent = `Your Answer: ${qList[id].aUser === -1 ? " " : qList[id].aList[qList[id].aUser]}`

    if (quizSubmitted) return

    if (currentQID === qList.length - 1 || qList[currentQID].aUser === -1) {
        document.querySelector("#bNext").disabled = true
    } else {
        document.querySelector("#bNext").disabled = false
    }

    if (currentQID === 0) {
        document.querySelector("#bPrev").disabled = true
    } else {
        document.querySelector("#bPrev").disabled = false
    }
}

/**
 * Hides all the questions in the quiz.
 */
function hideAllQuestions() {
    qList.forEach((question) => {
        question.self.style.display = "none"
    })
}

/**
 * Checks if the submit button should be displayed based on the quiz submission status and completion status.
 * If the quiz has not been submitted and is complete, the submit button is enabled.
 * @returns {boolean} True if the submit button should be displayed, false otherwise.
 */
function checkAndDisplaySubmit() {
    if (!quizSubmitted && checkCompletion()) {
        document.querySelector("#bSubmit").disabled = false
        return true
    } else {
        document.querySelector("#bSubmit").disabled = true
        return false
    }
}

/**
 * Displays the end of the quiz screen.
 * Performs the following actions:
 * - Displays the score.
 * - Disables all answer buttons.
 * - Hides the navigation buttons.
 * - Shows all the correct answers.
 * - Shows all the questions.
 * - Add the lines between questions.
 * - Updates the color of answer buttons.
 */
function displayEndOfQuizScreen() {
    // Display the score.
    document.querySelector("#resultText").textContent = `You got ${score} out of 5 questions correct!`
    document.querySelector("#resultBlock").style.display = "block"

    // Disable all answer buttons.
    document.querySelectorAll(".choices button").forEach((button) => {
        button.disabled = true
    })

    // Hide the navigation buttons.
    document.querySelector("#bNext").style.display = "none"
    document.querySelector("#bPrev").style.display = "none"
    document.querySelector("#bSubmit").style.display = "none"

    // Show all the correct answers.
    document.querySelectorAll(".trueAnswer").forEach((trueAnswer) => {
        trueAnswer.style.display = "block"
    })

    // Shows all the questions.
    qList.forEach((question) => {
        question.self.style.display = "block"
    })

    showLinesBetweenQuestions()
    updateAnswerButtonsColor()
}

/**
 * Checks if the quiz is complete by verifying if all questions have been answered.
 * The global variable quizComplete is updated accordingly.
 * @returns {boolean} True if the quiz is complete, false otherwise.
 */
function checkCompletion() {
    if (quizComplete) {
        return quizComplete
    }
    quizComplete = qList.every((question) => question.aUser !== -1)
    console.log(`quizComplete: ${quizComplete}`)
    return quizComplete
}

/**
 * Colors the answer buttons based on whether the user's answer is correct or not.
 * If the user's answer is correct, or if the quiz has not been submitted, the user's button is blue.
 * If the user's answer is incorrect, the correct answer is green and the user's answer is red.
 */
function updateAnswerButtonsColor() {
    qList.forEach((question) => {
        if (question.aUser === -1) return
        let buttons = question.self.querySelectorAll(".choices button")
        if (question.aUser === question.aTrue || !quizSubmitted) {
            buttons[question.aUser].style.backgroundColor = "rgb(175, 225, 225)" // Blue
        } else {
            buttons[question.aTrue].style.backgroundColor = "rgb(175, 225, 175)" // Green
            buttons[question.aUser].style.backgroundColor = "rgb(225, 175, 175)" // Red
        }
    })
}

/**
 * Adds a horizontal line after each question except the last one.
 * Used when the quiz end screen is displayed.
 */
function showLinesBetweenQuestions() {
    qList.forEach((question, i) => {
        if (i !== qList.length - 1) {
            let hr = document.createElement("hr")
            question.self.appendChild(hr)
        }
    })
}

// #endregion

//
//
// -- TODO --
// - CSS.
// - Make more sensible questions.