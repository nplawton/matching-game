import React, {useState} from "react";
import "../App.css";
import "../index.css"

import Moves from './Moves';
import ScoreBoard from './ScoreBoard';
import LevelSelector from "./LevelSelector";
import GameOver from "./GameOver";

const GameHandlers = ({ moves, score, setMoves, setScore, 
        resetCards, backendData, gameOver, setGameOver }) => {
    
    const [prevCards, setPrevCards] = useState();

    function gameController(){
        setMoves(0);
        setScore(0);
        setGameOver(false);
    }
    
    return (
        <div id="gameHandler">
            <h1 id='gameTitle'>MATCHING</h1>
            <LevelSelector 
                gameController={gameController}
                resetCards={resetCards}
                backendData={backendData}
                setPrevCards={setPrevCards}
            />
            <Moves moves={moves} />
            <ScoreBoard score={score} />
            {gameOver && <GameOver 
                            gameOver={gameOver}
                            gameController={gameController}
                            prevCards={prevCards}
                            resetCards={resetCards}
                        />}
        </div>
    )

};

export default GameHandlers;