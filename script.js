
// Initialize Grid and create squares
function initializeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + `${gridSize}` + ", 1fr)";
    for (let x = 0; x < gridSize**2; x++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute('id', "sqr" + `${x}`);
        gridSquare.addEventListener('click', () => {
            console.log(gridSquare);
            // changeColor(gridSquare);
        });
        gridContainer.appendChild(gridSquare);
    }
}

function changeColor(e) {
    e.style.color = "black";
}

// UI
const gridContainer = document.querySelector('.grid-container')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')



// Script
let gridSize = 8;
initializeGrid(gridSize);
