import * as actionTypes from '../actions/actionTypes';

const initialState = {
    identify: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_AUTH:
            return {
                identify: action.payload
            }
        default:
            return state;
    }
}

export default reducer;