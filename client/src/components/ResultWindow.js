import React from "react";
import axios from 'axios';
import './search.css';


const ResultWindow = ({ query }) => {

    return(
        <div id="resultWindow">
            <h1>{query.mon_name}</h1>

        </div>
    )

}

export default ResultWindow;