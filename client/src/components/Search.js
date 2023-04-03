import React, { useState } from "react";
import axios from 'axios';
import './search.css';


const Search = ({ backendData, query, setQuery, handleQuery }) => {

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSearch = (searchTerm) => {
        setQuery(searchTerm);
        //console.log('search', searchTerm);
        
        const creature = backendData.find(mon => mon.mon_name === searchTerm);
        
        if (creature) {
            handleQuery(creature);
            
        }

    }
    
    return(
        <div className="search-container">
            <div className="search-inner">
                <input 
                    type="text"
                    value={query}
                    placeholder='Search here...'
                    onChange={onChange}
                />
                <button
                    id="searchBtn"
                    onClick={() => onSearch(query)}
                >
                    Search
                </button>
            </div>
            <div
                className="dropdown"
            >
                {
                    backendData.filter(
                       mon => {
                        const searchTerm = query;
                        const monName = mon.mon_name;

                        return searchTerm && monName.startsWith(searchTerm) && monName !== searchTerm; 
                       } 
                    ).slice(
                        0, 10
                    ).map((mon) => (
                        <div
                            onClick={() => onSearch(mon.mon_name)}
                            key={mon.id}    
                            className="dropdown-row"
                        >
                            {mon.mon_name}
                        </div>
                ))}
            </div>
        </div>
    )
    
}

export default Search;