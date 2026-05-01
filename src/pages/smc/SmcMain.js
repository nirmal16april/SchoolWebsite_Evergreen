import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import smcPdf from '../../assets/img/smc/smc.pdf';

const SmcMain = () => {
  return (
    <main>
      <Breadcrumb title="School Management Committee (SMC)" subTitle="About" />
      <section className="it-about-3-area fix pt-60 pb-120 p-relative grey-bg-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="it-about-3-title-box text-center mb-40">
                <h2 className="it-section-title-3 pb-15">SMC</h2>
                <p className="about-extended-copy mb-30">
                  Use <strong>View</strong> for browser PDF preview (web view),
                  <strong> Download PDF</strong> to save, or use the embedded
                  viewer below.
                </p>
                <div className="pdf-action-buttons d-flex flex-wrap justify-content-center align-items-center gap-3 mb-10">
                  <a
                    className="ed-btn-theme orange"
                    href={smcPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fa-light fa-eye me-2" aria-hidden="true" />
                      View
                      <i>
                        <RightArrow />
                      </i>
                    </span>
                  </a>
                  <a
                    className="ed-btn-theme theme-2"
                    href={smcPdf}
                    download="Ever-Green-SMC.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fa-light fa-download me-2" aria-hidden="true" />
                      Download PDF
                      <i>
                        <RightArrow />
                      </i>
                    </span>
                  </a>
                </div>
              </div>
              <div
                id="pdf-web-view"
                className="pdf-document-frame rounded overflow-hidden border bg-white"
              >
                <iframe title="SMC PDF" src={smcPdf} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SmcMain;
