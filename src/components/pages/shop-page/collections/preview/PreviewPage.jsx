import React from 'react'
import PreviewItem from './preview-item/PreviewItem'
import './preview-page.scss'

const PreviewPage = (props) => {
    console.log(props)
    return (<div className="preview-page">
        <div className="preview">
            {
                // items
                //     .filter((item, idx) => idx < 4)
                //     .map(item => (
                //         <PreviewItem key={item.id} item={item} />
                //     )
                // )
            }
        </div>
    </div>)
}

export default PreviewPage;