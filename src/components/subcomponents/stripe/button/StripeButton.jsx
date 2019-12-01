import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { PUBLISHABLE_KEY } from '../../../../keys'

const StripeButton = ({ price }) => {
    const stripePrice = price * 100
    const publishableKey = PUBLISHABLE_KEY

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is: $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton