import React, { useState, useEffect, useCallback } from 'react';

import Gameboard from './components/Gameboard';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  const [Cards, setCards] = useState([]);
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

  return(
    <div className='App'>
      <h1 id='gameTitle'>D&D MATCHING</h1>
      <Gameboard 
        backendData={backendData}
        firstSelection={firstSelection}
        setFirstSelection={setFirstSelection}
        secondSelection={secondSelection}
        setSecondSelection={setSecondSelection}
        Cards={Cards}
        setCards={setCards}
      />    
    </div>
  )

}

export default App;