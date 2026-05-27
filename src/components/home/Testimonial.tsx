"use client";

import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="srex-testimonial-one srex-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="srex-testimonial-one__left text-left">
              <div className="srex-section__head">
                <h2 className="srex-section__head__title ">What our clients say?</h2>
              </div>

              <Slider {...settings} className="srex-testimonial-one__slider ">
                <div className="srex-testimonial-one__slider__item">
                  <img src="/images/quote.svg" alt="Quote" className="srex-testimonial-one__slider__item__quote" />
                  <p className="srex-testimonial-one__slider__item__text">&quot;Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
                  <div className="srex-testimonial-one__slider__item__author">
                    <h3>John Doe</h3>
                    <p>CEO, WindVista Solutions</p>
                  </div>
                </div>

                <div className="srex-testimonial-one__slider__item">
                  <img src="/images/quote.svg" alt="Quote" className="srex-testimonial-one__slider__item__quote" />
                  <p className="srex-testimonial-one__slider__item__text">&quot;Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
                  <div className="srex-testimonial-one__slider__item__author">
                    <h3>MH Imon</h3>
                    <p>CEO, ultraDevs</p>
                  </div>
                </div>

                <div className="srex-testimonial-one__slider__item">
                  <img src="/images/quote.svg" alt="Quote" className="srex-testimonial-one__slider__item__quote" />
                  <p className="srex-testimonial-one__slider__item__text">&quot;Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
                  <div className="srex-testimonial-one__slider__item__author">
                    <h3>MD Arifuzzaman</h3>
                    <p>CEO, Creativilo</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="srex-testimonial-one__right">
              <img src="/images/home-one/testimonial/testimonial-right.png" alt="Testimonial" className="srex-testimonial-one__right__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;