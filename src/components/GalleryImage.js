import React from 'react'
import {Image} from 'react-bootstrap'
const GalleryImage = () => {
    let img = 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
    return (
        <div>
            <Image src={img} flush rounded/>
        </div>
    )
}

export default GalleryImage
