var sliderone = document.querySelector(".slider-expensive");
var slidertwo = document.querySelector(".slider-mathlovers");
var sliderthree = document.querySelector(".slider-night");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

var labelone = document.querySelector(".label-slider-one");
var labeltwo = document.querySelector(".label-slider-two");
var labelthree = document.querySelector(".label-slider-three");
var checked = document.querySelector(".checked");

// Показать первую панель
sliderone.classList.add("slider-shower");

// Добавить label класс checked изначально
labelone.classList.add("checked");

slider1.addEventListener("change", function () {
	if (this.checked) {
		// Если sliderone НЕ ИМЕЕТ класс slider-shower, то добавить ему slider-shower
		if (!sliderone.classList.contains("slider-shower"))
			sliderone.classList.add("slider-shower");
		labelone.classList.add("checked");
		// Если Slidertwo содержит slider-shower, то убрать у Slidertwo slider-shower
		if (slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.remove("slider-shower");
		labeltwo.classlist.remove("checked");
		// Если Sliderthree содержит slider-shower, то убрать у sliderthree slider-shower
		if (sliderthree.classList.contains("slider-shower"))
		console.log("before");
		sliderthree.classList.remove("slider-shower");
		console.log("Убрали slider-shower у sliderthree");
		labelthree.classlist.remove("checked");
		console.log("убрали checked у третьего");
	}
})

slider2.addEventListener("change", function () {
	if (this.checked) {
		if (sliderone.classList.contains("slider-shower"))
			sliderone.classList.remove("slider-shower");
		labelone.classList.remove("checked");
		if (!slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.add("slider-shower");
		labeltwo.classList.add("checked");
		if (sliderthree.classList.contains("slider-shower"))
			sliderthree.classList.remove("slider-shower");
		labelthree.classList.remove("checked");
	}
})

slider3.addEventListener("change", function () {
	if (this.checked) {
		if (sliderone.classList.contains("slider-shower"))
			sliderone.classList.remove("slider-shower");
		  labelone.classList.remove("checked");
		if (slidertwo.classList.contains("slider-shower"))
			slidertwo.classList.remove("slider-shower");
		  labeltwo.classList.remove("checked");
		if (!sliderthree.classList.contains("slider-shower"))
			sliderthree.classList.add("slider-shower");
		  labelthree.classList.add("checked");
	}
})
