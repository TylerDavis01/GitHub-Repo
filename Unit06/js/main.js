const story = document.querySelector('#story')

var nounArray = [];
var adjectiveArray = [];
var verbArray = [];

var nouns = document.querySelector('#nouns');
var adjectives = document.querySelector('#adjectives');
var verbs = document.querySelector('#verbs')

nounArray = nouns.value.toLowerCase().replace(/\n/g, " ").split(" ");
adjectiveArray = adjectives.value.toLowerCase().replace(/\n/g, " ").split(' ');
verbArray = verbs.value.toLowerCase().replace(/\n/g, " ").split(' ');


console.log(nounArray);
console.log(adjectiveArray);
console.log(verbArray);

function tellStory() {
    // nounArray = querySelector('#noun') ,//lowercase ,String split
    // Repeat for adjective and verbs

    const myStory = `Once upon a time there were four <span id="addedWords">${adjectiveArray[0]}</span> <span id="addedWords">${nounArray[0]}s</span> named Flopsy, Mopsy, Cotton-tail and Peter. <br>
    They lived with their Mother underneath a <span id="addedWords">${nounArray[1]}</span> near a <span id="addedWords">${adjectiveArray[1]}</span> <span id="addedWords">${nounArray[2]}</span>. <br>
    Now, my dears, said <span id="addedWords">${adjectiveArray[2]}</span> Mrs. Rabbit, you may go over the <span id="addedWords">${nounArray[3]}</span> or around the <span id="addedWords">${nounArray[4]}</span>, but do not go into Mr. McGregor's <span id="addedWords">${nounArray[5]}</span>, <br>
    your Father had an accident there and he was put in a <span id="addedWords">${nounArray[6]}</span> by Mrs. McGregor. <br>
    Now <span id="addedWords">${verbArray[0]}</span> along, and don't get into mischief. I am going <span id="addedWords">${verbArray[1]}ing</span>.`

    story.innerHTML = myStory
}