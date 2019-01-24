
$(document).ready(function(){

	$("h1, h2").hover(function(){
      $(this).css("color", "white");
    },
    function(){
      $(this).css("color", "black");
	});

	$(".webPics, #worldPicImage").hover(function(){
		$(this).css("border", "2px solid white");
	  },
	  function(){
		$(this).css("border", "2px solid #94B5EF");
	});

	$(":text").hover(function(){ 
		//select the input text boxes
		$(this).css("border", "2px solid black");
	  },
	  function(){
		$(this).css("border", "2px solid #94B5EF");
	});

	$("#circleOnMapPicCalgary").hover(function(){ 
		$("#worldPicImage").css("border", "2px solid white");
		$(this).attr("src","../res/circleyellow.png");
		$("#cityInfo").show()
		displayCityInfo(this,'cgy');
	  },
	  function(){
		$(this).attr("src","../res/circle.png");
		$("#cityInfo").hide();
	});

	$("#circleOnMapPicEdmonton").hover(function(){ 
		$("#worldPicImage").css("border", "2px solid white");
		$(this).attr("src","../res/circleyellow.png");
		$("#cityInfo").show();
		displayCityInfo(this,'edm');
	  },
	  function(){
		$(this).attr("src","../res/circleblue.png");
		$("#cityInfo").hide();
	});

	$("section").hover(function(){ 
		$("#toDisplay").html(this.id);
	  },
	  function(){
		$("#toDisplay").html("&nbsp;&nbsp;&nbsp;");
	});

});


function displayCityInfo(img, cityA){
	//img.src = "../res/circleyellow.png";
	//document.getElementById("cityInfo").style.visibility = 'visible';
	var city = (cityA == "cgy")? cgy : edm;
	$("#cityname").text('Name: '+city.name);
	$("#citylat").text('Latitude: '+city.latitude);
	$("#citylong").text('Longitude: '+city.longitude);
	$("#citypop").text('Population: '+city.population);
	//use .html() for these 2 to support the use of sup()
	$("#cityarea").html('Area: '+city.area+' km'+'2'.sup());
	$("#citydensity").html('Density: '+city.density().toFixed(2)+' persons/km'+'2'.sup());
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
