// -- Global Variables and Main Code --
var currentSelectedStudent = {
    sid: -1,
    name: "",
    weight: 0,
    height: 0,
    hairColor: "",
    gpa: 0.0,
}
var allStudents = loadStudentDataFromTable()

var students = loadStudentDataFromTable()
console.log(students) // Log the student data to the console

students.forEach((student) => {
    drawStudentRectangle(student)
})

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

function loadStudentDataFromTable() {
    var tableRows = document.querySelectorAll("#student-table tbody tr")
    var allStudents = []

    tableRows.forEach(function (row) {
        var student = {
            sid: row.cells[0].innerText,
            name: row.cells[1].innerText,
            weight: row.cells[2].innerText,
            height: row.cells[3].innerText,
            hairColor: row.cells[4].innerText,
            gpa: row.cells[5].innerText,
        }

        allStudents.push(student)
    })

    return allStudents
}
