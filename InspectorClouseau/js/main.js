document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "'This IZ Chief Inspector Clouseau speaking on the pheaun.'"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top edge.`
    let documentTitle = `The title of the document is ${document.title}.`
    let documentLastM = `This document was last modified on ${document.lastModified}.`
    
    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`
    let myDocument = document.querySelector('#myDocument').innerText = `${documentTitle} \n ${documentLastM}`
}
reDisplay()
