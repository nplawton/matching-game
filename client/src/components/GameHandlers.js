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
    const [nextCards, setNextCards] = useState();

    function gameController(){
        setMoves(0);
        setScore(0);
        setGameOver(false);
    }
    
    return (
        <div id="gameHandler">
            <h1 id='gameTitle'>MATCHING</h1>
            {gameOver && <GameOver 
                            gameOver={gameOver}
                            gameController={gameController}
                            prevCards={prevCards}
                            resetCards={resetCards}
                            nextCards={nextCards}
                        />
            }
            <LevelSelector 
                gameController={gameController}
                resetCards={resetCards}
                backendData={backendData}
                setPrevCards={setPrevCards}
                setNextCards={setNextCards}
            />
            <Moves moves={moves} />
            <ScoreBoard score={score} />
        </div>
    )

};

export default GameHandlers;