import React from 'react'
import SignIn from '../../components/pages/auth-page/signin/SignIn'
import SignUp from '../../components/pages/auth-page/signup/SignUp'

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
