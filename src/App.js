import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'components/Home';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
