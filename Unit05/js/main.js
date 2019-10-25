// Create an array with 4 trees listed
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>This list is ${trees.length} elements long.</span>`
}

listTrees()

//Add a Redwood to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees();
}

//Add a Pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees();
}

//Remove first tree in the list
document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length > 0){
        trees.shift()
        listTrees();
    }else {
        errorElement.textContent = 'Cannot remove the first tree because there arent any trees in the list.'
    } 
}

//Remove second tree in the list
document.querySelector('#remove_tree2').onclick = () => {
    if(trees.length > 0){
        trees.splice(1,1)
        listTrees();
    }else {
        errorElement.textContent = 'Cannot remove the second tree because there arent any trees in the list.'
    } 
}

//Remove last tree in the list
document.querySelector('#remove_treeLast').onclick = () => {
    if(trees.length > 0){
        trees.pop()
        listTrees();
    }else {
        errorElement.textContent = 'Cannot remove the last tree because there arent any trees in the list.'
    } 
}

//Sort list A>Z
document.querySelector('#sortTrees').onclick = () => {
    if(trees.length > 0){
        trees.sort()
        listTrees();
    }else {
        errorElement.textContent = 'Cannot sort trees because there arent any trees in the list.'
    } 
}

//Make all list items lowercase
document.querySelector('#lowerTrees').onclick = () => {
    if(trees.length > 0){
        var sorted = [];
        let treeList2 = ''
        for (var i = 0; i < trees.length; i++) {
                sorted.push(trees[i].toLowerCase());
        };
        sorted.forEach(tree => {
            treeList2 += `${tree} <br>`
        })
        displayResults.innerHTML = `${treeList2} <span>This list is ${trees.length} elements long.</span>`
    }else {
        errorElement.textContent = 'Cannot lowercase trees because there arent any trees in the list.'
    } 
}

//Display the name of the 3rd tree
document.querySelector('#showName3').onclick = () => {
    if(trees.length > 0){
        var tree3 = trees[2].toString()
        errorElement.textContent = `The name of the third tree is ${tree3}`
    }else {
        errorElement.textContent = 'Cannot display name of 3rd tree because there isnt a 3rd tree in the list.'
    } 
}

//Display the name of the 4th tree
document.querySelector('#showName4').onclick = () => {
    if(trees.length > 0){
        var tree4 = trees[3].toString()
        errorElement.textContent = `The name of the forth tree is ${tree4}`
    }else {
        errorElement.textContent = 'Cannot display name of 4th tree because there isnt a 4th tree in the list.'
    } 
}