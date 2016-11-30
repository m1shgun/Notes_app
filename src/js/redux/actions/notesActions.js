import {
    ADD_NOTE,
    DELETE_NOTE,
    DELETE_ALL
} from '../constants/notes';

export const addNote = (text, color) => {
    return {
        type: ADD_NOTE,
        text,
        color
    }
};

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
};

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
};