import React from "react";
import "../App.css";

const ScoreBoard = ({score}) => {

    return (
        <div id='scoreboard'>
            <h1 id='scoretitle'>Total Score:</h1>
            <h2 id='score'>{score}</h2>
        </div>
    )

};

export default ScoreBoard;