import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import messageImg from '../../assets/new-images/about-page/vice-principal-evergreen.jpeg';

const VicePrincipalMessageMain = () => {
  return (
    <main>
      <Breadcrumb
        title="Vice Principal's Message"
        subTitle="Message"
      />

      <div className="it-teacher-details-area evergreen-leadership-profile pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="it-teacher-details-left">
                  <div className="it-teacher-details-left-thumb">
                    <img src={messageImg} alt="Mr. Rajendra Kumar Pathak" />
                  </div>
                  <div className="it-teacher-details-left-social text-center">
                    <a
                      href="https://www.facebook.com/evergreenseniorsecondaryschool?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/evergreenseniorsecondaryschool"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/@evergreenseniorsecondaryschool"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                  <div className="it-teacher-details-left-info">
                    <ul>
                      <li>
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="tel:05946232762">Office: 05946-232762</a>
                      </li>
                      <li>
                        <i className="fa-light fa-location-dot"></i>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Ever+Green+Senior+Secondary+School+Sri+Ganga+Vihar+Colony+Beri+Parao+Nainital"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sri Ganga Vihar Colony, Beri Parao, Nainital
                          (Uttarakhand)
                        </a>
                      </li>
                      <li>
                        <i className="fa-light fa-envelope"></i>
                        <a href="mailto:evergreenpublicschool42@yahoo.in">
                          evergreenpublicschool42@yahoo.in
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="it-teacher-details-left-btn">
                    <Link className="ed-btn-theme" to="/contact">
                      <span>
                        Contact School
                        <i>
                          <RightArrow />
                        </i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h4>Vice Principal&apos;s Message</h4>
                    <span>Vice Principal</span>
                    <p>
                      Ever Green Sr. Sec. School provides quality education for
                      all in a secure and caring environment. Our objective is to
                      inculcate high value and morals in students. We are working
                      hard every year to maintain the pace of student growth
                      which ultimately leads to the growth of the institution. We
                      are thankful to the kind support and guidance given to us
                      from the guardians of our school students and we hope the
                      same support from them in the coming years.
                    </p>
                    <p>
                      <strong>MR. RAJENDRA KUMAR PATHAK</strong>
                      <br />
                      Vice Principal
                    </p>
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

export default VicePrincipalMessageMain;
