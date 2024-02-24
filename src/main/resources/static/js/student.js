console.log("student.js loaded.")

// -- Global Variables and Main Code --
var currentSelectedStudentID = -1

// -- Functions --
function selectedStudent(button) {
    currentSelectedStudentID = button.getAttribute("sid")
    console.log("Current Selected Student ID: ", currentSelectedStudentID)
}
