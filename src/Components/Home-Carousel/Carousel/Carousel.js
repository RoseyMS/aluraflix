import React from "react";
import AppSlider from "../AppSlider/AppSlider";
import VideoCard from "../VideoCard/VideoCard";
const Carousel = ({ category, videos }) => {
  if (videos.length === 0) {
    return <></>;
  }

  return (
    <div>
      <AppSlider title={category.title} color={category.color}>
        {videos.map((video) => (
          <VideoCard
            key={`video${video.id}`}
            id={video.id}
            imgLink={video.imgLink}
            videoLink={video.videoLink}
          />
        ))}
      </AppSlider>
    </div>
  );
};

export default Carousel;
