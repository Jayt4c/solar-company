"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is where you will send formData to your API route (e.g., /api/contact)
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="srex-contact srex-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="srex-contact__left ">
              <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                  <div className="col-md-6 col-12">
                    <input 
                      name="fullName" 
                      placeholder="Your Name" 
                      type="text" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <input 
                      name="email" 
                      placeholder="Email Address" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div>
                  <input 
                    placeholder="Your Phone" 
                    type="text" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    id="message" 
                    rows={5} 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div>
                  {/* Changed to type="submit" so the form can properly process submissions */}
                  <button type="submit" className="srex-btn srex-btn--secondary">
                    Submit Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-contact__right mt-5">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Contact US
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Empowering Communities with Solar Energy
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mt-2 mb-4 ">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>

                <div data-aos="fade-up" data-aos-delay="500" className="srex-icon-list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <h4>
                        <a href="tel:+234800000000">+234800000000</a>
                      </h4>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <h4>
                        <a href="mailto:info@example.com">info@whogetsIt.com</a>
                      </h4>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <h4>Lagos, Nigeria</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;