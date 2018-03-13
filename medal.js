var svg = document.getElementById("mysvg");
var country = document.getElementById("label");
var switchButton = document.getElementById("toggle");


/*
    determines the country
    -1: Czech Republic
    1: Austria
*/
var toggleCountry = 1;

// medal data [numGold, numSilver, numBronze]
var austriaMedals = [5, 3, 6];
var czechMedals = [2, 2, 3];


// create the initial circles
var gold = document.createElementNS("http://www.w3.org/2000/svg", "circle");
gold.setAttribute("cx", 150);
gold.setAttribute("cy", 250);
gold.setAttribute("fill", "gold");
svg.appendChild(gold);

var silver = document.createElementNS("http://www.w3.org/2000/svg", "circle");
silver.setAttribute("cx", 250);
silver.setAttribute("cy", 250);
silver.setAttribute("fill", "silver");
svg.appendChild(silver);

var bronze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
bronze.setAttribute("cx", 350);
bronze.setAttribute("cy", 250);
bronze.setAttribute("fill", "#8C7853");
svg.appendChild(bronze);


// function to set the radius for each medal
var setMedalCount = function() {
    var medals = d3.selectAll("circle");
    // for Austria
    if ( toggleCountry == 1 ) {
        country.innerHTML = "AUSTRIA";
        medals.data( austriaMedals );
    }
    // for Czech Republic
    else {
        country.innerHTML = "CZECH REPUBLIC";
        medals.data( czechMedals );
    }
    medals.attr( "r", function(d){return d*5;} );
    toggleCountry *= -1;
}

setMedalCount();

switchButton.addEventListener("click", setMedalCount)
