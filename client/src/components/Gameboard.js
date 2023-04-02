import React, { useState, useEffect, useCallback } from "react";
import "../App.css";

import Card from './Card';


const Gameboard = ({ firstSelection, setFirstSelection, 
    secondSelection, setSecondSelection, cards, setCards,
    setScore, disabled, setDisabled, resetTurn }) => {

    function handleCardClick(e){
        firstSelection
            ? setSecondSelection(e.target.dataset.id)
            : setFirstSelection(e.target.dataset.id);
        // to do: handle duplicated single card click
    }

    /*
        1. If no 2nd, then fail hard
        2. If both are present: 
            -Then disable all cards
            -Then check if they're the same ID
                -increment score
                -check if game complete
            -Handle Same
            -Handle Different
        3. Clear Selections
    */

    useEffect(() => {
        if(!secondSelection){return}
        setDisabled(true)
        if(firstSelection === secondSelection){
            setCards(prev => {
            return prev.map(card => {
                if(card.id === firstSelection){
                    return {...card, matchFound: true}
                } else {
                    return card;
                }
            })
            })
            setScore(prev => prev + 1);
            resetTurn();
        } else {
            setTimeout(() => resetTurn(), 1000);
        }
    }, [firstSelection, secondSelection])

    return(

        <div className="gameboard">
            {
                cards && (
                    Object.values(cards).map((card, index)=> 
                        <Card
                            key={index}
                            card={card}
                            disabled={disabled}
                            handleCardClick={handleCardClick}
                        />
                    )
                )
            }
        </div>
    )
};

export default Gameboard;