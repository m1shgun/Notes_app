import { combineReducers } from 'redux'
import notes from './notes';
import color from './color';

export default combineReducers({
    notes,
    color
})