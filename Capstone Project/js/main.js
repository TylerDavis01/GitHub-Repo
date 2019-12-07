//function to calculate solor data.
function calculateSolar() {
    //Calculates average dailyKw's used based off user entry.
    var dailyKw = addMonths('powerconsumption');
    console.log(`User entered daily average is: ${dailyKw} kWh`);
    //Calculates amount of sun hours in each zone based from switch statement in sunHours function. 
    var sunHoursPerDay = sunHours();
    console.log(`Sun hours per day based on user selected zone: ${sunHoursPerDay}`);
    //Calculates the needed minimum amount of Kw's by dividing the daily average usage by the amount of sun hours each day in each zone. 
    var minKwNeeds = dailyKw/sunHoursPerDay;
    console.log(`Minimum kWh needed: ${minKwNeeds}`);

    var realKwNeeds = minKwNeeds*1.25;
    console.log(realKwNeeds);
    //Calculates the amount of Kw's needed each day.
    var realWattNeeds = realKwNeeds*1000;
    console.log(`Total Watts needing to be generated each day: ${realWattNeeds}`);
    //Grabs the information about each solar panel from the option tags in index.html by running the calculatePanel function.
    var panelInfo = calculatePanel();
    var panelOutput = panelInfo[0];
    var panelName = panelInfo[1];
    console.log(panelOutput);
    console.log(panelName);
    //Calculates the amount of panels needed by dividing the total watts needed by the output value of each panel. 
    //The output value for each panel comes from the value parameter on the option tag.
    var panelsNeeded = Math.ceil(realWattNeeds/panelOutput);
    console.log(`Amount of solar panels needed based off needs is: ${panelsNeeded}`);
    
    //Outputs all information to the feedback div tag on index page. 
    var feedback ="";
    feedback += `<p>Based on your average daily use of ${+Math.round(dailyKw)} kWh, you will need to purchase ${panelsNeeded} ${panelName} solar panels to offset 100% of your electric bill.</p>`;
    feedback += "<br><hr><h2>Additional Details</h2><br>";
    feedback += `<p>Your average daily electricity consumption is: ${Math.round(dailyKw)} Kwh per day.</p>`;
    feedback += `<p>The average amount of sunshine per day in your zone is: ${sunHoursPerDay} hours</p>`;
    feedback += `<p>You need to generate ${Math.round(realWattNeeds)} watts per hour to offset your current electrical draw from the grid.</p>`;
    feedback += `<p>The ${panelName} panel you selected generates about ${panelOutput} watts per hour based off its efficiency rating.</p>`;

    document.getElementById('feedback').innerHTML=feedback;
}

//Function to calculate the average Kw's per day that the user entered. 
function addMonths(elem) {
    var annualKw=0, dailyKw=0, i=0, x=0;
    var months=document.getElementById(elem).getElementsByTagName('input');
        //loops through each months input tag and grabs the value from it.
        for(i=0; i<months.length; i++) {
            x = Number(months[i].value);
            annualKw += x;
        }
        dailyKw = annualKw/365;
        return dailyKw;
    }

//Function to determine the amount of sun hours based on the zone provided in the map. 
function sunHours() {
    var hrs;
    var theZone = document.forms.energyform.zone.selectedIndex;
    theZone += 1;
    switch(theZone) {
            case 1:
                hrs = 6;
                break;
            case 2:
                hrs = 5.5;
                break;
            case 3:
                hrs = 5;
                break;
            case 4:
                hrs = 4.5;
                break;
            case 5:
                hrs = 3;
                break;
            default:
                hrs = 0;
        }
        return hrs;
}

//Calculates which panel was selected and grabs the output value on the option tag. It then stores that information in an array. 
function calculatePanel() {
    var userChoice  = document.forms.energyform.panel.selectedIndex;
    var panelOptions = document.forms.energyform.panel.options;
    var power = panelOptions[userChoice].value;
    var name = panelOptions[userChoice].text;
    var x = [power, name];
    return x;
}
    
  
    