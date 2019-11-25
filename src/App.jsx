import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import AuthenticationPage from './components/pages/authentication/AuthenticationPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
