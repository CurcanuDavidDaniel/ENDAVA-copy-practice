function changeToX(x) {
  x.classList.toggle("change");
}
var click = 0;
function openNav() {
  document.getElementById("LateralMenu").style.width = "400px";
  document.getElementById("langSet").style.opacity = "0";
  document.getElementById("ButtonsToHide").style.opacity = "0";
  document.getElementById("sliderBlock").style.overflow = "hidden";
  click = 1;
}

function closeNav() {
  document.getElementById("LateralMenu").style.width = "0";
  document.getElementById("langSet").style.opacity = "1";
  document.getElementById("ButtonsToHide").style.opacity = "1";
  document.getElementById("sliderBlock").style.overflow = "visible";
  click = 0;
}

function NavControl() {
  if (click == 1) closeNav();
  else openNav();
}

var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
    
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function activateShare(){
  document.getElementById("activate").style.visibility="visible";
    
}
function deactivateShare(){
  document.getElementById("activate").style.visibility="hidden";
    
}