function userAction(tile, index) {
  console.log(index);
  tile.textContent = `${currentPlayer}`;
  changePlayer();
  // TODO Handle when the user clicks on a tile
}

const tiles = Array.from(document.querySelectorAll(".tile"));
console.log(tiles[4]);
const gameDisplay = document.querySelector("#game-display");
let gameWon = false;
const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function winningCondition() {
  const won = winPositions
    .map(function (a) {
      
      return (
        tiles[a[0]].innerText == tiles[a[1]].innerText &&
        tiles[a[1]].innerText == tiles[a[2]].innerText &&
        tiles[a[0]].innerText.trim() !== "" &&
        tiles[a[1]].innerText.trim() !== "" &&
        tiles[a[2]].innerText.trim() !== ""
      );
    })
    .some(function (x) {
      return x === true;
    });
gameWon = true;
  if (won) {
    gameDisplay.innerText = "Player Won";
  }
}
winningCondition();
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
announcer.textContent = `Player VS AI`;
const gameWin = false;

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => userAction(tile, index));
});

resetButton.addEventListener("click", resetBoard);

let currentPlayer = "X";
let running = false;
let robotPlayer = false;
let Moves = 0;

function getEmptyBoard() {
  let board = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ];
}

function getPlayerMove(tiles, currentPlayer) {
  tiles.add(currentPlayer);
}

function userAction(tile, index) {
  console.log(index);
  if (!tile.textContent) {
    tile.textContent = `${currentPlayer}`;
    Moves++;

    main();
  }

  // TODO Handle when the user clicks on a tile
}
function getRandomAIMove() {
  let cont = true;
  while (cont) {
    let a = Math.floor(Math.random() * 8);
    if (!tiles[a].textContent) {
      tiles[a].innerText = "0";

      cont = false;
    }
  }
}

function isBoardFull() {
  if (Moves == 9  && gameWin == false) {
    gameDisplay.innerText = "Bot wins";
  }
}
isBoardFull();
console.log(isBoardFull());

function resetBoard() {
  location.reload();
}

function main() {
  isBoardFull();
  winningCondition(tiles);
  //   changePlayer();
  AI();
}
function AI() {
  getRandomAIMove();
  // easyWin();
  // blockLose();
}
function easyWin(index) {
  for (let i = 0; i < 8; i++) {
    if (
      tiles[winPositions[i][0]].innerText == "0" &&
      tiles[winPositions[i][1]].innerText == "0" &&
      tiles[winPositions[i][2]].innerText == ""
    ) {
      tiles[winPositions[i][2]].textContent = "0";
      gameDisplay.innerText = "Bot wins";
    } else if (
      tiles[winPositions[i][0]].innerText == "0" &&
      tiles[winPositions[i][2]].innerText == "0" &&
      tiles[winPositions[i][1]].innerText == ""
    ) { gameDisplay.innerText = "Bot wins";
      tiles[winPositions[i][1]].textContent = "0";
    } else if (
      tiles[winPositions[i][2]].innerText == "0" &&
      tiles[winPositions[i][1]].innerText == "0" &&
      tiles[winPositions[i][0]].innerText == ""
    ) { tiles[winPositions[i][1]].textContent = "0";
      tiles[winPositions[i][0]].textContent = "0";
    }
  }
}
function blockLose(index) {
  for (let i = 0; i < 8; i++) {
    if (
      tiles[winPositions[i][0]].innerText == "X" &&
      tiles[winPositions[i][1]].innerText == "X" &&
      tiles[winPositions[i][2]].innerText == ""
    ) {
      tiles[winPositions[i][2]].textContent = "0";
    } else if (
      tiles[winPositions[i][0]].innerText == "X" &&
      tiles[winPositions[i][2]].innerText == "X" &&
      tiles[winPositions[i][1]].innerText == ""
    ) {
      tiles[winPositions[i][1]].textContent = "0";
    } else if (
      tiles[winPositions[i][2]].innerText == "X" &&
      tiles[winPositions[i][1]].innerText == "X" &&
      tiles[winPositions[i][0]].innerText == ""
    ) {
      tiles[winPositions[i][0]].textContent = "0";
    }
  }
}

console.log(tiles);
console.log(tiles.values);
