const defaultMode = "default";
const defaultSize = 30;
const defaultColor = "#0b478b";

let currentMode = defaultMode;
let currentSize = defaultSize;
let currentColor = defaultColor;

const sizeValueElement = document.getElementById("sizeValue");
const sizeSliderElement = document.getElementById("sizeSlider");
const gridElement = document.querySelector(".grid");
const colorPickerElement = document.getElementById("colorPicker");
const colorBtnElement = document.getElementById("colorBtn");
const rainbowBtnElement = document.getElementById("rainbowBtn");
const eraserBtnElement = document.getElementById("eraserBtn");
const clearBtnElement = document.getElementById("clearBtn");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createTable() {
  for (let i = 0; i < 256; i += 1) {
    const createDiv = document.createElement("div");
    gridElement.appendChild(createDiv);
  }
}

createTable();

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function setCurrentColor(e) {
  colorPicker.oninput = e.target.value;
}

function makeColorBrush(e) {
  e.target.classList.add("divColorBlack");
}

gridElement.addEventListener("mousedown", makeColorBrush);
