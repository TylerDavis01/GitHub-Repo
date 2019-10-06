document.getElementById('company').innerHTML = "Tyler's Bed and Breakfast"
document.getElementById('slogan').innerHTML = "The best B&B in Utah!"
document.getElementById('pageName').innerHTML = "Welcome to Tyler's"

let userName = prompt("What is your name?")

let message = `Hello ${userName}, welcome to the best B&B in Utah!`

document.getElementById('greeting').innerHTML = message