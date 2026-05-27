const Newsletter = () => {
  return (
    <section className="srex-news-letter srex-section">
      <div className="container">
        <div className="srex-news-letter__box ">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__left">
                <img src="/images/home-one/letter/news-letter-icon.svg" className="srex-info-box__item__logo" alt="NewsLetter" />
                <h3>Subscribe your E-mail for Newsletter</h3>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__right">
                <form className="text-center">
                  <input placeholder="Enter your email" type="text" />
                  <button type="button" className="srex-btn srex-btn--primary">
                    Subscribe <i className="fa-solid fa-plus"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
