import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'

import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
                    <div className='option link' onClick={() => auth.signOut()}>Sign Out</div> :
                    <Link to="/sign-in" className="option link">Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Header
