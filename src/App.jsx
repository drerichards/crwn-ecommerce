import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import AuthenticationPage from './components/pages/authentication/AuthenticationPage';
import './App.css';

import {auth, createUserProfile} from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({currentUser: user})
      createUserProfile(user)
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render (){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
