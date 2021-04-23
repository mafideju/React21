import { FETCH_COMMENTS, SAVE_COMMENT } from "./types";
import Axios from 'axios';

export const saveComment = (comment) => ({
    type: SAVE_COMMENT,
    payload: comment
});

export const fetchComments = () => {
    const response = Axios.get('https://jsonplaceholder.typicode.com/comments');
    
    return {
        type: FETCH_COMMENTS,
        payload: response
    };
};
