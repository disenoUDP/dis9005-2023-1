console.log("HOLA! Bienvenides");
console.log("ancho: " + window.innerWidth);

document
  .getElementById("myBtn")
  .addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "Lo hiciste! :) Tu Huillin se llama " + nombre.value;
}

function cambiar(){
    document.getElementById('matrix').src="huillin1-1.jpg";
  }
  
  function volver(){
    document.getElementById('matrix').src="huillin-1.jpg";
  }


var box = document.getElementById('box');
var papel = box.getContext('2d');

/* declaracion de variables la variable estado es para verificar si el mouse esta en movimiento */
var estado= false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    punto = false;

var x = "black",
    y = 2;


    box.addEventListener("mousemove", function (e) {
        encontrarxy('move', e)
    }, false);
    box.addEventListener("mousedown", function (e) {
        encontrarxy('down', e)
    }, false);
    box.addEventListener("mouseup", function (e) {
        encontrarxy('up', e)
    }, false);
    box.addEventListener("mouseout", function (e) {
        encontrarxy('out', e)
    }, false);

    // funcion para dibujar los pixeles.

    function dibujar() {
        papel.beginPath();
        papel.moveTo(prevX, prevY);
        papel.lineTo(currX, currY);
        papel.strokeStyle = x;
        papel.lineWidth = y;
        papel.stroke();
        papel.closePath();
    }

    // funcion para encontrar el punto donde esta el mouse

    function encontrarxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - box.offsetLeft;
            currY = e.clientY - box.offsetTop;

            estado = true;
            punto = true;
            if (punto) {
                papel.beginPath();
                papel.fillStyle = x;
                papel.fillRect(currX, currY, 2, 2);
                papel.closePath();
                punto = false;
            }
        }
        if (res == 'up' || res == "out") {
            estado = false; // si se levanta el click del mouse pasa a false
        }
        if (res == 'move') {
            if (estado) { // si el mouse se mueve esta en true y se ejecuta la funcion dibujar
                prevX = currX;
                prevY = currY;
                currX = e.clientX - box.offsetLeft;
                currY = e.clientY - box.offsetTop;
                dibujar();
            }
        }
    }
