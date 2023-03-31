import React, { useState, useEffect, useCallback } from 'react';

import Card from './components/Card';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  const [Cards, setCards] = useState([])

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
    console.log('Card Shuffler', shuffled);
  });

  useEffect(() => {
    resetCards()
  }, [backendData]);

  return(
    <div className='App'>
      <h1 id='gameTitle'>D&D MATCHING</h1>
      <div className='gameboard'>
        {Cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      
      
    </div>
  )

}

export default App;