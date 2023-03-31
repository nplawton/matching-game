import Recat, { useState, useEffect } from 'react';

function App(){

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('https://react-mvp-1ll9.onrender.com/moncard').then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data);
      }
    )
  }, [])

  return(
    <div>

    </div>
  )

}

export default App;
