import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reduxPromise from 'redux-promise';

import reducers from './store/reducers/index';
import stateVaildator from './middlewares/stateVaildator';

export default (props) => {
    const store = createStore(
        reducers,
        applyMiddleware(reduxPromise, stateVaildator)
    );

    return <Provider store={store}>{props.children}</Provider>
};