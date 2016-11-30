import React from 'react';

const Settings = ({onColorChange}) => {

    const colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    const handleColorChange = (e) => {
        if (e.target.classList.contains('settings__color')) {
            e.target.innerHTML = '&#10003';
        }
    };

    return (
        <div className="settings" onClick={handleColorChange}>
            {colors.map((elem, i) => (
                <div
                    key={i}
                    className={`settings__color ${elem}`}
                />
            ))}
        </div>
    )
};

export default Settings;