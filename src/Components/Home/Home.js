
import React, { useContext } from "react";
import "./Home.css"
import Banner from "../Banner/Banner"
import Carousel from "../Home-Carousel/Carousel/Carousel"
import { CategoryContext, VideoContext } from "../../App"

const Home = (props) => {

    const { videos } = useContext(VideoContext);
    const { categories } = useContext(CategoryContext)

    return <>
        <Banner />
        {
            categories.map((category, index) =>
                <Carousel
                    key={`carousel${index}`}
                    category={category}
                    videos={videos.filter((video) => video.category === category.title)}
                />)
        }
    </>
}

export default Home
