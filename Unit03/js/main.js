document.getElementById('header1').innerHTML = "Guessing Game"
document.getElementById('header2').innerHTML = "Loops"

//pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random() * 15)
let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess(){
    totalGuesses++ //Incrementing total guesses by one. 
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')

    if(gamerGuess == correctNumber){
        console.log("You are a winner!")
        feedback.innerText = 'You Won!'
        giveAward();
    }else if(gamerGuess > correctNumber && gamerGuess < 16){
        feedback.innerText = 'Too high, try again!'
        console.log("Guess too high")
    }else if(gamerGuess < correctNumber && gamerGuess > 0){
        feedback.innerText = 'Too low, try again!'
        console.log("Guess too low")
    }else{
        feedback.innerText = 'Please enter a number between 1 and 15 and try again.'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward(){
    switch(totalGuesses){
        case 1:
        case 2:
        case 3:
            break;
        case 4:
        case 5:
        case 6:
            break;
        case 7:
        case 8:
        case 9:
            break;
    }

    const awardImage = document.createElement('img') //Creating an <img> element for the ribbon image.
    if(totalGuesses <= 3){
        awardImage.setAttribute('src', 'images/blue.png')
        console.log('Blue Ribbon')
    } else if(totalGuesses > 3 && totalGuesses < 7){
        awardImage.setAttribute('src', 'images/red.png')
        console.log('Red Ribbon')
    } else if(totalGuesses >= 7){
        awardImage.setAttribute('src', 'images/yellow.png')
        console.log('Yellow Ribbon')
    }
    

    const ribbon = document.querySelector('#ribbon')

    //var awardGiven = document.getElementById('#ribbon').hasChildNodes();
    
    ribbon.appendChild(awardImage)
}