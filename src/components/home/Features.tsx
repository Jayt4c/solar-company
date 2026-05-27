import Link from "next/link";

const Features = () => {
  return (
    <section className="srex-features srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-features__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Our Features
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Harness the power of the sun with solar energy!
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mb-5  ">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus
                </p>
                <Link data-aos="fade-up" data-aos-delay="500" href="/about-us" className="srex-btn srex-btn--outline ">
                  Read More <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-info-box srex-info-box--feature-box">
              <div className="row">
                <div data-aos="fade-up" data-aos-delay="600" className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-one/features/features-1.svg" className="srex-info-box__item__logo" alt="GreenSun Support" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">GreenSun Support</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet cut co sect. Proin viverra</p>
                    <div className="srex-info-box__more">
                      <Link href="/service-details">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-one/features/features-2.svg" className="srex-info-box__item__logo" alt="BrightSun Support" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">BrightSun Support</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet cut co sect. Proin viverra</p>
                    <div className="srex-info-box__more">
                      <Link href="/service-details">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-one/features/features-3.svg" className="srex-info-box__item__logo" alt="SolarPro Solutions" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">SolarPro Solutions</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet cut co sect. Proin viverra</p>
                    <div className="srex-info-box__more">
                      <Link href="/service-details">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-one/features/features-4.svg" className="srex-info-box__item__logo" alt="EcoSolar Services" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">EcoSolar Services</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet cut co sect. Proin viverra</p>
                    <div className="srex-info-box__more">
                      <Link href="/service-details">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;