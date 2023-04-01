

import React from 'react'

const NewGame = ({ setMoves, resetTurn, resetCards, setScore }) => {
    
    function handleNewGameClick(){
        resetTurn();
        setMoves(0);
        setScore(0);
        resetCards();
    }

    return(
        <button onClick={() => handleNewGameClick()}>New Game</button>
    )
}

export default NewGame;