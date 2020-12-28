import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'Reducers';

export default ({ children, initialState }) => (
    <Provider store={createStore(reducers, initialState)}>
        { children }
    </Provider>  
);