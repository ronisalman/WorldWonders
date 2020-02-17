// Created by Roni Salman // 


init();

function init(){

	showStreetView();
	movingWonders();

}



function showStreetView() {

	var view = document.querySelector("#streetView");
	var image = document.querySelectorAll(".wonders");

	for (var i=0; i<image.length; i++) {

		image[i].addEventListener("click", function() {
			view.src=this.id;
		});
		
	}

}

function movingWonders() {

	var row = document.querySelector("#row");
	var columns = document.querySelectorAll(".columns");
	var starting = [0,257,515,772,1030,1287,1544];
	var counter = [0,0,0,0,0,0,0];

	var repeater = setInterval(movement, 10);

	function movement(){

		for(var i=0; i<columns.length; i++){

			if(columns[i].offsetLeft>=row.offsetWidth){
				columns[i].style.left = -(starting[i]+columns[i].offsetWidth) + "px";
				counter[i]=-(starting[i]+columns[i].offsetWidth-10);
			}

			else {
				columns[i].style.left = counter[i] + "px";
			}

			counter[i]++;
		}

	}

}
