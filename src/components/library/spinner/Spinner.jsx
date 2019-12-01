import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const Spinner = WrappedComponent => ({ isLoading, ...spinnerProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...spinnerProps} />
        )
}

export default Spinner