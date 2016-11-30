import React, { Component } from 'react';
import Settings from './Settings.jsx';

class Field extends Component {

    componentDidMount() {
        this.input.focus();
    }

    handleNoteAdd() {
        const input = this.input;
        const {onNoteAdd, color} = this.props;

        if (!/^\s*$/.test(input.value)) {

            onNoteAdd(input.value, color);
            input.value = '';
        }

        input.focus();
    };

    handleKeyPress(e) {
        const input = this.input;

        if (!/^\s*$/.test(input.value) && e.keyCode === 13) {
            const {onNoteAdd, color} = this.props;

            onNoteAdd(input.value, color);
            input.value = '';
        }

        input.focus();
    }

    handleAllDelete() {
        if (confirm('Вы уверены?')) {
            const {onAllDelete} = this.props;
            const input = this.input;

            onAllDelete();
            input.value = '';
            input.focus();
        }
    }

    render() {
        const {onColorChange} = this.props;

        return (
            <div className="field">
                <input
                    className="field__input"
                    type="text"
                    placeholder="Новая заметка..."
                    ref={ref => { this.input = ref; }}
                    onKeyDown={(e) => this.handleKeyPress(e)}
                />
                <div className="field__clear-button" />
                <div className="field__block">
                    <Settings
                        onChangeColor={onColorChange}
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