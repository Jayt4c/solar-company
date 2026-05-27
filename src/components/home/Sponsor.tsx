"use client";

import dynamic from "next/dynamic";
import { Settings } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Sponsor = () => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="srex-sponsor srex-section">
      <div className="container">
        <Slider {...settings} className="srex-sponsor__items ">
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-2.png" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-3.png" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-4.png" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-2.png" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-3.png" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="/images/sponsor/sponsor-4.png" alt="Envato" />
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;