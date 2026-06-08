import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import chairmanImg from '../../assets/img/team/team-inner.jpg';

const ChairmanMain = () => {
  return (
    <main>
      <Breadcrumb title="Chairman's Message" subTitle="Chairman" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">

              {/* LEFT SIDE */}
              <div className="col-xl-3 col-lg-3">
                <div className="it-teacher-details-left">

                  <div className="it-teacher-details-left-thumb">
                    <img src={chairmanImg} alt="Mr. Gaurav Pathak" />
                  </div>

                  <div className="it-teacher-details-left-social text-center">
                    <a href="#!" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>

                  <div className="it-teacher-details-left-info">
                    <ul>
                      <li>
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="tel:05946292491">
                          Reception: 05946-292491
                        </a>
                      </li>

                      <li>
                        <i className="fa-light fa-location-dot"></i>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Ever+Green+Senior+Secondary+School"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sri Ganga Vihar Colony, Beri Parao, Nainital (Uttarakhand)
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

              {/* RIGHT SIDE */}
              <div className="col-xl-9 col-lg-9">
                <div className="it-teacher-details-right">

                  <div className="it-teacher-details-right-title-box">
                    <h4>Mr. Gaurav Pathak</h4>
                    <span>Chairman</span>

                    <p>
                      Welcome to Ever Green Sr. Sec. School, a haven of academic excellence and holistic development.
                      As Chairman, I am delighted to introduce our institution, where we strive to nurture young minds
                      and empower them to become responsible global citizens.
                    </p>

                    <p>
                      At our school, we believe that education is not just about academics, but about nurturing the
                      unique potential within each child. Our mission is to provide a stimulating environment that
                      encourages curiosity, creativity, and critical thinking.
                    </p>
                  </div>

                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Our Vision & Commitment</h4>

                    <p>
                      Our dedicated faculty and staff work tirelessly to provide a supportive learning environment,
                      fostering creativity, critical thinking, and character building. We believe in shaping not just
                      scholars, but individuals with strong values and a passion for lifelong learning.
                    </p>

                    <p>
                      As you explore our prospectus, I hope you will discover the many ways in which we strive to make
                      learning engaging, relevant, and fun. From academics to extracurricular activities, we aim to
                      provide a well-rounded education that prepares our students for success in all aspects of life.
                    </p>

                    <p>
                      I invite you to explore our prospectus and discover how Ever Green Sr. Sec. School can be the
                      perfect platform for your child's growth and success. We look forward to partnering with you in
                      shaping the future of our young learners.
                    </p>

                    <p>
                      I am confident that Ever Green Sr. Sec. School will be the perfect fit for your child, and I look
                      forward to welcoming you to our community.
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

export default ChairmanMain;