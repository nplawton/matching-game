import React from "react";

import './search.css';

import Search from "./Search";
import ResultWindow from "./ResultWindow";



const SearchArea = ({ backendData, query, setQuery, monNames, monImg, monDescrip, 
        monId, setMonNames, setMonImg, setMonDescrip, setMonId }) => {

   

   
    return(
        <div id="searchArea">
            <ResultWindow 
                monNames={monNames}
                monImg={monImg}
                monDescrip={monDescrip}
                monId={monId} 
            />
            <Search 
                backendData={backendData}
                query={query}
                setQuery={setQuery}
                setMonNames={setMonNames}
                setMonImg={setMonImg}
                setMonDescrip={setMonDescrip}
                setMonId={setMonId}     
            />
        </div>
        
    )

}

export default SearchArea;