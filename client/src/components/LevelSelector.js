import React from "react";
import "../App.css";
import "./levelSelector.css"

const LevelSelector = ({ resetTurn, setMoves, setScore,
                     resetCards, backendData }) => {


    function Beginner() {
        
        let fourCards = backendData.sort(() => Math.random() -0.5)
          .slice(0,4).map((card) => card);
    
        console.log(fourCards);
        resetCards(fourCards);
        setMoves(0);
        setScore(0);
        resetTurn();
    
    }
    
    function Easy() {

        let eightCards = backendData.sort(() => Math.random() -0.5)
            .slice(0,8).map((card) => card);
        
        console.log(eightCards);
        resetCards(eightCards)
        setMoves(0);
        setScore(0);
        resetTurn();

    }

    function Medium() {

        let twelveCards = backendData.sort(() => Math.random() -0.5)
            .slice(0,12).map((card) => card);
        
        console.log(twelveCards);
        resetCards(twelveCards)
        setMoves(0);
        setScore(0);
        resetTurn();

    }

    function Hard() {

        let eighteenCards = backendData.sort(() => Math.random() -0.5)
            .slice(0,18).map((card) => card);
        
        console.log(eighteenCards);
        resetCards(eighteenCards)
        setMoves(0);
        setScore(0);
        resetTurn();

    }

    function clinicallyInsane() {

        let allCards = backendData.sort(() => Math.random() -0.5).map((card) => card);
        
        console.log(allCards);
        resetCards(allCards)
        setMoves(0);
        setScore(0);
        resetTurn();

    }

    return (
        <div id="levelSelector">
            <button 
                id='beginner'
                onClick={Beginner}
            >
                4
            </button>
            <button 
                id='easy'
                onClick={Easy}
            >
                8
            </button>
            <button 
                id='medium'
                onClick={Medium}
            >
                12
            </button>
            <button 
                id='hard'
                onClick={Hard}
            >
                18
            </button>
            <button 
                id='insane'
                onClick={clinicallyInsane}
            >
                28
            </button>
        </div>
    )

};

export default LevelSelector;