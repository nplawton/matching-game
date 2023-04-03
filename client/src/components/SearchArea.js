import React from "react";

import './search.css';

import Search from "./Search";
import ResultWindow from "./ResultWindow";



const SearchArea = ({ backendData, query, setQuery, searchCreature, setSearchCreature }) => {

    function handleQuery (query) {
        //console.log("Current Query (SA) =", query);
        setSearchCreature(query)
    }

   
    return(
        <div id="searchArea">
            <Search 
                backendData={backendData}
                query={query}
                setQuery={setQuery}
                handleQuery={handleQuery}     
            />
            <ResultWindow 
                searchCreature={searchCreature}
            />
            
        </div>
        
    )

}

export default SearchArea;