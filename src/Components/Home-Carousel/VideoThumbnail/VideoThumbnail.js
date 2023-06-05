import React from 'react';

const VideoThumbnail = ({ videoId }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div>
            <img src={thumbnailUrl} alt="Miniatura del video de YouTube" />
        </div>
    );
};

export default VideoThumbnail;
