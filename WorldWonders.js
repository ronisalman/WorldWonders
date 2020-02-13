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
	var counter = 0;

	var repeater = setInterval(movement, 30);

	function movement(){
		for(var i=0; i<columns.length; i++){

			if(columns[i].offsetLeft>=row.offsetWidth){
				console.log(row.offsetWidth);
				console.log(columns[6].offsetLeft);
				columns[i].style.left = -1544 + "px";
				console.log(columns[6].offsetLeft);
				clearInterval(repeater);
				return;
			}

			counter++;
			columns[i].style.left = counter + "px"; //this is making the style above in IF getting cancelled 
		}

		if(counter>=500){
			clearInterval(repeater);
		}
	}

}
