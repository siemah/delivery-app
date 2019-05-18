import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from './components/pages/Register';
import LoginPage from './components/pages/Login';
import HomePage from './components/pages/Home';
import DashboardPage from './components/pages/Dashboard';

import GuestRoute from './routes/GuestRoute';
import AuthRoute from './routes/AuthRoute';
// dont forget to pass a location object to GuestRoute and AuthRoute 
// to avoid weird thing happen when redux work with react-router-dom
const App = ({ location }) => {
  return (
    <>
      <Switch>

        <Route exact path='/' component={HomePage} />
        
        <GuestRoute location={location} path='/register' component={RegisterPage} />
        <GuestRoute location={location} path='/login' component={LoginPage} />
        
        <AuthRoute location={location} path='/dashboard' component={DashboardPage} />

      </Switch>
    </>
  );
}

export default App;
