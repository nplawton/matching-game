import React, { useState, useEffect, useCallback } from 'react';

import "../App.css";
import Card from './Card';

const Gameboard = ({ backendData, firstSelection, setFirstSelection, 
        secondSelection, setSecondSelection, Cards, setCards,
        setScore, disabled, setDisabled, resetTurn, resetCards }) => {
    
    
    useEffect(() => {
        resetCards()
    }, [backendData]);
    
    function handleCardClick (e){

        if(firstSelection){
            setSecondSelection(e.target.dataset.id);
            //console.log(secondSelection, 'Second');
        }else{
            setFirstSelection(e.target.dataset.id)
            //console.log(firstSelection, 'first');
        } 
        //console.log(e.target.dataset.id);
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

    
    useEffect (() => {

        if(!secondSelection){
            return;
        }

        setDisabled(true);

        if(firstSelection === secondSelection){
            
            setCards(prev => {
                return prev.map(card => {
                    if(Cards.id === firstSelection){
                        return {...Cards, matchfound: true}
                    }else{
                        return Cards;
                    }
                })
            })


            setScore(prev => prev++);
            
            resetTurn();
            
        }else{
            
            setTimeout(() => resetTurn(), 1000)

        }

    }, [firstSelection, secondSelection])
    
    
    return (
        <div className='gameboard'>
        {
          Cards && (
            Object.values(Cards).map((card, index) =>
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
    );
};

export default Gameboard;