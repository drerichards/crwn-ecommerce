import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsPreview from '../../components/pages/shop-page/collections/CollectionsPreview'
import CollectionPage from '../collection/CollectionPage'
import Spinner from '../../components/library/spinner/Spinner'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shopActions'


const CollectionsPreviewSpinner = Spinner(CollectionsPreview)
const CollectionPageSpinner = Spinner(CollectionPage)

class ShopPage extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state

        return (
            <div className="shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={(props) =>
                        <CollectionsPreviewSpinner isLoading={loading} {...props} />
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) =>
                        <CollectionPageSpinner isLoading={loading} {...props} />
                    }
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collMap => dispatch(updateCollections(collMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)