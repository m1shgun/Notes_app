import {
    CHANGE_COLOR
} from '../constants/color';

export const changeColor = (color) => {
    return {
        type: CHANGE_COLOR,
        color
    }
};