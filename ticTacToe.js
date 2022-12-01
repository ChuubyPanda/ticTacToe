(function(){
    const gameboard = (() => {
        let gameboard = [[1,2,3],[4,5,6],[7,8,9]];
        const getGameBoard = () => {
            return gameboard;
        }
        const resetGameBoard = () => {
            gameboard = [[1,2,3],[4,5,6],[7,8,9]];
        }
        const setGameBoard = (i,j,val) => {
            gameboard[i][j] = val;
        }
    })();
    const displayControllor = (() => {
        const boxes = document.querySelectorAll('.box');
        let turn = 1;
        let gameOver = false;

        const place = (() => {
            if(turn == 1){
                
            }
        });
    })();
    const player = (() => {
        const 
    })();
})();