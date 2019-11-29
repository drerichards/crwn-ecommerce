import React from 'react'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../../../redux/cart/cartSelectors'

import CartItem from '../cart-item/CartItem'
import Button from '../../../library/button/Button'
import './cart-menu.scss'

const CartMenu = ({cartItems}) => {
    return (
        <div className='cart-menu'>
            <div className={
                cartItems.length === 0
                ? 'cart-items empty-menu'
                : 'cart-items'}>
                {
                    cartItems.length === 0
                    ? <h4>Add Items to Your Cart</h4>
                    : cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartMenu)