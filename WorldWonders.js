// Created by Roni Salman

var row = document.querySelector("#row");
var columns = document.querySelectorAll(".columns");
var starting = [10,280,549,819,1088,1358,1628];
var counter = [0,0,0,0,0,0,0];
var repeater = setInterval(movement, 15);

init();


function init(){

	showStreetView();
	movement();

}


function showStreetView() {

	var view = document.querySelector("#streetView");
	var image = document.querySelectorAll(".wonders");

	for (var i=0; i<image.length; i++) {

		image[i].addEventListener("click", function() {
			//sets the street view to street view url of image clicked
			view.src=this.id;
		});
		
	}
}


function movement(){

	for(var i=0; i<columns.length; i++){
		//checks if the left side of each image is past the end of the page
		if(columns[i].offsetLeft>=row.offsetWidth){
			//sets the starting position for image before the page starts
			columns[i].style.left = -(starting[i]+columns[i].offsetWidth) + "px";
			//then remembers this new position
			counter[i]=-(starting[i]+columns[i].offsetWidth);
		}

		else {
			columns[i].style.left = counter[i] + "px";
		}

		//adds 1 to each image's position
		counter[i]++;
	}
}