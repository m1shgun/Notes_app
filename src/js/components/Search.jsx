import React from 'react';

const Search = ({notes, search, onSearchChange, onNotesSearch}) => {

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (value !== '') {
            onSearchChange(true);
            onNotesSearch(value);
        } else {
            onSearchChange(false);
        }
    };

    return (
        <div className="search">
            <input
                className="search__field"
                type="text" placeholder="Поиcк..."
                disabled={notes.length > 0 || search ? '' : 'disabled'}
                onChange={handleInputChange}
            />
            <div className="search__icon" />
        </div>
    )
};

export default Search;