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

function mouseOverCircle(x) {
	x.src = "../res/circleyellow.png";
}

function mouseOutCircle(x) {
	x.src= "../res/circle.png"
}

function mouseOverSection(x, y) {
	x.querySelector("#toDisplay").innerHTML = y.id;
}

function mouseOutSection(x) {
	x.querySelector("#toDisplay").innerHTML = "&nbsp;&nbsp;&nbsp;";
}