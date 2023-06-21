import React, { useContext, useEffect } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Carousel from "../Home-Carousel/Carousel/Carousel";
import { CategoryContext, VideoContext } from "../../App";

const Home = ({ fetchVideos }) => {
  const { videos } = useContext(VideoContext);
  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Banner />
      {categories.map((category, index) => (
        <Carousel
          key={`carousel${index}`}
          category={category}
          videos={videos.filter((video) => video.category === category.title)}
        />
      ))}
    </div>
  );
};

export default Home;
