import React from 'react'

import { CustomButton } from './CustomButton'

const Button = ({children, ...props}) => {
    return (
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default Button