import Recat, { useState, useEffect } from 'react';

import Card from './components/Card';

function App(){

  const [backendData, setBackendData] = useState([{}]);
  //const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://react-mvp-1ll9.onrender.com/moncard').then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data);
      }
    )
  }, [])

  console.log(backendData)

  

  return(
    <div>
      {backendData.map((card,index) => (
        <Card key={index} card={card} />
      ))}
      
    </div>
  )

}

export default App;

{/* <img src={backendData[0].mon_img}></img> */}