import React from 'react';

const NotesItem = ({id, text, style, date, onNoteDelete}) => {

    return (
        <div className="notes-item"
             id={id}
             style={style}
        >
            <div className="notes-item__date">
                <div>
                    {date.slice(0, date.indexOf(','))}
                    {date.slice(date.indexOf(',') + 1)}
                </div>
            </div>
            <div className="notes-item__delete" onClick={() => onNoteDelete(id)} />
            <div className="notes-item__text">{text}</div>
        </div>
    );
};

export default NotesItem;