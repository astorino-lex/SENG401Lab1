function mouseOverText(x) {
	x.style.color = "white";
}

function mouseOutText(x) {
	x.style.color = "black";
}

function mouseOverOther(x) {
	x.style.border = "2px solid white";
}

function mouseOutOther(x) {
	x.style.border = "2px solid #94B5EF";
}

function mouseOverInput(x) {
	x.style.border = "2px solid black"
}

function mouseOutInput(x) {
	x.style.border = "2px solid #94B5EF";
}

var cityofCalgary = {
	nameCity : "Name: Calgary",
	latitude: "Latitude: 51.0486",
	longitude: "Longitude: - 114.0708",
	population: "Population: 1.239 million",
	area: "Area: 825.3 km<sup>2</sup>",
	density: "Density: 1329.0 persons/km<sup>2</sup>"
};
var cityofEdmonton = {
	nameCity : "Name: Edmonton",
	latitude: "Latitude: 53.5444",
	longitude: "Longitude: - - 113.4909",
	population: "Population: 960,015 million",
	area: "Area:  684.37 km<sup>2</sup>",
	density: "Density: 1402.77 persons/km<sup>2</sup>"
};

function mouseOverCircle(x) {
	x.src = "../res/circleyellow.png";
	for (c in cityofCalgary){
		document.getElementById("calgaryInfo").innerHTML += "<li>" + cityofCalgary[c] + "</li>";
	}
}

function mouseOutCircle(x) {
	x.src= "../res/circle.png"
	document.getElementById("calgaryInfo").innerHTML = "&nbsp;";
}

function mouseOverSection(x) {
	document.querySelector("#toDisplay").innerHTML = x.id;
}

function mouseOutSection() {
	document.querySelector("#toDisplay").innerHTML = "&nbsp;&nbsp;&nbsp;";
}
