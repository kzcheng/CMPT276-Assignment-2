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

drawStudentRectangle({ name: "Alice", weight: 50, height: 100, gpa: 3.5 })
drawStudentRectangle({ name: "Bob", weight: 20, height: 150, gpa: 2.5 })

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

function drawStudentRectangle(student) {
    // Create the rectangle
    var rectangle = document.createElement("div")
    rectangle.className = "d-flex p-2 border border-dark m-2" // Add 'm-2' class for margin on all sides
    rectangle.style.flexGrow = student.weight
    rectangle.style.height = student.height + "px"

    // Add the student's information
    var info = document.createElement("p")
    info.innerHTML = `<strong>${student.name}</strong><br>GPA: ${student.gpa}`
    rectangle.appendChild(info)

    // Add the rectangle to the container
    var container = document.getElementById("student-rectangle-container")
    container.appendChild(rectangle)
}
