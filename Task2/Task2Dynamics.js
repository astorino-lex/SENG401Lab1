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

function mouseOutCircle(x, city) {
	if (city == "cgy"){
		x.src= "../res/circle.png"
	}
	else{
		x.src= "../res/circleblue.png"
	}
	document.getElementById("cityInfo").style.visibility = 'hidden';
}

function mouseOverSection(x) {
	document.querySelector("#toDisplay").innerHTML = x.id;
}

function mouseOutSection() {
	document.querySelector("#toDisplay").innerHTML = "&nbsp;&nbsp;&nbsp;";
}


function displayCityInfo(img, cityA){
	img.src = "../res/circleyellow.png";
	document.getElementById("cityInfo").style.visibility = 'visible';
	var city = (cityA == "cgy")? cgy : edm;
	document.getElementById("cityname").innerHTML = 'Name: '+city.name;
	document.getElementById("citylat").innerHTML = 'Latitude: '+city.latitude;
	document.getElementById("citylong").innerHTML = 'Longitude: '+city.longitude;
	document.getElementById("citypop").innerHTML = 'Population: '+city.population;
	document.getElementById("cityarea").innerHTML = 'Area: '+city.area+' km'+'2'.sup();
	document.getElementById("citydensity").innerHTML = 'Density: '+city.density().toFixed(2)+' persons/km'+'2'.sup(); // 2 decimal places
}

var cgy = {
	name: "Calgary",
	latitude : 51.0486,
	longitude : -114.0708,
	population: 1096833,
	area: 825.29,
	density : function() {
	  return this.population/this.area;
	}
};

var edm = {
	name: "Edmonton",
	latitude : 53.5444,
	longitude : - 113.4909,
	population: 960015,
	area:  684.37,
	density : function() {
		return this.population/this.area;
	}
};
