import {
    ADD_NOTE,
    DELETE_NOTE,
    DELETE_ALL
} from '../constants/notes';

export const addNote = () => {
    return {
        type: ADD_NOTE
    }
};

export const deleteNote = () => {
    return {
        type: DELETE_NOTE
    }
};

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
};