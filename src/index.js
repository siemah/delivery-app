import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import mainReducers from './store/reducers/index'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Splash from './components/widgets/Splash';
import App from './App';
import MainMenu from './components/uis/MainMenu';
import * as serviceWorker from './serviceWorker';

import userApi from './utils/data/user'

import './assets/css/shared.css';

const store = createStore(
  combineReducers(mainReducers),
  compose(
    applyMiddleware(
      reduxThunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

/**
 * @name MainApp
 * display a splash screen when trying to check
 * if user has been logged in or nope 
 * @return React.Component Splash or whole app
 */
const MainApp = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    userApi.authObserver(user => {
      if( user ) {
        let { uid, displayName, email, photoURL, emailVerified, refreshToken } = user;
        store.dispatch({ 
          type: 'POST_FULLFILED_LOGIN', 
          payload: { uid, displayName, email, photoURL, emailVerified, refreshToken } 
        });
      }
      setLoading(true);
    });
  }, [loading]);

  if (!loading) return <Splash />
  else return (
    <Provider store={store}>
      <Router>
        <MainMenu />
        <Route component={App} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<MainApp />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
