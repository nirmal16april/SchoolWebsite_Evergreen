import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import FaqOne from '../../components/Faq';
import RightArrow from '../../components/SVG';
import {
  FEE_STRUCTURE_FAQ,
  FEE_STRUCTURE_NOTES,
} from '../../data/feeStructureFaq';

import feeStructurePdf from '../../assets/img/Fee_Structure/feestructure26-27 (1).pdf';

const FeeStructureMain = () => {
  return (
    <main>
      <Breadcrumb title="Fee Structure" subTitle="Academics" />

      <section className="it-about-3-area fix pt-60 pb-80 p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center mb-40">
                <h2 className="it-section-title-3 mb-15">Our Detailed Fee Structure</h2>
                <p className="about-extended-copy mb-30">
                  Our fee structure supports quality education while remaining
                  transparent for families. It covers tuition and applicable
                  school charges for the session. Use <strong>View</strong> to
                  open the PDF in your browser, <strong>Download PDF</strong> to
                  save a copy, or scroll to the embedded viewer below.
                </p>
                <div className="pdf-action-buttons d-flex flex-wrap justify-content-center align-items-center gap-3 mb-10">
                  <a
                    className="ed-btn-theme orange"
                    href={feeStructurePdf}
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
                    href={feeStructurePdf}
                    download="Ever-Green-Fee-Structure-2026-27.pdf"
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
                  title="Fee Structure PDF"
                  src={feeStructurePdf}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fee-structure-notes-area pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="fee-structure-notes-card">
                <h3 className="fee-structure-section-title">
                  Important Notes Regarding Fee Payment
                </h3>
                <p className="fee-structure-section-intro">
                  Please take note of the following guidelines for the payment
                  of school fees at Ever Green Senior Secondary School.
                </p>
                <ol className="fee-structure-notes-list">
                  {FEE_STRUCTURE_NOTES.map((note) => (
                    <li key={note.title}>
                      <strong>{note.title}:</strong> {note.text}
                    </li>
                  ))}
                </ol>
                <p className="fee-structure-notes-footer mb-0">
                  We appreciate your cooperation in following these guidelines
                  to ensure a smooth and efficient fee payment process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fee-structure-faq-area pb-120 grey-bg-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center mb-45">
                <span className="ed-section-subtitle">FAQ</span>
                <h3 className="fee-structure-section-title mb-0">
                  Frequently Asked Questions
                </h3>
              </div>
              <FaqOne
                itemClass="it-custom-accordion it-custom-accordion-style-3 inner-style fee-structure-faq-accordion"
                items={FEE_STRUCTURE_FAQ}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeeStructureMain;
