"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./Hero";
import HeroRefer from "./HeroRefer";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <Hero />
      </div>

      <div>
        <HeroRefer />
      </div>
    </Slider>
  );
};

export default HeroSlider;