import React from 'react';

const Search = ({notes, onSearchChange}) => {

    const handleInputChange = (e) => {
        if (e.target.value !== '') {
            onSearchChange(true);
        } else {
            onSearchChange(false);
        }
    };

    return (
        <div className="search">
            <div className="search__icon" />
            <input
                className="search__field"
                type="text" placeholder="Поиcк..."
                disabled={notes.length > 0 ? '' : 'disabled'}
                onChange={handleInputChange}
            />
        </div>
    )
};

export default Search;