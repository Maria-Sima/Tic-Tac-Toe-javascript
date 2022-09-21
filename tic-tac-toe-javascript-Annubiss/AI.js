function userAction(tile, index) {
    console.log(index);
    tile.textContent = `${currentPlayer}`;
    changePlayer();
    // TODO Handle when the user clicks on a tile
  }
  const tiles = Array.from(document.querySelectorAll(".tile"));
  console.log(tiles[4]);
  
  function winningCondition(tiles) {
    // horizontal
  
    if (
      tiles[0].innerText == tiles[1].innerText &&
      tiles[0].innerText == tiles[2].innerText &&
      currentPlayer == tiles[2].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    if (
      tiles[3].innerText == tiles[4].innerText &&
      tiles[3].innerText == tiles[5].innerText &&
      currentPlayer == tiles[5].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    if (
      tiles[6].innerText == tiles[7].innerText &&
      tiles[6].innerText == tiles[8].innerText &&
      currentPlayer == tiles[8].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    // vertical
    if (
      tiles[0].innerText == tiles[3].innerText &&
      tiles[0].innerText == tiles[6].innerText &&
      currentPlayer == tiles[6].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    if (
      tiles[1].innerText == tiles[4].innerText &&
      tiles[4].innerText == tiles[7].innerText &&
      currentPlayer == tiles[7].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    if (
      tiles[2].innerText == tiles[5].innerText &&
      tiles[5].innerText == tiles[8].innerText &&
      currentPlayer == tiles[8].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    // diagonal
    if (
      tiles[0].innerText == tiles[4].innerText &&
      tiles[4].innerText == tiles[8].innerText &&
      currentPlayer == tiles[8].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    if (
      tiles[2].innerText == tiles[4].innerText &&
      tiles[4].innerText == tiles[6].innerText &&
      currentPlayer == tiles[6].innerText
    ) {
      alert("Player " + currentPlayer + " " + "Won!");
      return true;
    }
    return false;
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
  
//   function changePlayer() {
//     if (currentPlayer == "X") {
//       currentPlayer = "0";
//       ind = "0";
//       playerDisplay.innerHTML = "O";
//     } else {
//       currentPlayer = "X";
//       ind = "X";
//       playerDisplay.innerHTML = "X";
//     }
    // announcer.textContent = `${currentPlayer}s turn`;
//   }
  
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
  
    
  console.log(tiles);
  console.log(tiles.values);