import React from 'react'
import {v4 as uuid} from 'uuid'

function GifList({gifUrls}){

    const gifImages = gifUrls.map(gifUrl => <img key={uuid()} src={gifUrl} alt="gif"/>)

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {gifImages}
        </div>
    )
}

export default GifList