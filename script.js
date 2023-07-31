// TO DO:
// - better icons for tools
// - add border toggle?


// Initialize Grid and create squares
function initializeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + `${gridSize}` + ", 1fr)";
    for (let x = 0; x < gridSize**2; x++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute('id', "sqr" + `${x}`);
        gridSquare.style.backgroundColor = "rgb(255, 255, 255)";

        // 2 Event listeners: one to cover single clicks, and one for single clicks && mousedown
        gridSquare.addEventListener('mouseover', function(e) {
            // console.log(gridSquare);
            // console.log(e);
            handleSqrClick(e, currentTool);
        });
        gridSquare.addEventListener('mousedown', function(e) {
            handleSqrClick(e, currentTool);
        });
        gridContainer.appendChild(gridSquare);
    }
    console.log("Finished appending sqrs");
}

function resetGridSize(newSize) {
    console.log("newSize for init: " + newSize);
    deleteGrid();
    initializeGrid(newSize);
}

function deleteGrid() {
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    console.log("deleted grid");
}

// Handle clicks on squares
function handleSqrClick(event, currentTool) {
    if (event.type === 'mouseover' && !mouseDown) return;
    switch(currentTool) {
        case "black":
            sqrToBlack(event.target);
            return;
        case "rainbow":
            sqrToRainbow(event.target);
            return;
        case "shading":
            sqrToShade(event.target);
            return;
        case "eraser":
            sqrToErase(event.target);
            return;
    }
}

// Update Tool Selection
function handleToolClick(playerSelection) {
    currentTool = `${playerSelection}`;
    console.log("currentTool: " + currentTool);
}


// Tool Functions
function sqrToBlack(sqr) {
    sqr.style.backgroundColor = "rgb(0, 0, 0)";
}

function sqrToRainbow(sqr) {
    sqr.style.backgroundColor = get_random_color();
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var r = rand(0, 255);
    var g = rand(0, 255);
    var b = rand(0, 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function sqrToShade(sqr) {
    // Get and convert RGB value to HSL
    var rgb = sqr.style.backgroundColor;
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    var hslArray = RGBToHSL(rgb[0], rgb[1], rgb[2]);

    // Reduce lightness by 10 if value is over 10; otherwise, set to 0
    if (hslArray[2] < 10) {
        hslArray[2] = 0;
    }
    else {
        hslArray[2] -= 10;
    }

    // Set sqr background to new hsl value (browser autoconverts to RGB)
    sqr.style.backgroundColor = 'hsl(' + hslArray[0] + ', ' + hslArray[1] + '%,' + hslArray[2] + '%)';
}

// Convert RGB value to HSL (return as array)
// Credit: https://www.30secondsofcode.org/js/s/rgb-to-hsl/
function RGBToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
};

function sqrToErase(e) {
    e.style.backgroundColor = "hsl(0, 0%, 100%)";
}

// UI

const gridContainer = document.querySelector('.grid-container')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')

btn1.addEventListener('click', () => (handleToolClick("black")));
btn2.addEventListener('click', () => (handleToolClick("rainbow")));
btn3.addEventListener('click', () => (handleToolClick("shading")));
btn4.addEventListener('click', () => (handleToolClick("eraser")));
btn5.addEventListener('click', () => (resetGridSize(slider.value)));

// mousedown listener
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Slider values
var slider = document.getElementById("myRange");
var gridSizeOutput = document.getElementById("gridSizeValue");
gridSizeOutput.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSizeOutput.innerHTML = this.value;
  resetGridSize(slider.value);
}

// Script
let currentTool = "black";
let colorArrayHSL = "hsl(0, 0%, 100%)";
initializeGrid(gridSizeValue.innerHTML);
let randomColor = Math.floor(Math.random()*16777215).toString(16);

