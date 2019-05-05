import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import mainReducers from './store/reducers/index'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Register from './components/pages/Register';

const store = createStore(
  combineReducers(mainReducers),  
  compose(
    applyMiddleware(
      reduxThunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
