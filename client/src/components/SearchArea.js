import React from "react";

import './search.css';

import Search from "./Search";
import ResultWindow from "./ResultWindow";



const SearchArea = ({ backendData, query, setQuery }) => {

    function handleQuery (query) {
        console.log("Current Query =", query);
    }

   
    return(
        <div id="searchArea">
            <ResultWindow 
                
            />
            <Search 
                backendData={backendData}
                query={query}
                setQuery={setQuery}
                handleQuery={handleQuery}     
            />
        </div>
        
    )

}

export default SearchArea;