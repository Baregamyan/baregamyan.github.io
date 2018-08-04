var sliderone = document.querySelector(".slider-expensive");
var slidertwo = document.querySelector(".slider-mathlovers");
var sliderthree = document.querySelector(".slider-night");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

// Показать первую панель
sliderone.classList.add("slider-shower");

slider1.addEventListener("change", function () {
	if (this.checked) {
		// Если sliderone НЕ ИМЕЕТ класс slider-shower, то добавить ему slider-shower
		if(!sliderone.classList.contains("slider-shower"))
		   sliderone.classList.add("slider-shower");
		// Если Slidertwo содержит slider-shower, то убрать у Slidertwo slider-shower
		if(slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.remove("slider-shower");
		// Если Sliderthree содержит slider-shower, то убрать у sliderthree slider-shower
		if(sliderthree.classList.contains("slider-shower"))
			sliderthree.classList.remove("slider-shower");
	}
})

slider2.addEventListener("change", function () {
	if (this.checked) {
		if(sliderone.classList.contains("slider-shower"))
			sliderone.classList.remove("slider-shower");
		if(!slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.add("slider-shower");
		if(sliderthree.classList.contains("slider-shower"))
			sliderthree.classList.remove("slider-shower");
	}
})

slider3.addEventListener("change", function () {
	if (this.checked) {
		if(sliderone.classList.contains("slider-shower"))
			sliderone.classList.remove("slider-shower");
		if(slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.remove("slider-shower");
		if(!sliderthree.classList.contains("slider-shower"))
			sliderthree.classList.add("slider-shower");
	}
})