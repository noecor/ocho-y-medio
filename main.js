// JavaScript
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
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

function accordion_click(id) {
  let el_panel = document.getElementById("panel-" + id);
  let el_arrow = document.getElementById("arrow-" + id);
  let el_barra = document.getElementById("barra-" + id);
  let el_panel_barra = document.getElementById("panel-barra-" + id);
  let el_accordion = document.getElementById("accordion-" + id);

  if (el_panel.className == "panel") {
    el_panel.className = "panel-active";
    el_arrow.innerHTML = "&#65087;";
    el_arrow.className = "accordion-button-arrow-active";
    el_barra.className = "accordion-barra-active";
    el_panel_barra.className = "accordion-panel-barra-active";
    el_accordion.className = "accordion-active";
  } else {
    el_panel.className = "panel";
    el_arrow.innerHTML = "&#65088;";
    el_arrow.className = "accordion-button-arrow";
    el_barra.className = "accordion-barra";
    el_panel_barra.className = "accordion-panel-barra";
    el_accordion.className = "accordion";
  }
}
//this.classList.toggle("active");
