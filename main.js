const aContainer = document.querySelector('#board');
const resultDisplay = document.createElement("resultDisplay");
resultDisplay.classList.add("resultDisplay");

let pTurn = 0;

GameBoard = {
    board : ['','','',
             '','','',
             '','',''],
    showBoard() {
        console.log (this.board);
    } 
}

/* function to place alternate markers on each turn */
function placeMarker(num) {
    return {
        P1: 'X', /* star */
        P2: 'O', /* heart */

        gridSpace: document.querySelector('#grid' + num),
        
        draw: function () {
            if (GameBoard.board[num] == ''){
                if (pTurn % 2 == 0){
                    GameBoard.board[num] = this.P1,
                    this.gridSpace.innerHTML = '<img src="./images/star.svg" class="filter-yellow">',
                    pTurn++

                    console.log(pTurn);
                    GameBoard.showBoard();
                    gameResult()
                }

                else if (pTurn % 2 !== 0){
                    GameBoard.board[num] = this.P2,
                    this.gridSpace.innerHTML = '<img src="./images/heart.svg" class="filter-pink">',
                    pTurn++

                    console.log(pTurn);
                    GameBoard.showBoard();
                    gameResult()
                }
            }

            else {
                return;
            }
        }
    }
}


/* function to determine if someone has won */
function gameResult() {
    if (GameBoard.board[0] == 'X' && 
    GameBoard.board[1] == 'X' &&
    GameBoard.board[2] == 'X' ||
    GameBoard.board[3] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[5] == 'X' ||
    GameBoard.board[6] == 'X' && 
    GameBoard.board[7] == 'X' &&
    GameBoard.board[8] == 'X' ||
    GameBoard.board[0] == 'X' && 
    GameBoard.board[3] == 'X' &&
    GameBoard.board[6] == 'X' ||
    GameBoard.board[1] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[7] == 'X' ||
    GameBoard.board[2] == 'X' && 
    GameBoard.board[5] == 'X' &&
    GameBoard.board[8] == 'X' ||
    GameBoard.board[2] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[6] == 'X' ||
    GameBoard.board[0] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[8] == 'X') {
        resultDisplay.style.display = 'flex';
        resultDisplay.textContent = 'Star wins!';
        pointerLock(); 
    }

    else if (GameBoard.board[0] == 'O' && 
    GameBoard.board[1] == 'O' &&
    GameBoard.board[2] == 'O' ||
    GameBoard.board[3] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[5] == 'O' ||
    GameBoard.board[6] == 'O' && 
    GameBoard.board[7] == 'O' &&
    GameBoard.board[8] == 'O' ||
    GameBoard.board[0] == 'O' && 
    GameBoard.board[3] == 'O' &&
    GameBoard.board[6] == 'O' ||
    GameBoard.board[1] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[7] == 'O' ||
    GameBoard.board[2] == 'O' && 
    GameBoard.board[5] == 'O' &&
    GameBoard.board[8] == 'O' ||
    GameBoard.board[2] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[6] == 'O' ||
    GameBoard.board[0] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[8] == 'O') {
        resultDisplay.style.display = 'flex';
        resultDisplay.textContent = 'Heart wins!';
        pointerLock(); 
    }

    else if (GameBoard.board[0] !== '' &&
    GameBoard.board[1] !== '' &&
    GameBoard.board[2] !== '' &&
    GameBoard.board[3] !== '' &&
    GameBoard.board[4] !== '' &&
    GameBoard.board[5] !== '' &&
    GameBoard.board[6] !== '' &&
    GameBoard.board[7] !== '' &&
    GameBoard.board[8] !== '') {
        resultDisplay.style.display = 'flex';
        resultDisplay.textContent = 'Draw!';
        pointerLock();
    }
    aContainer.appendChild(resultDisplay);
}

let clearBoard = document.querySelectorAll('grid');

/* function to end a game */
function endGame(element) {
    GameBoard.board = 
    ['','','',
    '','','',
    '','',''];
    element.textContent = '';
    pTurn = 0;
}

function restartGame() {
    clearBoard.forEach(endGame);
    document.body.style.setProperty("--pointer", "all");
    resultDisplay.textContent = '';
    resultDisplay.style.display = 'none';
}

/* toggle pointer lock on game end and game restart */
function pointerLock() {
    document.body.style.setProperty("--pointer", "none");
  }
