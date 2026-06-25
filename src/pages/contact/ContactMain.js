import React, { useRef } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import emailjs from '@emailjs/browser';

import shapeImg from '../../assets/img/contact/shape-2-1.png';

const MAP_EMBED_SRC =
  'https://www.google.com/maps?cid=18409507374368258856&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed&output=embed';

const MAP_LINK =
  'https://www.google.com/maps?cid=18409507374368258856&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed';

const ContactMain = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <main>
      <Breadcrumb title="Contact Us" />

      <div className="it-contact__area evergreen-contact pt-120 pb-120">
        <div className="container">
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div className="it-contact__shape-1 d-none d-xl-block">
              <img src={shapeImg} alt="" />
            </div>

            <div className="row justify-content-center mb-45">
              <div className="col-xl-10 text-center">
                <span className="evergreen-contact__eyebrow">
                  Evergreen Help Desk
                </span>
                <h4 className="it-contact__title pb-15">
                  Contact Ever Green Senior Secondary School
                </h4>
                <p className="evergreen-contact__intro-lead mb-0">
                  Reach our school office for admissions, transport, fee details,
                  and general academic support. We are happy to help parents and
                  students.
                </p>
              </div>
            </div>

            <div className="row justify-content-center mb-45">
              <div className="col-xl-10 col-lg-11">
                <div className="it-contact__form-box evergreen-contact__form-card">
                  <div className="evergreen-contact__form-head text-center mb-25">
                    <h5 className="evergreen-contact__form-head-title mb-5">
                      Send us a message
                    </h5>
                    <p className="evergreen-contact__form-head-text mb-0">
                      Share your query and we will get back to you as soon as
                      possible.
                    </p>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-25">
                        <div className="it-contact-input-box">
                          <label>Name*</label>
                          <input type="text" placeholder="Student / Parent Name" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="it-contact-input-box">
                          <label>Email Address*</label>
                          <input type="email" placeholder="example@email.com" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="it-contact-input-box">
                          <label>Phone*</label>
                          <input type="text" placeholder="Mobile Number" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-25">
                        <div className="it-contact-input-box">
                          <label>Subject*</label>
                          <input
                            type="text"
                            placeholder="Admission / Transport / Fee / Other"
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-25">
                        <div className="it-contact-textarea-box">
                          <label>Message</label>
                          <textarea placeholder="Write your query here" />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="ed-btn-square radius purple-4 evergreen-contact__submit"
                    >
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row g-4 justify-content-center mb-40">
              <div className="col-lg-5">
                <div className="evergreen-contact__panel-title">
                  <i className="fa-solid fa-address-card" aria-hidden="true" />
                  School details
                </div>
                <div className="it-contact__content evergreen-contact__info-card">
                  <ul>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-location-dot" />
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Campus Address</span>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={MAP_LINK}
                          >
                            Sri Ganga Vihar Colony, Beri Parao, <br />
                            P.O. Motahaldu, Haldwani, Nainital, Uttarakhand
                            263139
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-clock" />
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Office Hours</span>
                          <span>Mon - Sat: 8:30 AM to 3:30 PM</span>
                          <span>
                            Office support available during school hours
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-phone phone" />
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Phone &amp; Email</span>
                          <a href="tel:+915946232762">Office: 05946-232762</a>
                          <a href="tel:+918057420801">Reception: +91 80574 20801</a>
                          <a href="tel:+918958851161">Principal: +91 89588 51161</a>
                          <a href="tel:+919997182574">Managing Director: +91 99971 82574</a>
                          <a href="mailto:evergreenpublicschool42@yahoo.in">
                            evergreenpublicschool42@yahoo.in
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="evergreen-contact__panel-title">
                  <i className="fa-solid fa-map-location-dot" aria-hidden="true" />
                  Find us on the map
                </div>
                <div className="it-contact-map-box evergreen-contact__map-card">
                  <iframe
                    title="Ever Green School Location Map"
                    src={MAP_EMBED_SRC}
                    className="evergreen-contact__map-frame"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="it-contact__bottom-box d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div className="it-contact__scrool smooth">
                    <a href="mailto:evergreenpublicschool42@yahoo.in">
                      <i className="fa-solid fa-envelope" /> Email School Office
                    </a>
                  </div>
                  <div className="it-footer-social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;
