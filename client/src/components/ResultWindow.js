import React from "react";
import './search.css';


const ResultWindow = ({ searchCreature }) => {
    
    return(
        <div 
            key = {searchCreature.id}
            id="resultWindow"
        
        >
            <h1 id="name">{searchCreature.mon_name}</h1>
            <img id="monimg" src={searchCreature.mon_img} />
            <p id='descrip'>{searchCreature.descrip}</p>
        </div>
    )

}

export default ResultWindow;