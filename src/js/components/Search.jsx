import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClear: false
        }
    }

    handleInputChange(e) {
        const {onSearchChange, onNotesSearch} = this.props;
        const value = e.target.value;

        if (value !== '') {
            onSearchChange(true);
            onNotesSearch(value);
            this._setShowClear(true);
        } else {
            onSearchChange(false);
            this._setShowClear(false);
        }
    };

    handleInputClear() {
        const {onSearchChange } = this.props;

        this.input.focus();
        onSearchChange(false);
        this.input.value = '';
        this._setShowClear(false);
    }

    _setShowClear(value) {
        this.setState({
            showClear: value
        })
    }

    render() {
        const {notes, search} = this.props;
        const {showClear} = this.state;

        return (
            <div className="search">
                <input
                    className="search__field"
                    type="text" placeholder="Поиcк..."
                    disabled={notes.length > 0 || search ? '' : 'disabled'}
                    onChange={::this.handleInputChange}
                    ref={ref => {this.input = ref;}}
                />
                <div className="search__icon"/>
                <div
                    className={`search__clear-button ${showClear ? 'show' : ''}`}
                    onClick={::this.handleInputClear}
                />
            </div>
        )
    }
}

export default Search;