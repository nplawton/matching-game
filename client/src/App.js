import React, { useState, useEffect } from 'react';

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
  const [searchCreature, setSearchCreature] = useState({})

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch('https://react-mvp-1ll9.onrender.com/moncard')
      .then(response => response.json()
    )
    setBackendData(response);
  }

  //shuffle and duplicate cards
  function resetCards(cardLength) {
    const shuffled = [...cardLength, ...cardLength]
        .sort(() => Math.random() - .5)
    setCards(shuffled)
    //console.log('Card Shuffler', shuffled);
  };

  //Reset the cards during each turn
  function resetTurn(){
    setFirstSelection(null);
    setSecondSelection(null);
    setMoves(m => m + 1);
    setDisabled(false);
  }

  return (
    <div className="App">
      <GameHandlers 
        moves={moves}
        score={score}
        resetTurn={resetTurn}
        setMoves={setMoves}
        setScore={setScore}
        resetCards={resetCards}
        backendData={backendData}
      />
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
      <SearchArea 
        backendData={backendData}
        setQuery={setQuery}
        query={query}
        searchCreature={searchCreature}
        setSearchCreature={setSearchCreature} 
      />
    </div>
  )
}

export default App;