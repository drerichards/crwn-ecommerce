import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections, selectCollectionsForPreview } from '../../../../redux/shop/shopSelectors'

import PreviewPage from './preview/PreviewPage'
import './collections-preview.scss'

const CollectionsPreview = ({ collections }) => {
    return (
        <div className='collections-preview'>
            {
                collections.map(({ id, ...collectionProps }) => {
                    return <PreviewPage key={id} {...collectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsPreview)