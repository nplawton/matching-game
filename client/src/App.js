import React, { useState, useEffect, useCallback } from 'react';

import Gameboard from './components/Gameboard';
import NewGame from './components/NewGame';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  const [Cards, setCards] = useState([]);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

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

  function resetTurn(){
    setFirstSelection(null);
    setSecondSelection(null);
    setMoves(m => m+ 1);
    setDisabled(false);
  }

  const resetCards = useCallback(() => {
    const shuffled = [...backendData, ...backendData]
        .sort(() => Math.random() - .5)
    setCards(shuffled)
    //console.log('Card Shuffler', shuffled);
  });

  return(
    <div className='App'>
      <h1 id='gameTitle'>D&D MATCHING</h1>
      <NewGame 
        setMoves={setMoves}
        setScore={setScore}
        resetTurn={resetTurn}
        resetCards={resetCards}
      />
      <Gameboard 
        backendData={backendData}
        firstSelection={firstSelection}
        setFirstSelection={setFirstSelection}
        secondSelection={secondSelection}
        setSecondSelection={setSecondSelection}
        Cards={Cards}
        setCards={setCards}
        setScore={setScore}
        disabled={disabled}
        setDisabled={setDisabled}
        resetTurn={resetTurn}
        resetCards={resetCards}
      /> 
      <p>Total Moves: {moves}</p>
      <p>Total Score: {score}</p>   
    </div>
  )

}

export default App;