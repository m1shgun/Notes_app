import React, { Component } from 'react';

class NotesItem extends Component {

    componentDidMount() {
        const elem = this.text;

        if (elem.scrollHeight > 170) {
            const scroll = elem.offsetWidth - elem.clientWidth;
            elem.parentElement.style.paddingRight = `${20 - scroll}px`;
        }
    }

    render() {
        const {id, text, style, date, onNoteDelete} = this.props;

        return (
            <div className="notes-item"
                 id={id}
                 style={style}
            >
                <div className="notes-item__date">
                    <div>{date}</div>
                </div>
                <div className="notes-item__delete" onClick={() => onNoteDelete(id)}/>
                <div
                    className="notes-item__text"
                    ref={ref => { this.text = ref; }}
                >
                    {text}
                </div>
            </div>
        )
    }
}

export default NotesItem;