import React from 'react';
import './App.css';
import MainPage from './pages/main/MainPage';
import { Switch, Route } from 'react-router';

const App: React.SFC = () => {
  return (
    <>
      <Switch>
       <Route path="/" component={MainPage} exact />
      </Switch>
    </>
  );
}
export default App;
