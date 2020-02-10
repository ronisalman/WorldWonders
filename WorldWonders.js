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

	var box = document.querySelectorAll(".columns");

	var position = 0;

	var timer = setInterval(movement, 50);

	function movement() {
		if(position === 300) {
			clearInterval(timer);
		}
		else {
			position++;
			for(var i = 0; i<box.length; i++) {
				box[i].style.left = position + "px";
			}
		}
	}
	

}