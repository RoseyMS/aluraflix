import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
const AppSlider = (props) => {
  const sliderRef = useRef();

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const settings = {
    dots: true,
    infinite: props.children.length >= 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
  };
  const mobileSettings = {
    ...settings,
    autoplay: false,
    slidesToShow: 1,
  };
  return (
    <div>
      <div
        className="app-slider-buttons-container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handlePrevSlide}
        >
          <span style={{ fontSize: "18px", color: props.color }}>{"<"}</span>
        </button>
        <h2
          style={{
            color: props.color,
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {props.title}
        </h2>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleNextSlide}
        >
          <span style={{ fontSize: "18px", color: props.color }}>{">"}</span>
        </button>
      </div>

      <Slider
        ref={sliderRef}
        {...(window.innerWidth <= 600 ? mobileSettings : settings)}
      >
        {props.children}
      </Slider>
    </div>
  );
};

export default AppSlider;
