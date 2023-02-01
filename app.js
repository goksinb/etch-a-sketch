const defaultMode = "default";
const defaultSize = 30;
const defaultColor = "#000000";
const defaultBackground = "#ffffff";
const defaultGridSize = "16x16";

let currentMode = defaultMode;
let currentSize = defaultSize;
let currentColor = defaultColor;
let hoveredElement = "";
let currentBackgroundColor = defaultBackground;
let currentGridSize = defaultGridSize;

// ID selectors
const divElement = document.getElementById("divSquare");
const sizeValueElement = document.getElementById("sizeValue");
const sizeSliderElement = document.getElementById("sizeSlider");
const gridElement = document.getElementById("grid");
const colorPickerElement = document.getElementById("colorPicker");
const gridBtnElement = document.getElementById("gridBtn");
const colorBtnElement = document.getElementById("colorBtn");
const rainbowBtnElement = document.getElementById("rainbowBtn");
const eraserBtnElement = document.getElementById("eraserBtn");
const clearBtnElement = document.getElementById("clearBtn");
const backgroundBtnElement = document.getElementById("backgroundBtn");
const colorPickerElementBg = document.getElementById("colorPickerBg");
const grid16BtnElement = document.getElementById("16x16btn");
const grid32BtnElement = document.getElementById("32x32btn");
const grid64BtnElement = document.getElementById("64x64btn");

// Click events
colorPickerElement.oninput = (e) => setCurrentColor(e.target.value);
colorPickerElement.onclick = () => setCurrentMode("color");
colorPickerElementBg.oninput = (e) => changeBackground(e.target.value);
colorPickerElementBg.onclick = () => setCurrentMode("background");

// colorBtnElement.onclick = () => setCurrentMode("color");
rainbowBtnElement.onclick = () => setCurrentMode("rainbow");
eraserBtnElement.onclick = () => setCurrentMode("eraser");
clearBtnElement.onclick = () => setCurrentMode("clear");
grid16BtnElement.onclick = () => setCurrentSize("16x16");
grid32BtnElement.onclick = () => setCurrentSize("32x32");
grid64BtnElement.onclick = () => setCurrentSize("64x64");

// backgroundBtnElement.onclick = () => setCurrentMode("background");

// Clears the board
function cleanBoard() {
  let board = document.querySelector(".grid");
  board.innerHTML = "";
}

// Create grid
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

// Sets modes
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

function setGridBackground(newBackground) {
  currentBackgroundColor = newBackground;
}

// sizeSliderElement.oninput = (e) => setCurrentSize(e.target.value);

// Event listeners

gridElement.addEventListener("mouseover", function (e) {
  hoveredElement = e.target;
});

clearBtnElement.addEventListener("click", clearBackground);
gridElement.addEventListener("mouseover", clickButton);

grid16BtnElement.addEventListener("click", changeGrid);
grid32BtnElement.addEventListener("click", changeGrid);
grid64BtnElement.addEventListener("click", changeGrid);

function clickButton(e) {
  if (currentMode === "eraser") {
    hoveredElement.style.backgroundColor = "transparent";
  } else if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    hoveredElement.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    hoveredElement.style.backgroundColor = currentColor;
  }
}

function clearBackground(e) {
  if (currentMode === "clear") {
    cleanBoard();
    gridElement.style.backgroundColor = "#ffffff";
    createTable(defaultSize);
  }
}

function changeBackground(currentBackgroundColor) {
  if (currentMode === "background") {
    gridElement.style.backgroundColor = currentBackgroundColor;
  }
}

function changeGrid(currentGridSize) {
  if (currentSize === "16x16") {
    cleanBoard();
    createTable(16);
  } else if (currentSize === "32x32") {
    cleanBoard();
    createTable(32);
  } else if (currentSize === "64x64") {
    cleanBoard();
    createTable(64);
  }
}

createTable(currentSize);
