import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/" className="link">Contact</Link>
                <Link to="/sign-in" className="link">Sign In</Link>
            </div>
        </div>
    )
}

export default Header
