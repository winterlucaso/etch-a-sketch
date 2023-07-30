// TO DO:
// - shading button
// - hover functionality over sqrs
// - better icons for tools


// Initialize Grid and create squares
function initializeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + `${gridSize}` + ", 1fr)";
    for (let x = 0; x < gridSize**2; x++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute('id', "sqr" + `${x}`);

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

// Tools
function handleSqrClick(event, currentTool) {
    if (event.type === 'mouseover' && !mouseDown) return;
    switch(currentTool) {
        case "blacknwhite":
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

function handleToolClick(playerSelection) {
    currentTool = `${playerSelection}`;
    console.log("currentTool: " + currentTool);
}


// Tool Functions
function sqrToBlack(e) {
    e.style.backgroundColor = "black";
}

function sqrToRainbow(e) {
    e.style.backgroundColor = get_random_color();
}

function sqrToShade(e) {
    // console.log(e.style.backgroundColor);
    // colorArrayHSL = e.style.backgroundColor.split(",");
    // colorArrayHSL[2] - (1)
    // e.style.backgroundColor = hsl('x, x%, x%');
    // console.log(e.style.backgroundColor);
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

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

btn1.addEventListener('click', () => (handleToolClick("blacknwhite")));
btn2.addEventListener('click', () => (handleToolClick("rainbow")));
btn3.addEventListener('click', () => (handleToolClick("shading")));
btn4.addEventListener('click', () => (handleToolClick("eraser")));
btn5.addEventListener('click', () => (resetGridSize(slider.value)));

// mousedown listener
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Slider
var slider = document.getElementById("myRange");
var gridSizeOutput = document.getElementById("gridSizeValue");
gridSizeOutput.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSizeOutput.innerHTML = this.value;
}




// Script
let currentTool = "blacknwhite";
let colorArrayHSL = "hsl(0, 0%, 100%)";
// let gridSize = 16;
initializeGrid(gridSizeValue.innerHTML);
let randomColor = Math.floor(Math.random()*16777215).toString(16);

