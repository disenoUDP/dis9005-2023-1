// eria colocar el link exacto pero honestamente no los encontre :( console.log("Bienvenidos a esta p&aacute;gina");
console.log("ancho: " + window.innerWidth);
// la fecha fue sacada de aqui https://www.w3schools.com/tags/tag_time.asp#:~:text=The%20tag%20defines%20a,can%20produce%20smarter%20search%20results.
const d = new Date("2022-03-25");                             
document.getElementById("fecha").innerHTML = d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "red";
    document.getElementById("fecha").style.backgroundColor = "yellow";        
  }
  // lo siguiente fue sacado de clases por el profe
  console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);
martha.addEventListener("mousedown", cambiarTamano);

function cambiarColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}
function cambiarTamano() {
  console.log("otro");
}
// lo siguiente viene de aca <!-- esto viene de aqui https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onsubmit
function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }
  function myFunction() {
    alert("The form was submitted");
  }
  document.getElementById("myForm").onsubmit = function() {myFunction()};

function myFunction() {
  alert("The form was submitted");
}
console.log("123");
// esto fue el regalo del profe para la solemne 2 (los codigos)

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "hola tu " + nombre.value;
}
//lo siguiente viene de este link https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// lo del link termina aqui https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery
