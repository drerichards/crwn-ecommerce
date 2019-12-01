import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/subcomponents/header/Header'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import AuthPage from './pages/auth/AuthPage'
import './App.css'

import { auth, createUserProfile, addCollAndDocs } from './firebase/firebase.utils'

import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'
import { selectCollectionsForPreview } from './redux/shop/shopSelectors'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collArr } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      addCollAndDocs('collections', collArr.map(({ title, items }) => ({ title, items })))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/sign-in'
            render={() => this.props.currentUser
              ? (<Redirect to='/' />)
              : (<AuthPage />)
            }
          />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collArr: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
