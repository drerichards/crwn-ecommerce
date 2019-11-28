import React, { Component } from 'react'
import './sign-up.scss'

import FormInput from '../../../library/form-input/FormInput'
import Button from '../../../library/button/Button'

import {auth, createUserProfile} from '../../../../firebase/firebase.utils'

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, {displayName})
            this.setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            alert(error.message)
        }
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and passsword</span>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        autoFocus={false}
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                    />
                    <div className="button-group">
                        <Button type="submit">Sign Up</Button>
                        {
                            // <Button onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</Button>
                        }
                    </div>
                </form>
            </div>
        )
    }
}
