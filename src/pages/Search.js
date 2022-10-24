import React, { useState } from 'react';
import SampleToolsData from './SampleToolsData';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [toolsData] = useState(SampleToolsData);
    const [allTools, setAllTools] = useState([]);
    const handleChange = (e) => {
        try {
            setSearchValue(e.target.value);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    };

    const handleSearch = (e) => {
        try {
            e.preventDefault();
            if (!(searchValue == '')) {
                const filteredTools = toolsData.filter(
                    (tool) => tool.name.toLowerCase().includes(
                        searchValue.toLowerCase(),
                    ),
                );
                setAllTools(filteredTools);        

            }
            else{
                setAllTools([])
            }
            
            
            console.log(filteredTools); //eslint-disable-line
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    };

    const handleReset = () => {
        try {
            setAllTools([]);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    };

    const renderSearchResults = allTools.map((tool) => (
        <div className="search--results--container" key={tool.id}>
            <div className="search--results--title">
                <h3>{tool.name}</h3>
            </div>
            <div className="search--results--description">
                <p>{tool.description}</p>
            </div>
        </div>
    ));

    return (
        <>
            <div className="search-field">


                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search for a tool"
                        onChange={handleChange}

                    />
                    <div className="button-container">
                        <button className="" onClick={handleSearch} type="button">
                            Search
                        </button>
                        <button className="" onClick={handleReset} type="button">
                            Reset
                        </button>
                    </div>
                </div>
               {renderSearchResults} 
            </div>
        </>
    );
};

export default Search;