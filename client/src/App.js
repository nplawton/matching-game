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
  const [monNames, setMonNames] = useState('');
  const [monImg, setMonImg] = useState('');
  const [monDescrip, setMonDescrip] = useState('');
  const [monId, setMonId] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch('https://react-mvp-1ll9.onrender.com/moncard')
      .then(response => response.json()
    )
    setBackendData(response);
  }
  
  //console.log(backendData)

  function handleFour() {
    //console.log("6");
    let fourCards = backendData.sort(() => Math.random() -0.5)
      .slice(0,4).map((card) => card);

    console.log(fourCards);
    resetCards(fourCards)

  }

  function handleSix() {
    //console.log("6");
    let sixCards = backendData.sort(() => Math.random() -0.5).map((card) => card);

    console.log(sixCards);
    resetCards(sixCards)

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

  // useEffect(() => {
  //   resetCards()
  // }, [])

  return (
    <div className="App">
      <button onClick={handleFour}>4</button>
      <button onClick={handleSix}>6</button>
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
        backendData={backendData}
        setQuery={setQuery}
        query={query}
        monNames={monNames}
        monImg={monImg}
        monDescrip={monDescrip}
        monId={monId} 
        setMonNames={setMonNames}
        setMonImg={setMonImg}
        setMonDescrip={setMonDescrip}
        setMonId={setMonId}   
      />
    </div>
  )
}

export default App;