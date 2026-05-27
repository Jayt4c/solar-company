interface PricingProps {
  classes?: string;
}

const Pricing = ({ classes = "" }: PricingProps) => {
  return (
    <section className={`srex-pricing srex-section ${classes}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-section__head srex-section__head--mw ">
              <h5 data-aos="fade-up" className="srex-section__head__badge">
                Our Pricing
              </h5>
              <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
                Simplifying technology one byte at a time
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="srex-pricing-items">
              <div data-aos="fade" className="srex-pricing-items__item ">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <h3>Ultra</h3>
                    <h2>
                      ₦19,000
                      <p>/mo</p>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                    <button type="button" className="srex-btn srex-btn--white">
                      Choose Plan <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div data-aos="fade" className="srex-pricing-items__item ">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <h3>Premium</h3>
                    <h2>
                      ₦29,000
                      <p>/mo</p>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                    <button type="button" className="srex-btn srex-btn--white">
                      Choose Plan <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div data-aos="fade" className="srex-pricing-items__item ">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <h3>Standard</h3>
                    <h2>
                      ₦49,000
                      <p>/mo</p>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                    <button type="button" className="srex-btn srex-btn--white">
                      Choose Plan <i className="fa-solid fa-arrow-right"></i>
                    </button>
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

export default Pricing;