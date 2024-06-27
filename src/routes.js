import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Cad from './components/Cad';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Login />
        <Route path="/cad" component={Cad} />
      </Switch>
    </Router>
  );
}

export default App;