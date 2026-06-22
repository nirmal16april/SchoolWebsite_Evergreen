import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import messageImg from '../../assets/new-images/about-page/principal-evergreen.jpeg';

const PrincipalMessageMain = () => {
  return (
    <main>
      <Breadcrumb title="Principal's Message" subTitle="Message" />

      <div className="it-teacher-details-area evergreen-leadership-profile pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="it-teacher-details-left">
                  <div className="it-teacher-details-left-thumb">
                    <img src={messageImg} alt="Mr. M. S. Parwal" />
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
                        <a href="tel:+918958851161">Principal: +91 89588 51161</a>
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
                    <h4>Principal&apos;s Message</h4>
                    <span>Principal</span>
                    <p>
                      Our School Motto &lsquo;विधैव बलम&rsquo; sums up the ethos
                      and commitment of all staff to nurture the potential of
                      every child, developing personal excellence in a caring
                      environment.
                    </p>
                    <p>
                      Success for all students is ensured by the delivery of an
                      enriching and structured curriculum and a whole school
                      focus on student welfare that focuses on the positive
                      recognition of students achievements.
                    </p>
                  </div>
                  <div className="it-teacher-details-right-content mb-40">
                    <p>
                      All students are taught the skills and values necessary
                      for success in education, life and work. They leave Ever
                      Green Senior Sec. School as literate, numerate, well
                      educated &amp; who have the capability, confidence and
                      independence to make a positive contribution to our
                      society.
                    </p>
                    <p>
                      Our School is strengthened by a very supportive parents
                      and wider community and we encourage you to become actively
                      involved in all aspects of your child&apos;s education.
                      Get to know the staff, especially your child&apos;s
                      teachers and assist wherever you can, so that we can work
                      together in the interests of everyone.
                    </p>
                    <p>
                      We are continually very proud of our history, our values,
                      and the high standards achieved by our students.
                    </p>
                    <p>
                      If any time you would like to speak to me please contact me
                      to make an appointment.
                    </p>
                    <p>
                      <strong>MR. M. S. PARWAL</strong>
                      <br />
                      Principal
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

export default PrincipalMessageMain;
