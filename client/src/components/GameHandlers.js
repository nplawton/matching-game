import React from "react";
import "../App.css";

import Moves from './Moves';
import ScoreBoard from './ScoreBoard';
import LevelSelector from "./LevelSelector";
import GameOver from "./GameOver";

const GameHandlers = ({ moves, score, setMoves, setScore, 
        resetCards, backendData, gameOver }) => {
    
    return (
        <div id="gameHandler">
            <h1 id='gameTitle'>MATCHING</h1>
            <LevelSelector 
                setMoves={setMoves}
                setScore={setScore}
                resetCards={resetCards}
                backendData={backendData}
            />
            <Moves moves={moves} />
            <ScoreBoard score={score} />
            <GameOver gameOver={gameOver} />
        </div>
    )

};

export default GameHandlers;