import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import messageImg from '../../assets/new-images/about-page/1.svg';

const ManagingDirectorMain = () => {
  return (
    <main>
      <Breadcrumb
        title="Managing Director's Message"
        subTitle="Message"
      />

      <div className="it-teacher-details-area evergreen-leadership-profile evergreen-leadership-sidebar-right pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h4>Managing Director&apos;s Message</h4>
                    <span>Managing Director</span>
                    <p>
                      &ldquo;Teaching Children to count is fine, but teaching
                      them what counts is best.&rdquo;
                    </p>
                    <p>
                      Respected parents and my dear Students, here you are
                      entering into the next phase of schooling where you will
                      definitely see the changes.
                    </p>
                    <p>
                      We at all our venture, are having team of educationists
                      with modern concept of Indian values, who understands the
                      task of this centre of excellence for studies, sports
                      &amp; success. We are having a history of more than 30
                      great years and having successful alumni in different
                      fields of service.
                    </p>
                  </div>
                  <div className="it-teacher-details-right-content mb-40">
                    <p>
                      We are in a mission to make sure that every student of
                      the school receives the best education, which starts with
                      access to high quality learning opportunities and
                      continues with a great school, a school ready for upcoming
                      challenges.
                    </p>
                    <p>
                      We have been providing a congenial, competitive,
                      encouraging and compatible atmosphere. Motivation, value
                      based attitudinal change, patience and modesty are the
                      arms and ammunitions to be used to defend materialism,
                      violence dishonesty, corruption and idleness. Along with my
                      Administrative team, Teaching and Non-teaching staff, I
                      thank all who have entrusted us with the great job of
                      Citizen Building of tomorrow.
                    </p>
                    <p>
                      <strong>Mr. Saurabh Pathak</strong>
                      <br />
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="it-teacher-details-left">
                  <div className="it-teacher-details-left-thumb">
                    <img src={messageImg} alt="Mr. Saurabh Pathak" />
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManagingDirectorMain;
