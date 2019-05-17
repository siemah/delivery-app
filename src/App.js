import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterPage from './components/pages/Register';
import LoginPage from './components/pages/Login';

import GuestRoute from './routes/GuestRoute';
// dont forget to pass a location object to GuestRoute and AuthRoute 
// to avoid weird thing happen when redux work with react-router-dom
const App = () => {
  return (
    <Router>
      <Switch>
        <GuestRoute path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
