const cellEls = document.querySelectorAll('[data-cell]');

cellEls.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true }) // only fires a click event once
});

function handleClick(e) {
    // Place X or O
    // Check for win
    // Check for draw
    // Switch players
}