import { combineReducers } from 'redux';
import commentsReducer from 'Reducers/commentsReducer';

export default combineReducers({
    comments: commentsReducer
});