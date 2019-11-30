import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shopSelectors'

import PreviewPage from '../../components/pages/shop-page/preview/PreviewPage'

export const ShopPage = ({ collections }) => {
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...collectionProps }) => {
                    return <PreviewPage key={id} {...collectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)