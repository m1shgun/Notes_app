import {
    ACTION_ONE,
    ACTION_TWO
} from '../constants/actions';

const initialState = 0;

const sample = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ONE: {
            return state + 1;
        }
        case ACTION_TWO: {
            return 0;
        }
        default:
            return state;
    }

};

export default sample;