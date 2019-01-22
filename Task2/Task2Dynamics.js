function mouseOverText(x) {
	x.style.color = "white";
	document.getElementById("toDisplay").innerHTML = "TEST";
}

function mouseOutText(x) {
	x.style.color = "black";
	document.getElementById("toDisplay").innerHTML = "&nbsp;&nbsp;&nbsp;";
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

function mouseOverCircle(x) {
	x.src = "../res/circleyellow.png";
	document.getElementById("calgaryInfo").style.visibility = 'visible';
}

function mouseOutCircle(x) {
	x.src= "../res/circle.png"
	document.getElementById("calgaryInfo").style.visibility = 'hidden';

}

function mouseOverSection(x, y) {
	x.querySelector("#toDisplay").innerHTML = y.id;
}

function mouseOutSection(x) {
	x.querySelector("#toDisplay").innerHTML = "&nbsp;&nbsp;&nbsp;";
}
