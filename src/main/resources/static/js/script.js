// var n = window.prompt("name?", "Bob")
// window.alert("Hello, " + n + "!")

// n = "Bob"
// console.log("Hello, " + n + "!")

for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log(i)

// let is smaller in scope than var.

// Objects

var person = {
    name: "Bob",
    age: 25,
    email: "mail@mail.com",
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    speak: function(words) {
        console.log(words)
    },
}

// Functions
// Internally in JavaScript, functions are objects.

myfunc()
// Functions declared with the function keyword are hoisted to the top of the file.
// This means that you can call the function before it's declared in the file.

function myfunc() {
    console.log("Hello, world!")
    console.log(person)
}

var myfunc2 = function() {
    console.log("Hello, world! 2")
}

myfunc2()
// Functions declared with the var keyword are not hoisted to the top of the file.

// Callbacks
// Functions can be passed as arguments to other functions.
// This function is for sorting an array of numbers.
function asc(a, b) {
    return a - b
}

// window.setInterval(myfunc, 1000)
// myfunc is being passed as an argument to the setInterval function.

// You can also pass anonymous functions as arguments to other functions.
// var inter = window.setInterval(function() {
//     console.log(i)
//     i++
// }, 1000)

// window.clearInterval(inter)
// This stops the interval.

// Invoking the speak method of the person object.
person.speak("Hello, I'm person!")

// This is to grab the element with the id of "fname" from the HTML file.
var t = document.getElementById("fname")

console.log(t.value)
// t.value grabs what is in the text box at the current moment. Even if submit was not clicked.

t.value = "Steve"
// Setting this value instantly changes what is in the text box.

var c = document.querySelector(`input[value="SuBmIt"]`)
// This grabs the first input element with the value of "SuBmIt".
// This is based on the CSS selector syntax.

var td = document.getElementsByTagName("td")
// This grabs all the td elements in the HTML file.
// The result is an array of td elements. Like: HTMLCollection(12) [td, td, td, td, td, td, td, td, td, td, td, td]

// Event Listeners
// window.addEventListener("load", function() {
//     console.log("The page has loaded.")
// })

window.addEventListener("keypress", processKey)

function processKey(evt) {
    console.log(evt.key)
}

var button = document.querySelector("input[value='SuBmIt']")

button.addEventListener("click", function(evt) {
    evt.preventDefault()
    console.log("Button clicked.")
    var text = document.getElementById("fname").value
    document.getElementsByTagName("legend")[0].innerHTML = text 
})

// Ok cool everything works now time to actually begin the project.