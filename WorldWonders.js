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

	var holder = document.querySelector("#row");

	var box = document.querySelectorAll(".columns");

	var timer = setInterval(movement, 50);

	var position = 0;

	function movement() {
		for(var i = 0; i<box.length; i++) {

			position++;

			if(box[i].offsetWidth+box[i].offsetLeft>=holder.offsetWidth){
				box[i].style.left = -position + "px";
			}
			else{
				box[i].style.left = position + "px";
			}
		}
		
	}


}
