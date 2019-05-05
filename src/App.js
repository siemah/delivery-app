import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
