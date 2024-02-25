console.log("student.js loaded.")

// -- Global Variables and Main Code --
var currentSelectedStudent = {
    sid: -1,
    name: "",
    weight: 0,
    height: 0,
    hairColor: "",
    gpa: 0.0,
}

// -- Functions --
function selectedStudent(button) {
    currentSelectedStudent.sid = button.getAttribute("sid")
    currentSelectedStudent.name = button.getAttribute("name")
    currentSelectedStudent.weight = button.getAttribute("weight")
    currentSelectedStudent.height = button.getAttribute("height")
    currentSelectedStudent.hairColor = button.getAttribute("hairColor")
    currentSelectedStudent.gpa = button.getAttribute("gpa")

    updateHtmlAfterSelectingStudent()
    console.log("Current Selected Student ID: ", currentSelectedStudent.sid)
}

function updateHtmlAfterSelectingStudent() {
    var editForm = document.querySelector(".edit-selected-student-form")
    editForm.action = "/students/edit/" + currentSelectedStudent.sid
    editForm.elements["name"].value = currentSelectedStudent.name
    editForm.elements["weight"].value = currentSelectedStudent.weight
    editForm.elements["height"].value = currentSelectedStudent.height
    editForm.elements["hairColor"].value = currentSelectedStudent.hairColor
    editForm.elements["gpa"].value = currentSelectedStudent.gpa

    document.querySelectorAll(".selected-student").forEach((element) => {
        element.innerHTML = currentSelectedStudent.sid
    })
}
