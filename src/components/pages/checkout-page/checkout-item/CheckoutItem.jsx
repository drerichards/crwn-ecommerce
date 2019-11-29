import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../../../../redux/cart/cartActions'

import './checkout-item.scss'

const CheckoutItem = ({ item, removeItem}) => {
    const { name, imageUrl, price, quantity } = item
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow">&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)