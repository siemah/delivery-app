import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterPage from './components/pages/Register';
import LoginPage from './components/pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
