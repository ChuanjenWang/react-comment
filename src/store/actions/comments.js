import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export const saveComment = (comment) => {
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const response = axios.get('');

    return {
        type: actionTypes.SAVE_COMMENT,
        payload: response
    }
}

export const changeAuth = (isLoggedIn) => {
    return {
        type: actionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
}