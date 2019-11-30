import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsPreview from '../../components/pages/shop-page/collections/CollectionsPreview'
import CollectionPage from '../collection/CollectionPage'

export const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsPreview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage