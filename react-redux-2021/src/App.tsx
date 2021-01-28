import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import React from 'react';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  );
}

export default App;
