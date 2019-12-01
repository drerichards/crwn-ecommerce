import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cartSelectors'

import CheckoutItem from '../../components/pages/checkout-page/checkout-item/CheckoutItem'
import StripeButton from '../../components/subcomponents/stripe/button/StripeButton'

import './checkout-page.scss'

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <div className="cart-total">Total: ${cartTotal}</div>
            <div className="test-warning">
                * Please use the following test credit card for payments *
                <br/>
                4242 4242 4242 4242 - Exp: 1/20 - CVV: 123
            </div>
            <StripeButton price={cartTotal} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)