let pTurn = 0;


GameBoard = {
    board : ['','','',
             '','','',
             '','',''],
    showBoard() {
        console.log (this.board);
    } 
}


function placeMarker(num) {
    return {
        P1: 'O',
        P2: 'X',

        gridSpace: document.querySelector('#grid' + num),
        
        draw: function () {
            if (GameBoard.board[num] == ''){
                if (pTurn % 2 == 0){
                    GameBoard.board[num] = this.P2,
                    this.gridSpace.textContent = this.P2,
                    pTurn++

                    console.log(pTurn);
                    GameBoard.showBoard();
                }

                else if (pTurn % 2 !== 0){
                    GameBoard.board[num] = this.P1,
                    this.gridSpace.textContent = this.P1,
                    pTurn++

                    console.log(pTurn);
                    GameBoard.showBoard();
                }
            }

            else {
                return;
            }


        }
    }
}





