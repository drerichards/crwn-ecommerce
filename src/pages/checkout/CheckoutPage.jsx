import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/pages/checkout-page/checkout-item/CheckoutItem'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cartSelectors'

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
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }
            <div className="cart-total">
                <span>Total: ${cartTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)