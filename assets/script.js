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

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const txt = document.querySelector('.banner-txt');

let positionSlide = 0;

leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length -1;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	image.setAttribute("src", "./assets/images/slideshow/" + slides[positionSlide].image )
});

rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	image.setAttribute("src", "./assets/images/slideshow/" + slides[positionSlide].image )
});
