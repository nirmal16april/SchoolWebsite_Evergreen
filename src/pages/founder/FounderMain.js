import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import founderImg from '../../assets/img/team/founder.svg';
import founderBanner from '../../assets/new-images/banner-header/ourfounder.png';

const FounderMain = () => {
  return (
    <main>
      <Breadcrumb backgroundImage={founderBanner} bannerOnly />

      <div className="it-teacher-details-area evergreen-leadership-profile pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="it-teacher-details-left">
                  <div className="it-teacher-details-left-thumb">
                    <img src={founderImg} alt="Late Sh. L.D. Pathak" />
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
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="tel:+918057420801">Reception: +91 80574 20801</a>
                      </li>
                      <li>
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="tel:+918958851161">Principal: +91 89588 51161</a>
                      </li>
                      <li>
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="tel:+919997182574">Managing Director: +91 99971 82574</a>
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
                    <h4>Late Sh. L.D. Pathak</h4>
                    <span>Founder Chairman</span>
                    <p>
                      Ever Green Sr. Sec. School, Haldwani, stands as a
                      testament to the vision and dedication of its esteemed
                      founder, Late Sh. L.D. Pathak. A visionary educationist
                      and humanitarian, he firmly believed in the
                      transformative power of education to shape young minds
                      and build a better society.
                    </p>
                    <p>
                      His dream was to create an institution where students
                      would not only excel academically but also embrace
                      values of integrity, compassion, and social
                      responsibility. His philosophy centered on nurturing
                      well-rounded individuals who contribute positively to
                      society, equipped with both knowledge and strong moral
                      character.
                    </p>
                  </div>
                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Visionary Leadership of Late Sh. L.D. Pathak</h4>
                    <p>
                      Under his leadership, Ever Green Sr. Sec. School became
                      a beacon of holistic education. Nestled in the heart of
                      Haldwani, the school provides an environment where
                      students grow intellectually, physically, emotionally,
                      and spiritually. Late Sh. L.D. Pathak's legacy continues
                      to inspire the institution, ensuring that his vision of
                      empowering future generations through quality education
                      lives on.
                    </p>
                    <p>
                      Today, the school proudly upholds his ideals, fostering
                      excellence in every sphere while preparing students to
                      face the challenges of the modern world with confidence
                      and character.
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
export default FounderMain;
