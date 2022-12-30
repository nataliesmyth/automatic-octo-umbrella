const xClass = 'x';
const oClass = 'o'
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellEls = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let oTurn; // this will determine whose turn it is
winningMsgTxtEl = document.querySelector('[data-winning-msg-txt]');
winningMsgEl = document.getElementById('winningMsg')

startGame();

function startGame() {
    oTurn = false;
    cellEls.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true }); // the once property only allows the event listener to fire once when set to true
    });
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
        // console.log('winner')
    }
    // Place X or O
    // Check for win
    // Check for draw
    // Switch players
    switchTurn()
    setBoardHoverClass()
}

function endGame(draw) {
    if (draw) {

    } else {
        console.log('winner')
        winningMsgTxtEl.innerText = `${oTurn ? "O's" : "X's"} Wins!`;
    }
    winningMsgEl.classList.add('show');
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
    if (oTurn) {
        board.classList.add(oClass);
    } else {
        board.classList.add(xClass)
    }
}

function checkWin(currentClass) {
    // if the current class is in all 3 of the elements inside the combination, user is a winner
    return winningCombos.some(combinations => {
        return combinations.every(index => {
            return cellEls[index].classList.contains(currentClass)
        })
    })
}