import React, { Component } from 'react'
import PreviewPage from '../../components/pages/shop-page/preview/PreviewPage'
import shopData from '../../data/shopData'

export default class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = { collections: shopData }
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({ id, ...collectionProps }) => {
                        return <PreviewPage key={id} {...collectionProps} />
                    })
                }
            </div>
        )
    }
}
