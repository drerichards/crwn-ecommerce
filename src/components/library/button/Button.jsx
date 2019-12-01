import React from 'react'
import './button.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...buttonProps }) => {
    return (
        <button className={
            `${
            inverted ? 'inverted' : ''
            }
            ${
            isGoogleSignIn ? 'googleBtn' : ''
            } button`}
            {...buttonProps}>
            {children}
        </button>
    )
}

export default Button