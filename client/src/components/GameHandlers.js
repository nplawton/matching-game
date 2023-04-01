import React from "react";
import "../App.css";

import Moves from './Moves';
import ScoreBoard from './ScoreBoard';

const GameHandlers = ({ moves, score, resetTurn, setMoves, setScore, resetCards }) => {

    function handleNewGameClick(){
        resetTurn();
        setMoves(0);
        setScore(0);
        resetCards();
    }

    return (
        <div id="gameHandlers">
            <button
                id="newGame" 
                onClick={() => handleNewGameClick() }
            >
                New Game
            </button>
           <Moves moves={moves} />
           <ScoreBoard score={score} />
        </div>
    )

};

export default GameHandlers;