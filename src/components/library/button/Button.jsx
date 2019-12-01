import React from 'react'
import './button.scss'

import { CustomButton } from './CustomButton'

const Button = ({children, ...props}) => {
    return (
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default Button