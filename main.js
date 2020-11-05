// JavaScript
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function accordion_click(id) {
  var el_panel = document.getElementById("panel-" + id);
  var el_arrow = document.getElementById("arrow-" + id);
  var el_barra = document.getElementById("barra-" + id);
  var el_panel_barra = document.getElementById("panel-barra-" + id);

  console.log(el_panel);
  console.log(el_arrow);
  console.log(el_barra);
  

  if(el_panel.style.display==""){
    el_panel.classList.toggle("panel-active");
    el_arrow.innerHTML = "&#65087;";
    el_arrow.classList.toggle("accordion-button-arrow-active");
    el_barra.classList.toggle("accordion-barra-active");
    el_panel_barra.classList.toggle("accordion-panel-barra-active");

  } else {
    el_panel.classList.toggle("panel");
    el_arrow.innerHTML = "&#65088;";
    el_arrow.classList.toggle("accordion-button-arrow");
    el_barra.classList.toggle("accordion-barra-active");
    el_panel_barra.classList.toggle("accordion-panel-barra");
  }
  
}
//this.classList.toggle("active");