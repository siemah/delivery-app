import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import mainReducers from './store/reducers/index'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import userApi from './utils/data/user'

const store = createStore(
  combineReducers(mainReducers),
  compose(
    applyMiddleware(
      reduxThunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = document.getElementById('root');

ReactDOM.render(<h1>Splash</h1>, root);
userApi.authObserver(user => {
  if( user ) {
    let { uid, displayName, email, photoURL, emailVerified, refreshToken } = user;
    store.dispatch({ 
      type: 'POST_FULLFILED_LOGIN', 
      payload: { uid, displayName, email, photoURL, emailVerified, refreshToken } 
    });
  }
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>,
    root
  );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
