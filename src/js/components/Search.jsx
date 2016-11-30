import React from 'react';

const Search = (props) => {

    return (
        <div className="search">
            <div className="search__icon" />
            <input
                className="search__field"
                type="text" placeholder="Поиcк..."
                disabled="disabled"
            />
        </div>
    )
};

export default Search;