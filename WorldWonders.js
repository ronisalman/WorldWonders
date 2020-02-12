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

	var columns = document.querySelectorAll(".columns");

	for(var i=0; i<columns.length; i++){
		columns[i].style.transform = "translate("+10+"px)";
	}

}
