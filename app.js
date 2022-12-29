const xClass = 'x';
const oClass = 'o'
const cellEls = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
let oTurn; // this will determine whose turn it is

startGame();

function startGame() {
    oTurn = false;
    cellEls.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true }) // only fires a click event once
    });
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;
    placeMark(cell, currentClass);
    // Place X or O
    // Check for win
    // Check for draw
    // Switch players
    switchTurn()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function switchTurn() {
    // Whenever this function is invoked, the turn will equal the opposite turn
    oTurn = !oTurn
};

function setBoardHoverClass() {
    board.classList.remove(xClass);
    board.classList.remove(oClass);

}