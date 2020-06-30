import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompeage.componet';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route component={HomePage} path='/' exact />
      </Switch>
    </div>
  );
}
export default App;
