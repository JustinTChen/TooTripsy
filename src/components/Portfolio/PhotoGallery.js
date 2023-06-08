import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';

import ExpandedImage from './ExpandedImage';
import { IMAGES } from '../../constants'

import '../../styles/gallery.css'

export default function PhotoGallery() {
    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const [tempImgCap, setTempImgCap] = useState('')

    const getImg = (imgSrc, imgCap) => {
        setTempImgSrc(imgSrc)
        setTempImgCap(imgCap)
        setModel(true)
    }
    return(
        <>
            <div className={model? 'model open': 'model'}>
                <ExpandedImage imgSrc={tempImgSrc} imgCap={tempImgCap}/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div> 
            <div className='gallery'>
                {IMAGES.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.src, item.caption)}>
                            <img src={item.src} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}