const Question = () => {
  return (
    <section className="srex-question srex-section">
      <div className="container">
        <div className="srex-question__title">
          <div className="srex-section__head ">
            <h5 className="srex-section__head__badge">Recently asked</h5>
            <h2 className="srex-section__head__title">asked any questions</h2>
            <p className="mb-5 mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="srex-question__left">
              <img src="/images/question/question.png" alt="Question_img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="srex-question__right ">
              <div className="srex-accordion accordion" id="faq">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">01</p>
                        <h3>What is Equality and solidarity?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">02</p>
                        <h3>How to inspire humanity?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">03</p>
                        <h3>Where are Better living programs?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
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

export default Question;
