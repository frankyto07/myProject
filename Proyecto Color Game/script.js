let square = document.querySelectorAll(".square");
let mensaje = document.querySelector("span#message");
let spanColor = document.querySelector("#colorDisplay");
let buttons = document.querySelectorAll(".mode");
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor();
let clickedColor;
spanColor.textContent = pickedColor.toUpperCase();
let boton = document.querySelector("#reset");


init();

function init() {
  configBtn();
  reset();
}

function configBtn() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttons[0].classList.remove("selected");
      buttons[1].classList.remove("selected");
      this.classList.add("selected");
      numberOfSquares = this.textContent == "Facil" ? 3 : 6;
      reset()
    });
  }
}

function cuadrados() {
  clickedColor = this.style.backgroundColor;
  if (clickedColor == pickedColor) {
    mensaje.textContent = "Color Correcto";
    spanColor.style.color = pickedColor;
    changeColors(pickedColor);
    boton.textContent = "¿Jugar De Nuevo?";
  } else {
    mensaje.textContent = "Intentalo Nuevamente";
    this.style.backgroundColor = "transparent";
  }
}

function bucle() {
  for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", cuadrados);
  }
}

function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  spanColor.textContent = pickedColor.toUpperCase();
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i]
      square[i].style.display = "block"
    } else {
      square[i].style.display = "none"
    }
  }
  mensaje.textContent = ""
  boton.textContent = "Nuevos Colores"
  spanColor.style.color = "white"
  bucle()
}

boton.addEventListener("click", reset);


function changeColors(color) {
  square.forEach((elem) => {
    elem.style.backgroundColor = color;
  });
}

function pickColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}


function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}