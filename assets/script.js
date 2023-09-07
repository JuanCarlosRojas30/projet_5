const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0;

var arrowLeft = document.getElementById("arrow_left")
arrowLeft.addEventListener("click", previous)

function previous() {
	position = position - 1;
	if(position === -1) {position = (slides.length - 1);}

	displaySlide();
}

var arrowRigth = document.getElementById("arrow_right")
arrowRigth.addEventListener("click", next)

function next() {
	position = position + 1;
	if(position === slides.length) {position = 0;}

	displaySlide();
}

function displaySlide() {
	const tagLine = document.getElementById("tagLine");
	tagLine.innerHTML = slides[position].tagLine;
}
