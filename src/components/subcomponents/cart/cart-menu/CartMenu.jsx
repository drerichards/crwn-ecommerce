import React from 'react'
import Button from '../../../library/button/Button'
import './cart-menu.scss'

const CartMenu = () => {
    return (
        <div className='cart-menu'>
            <div className="cart-items"></div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartMenu