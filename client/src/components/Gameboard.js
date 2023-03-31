import React, { useState, useEffect, useCallback } from 'react';

import "../App.css";
import Card from './Card';

const Gameboard = ({ backendData, firstSelection, setFirstSelection, secondSelection, setSecondSelection, Cards, setCards }) => {

    const resetCards = useCallback(() => {
        const shuffled = [...backendData, ...backendData]
          .sort(() => Math.random() - .5)
        setCards(shuffled)
        //console.log('Card Shuffler', shuffled);
      });
    
      useEffect(() => {
        resetCards()
      }, [backendData]);
    
      function handleCardClick (e){
        
        firstSelection
          ? setSecondSelection(e.target.dataset.id)
          : setFirstSelection(e.target.dataset.id);
        //console.log(e.target.dataset.id);
      }
    
      function evaluateSelection() {
        console.log(`FirstSelection: ${firstSelection}`);
        console.log(`SecondSelection: ${secondSelection}`);
      }
    
    
    return (
        <div className='gameboard'>
        {
          Cards && (
            Cards.map((card, index) => (
              <Card 
                key={index} 
                card={card} 
                handleCardClick={handleCardClick}
              />
            ))
          )
        }
      </div>
    );
};

export default Gameboard;