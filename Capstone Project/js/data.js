//JSON data that is put into each card on the products page. This data is provided for the description of each different solar panel. 
var panelJson = {
        "mono": "Monocrystalline Panel",
        "monodes": "Monocrystalline solar panels are generally considered the premium solar product. The main advantages of monocrystalline panels are the higher efficiencies and better looking design.",
        "poly": "Polycrystalline Panel",
        "polydes": "Polycrystalline solar panels are the mid-tier solar product. They offer less efficiency than a monocrystalline panel, but come in at a much cheaper cost.",
        "amor": "Amorphous Silicon Panel",
        "amordes": "Amorphous silicon panels are the least common of the selections. These panels offer a significant advantage over its competitors because it is extremely flexible. Though a disadvantage to this flexibility  is lower efficiency."
    }

//Assigning the JSON value to each description. 
var monoText = document.getElementById("monotext");
monoText.innerText = panelJson.monodes;

var polyText = document.getElementById("polytext");
polyText.innerText = panelJson.polydes;

var amorText = document.getElementById("amortext");
amorText.innerText = panelJson.amordes;


