import React, { useEffect } from "react";
import "../App.css";

import Card from './Card';


const Gameboard = ({ firstSelection, setFirstSelection, 
    secondSelection, setSecondSelection, cards, setCards, score,
    setScore, disabled, setDisabled, resetTurn, setGameOver }) => {

    //Handles the choice
    function handleCardClick(card){
        firstSelection
            ? setSecondSelection(card)
            : setFirstSelection(card);
        // console.log('FirstSelection is:', firstSelection);
        // console.log('SecondSelection is:', secondSelection);
    }

    function UserWin(){
        setGameOver(true);
        //console.log('Game Over at GameBoard: ', gameOver);
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

    //Compare the two Cards
    useEffect(() => {
        if(firstSelection && secondSelection){
            setDisabled(true)
            if(firstSelection.id === secondSelection.id){
                setCards(prev => {
                    return prev.map(card => {
                        if(card.id === firstSelection.id){
                            return {...card, matchFound: true}
                        } else {
                            return card;
                        }
                    })
                })
                setScore(prev => prev + 1);
                resetTurn();
                //console.log('Cards Match')
            } else {
                setTimeout(() => resetTurn(), 1000);
                //console.log('Cards Don\'t Match');
            }
            // console.log("Number Cards", cards.length / 2) 
            // console.log(score + 1);
            if (score + 1 === cards.length / 2){
                UserWin();
            }
        }
        
    }, [firstSelection, secondSelection])

    //console.log(cards);

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
                            flipped={card === firstSelection || 
                                    card === secondSelection || 
                                    card.matchFound === true}
                        />
                    )
                )
            }
        </div>
    )
};

export default Gameboard;