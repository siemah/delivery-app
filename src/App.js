import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from './components/pages/Register';
import LoginPage from './components/pages/Login';

import GuestRoute from './routes/GuestRoute';
import AuthRoute from './routes/AuthRoute';
// dont forget to pass a location object to GuestRoute and AuthRoute 
// to avoid weird thing happen when redux work with react-router-dom
const App = ({ location }) => {
  console.log(location);
  return (
    <>
      <Switch>
        <GuestRoute location={location} path='/register' component={RegisterPage} />
        <GuestRoute location={location} path='/login' component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
