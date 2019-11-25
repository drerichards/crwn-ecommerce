import React from 'react'
import PreviewItem from './preview-item/PreviewItem'
import './preview-page.scss'

const PreviewPage = ({ title, items }) => (
    <div className="preview-page">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...itemProps }) => {
                        return <PreviewItem key={id} {...itemProps} />
                    })
            }
        </div>
    </div>
)

export default PreviewPage;