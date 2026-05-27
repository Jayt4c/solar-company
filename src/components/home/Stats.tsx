const Stats = () => {
  return (
    <div className="srex-stats srex-section">
      <div className="container">
        <div className="srex-stats__items ">
          <div className="row">
            <div className="col-md-6 col-lg-3 col-12">
              <div className="srex-stats__item">
                <div className="srex-stats__item__icon">
                  <img src="/images/home-one/stats/awards.svg" alt="Winning Awards" />
                </div>
                <div className="srex-stats__item__text">
                  <h2>
                    <span className="counter">20</span>+
                  </h2>
                  <h3>Winning Awards</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <div className="srex-stats__item">
                <div className="srex-stats__item__icon">
                  <img src="/images/home-one/stats/projects.svg" alt="Completed Projects" />
                </div>
                <div className="srex-stats__item__text">
                  <h2>
                    <span className="counter">10</span>K+
                  </h2>
                  <h3>Completed Projects</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <div className="srex-stats__item">
                <div className="srex-stats__item__icon">
                  <img src="/images/home-one/stats/members.svg" alt="Team members" />
                </div>
                <div className="srex-stats__item__text">
                  <h2>
                    <span className="counter">300</span>+
                  </h2>
                  <h3>Team Members</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <div className="srex-stats__item">
                <div className="srex-stats__item__icon">
                  <img src="/images/home-one/stats/clients.svg" alt="Clients Review" />
                </div>
                <div className="srex-stats__item__text">
                  <h2>
                    <span className="counter">900</span>+
                  </h2>
                  <h3>Clients Review</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
