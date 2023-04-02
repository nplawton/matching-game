import React from "react";
import axios from 'axios';
import './search.css';


const ResultWindow = ({ monNames, monImg, monDescrip, monId }) => {

    
    
    return(
        <div 
            key = {monId}
            id="resultWindow"
        
        >
            <h1>{monNames}</h1>
            {/* {console.log(`Result Window name: ${monNames}`)} */}
        </div>
    )

}

export default ResultWindow;