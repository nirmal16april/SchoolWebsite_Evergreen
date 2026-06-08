import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

/**
 * Shared layout for About subpages (matches former extended-section UI).
 */
const AboutInnerPage = ({
  breadcrumbTitle,
  breadcrumbSub = 'About',
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
