import React, { Component } from 'react';
import Settings from './Settings.jsx';

class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClear: false
        }
    }

    componentDidMount() {
        this._inputFocus();
    }

    componentDidUpdate() {
        this._inputFocus();
    }

    handleNoteAdd() {
        const input = this.input;
        const {onNoteAdd, color} = this.props;

        if (!/^\s*$/.test(input.value)) {

            onNoteAdd(input.value, color);
            input.value = '';
            this._setShowClear(false);
        }

        input.focus();
    };

    handleKeyPress(e) {
        const input = this.input;

        if (!/^\s*$/.test(input.value) && (e.keyCode || e.which) === 13) {
            const {onNoteAdd, color} = this.props;

            onNoteAdd(input.value, color);
            input.value = '';
            this._setShowClear(false);
        }

        input.focus();
    }

    handleAllDelete() {
        if (confirm('Вы уверены?')) {
            const {onAllDelete} = this.props;
            const input = this.input;

            onAllDelete();
            input.focus();
        }
    }

    handleValueCheck(e) {
        if (e.target.value !== '') {
            this._setShowClear(true);
        } else {
            this._setShowClear(false);
        }
    }

    handleInputClear() {
        this.input.value = '';
        this._setShowClear(false);
        this.input.focus();
    }

    _setShowClear(value) {
        this.setState({
            showClear: value
        })
    }

    _inputFocus() {
        const {notes} = this.props;
        if (notes.length === 0) {
            this.input.focus();
        }
    }

    render() {
        const {onColorChange, color, mobile} = this.props;
        const {showClear} = this.state;

        return (

            <div className="field">
                <input
                    className="field__input"
                    type="text"
                    placeholder="Новая заметка..."
                    ref={ref => { this.input = ref; }}
                    onKeyDown={::this.handleKeyPress}
                    onChange={::this.handleValueCheck}
                />
                <div
                    className={`field__clear-button ${showClear ? 'show' : ''} ${mobile ? 'mobile' : ''}`}
                    onClick={::this.handleInputClear}
                />
                <div className="field__block">
                    <Settings
                        onColorChange={onColorChange}
                        color={color}
                        mobile={mobile}
                    />
                    <div className="field__buttons">
                        <button className="field__button" onClick={() => this.handleAllDelete()}>Удалить все</button>
                        <button className="field__button" onClick={() => this.handleNoteAdd()}>Добавить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Field;