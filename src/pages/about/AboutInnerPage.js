import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import titleImg from '../../assets/img/about/title-home2.png';

/**
 * Shared layout for About subpages (matches former extended-section UI).
 */
const AboutInnerPage = ({
  breadcrumbTitle,
  breadcrumbSub = 'About',
  eyebrow,
  title,
  greyBg = false,
  children,
}) => {
  return (
    <main>
      <Breadcrumb title={breadcrumbTitle} subTitle={breadcrumbSub} />
      <section
        className={`it-about-3-area fix pt-90 pb-120 p-relative${
          greyBg ? ' grey-bg-4' : ''
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="it-about-3-title-box text-center mb-50">
                <span className="it-section-subtitle-3 d-inline-flex align-items-center justify-content-center">
                  <img src={titleImg} alt="" /> {eyebrow}
                </span>
                <h2 className="it-section-title-3 pt-15 pb-20">{title}</h2>
              </div>
              <div className="it-teacher-details-right-content about-extended-copy">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutInnerPage;
