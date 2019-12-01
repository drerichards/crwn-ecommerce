import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsPreview from '../../components/pages/shop-page/collections/CollectionsPreview'
import CollectionPage from '../collection/CollectionPage'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shopActions'

class ShopPage extends Component {
    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collRef.onSnapshot(async snapshot => {
            const collMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collMap)
        })
    }

    render() {
        const { match } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsPreview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collMap => dispatch(updateCollections(collMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)