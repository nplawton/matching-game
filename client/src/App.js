import React, { useState, useEffect, useCallback } from 'react';

import Gameboard from './components/Gameboard.js';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);

  useEffect(() => {
    fetch('https://react-mvp-1ll9.onrender.com/moncard').then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data);
      }
    )
  }, [])

  //console.log(backendData)

  const resetCards = useCallback(() => {
    const shuffled = [...backendData, ...backendData]
        .sort(() => Math.random() - .5)
    setCards(shuffled)
    //console.log('Card Shuffler', shuffled);
  }, [backendData]);

  function resetTurn(){
    setFirstSelection(null);
    setSecondSelection(null);
    setMoves(m => m+ 1);
    setDisabled(false);
  }

  // useEffect(() => {
  //   resetCards()
  // }, [])

  function handleNewGameClick(){
    resetTurn();
    setMoves(0);
    setScore(0);
    resetCards();
  }

  return (
    <div className="App">
      <button 
        onClick={() => handleNewGameClick() }
      >
        New Game
      </button>
      <Gameboard 
        firstSelection={firstSelection}
        setFirstSelection={setFirstSelection}
        secondSelection={secondSelection}
        setSecondSelection={setSecondSelection}
        cards={cards}
        setCards={setCards}
        setScore={setScore}
        disabled={disabled}
        setDisabled={setDisabled}
        resetTurn={resetTurn}
      />
      <p>Total Moves: {moves}</p>
      <p>Total Score: {score}</p>
    </div>
  )
}

export default App;