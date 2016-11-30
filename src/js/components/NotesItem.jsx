import React from 'react';

const NotesItem = ({id, text, style}) => {

    return (
        <div className="notes-item"
             id={id}
             style={style}
        >
            <div className="notes-item__date">
                {/* <div>Дата: {item.date.slice(0, item.date.indexOf(','))} {item.date.slice(item.date.indexOf(',') + 1)}</div>*/}
            </div>
            <div className="notes-item__delete"/>
            <div className="notes-item__text">{text}</div>
        </div>
    );
}

export default NotesItem;