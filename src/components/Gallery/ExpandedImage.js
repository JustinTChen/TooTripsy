import React from "react";

import '../../styles/gallery.css'

export default function ExpandedImage(props) {
    // eslint-disable-next-line react/prop-types
    const { imgSrc, imgCap} = props;
    return(
        <>
            <img src={imgSrc}/>
            <p className="image-caption">
                <strong className="purple">
                    {imgCap}
                </strong>
            </p>
        </>
    )
}