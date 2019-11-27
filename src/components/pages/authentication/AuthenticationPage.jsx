import React from 'react'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'

import './authentication-page.scss'

const AuthenticationPage = () => {
    return (
        <div className="auth-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthenticationPage
