import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../../../redux/cart/cartSelectors'

import CartItem from '../cart-item/CartItem'
import Button from '../../../library/button/Button'
import './cart-menu.scss'

const CartMenu = ({cartItems, history}) => {
    return (
        <div className='cart-menu'>
            <div className={
                cartItems.length
                ? 'cart-items'
                : 'cart-items empty-menu'}>
                {
                    cartItems.length
                    ? cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : <h4>Add Items to Your Cart</h4>
                }
            </div>
            <Button onClick={() => history.push('/checkout')}>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartMenu))