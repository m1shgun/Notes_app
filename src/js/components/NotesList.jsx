import React from 'react';
import NotesItem from './NotesItem.jsx';

const NotesList = (props) => {

    const notes = [
        {
            id: 1,
            text: 'Привет, Мама!',
            color: 'rgb(207, 216, 220)'
        },
        {
            id: 2,
            text: 'Пока, Папа!',
            color: 'rgb(255, 138, 128)'
        },
        {
            id: 3,
            text: 'Пока, Папа!',
            color: 'rgb(255, 209, 128)'
        },
        {
            id: 4,
            text: 'Пока, Папа!',
            color: 'rgb(255, 255, 141)'
        },
        {
            id: 5,
            text: 'Пока, Папа!',
            color: 'rgb(167, 255, 235)'
        }
    ];

    return (
        <div className="notes-list">
            {
                notes.length
                    ? notes.map((item,i) => {
                        const style={backgroundColor: item.color};
                        return (
                            <NotesItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                style={style}
                            />
                        )
                    })
                    : <div>Нет заметок</div>
            }
        </div>
    )
};

export default NotesList;