import React from 'react'
import './button.scss'

const Button = ({children, isGoogleSignIn, ...buttonProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'googleBtn' : ''} button`} {...buttonProps}>
            {children}
        </button>
    )
}

export default Button