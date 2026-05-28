import Link from "next/link";

const Service = () => {
  return (
    <section className="srex-service srex-section">
      <div className="container">
        <div className="srex-section__head text-center">
          <h5 data-aos="fade-up" className="srex-section__head__badge ">
            <img src="/images/badge-icon.svg" alt="Badge Icon" />
            Our Services
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title ">
            Unlock the potential of the sun with solar energy!
          </h2>
        </div>
        <div className="srex-info-box">
          <div className="row">
            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-1.svg" className="srex-info-box__item__logo" alt="PowerSun Assistance" />
                  </div>
                  <h2 className="srex-info-box__item__number">01</h2>
                </div>
                <h3 className="srex-info-box__item__text">Solar Home Systems</h3>
                <div className="srex-info-box__more">
                  <Link href="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-2.svg" className="srex-info-box__item__logo" alt="PowerSun Assistance" />
                  </div>
                  <h2 className="srex-info-box__item__number">02</h2>
                </div>
                <h3 className="srex-info-box__item__text">SolarEdge Services</h3>
                <div className="srex-info-box__more">
                  <Link href="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-3.svg" className="srex-info-box__item__logo" alt="BrightSun Support" />
                  </div>
                  <h2 className="srex-info-box__item__number">03</h2>
                </div>
                <h3 className="srex-info-box__item__text">BrightSun Support</h3>
                <div className="srex-info-box__more">
                  <Link href="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-4.svg" className="srex-info-box__item__logo" alt="Sun Gust Energy" />
                  </div>
                  <h2 className="srex-info-box__item__number">04</h2>
                </div>
                <h3 className="srex-info-box__item__text">Sun Gust Energy</h3>
                <div className="srex-info-box__more">
                  <Link href="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-5.svg" className="srex-info-box__item__logo" alt="WindVista Solutions" />
                  </div>
                  <h2 className="srex-info-box__item__number">05</h2>
                </div>
                <h3 className="srex-info-box__item__text">WindVista Solutions</h3>
                <div className="srex-info-box__more">
                  <Link href="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="col-md-6 col-lg-4 col-12">
              <div className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-one/service/service-6.svg" className="srex-info-box__item__logo" alt="SolarCrest Services" />
                  </div>
                  <h2 className="srex-info-box__item__number">06</h2>
                </div>
                <h3 className="srex-info-box__item__text">SolarCrest Services</h3>
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
    </section>
  );
};

export default Service;