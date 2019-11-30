import React from 'react'
import CollectionsPage from '../../components/pages/shop-page/collections/CollectionsPreview'

export const ShopPage = ({ collections }) => {
    return (
        <div className="shop-page">
            <CollectionsPage />
        </div>
    )
}

export default ShopPage