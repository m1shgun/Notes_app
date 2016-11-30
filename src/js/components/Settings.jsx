import React from 'react';

const Settings = (props) => {

    const colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    return (
        <div className="settings">
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