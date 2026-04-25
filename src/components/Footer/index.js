import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/footer/bg-1-1.jpg';
import Logo from '../../assets/img/logo/logo-white.png';

const Footer = (props) => {
  const { footerClass, footerLogo, copyrightTextClass } = props;

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
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link to="/">
                    <img src={footerLogo ? footerLogo : Logo} alt="" />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Ever Green Senior Secondary School is a premier English-medium
                    CBSE institution in Haldwani, dedicated to holistic, value-based
                    learning and all-round student development.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a
                    href="https://www.facebook.com/evergreenseniorsecondaryschool?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/evergreenseniorsecondaryschool"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@evergreenseniorsecondaryschool"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
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
              className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">Contact</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="tel:05946292491">
                        <i className="fa-regular fa-angle-right"></i>Reception:
                        05946-292491
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919997182574">
                        <i className="fa-regular fa-angle-right"></i>Director/Admin:
                        +91-9997182574
                      </a>
                    </li>
                    <li>
                      <a href="tel:+918958851161">
                        <i className="fa-regular fa-angle-right"></i>Principal:
                        +91-8958851161
                      </a>
                    </li>
                    <li>
                      <a href="mailto:evergreenpublicschool42@yahoo.in">
                        <i className="fa-regular fa-angle-right"></i>Email Us
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/search/?api=1&query=Ever+Green+Senior+Secondary+School+Sri+Ganga+Vihar+Colony+Beri+Parao+Nainital"
                      >
                        <i className="fa-regular fa-angle-right"></i>View Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">School Address</h4>
                <div className="it-footer-text pb-5">
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
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="tel:+919897032340">
                        <i className="fa-regular fa-angle-right"></i>Manager:
                        +91-9897032340
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919997208173">
                        <i className="fa-regular fa-angle-right"></i>Vice Principal:
                        +91-9997208173
                      </a>
                    </li>
                  </ul>
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
                  Copyright &copy; 2026 <a href="#">Ever Green Senior Secondary School</a> || All Rights Reserved
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
