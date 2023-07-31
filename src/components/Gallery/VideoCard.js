import { React } from 'react';

import YouTube from 'react-youtube';

export default function VideoCard(props) {
    const { videoId, entity, location} = props;

    let caption = ""
    if (entity !== undefined && location === undefined) {
        caption = `Work done for ${entity}`
    } else if (entity !== undefined && location !== undefined) {
        caption = `Work done for ${entity} in ${location}`
    }
    return(
        <>
            <YouTube videoId={videoId} />
            <p>
                <strong className="purple">
                    {caption}
                </strong>
            </p>
        </>
    );
};
