const navboton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu-dos");

navboton.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navboton.setAttribute("aria-label", "Cerrar menú");
  } else {
    navboton.setAttribute("aria-label", "Abrir menú");
  }
});




let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".puntos"); 
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    quadrates[slideIndex-1].className += " active";
}