import React, { Component } from 'react'
import './sign-in.scss'

import {signInWithGoogle} from '../../../../firebase/firebase.utils'
import FormInput from '../../../subcomponents/form-input/FormInput'
import Button from '../../../subcomponents/button/Button'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle}>Google Sign In</Button>
                </form>
            </div>
        )
    }
}
