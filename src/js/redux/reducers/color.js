import {
    CHANGE_COLOR
} from '../constants/color';

const initialState = 'rgb(255, 255, 141)';

const color = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_COLOR: {
            return action.color
        }

        default:
            return state;
    }
};

export default color;