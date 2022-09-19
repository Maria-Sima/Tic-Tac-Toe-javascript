
/// DO NOT MODIFY THESE LINES

const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

resetButton.addEventListener('click', resetBoard);

/// WRITE YOUR CODE AFTER THIS LINE

function userAction(tile, index) {
    // TODO Handle when the user clicks on a tile
}

function resetBoard() {
    // TODO Empty the board
}
