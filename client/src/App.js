import React, { useState, useEffect, useCallback } from 'react';

import Gameboard from './components/Gameboard';
import GameHandlers from './components/GameHandlers';
import SearchArea from './components/SearchArea';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [query, setQuery] = useState('');

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

  return (
    <div className="App">
      <GameHandlers 
        moves={moves}
        score={score}
        resetTurn={resetTurn}
        setMoves={setMoves}
        setScore={setScore}
        resetCards={resetCards}
      />
      <Gameboard 
        id="gameboard"
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
      <SearchArea
        id="searchArea" 
        backendData={backendData}
        setQuery={setQuery}
        query={query} 
      />
    </div>
  )
}

export default App;