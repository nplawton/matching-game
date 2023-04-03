import React from "react";
import "../App.css";

const Moves = ({moves}) => {

    return (
        <div id="totalmoves">
            <h1 id='movestitle'>Total Moves:</h1>
            <h2 id="moves">{moves}</h2>
        </div>
    )

};

export default Moves;