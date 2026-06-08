import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import RightArrow from '../../components/SVG';

import bookListPdf from '../../assets/img/Book_List/booklistplay&XII.pdf';

const BookListMain = () => {
  return (
    <main>
      <Breadcrumb title="Book List" subTitle="Pages" />
      <section className="it-about-3-area fix pt-60 pb-120 p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center mb-40">
                <p className="about-extended-copy mb-30">
                  Play group through Class XII — use <strong>View</strong> to open
                  the PDF in your browser, <strong>Download PDF</strong> to save a
                  copy, or scroll to the embedded viewer below.
                </p>
                <div className="pdf-action-buttons d-flex flex-wrap justify-content-center align-items-center gap-3 mb-10">
                  <a
                    className="ed-btn-theme orange"
                    href={bookListPdf}
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
                    href={bookListPdf}
                    download="Ever-Green-Book-List.pdf"
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
                  title="Book List PDF"
                  src={bookListPdf}
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

export default BookListMain;
