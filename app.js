const xClass = 'x';
const oClass = 'o'
const cellEls = document.querySelectorAll('[data-cell]');
let oTurn;

cellEls.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true }) // only fires a click event once
});

function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;
    placeMark(cell, currentClass);
    // Place X or O
    // Check for win
    // Check for draw
    // Switch players
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}