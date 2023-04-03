import React from "react";
import "../App.css";

import Moves from './Moves';
import ScoreBoard from './ScoreBoard';
import LevelSelector from "./LevelSelector";

const GameHandlers = ({ moves, score, resetTurn, setMoves, setScore,
                     resetCards, backendData }) => {

    return (
        <div id="gameHandler">
            <h1 id='gameTitle'>Matching</h1>
            <LevelSelector 
                setMoves={setMoves}
                setScore={setScore}
                resetCards={resetCards}
                backendData={backendData}
            />
           <div id='talley'>
              <Moves moves={moves} />
              <ScoreBoard score={score} />
           </div>
        </div>
    )

};

export default GameHandlers;