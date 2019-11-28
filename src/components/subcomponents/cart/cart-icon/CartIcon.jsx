import React from 'react'
import { connect } from 'react-redux'
import { toggleHideCart } from '../../../../redux/cart/cartActions'

import { ReactComponent as ShopIcon } from '../../../../assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = ({toggleHideCart}) => {
    return (
        <div className='cart-icon' onClick={toggleHideCart}>
            <ShopIcon className='shop-icon' />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHideCart: () => dispatch(toggleHideCart())
})
export default connect(null, mapDispatchToProps)(CartIcon)