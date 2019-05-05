import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import mainReducers from './store/reducers/index'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  combineReducers(mainReducers),
  compose(
    applyMiddleware(
      reduxThunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
