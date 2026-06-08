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

let idx = 0;

let bannerImg = document.querySelector("#banner .banner-img");
let bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dot")

console.log(slides.length)

const arrowLeft = document.querySelector("#banner .arrow_left");
console.log(arrowLeft)
arrowLeft.addEventListener("click", () => {
	dots[idx].classList.remove("dot_selected")
	idx--;
	if(idx < 0){
		idx = (slides.length - 1);
	}
	bannerImg.src = "assets/images/slideshow/" + slides[idx].image;
	bannerText.innerHTML = `${slides[idx].tagLine}`;
	dots[idx].classList.add("dot_selected")
});

const arrowRight = document.querySelector("#banner .arrow_right");
console.log(arrowRight)
arrowRight.addEventListener("click", () => {
	dots[idx].classList.remove("dot_selected")
	idx++;
	if(idx >= slides.length){
		idx = 0;
	}
	bannerImg.src = "assets/images/slideshow/" + slides[idx].image;
	bannerText.innerHTML = `${slides[idx].tagLine}`;
	dots[idx].classList.add("dot_selected");
});