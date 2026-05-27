const AboutUsTwo = () => {
  return (
    <section className="srex-section-bottom srex-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__left ">
              <img src="/images/about-us/Shape.png" alt="Shape" />
              <img className="srex-section-bottom__left__img" src="/images/about-us/about-us-bottom.png" alt="about-us-bottom-img" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__right">
              <div className="mb-5">
                <h3 data-aos="fade-up" className="srex-section-bottom__right__title ">
                  Sun-Powered Solutions for a Sustainable Future
                </h3>
                <p data-aos="fade-up" data-aos-delay="200" className="srex-section-bottom__right__desc ">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habita
                </p>
              </div>
              <div className="srex-icon-list srex-icon-list--multi-text">
                <ul>
                  <li data-aos="fade-up" data-aos-delay="350ms" className="">
                    <i className="fa-solid fa-chevron-right"></i>
                    <div>
                      <h3>Sunshine Energy</h3>
                      <p>Lorem ipsum dolor consectetur notte massa sapien samet. Aucibus sed sem non, mattis</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500ms" className="">
                    <i className="fa-solid fa-chevron-right"></i>
                    <div>
                      <h3>Sunshine Energy</h3>
                      <p>Lorem ipsum dolor consectetur notte massa sapien samet. Aucibus sed sem non, mattis</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
