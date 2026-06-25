import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import eProspectusPdf from '../../assets/img/prospectus/evergreen prospectus.pdf';

const EProspectusMain = () => {
  return (
    <main>
      <Breadcrumb title="E-Prospectus" subTitle="About Us" />
      <section className="it-about-3-area fix pt-60 pb-120 p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center mb-40">
                <p className="about-extended-copy mb-30">
                  Use <strong>View</strong> to open the PDF in your browser (web
                  view), <strong>Download PDF</strong> to save a copy, or scroll
                  to the embedded viewer below.
                </p>
                <div className="pdf-action-buttons d-flex flex-wrap justify-content-center align-items-center gap-3 mb-10">
                  <a
                    className="ed-btn-theme orange"
                    href={eProspectusPdf}
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
                    href={eProspectusPdf}
                    download="Ever-Green-E-Prospectus.pdf"
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
                className="pdf-document-frame rounded overflow-hidden border"
              >
                <iframe
                  title="E-Prospectus PDF"
                  src={eProspectusPdf}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EProspectusMain;
