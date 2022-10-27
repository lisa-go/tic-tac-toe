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
        P1: 'X',
        P2: 'O',

        gridSpace: document.querySelector('#grid' + num),
        
        draw: function () {
            if (GameBoard.board[num] == ''){
                if (pTurn % 2 == 0){
                    GameBoard.board[num] = this.P1,
                    this.gridSpace.textContent = this.P1,
                    pTurn++

                    console.log(pTurn);
                    GameBoard.showBoard();
                    gameResult()
                }

                else if (pTurn % 2 !== 0){
                    GameBoard.board[num] = this.P2,
                    this.gridSpace.textContent = this.P2,
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
    GameBoard.board[2] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[3] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[5] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[6] == 'X' && 
    GameBoard.board[7] == 'X' &&
    GameBoard.board[8] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[0] == 'X' && 
    GameBoard.board[3] == 'X' &&
    GameBoard.board[6] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[1] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[7] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[2] == 'X' && 
    GameBoard.board[5] == 'X' &&
    GameBoard.board[8] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[2] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[6] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[0] == 'X' && 
    GameBoard.board[4] == 'X' &&
    GameBoard.board[8] == 'X') {
        console.log('P1: X wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[0] == 'O' && 
    GameBoard.board[1] == 'O' &&
    GameBoard.board[2] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[3] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[5] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[6] == 'O' && 
    GameBoard.board[7] == 'O' &&
    GameBoard.board[8] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[0] == 'O' && 
    GameBoard.board[3] == 'O' &&
    GameBoard.board[6] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[1] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[7] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[2] == 'O' && 
    GameBoard.board[5] == 'O' &&
    GameBoard.board[8] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[2] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[6] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
    }

    else if (GameBoard.board[0] == 'O' && 
    GameBoard.board[4] == 'O' &&
    GameBoard.board[8] == 'O') {
        console.log('P2: O wins');
        clearBoard.forEach(endGame);
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
        console.log ('draw');
        clearBoard.forEach(endGame);
    }
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
