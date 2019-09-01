import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Home from './src/Screens/Home';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './src/Redux';
import mySaga from './src/Redux/Sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
