function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10: 
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "Something is broken! Contact IT to fix the issue!"
            break
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'some days you are pigeon, some days you are statue. Today, bring umbrella.'
            break;
        case 2:
            message = 'your reality check about to bounce.'
            break;
        case 3:
            message = 'wise person never try to get even. Wise person get odder.'
            break;
        case 4:
            message = 'two days from now, tomorrow will be yesterday.'
            break;
        case 5:
            message = 'your inferiority complex not good enough. Try harder.'
            break;
        case 6:
            message = 'when chosen for jury duty, tell judge "fortune cookie say guilty!”'
            break;
        case 7:
            message = 'tomorrow at breakfast, listen carefully: do what rice krispies tell you to.'
            break;
        case 8:
            message = 'drive like hell, you will get there.'
            break;
        default:
            message = 'something is broken! Contact IT to fix the issue!'
            break;
    }
    return message
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 8)
let day = getRandomIntInclusive(1, 30)

console.log(month)
console.log(day)
console.log(fate)

const monthName = getMonthName(month)
console.log(monthName)
const fortune = getFortune(fate)
console.log(fortune)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}`

document.querySelector('#fortune').innerText = fortuneRevealed