const defaultMode = "default";
const defaultSize = 30;
const defaultColor = "#000000";

let currentMode = defaultMode;
let currentSize = defaultSize;
let currentColor = defaultColor;
let hoveredElement = "";

const divElement = document.getElementById("divSquare");
const sizeValueElement = document.getElementById("sizeValue");
const sizeSliderElement = document.getElementById("sizeSlider");
const gridElement = document.querySelector(".grid");
const colorPickerElement = document.getElementById("colorPicker");
const colorBtnElement = document.getElementById("colorBtn");
const rainbowBtnElement = document.getElementById("rainbowBtn");
const eraserBtnElement = document.getElementById("eraserBtn");
const clearBtnElement = document.getElementById("clearBtn");

colorPickerElement.oninput = (e) => setCurrentColor(e.target.value);
colorBtnElement.onclick = () => setCurrentMode("color");
rainbowBtnElement.onclick = () => setCurrentMode("rainbow");
eraserBtnElement.onclick = () => setCurrentMode("eraser");
clearBtnElement.onclick = () => setCurrentMode("clear");

function createTable(size) {
  for (let i = 0; i < size * size; i += 1) {
    const createDiv = document.createElement("div");
    createDiv.id = "divSquare";
    gridElement.classList.add("grid-element");
    gridElement.appendChild(createDiv);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
}

gridElement.addEventListener("mouseover", function (e) {
  hoveredElement = e.target;
});

function setCurrentColor(newColor) {
  currentColor = newColor;
  console.log(currentColor);
}

function setCurrentMode(newMode) {
  currentMode = newMode;
  console.log(newMode);
}

function setCurrentSize(newSize) {
  currentSize = newSize;
  console.log(newSize);
}

// colorPicker.oninput = (e) => setCurrentColor(e.target.value);
sizeSliderElement.oninput = (e) => setCurrentSize(e.target.value);



gridElement.addEventListener("mousedown" && "mouseover", clickButton);

createTable(currentSize);

function clickButton(e) {
  if (currentMode === "eraser") {
    hoveredElement.style.backgroundColor = "#FFFFFF";
  } else if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    hoveredElement.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    hoveredElement.style.backgroundColor = currentColor;
    
  } else if (currentMode === "clear") {
    gridElement.backgroundColor = "#FFFFFF"; }
    
}
