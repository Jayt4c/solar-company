import SectionTop from "@/src/components/shared/SectionTop";

const Faq = () => {
  return (
    <>
      <SectionTop title="Faq" />
      <section className="srex-question-two sqp srex-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="srex-question-two__left ">
                <div className="srex-accordion accordion" id="faq">
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                        <div className="accordion-header__left">
                          <h3>How Your Path to Ultimate Eco Service?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                        <div className="accordion-header__left">
                          <h3>Where Your House Finds a Solar?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo" role="button">
                        <div className="accordion-header__left">
                          <h3>Where Caring Solar Volumes?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo" role="button">
                        <div className="accordion-header__left">
                          <h3>What Is Eco Future?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo" role="button">
                        <div className="accordion-header__left">
                          <h3>What Is Chitar batpar?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo" role="button">
                        <div className="accordion-header__left">
                          <h3>What Is hasina morbo kobe?</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faq">
                      <div className="accordion-body">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="srex-question-two__right ">
                <img src="/images/home-two/question/question-img.png" alt="Question Img" />
                <div className="srex-question-two__right__box d-flex gap-3">
                  <h2>23+</h2>
                  <h4>
                    years of <br /> experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
