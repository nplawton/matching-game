import React, { useState, useEffect } from "react";
import axios from 'axios';
import './search.css';

import Search from "./Search";
import ResultWindow from "./ResultWindow";



const SearchArea = ({ backendData, query, setQuery }) => {



   
    return(
        <div>
            <ResultWindow 
                query={query}
            />
            <Search 
                backendData={backendData}
                query={query}
                setQuery={setQuery}     
            />
        </div>
        
    )

}

export default SearchArea;