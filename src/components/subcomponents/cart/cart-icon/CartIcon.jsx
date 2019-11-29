import React from 'react'
import { connect } from 'react-redux'
import { toggleHideCart } from '../../../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../../../redux/cart/cartSelectors'

import { ReactComponent as ShopIcon } from '../../../../assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = ({toggleHideCart, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleHideCart}>
            <ShopIcon className='shop-icon' />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleHideCart: () => dispatch(toggleHideCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)