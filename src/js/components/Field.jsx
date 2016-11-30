import React from 'react';
import Settings from './Settings.jsx';

const Field = (props) => {

    return (
        <div className="field">
            <input
                className="field__input"
                type="text"
                placeholder="Новая заметка..."
            />
            <div className="field__clear-button" />
            <div className="field__block">
                <Settings />
                <div className="field__buttons">
                    <button className="field__button">Удалить все</button>
                    <button className="field__button">Добавить</button>
                </div>
            </div>
        </div>
    )
};

export default Field;