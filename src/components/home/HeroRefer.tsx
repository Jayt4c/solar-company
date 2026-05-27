"use client";

const HeroRefer = () => {
  return (
    <section className="srex-hero-one">
      <div className="container">
        <div className="row">

          {/* LEFT TEXT */}
          <div className="col-lg-8 col-12">
            <div className="srex-hero-one__box">

              <h1 className="srex-hero-one__box__text">
                <span className="srex-hero-one__box__text__top d-flex align-items-center gap-3 justify-content-between">
                  Refer & Earn
                  <span className="srex-hero-one__box__text__top__line"></span>
                </span>

                Solar Rewards <br />
                for <span>Every Referral</span>
              </h1>

              <p className="srex-hero-one__box__desc">
                Invite friends to switch to clean solar energy and earn rewards when they install.
                Help others save money while you benefit too.
              </p>

              <div className="d-flex gap-3">
                <a href="/about-us" className="srex-btn srex-btn--primary">
                  About Us
                </a>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-between ">
              <div className="srex-hero-one__left__enery__efficient">
                <p>Become</p>
                <h2>OUR AGENT</h2>
              </div>
              <div className="srex-hero-one__left__img">
                <img src="/images/home-one/hero-img-1.png" alt="Solar Panel" />
              </div>
            </div>
          </div>

          {/* right frame */}
          <div className="col-lg-4 col-12">
            <div className="srex-hero-one__right">
              <img
                src="/images/solarrefer.png"
                alt="Refer and Earn"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroRefer;