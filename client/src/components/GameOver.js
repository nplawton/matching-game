import React from "react";

import './gameOver.css'

const GameOver = ({ gameOver, gameController, resetCards, prevCards }) => {

    if(gameOver === true){
        console.log('GameOver Handler is showing game over to be: ', gameOver)
    }

    
    function resetGame(){
        console.log('game has been resetted')
        gameController();
        resetCards(prevCards);
    }

    return (
        <div id="endGame">
            <p id='text'>WINNER</p>
            <button
                onClick={resetGame}
                id='gameBtn'
            >
                New Game
            </button>
        </div>
    )

};

export default GameOver;