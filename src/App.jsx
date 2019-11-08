import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/pages/shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
