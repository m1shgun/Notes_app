import React from 'react';
import NotesItem from './NotesItem.jsx';

const NotesList = ({notes, onNoteDelete}) => {

    return (
        <div className="notes-list">
            {
                notes.length
                    ? notes.map((note) => {
                        const style={backgroundColor: note.color};
                        return (
                            <NotesItem
                                key={note.id}
                                id={note.id}
                                text={note.text}
                                style={style}
                                onNoteDelete={onNoteDelete}
                            />
                        )
                    })
                    : <div className="notes-list__empty">Нет заметок...</div>
            }
        </div>
    )
};

export default NotesList;