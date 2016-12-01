import {
    ADD_NOTE,
    DELETE_NOTE,
    DELETE_ALL
} from '../constants/notes';

const initialState = [];

let count = 0;

const notes = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NOTE: {
            let notes = [...state];
            notes.unshift({
                id: ++count,
                text: action.text,
                color: action.color,
                date: new Date().toLocaleString()
            });

            return [...notes]
        }

        case DELETE_NOTE: {
            const notes = state.filter(note => note.id !== action.id);
            if (notes.length === 0) {
                count = 0
            }

            return [...notes];
        }

        case DELETE_ALL: {
            count = 0;
            return [];
        }

        default:
            return state;
    }
};

export default notes;