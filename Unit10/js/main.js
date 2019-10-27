function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')
    document.getElementById("smallNavArea").appendChild(newList)

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' textContent from upper menu to new menu
        newLink.textContent = menuItem.textContent
        // append children to make them appear in the DOM
        document.getElementById("smallNavArea").appendChild(newLI)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
        
    })
}

duplicateMenu()