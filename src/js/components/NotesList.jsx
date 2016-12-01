import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NotesItem from './NotesItem.jsx';

const NotesList = ({notes, search, onNoteDelete}) => {

    return (
        <div className="notes-list">
            <ReactCSSTransitionGroup
                transitionName="notes"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={300}
                transitionLeave={false}
            >
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
                                date={note.date}
                                onNoteDelete={onNoteDelete}
                            />
                        )
                    })
                    : <div className="notes-list__empty">{!search ? 'Пусто...' : 'Не найдено...'}</div>
            }
            </ReactCSSTransitionGroup>
        </div>
    )
};

export default NotesList;