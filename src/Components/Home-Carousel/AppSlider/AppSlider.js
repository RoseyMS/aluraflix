import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* El componente Slider se encargará de rotar los videos. */
const AppSlider = (props) => {
  const settings = {
    dots: true,
    infinite: props.children.length >= 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <div>
      <h2
        style={{
          color: props.color,
          display: "inline-block",
          marginLeft: "1rem",
        }}
      >
        {props.title}
      </h2>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default AppSlider;
