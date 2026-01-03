import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

function CarouselComponent() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="border border-red-500">
          <h3>1</h3>
        </div>
        <div className="border border-red-500">
          <h3>2</h3>
        </div>
        <div className="border border-red-500">
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
