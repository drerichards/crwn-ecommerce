import React from 'react'
import {connect} from 'react-redux'
import { selectCartItems } from '../../../../redux/cart/cartSelectors'

import CartItem from '../cart-item/CartItem'
import Button from '../../../library/button/Button'
import './cart-menu.scss'

const CartMenu = ({cartItems}) => {
    return (
        <div className='cart-menu'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartMenu)