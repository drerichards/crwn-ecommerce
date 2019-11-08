import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Homepage from './components/pages/home/Homepage';
import ShopPage from './components/pages/shop/ShopPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
