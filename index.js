function userAction(tile, index) {
  console.log(index);
  tile.textContent = `${currentPlayer}`;
  changePlayer();
  // TODO Handle when the user clicks on a tile
}
const tiles = Array.from(document.querySelectorAll(".tile"));
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => userAction(tile, index));
});

resetButton.addEventListener("click", resetBoard);

let currentPlayer = "X";
let running = false;
let robotPlayer = false;

function getEmptyBoard() {
  let board = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ];
}
tiles[0] = ".";

function getPlayerMove(tiles, currentPlayer) {
  tiles.add(currentPlayer);
}
let turn = false;
function changePlayer() {
    moves++;
    if (currentPlayer == "X") {
      
        currentPlayer = "0";
        moves++;
  } else {
    currentPlayer = "X";
  }

  announcer.textContent = `${currentPlayer}s turn`;
}

function userAction(tile, index) {
    console.log(index);
    if (!tile.textContent) {
        tile.textContent = `${currentPlayer}`;
        console.log(tiles[index].innerHTML);
        changePlayer();
    }
  // TODO Handle when the user clicks on a tile
} let place = 0;
function isBoardFull(tiles) {
    for (let i = 0; i <= 8; i++)
        if (tiles[i].innerHTML == "X" || tiles[i].innerHTML == "X")
            place++;
    if (place == 9)
    console.log("Draw!")

        }



isBoardFull();

function resetBoard() {
  // TODO Empty the board
}

function getRandomAIMove() {
  let i = Math.floor(Math.random() * tiles.lenght);
}
console.log(tiles);
console.log(tiles.values);
