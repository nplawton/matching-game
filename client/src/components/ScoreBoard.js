import React from "react";
import "../App.css";

const ScoreBoard = ({score}) => {

    return (
        <div id="scoreboard">
           Total Score: {score}
        </div>
    )

};

export default ScoreBoard;