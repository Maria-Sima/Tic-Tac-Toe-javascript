function userAction(tile, index) {
    console.log(index);
    tile.textContent = `${currentPlayer}`;
    changePlayer();
    // TODO Handle when the user clicks on a tile
}
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  const tiles = Array.from(document.querySelectorAll(".tile"));
  console.log(tiles[4]);
  
function winningCondition(tiles) {

  for (let i = 0; i < 8; i++) {
    if (tiles[winConditions[i][0]].innerText == "X" && tiles[winConditions[i][1]].innerText == "X" && tiles[winConditions[i][2]].innerText == "X")
      alert("Player Won"); return true;
  }
}
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");
  announcer.textContent = `Player VS AI`;
  
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
      let cont=true;
      while (cont)
  
      {
          let a = Math.floor(Math.random() * 8);
          if (!tiles[a].textContent){
              tiles[a].innerText = "0";
          cont = false;
      }
      }
      
          
  
      }
  
  
  function isBoardFull() {
    if (Moves == 9) {
      console.log(" board full true");
      alert("It's a tie!");
    } else {
      console.log("board full false");
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
      getRandomAIMove();

    
  }
  

function easyWin(index) {
  for (let i = 0; i < 8; i++)
  {
  if(tiles[winConditions[i][0]].innerText == "X" && tiles[winConditions[i][1]].innerText == "X" && tiles[winConditions[i][2]].innerText == "")
    tiles}

      
 }
    
  console.log(tiles);
  console.log(tiles.values);