import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../../../../redux/cart/cartActions'

import Button from '../../../../library/button/Button'

import './preview-item.scss'

const PreviewItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="preview-item">
            <div className="preview-image"
                style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="preview-footer">
                <span className="name">{name}</span>
                <span className="price">$${price}</span>
            </div>
            <Button onClick={() => addItem(item)}>Add To Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(PreviewItem)