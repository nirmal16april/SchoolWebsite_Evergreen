import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/footer/bg-1-1.jpg';
import Logo from '../../assets/img/logo/logo.svg';
import SocialIcons from '../SocialLinks/SocialIcons';

const Footer = (props) => {
  const { footerClass, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : 'it-footer-area it-footer-bg black-bg pt-120 pb-70'
        }
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Ever Green Senior Secondary School is a premier English-medium
                    CBSE institution in Haldwani, dedicated to holistic, value-based
                    learning and all-round student development.
                  </p>
                </div>
                <h4 className="it-footer-title evergreen-footer-social-title">Follow Us</h4>
                <SocialIcons useBrandColors />
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">Quick Links</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa-regular fa-angle-right"></i>Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        <i className="fa-regular fa-angle-right"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/course-1">
                        <i className="fa-regular fa-angle-right"></i>Facilities
                      </Link>
                    </li>
                    <li>
                      <Link to="/event">
                        <i className="fa-regular fa-angle-right"></i>Activities
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="fa-regular fa-angle-right"></i>Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">Contact</h4>
                <div className="it-footer-list evergreen-footer-contact-list">
                  <ul>
                    <li className="evergreen-footer-contact-item">
                      <a href="tel:05946232762">
                        <span className="evergreen-footer-contact-label">Office</span>
                        <span className="evergreen-footer-contact-value">05946-232762</span>
                      </a>
                    </li>
                    <li className="evergreen-footer-contact-item">
                      <a href="tel:+918057420801">
                        <span className="evergreen-footer-contact-label">Reception</span>
                        <span className="evergreen-footer-contact-value">+91 80574 20801</span>
                      </a>
                    </li>
                    <li className="evergreen-footer-contact-item">
                      <a href="tel:+918958851161">
                        <span className="evergreen-footer-contact-label">Principal</span>
                        <span className="evergreen-footer-contact-value">+91 89588 51161</span>
                      </a>
                    </li>
                    <li className="evergreen-footer-contact-item">
                      <a href="tel:+919997182574">
                        <span className="evergreen-footer-contact-label">Managing Director</span>
                        <span className="evergreen-footer-contact-value">+91 99971 82574</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="it-footer-list evergreen-footer-contact-links">
                  <ul>
                    <li>
                      <a href="mailto:evergreenpublicschool42@yahoo.in">
                        <i className="fa-regular fa-angle-right"></i>
                        Email Us
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/?api=1&query=Ever+Green+Senior+Secondary+School+Sri+Ganga+Vihar+Colony+Beri+Parao+Nainital"
                      >
                        <i className="fa-regular fa-angle-right"></i>
                        View Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">School Address</h4>
                <div className="it-footer-text">
                  <p>
                    Ever Green Sr. Sec. School
                    <br />
                    Sri Ganga Vihar Colony, Beri Parao
                    <br />
                    Vill-Tularampur, P.O. Motahaldu
                    <br />
                    Teh-Lalkuan, Nainital, Uttarakhand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : 'it-copyright-text text-center'
                }
              >
                <p>
                  Copyright &copy; 2026 <a href="#!">Ever Green Senior Secondary School</a> || All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
