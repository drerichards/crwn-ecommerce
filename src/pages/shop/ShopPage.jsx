import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'

import PreviewPage from '../../components/pages/shop-page/preview/PreviewPage'

export const ShopPage = ({ sections }) => {
    return (
        <div className="shop-page">
            {
                sections.map(({ id, ...sectionProps }) => {
                    return <PreviewPage key={id} {...sectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(ShopPage)