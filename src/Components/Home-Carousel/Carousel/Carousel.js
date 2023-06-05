import React from 'react';
import AppSlider from "../AppSlider/AppSlider"
import VideoCard from "../VideoCard/VideoCard"
import videosData from "../../../Data/videos.json"
const Carousel = ({ category, videos }) => {
    // Filtrar los videos por categoría
    //const filteredVideos = videosData.videos.filter((video) => video.category === category);
    console.log(videos)
    if (videos.length == 0) {
        return <></>
    }
    return (
        <>
            <AppSlider title={category.title}>
                {videos.map((video) => (
                    <VideoCard
                        key={`video${video.id}`}
                        id={video.id}
                        thumbnail={video.imgLink}
                        url={video.videoLink} />
                ))}
            </AppSlider>
        </>
    );
};

export default Carousel;
