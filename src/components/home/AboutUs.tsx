import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="srex-about-us-one srex-section">
      <div className="srex-about-us-one__container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="srex-about-us-one__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  About US
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="100" className="srex-section__head__title ">
                  Embrace the power the sun with solar energy!
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="srex-section__head__desc ">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit. In hac habi
                </p>

                <div className="srex-icon-list ">
                  <ul data-aos="fade-up" data-aos-delay="400">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Redefining Energy with Solar Technology</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Unleash the Power of the Sun</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Solar Solutions for a Brighter Tomorrow</p>
                    </li>
                  </ul>
                </div>

                {/* Changed "to" attribute to "href" for Next.js */}
                <Link data-aos="fade-up" data-aos-delay="500" href="/about-us" className="srex-btn srex-btn--outline ">
                  Read More <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-0">
            <div data-aos="fade-up" data-aos-delay="600" className="srex-about-us-one__right">
              <img src="/images/about-us/about-us.png" alt="About Us" className="srex-about-us-one__right__img " />
              <div>
                <div className="srex-about-us-one__right__box d-flex gap-3 ">
                  <img src="/images/about-us/medal.png" alt="Medal" />
                  <div className="srex-about-us-one__right__box__text">
                    <h2>15+</h2>
                    <p>Years of experience</p>
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

export default AboutUs;