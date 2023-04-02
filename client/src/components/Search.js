import React, { useState, useEffect } from "react";
import axios from 'axios';
import './search.css';



const Search = ({ backendData, query, setQuery }) => {

    function onChange (e){
        setQuery(e.target.value);
    }

    function onSearch (searchTerm) {
        console.log('search', searchTerm);
        setQuery(searchTerm);
    }

    return(
        <div className="search-container">
            <div className="search-inner">
            <input 
                type='text'
                icon='search'
                placeholder="Search"
                query={query}
                onChange={onChange}
            />
            <button
                id="searchBtn"
                onClick={() => onSearch(query)}
            >
                Search
            </button>
            </div>
            <div className="dropdown">
                {
                    backendData.filter(mon => {
                        const searchTerm = query;
                        const monName = mon.mon_name;
                        return searchTerm && monName.startsWith(searchTerm) && monName !== searchTerm;
                    }).slice(0, 10)
                        .map((mon) => (
                            <div 
                                className="dropdown-row"
                                onClick={() => onSearch(mon.mon_name)}
                                key={mon.id}
                            >
                                {mon.mon_name}
                            </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Search;