
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videosData from "../../../Data/videos.json"
/* El componente Slider se encargará de rotar los videos. */
const AppSlider = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (
    <div>
      <h2>{props.title}</h2>
      <Slider {...settings}>
        {videosData.videos.map((video) => (
          <div key={video.id}>
            <iframe
              title={`Video ${video.id}`}
              width="560"
              height="315"
              src={video.url.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default AppSlider