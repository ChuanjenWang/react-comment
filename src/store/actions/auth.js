import * as actionTypes from '../actions/actionTypes';

export const changeAuth = (isLoggedIn) => {
    return {
        type: actionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
}