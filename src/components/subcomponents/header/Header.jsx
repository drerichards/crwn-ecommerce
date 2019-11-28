import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { ReactComponent as Logo } from '../../../assets/crown.svg'
import CartIcon from '../cart/cart-icon/CartIcon'
import CartMenu from '../cart/cart-menu/CartMenu'
import './header.scss'

import {auth} from '../../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/" className="link">Contact</Link>
                {
                    currentUser ?
                    <div className='option link' onClick={() => auth.signOut()}>Sign Out: <strong>{currentUser.displayName}</strong></div> :
                    <Link to="/sign-in" className="option link">Sign In</Link>
                }
                <CartIcon />
            </div>
            {
                !hidden ?
                    <CartMenu /> :
                    null
            }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)
