import React from "react";


const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Search notes">
            </input>
        </div>
    )
}


export default SearchPanel;