import React from "react";

import './gameOver.css'

const GameOver = ({ gameOver, gameController, resetCards, prevCards, nextCards }) => {

    if(gameOver === true){
        console.log('GameOver Handler is showing game over to be: ', gameOver)
    }

    
    function resetGame(){
        console.log('game has been resetted')
        gameController();
        resetCards(prevCards);
    }

    function nextDifficulty(){
        console.log('game has been resetted')
        gameController();
        resetCards(nextCards);
    }

    return (
        <div id="endGame">
            <p id='text'>WINNER</p>
            <button
                onClick={resetGame}
                id='prevBtn'
            >
                Reset Game
            </button>
            <button
                onClick={nextDifficulty}
                id='nextBtn'
            >
                Level Up
            </button>
        </div>
    )

};

export default GameOver;