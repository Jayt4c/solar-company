const Footer = () => {
  return (
    <footer className="srex-footer-one">
      <div className="container">
        <div className="row justify-content-between align-items-center srex-footer-one__top">
          <div className="col-6 col-lg-6 col-md-6">
            <img 
                  src="/images/logo-black.png" 
                  alt="Available4Sale" 
                  style={{ height: "5em", width: "auto", display: "block" }} 
                />
          </div>
          <div className="col-lg-6 col-6 col-md-6">
            <ul className="srex-footer__social_links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="srex-footer__links">
          <div className="row">
            <div data-aos="fade" className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Contact US</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__contact">
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href="tel:+2340000000000">+234800000000</a>
                        </p>
                        <p>
                          <a href="tel:+234800000000">+234800000000</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-paper-plane"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          Lagos,
                          <br />
                          Nigeria
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href="mailto:info@driller.com">info@whogetsit.com</a>
                        </p>
                        <p>
                          <a href="mailto:info.example@driller.com">info.whogetsit.com</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="200" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Useful Links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <a href="#">About US</a>
                    </li>
                    <li>
                      <a href="#">Our Service</a>
                    </li>
                    <li>
                      <a href="#">What We Do</a>
                    </li>
                    <li>
                      <a href="#">Out Team</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="400" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>More Service</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <a href="#">Accounting</a>
                    </li>
                    <li>
                      <a href="#">Risk Management</a>
                    </li>
                    <li>
                      <a href="#">Accounting</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Financial</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="600" className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Newsletter</h4>
                <div className="srex-footer__links__content">
                  <div className="srex-footer__newsletter">
                    <p>It is a long established fact that a reader will be distracted</p>
                    <div className="srex-news-letter__box__right">
                      <form className="text-center">
                        <input placeholder="Enter your email" type="text" />
                        <button type="button" className="srex-btn srex-btn--primary">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} Solarex | All Rights Reserved</p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="srex-footer__bottom__links">
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Section</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
