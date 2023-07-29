
// Initialize Grid and create squares
function initializeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + `${gridSize}` + ", 1fr)";
    for (let x = 0; x < gridSize**2; x++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute('id', "sqr" + `${x}`);

        gridSquare.addEventListener('click', function(e) {
            console.log(gridSquare);
            console.log(e);
            handleSqrClick(gridSquare, currentTool);
        });
        // gridSquare.addEventListener('click', () => {
        //     console.log(gridSquare);
        //     console.log(e);
        //     //changeColor(gridSquare);
        //     handleSqrClick(gridSquare, currentTool);
        // });
        gridContainer.appendChild(gridSquare);
    }
}

// Tools
function handleSqrClick(playerSelection, currentTool) {
    switch(currentTool) {
        case "blacknwhite":
            sqrToBlack(playerSelection);
            return;
        case "rainbow":
            sqrToRainbow(playerSelection);
            return;
        case "shading":
            sqrToShade(playerSelection);
            return;
        case "tbd":
            //changeColor(playerSelection);
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
    // e.style.backgroundColor = mix("black", e.style.backgroundColor, 10);
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

// UI

const gridContainer = document.querySelector('.grid-container')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn1.addEventListener('click', () => (handleToolClick("blacknwhite")));
btn2.addEventListener('click', () => (handleToolClick("rainbow")));
btn3.addEventListener('click', () => (handleToolClick("shading")));
btn4.addEventListener('click', () => (handleToolClick("tbd")));



// Script
let currentTool = "blacknwhite";
let gridSize = 16;
initializeGrid(gridSize);
let randomColor = Math.floor(Math.random()*16777215).toString(16);

