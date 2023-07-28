
// Initialize Grid
function initializeGrid(gridSize) {
    for (let x = 0; x < gridSize; x++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        grid.appendChild(gridRow);
        for (let y = 0; y < gridSize; y++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add("gridSquare");
            gridRow.appendChild(gridSquare);
        }
    }

}

// UI
const grid = document.querySelector('.grid')
const gridSquare = document.querySelectorAll('.gridSquare')

// Script
let gridSize = 8;
initializeGrid(gridSize);