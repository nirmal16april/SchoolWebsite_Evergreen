import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const PdfActions = ({ file }) => {
  const href = `/disclosure/${file}`;
  return (
    <span className="disclosure-pdf-actions">
      <a
        href={href}
        className="disclosure-pdf-link disclosure-pdf-view"
        target="_blank"
        rel="noopener noreferrer"
        title={`View in browser: ${file}`}
      >
        <i className="fa-light fa-eye" aria-hidden="true" /> View
      </a>
      <span className="disclosure-pdf-divider" aria-hidden="true">
        |
      </span>
      <a
        href={href}
        className="disclosure-pdf-link disclosure-pdf-download"
        download={file}
        target="_blank"
        rel="noopener noreferrer"
        title={`Download: ${file}`}
      >
        <i className="fa-light fa-download" aria-hidden="true" /> Download
      </a>
    </span>
  );
};

const MandatoryDisclosureMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Mandatory Public Disclosure"
      breadcrumbSub="Disclosure"
      eyebrow="Disclosure"
      title="Mandatory Public Disclosure"
      greyBg={false}
    >
      <p className="text-center mb-50">
        Access essential school information and documents in one place. Where PDFs
        are listed, use <strong>View</strong> to open them in your browser (web
        view) or <strong>Download</strong> to save a copy.
      </p>

      <div className="disclosure-section">
        <h3 className="disclosure-block-title">A. General Information</h3>
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name of School</td>
                <td>Ever Green Public School</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Affiliation No.</td>
                <td>3530296</td>
              </tr>
              <tr>
                <td>3</td>
                <td>School Code</td>
                <td>81522</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Complete Address</td>
                <td>
                  Sri Ganga Vihar Colony, Beriparao, P.O. - Motahaldu,
                  Haldwani, Nainital, U.K. (263139)
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Principal Name &amp; Qualification</td>
                <td>Mr. M.S. Parwal &amp; M.Sc, B.Ed</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Email ID</td>
                <td>
                  <a href="mailto:evergreenpublicschool42@yahoo.in">
                    evergreenpublicschool42@yahoo.in
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Contact Details</td>
                <td>
                  (05946) 292491, 9997182574, 8958851161
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="disclosure-section grey-mini">
        <h3 className="disclosure-block-title">B. Documents &amp; Information</h3>
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Documents &amp; Information</th>
                <th>Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Copies of Affiliation/Upgradation Letter and Recent Extension
                  of Affiliation, if any
                </td>
                <td>
                  <PdfActions file="affiliation-letter.pdf" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Copies of Societies/Trust/Company Registration/Renewal
                  Certificate, as applicable
                </td>
                <td>
                  <PdfActions file="society-trust-registration.pdf" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Copy of No Objection Certificate (NOC) Issued, if applicable,
                  by the State Govt./UT
                </td>
                <td>
                  <PdfActions file="noc-state-govt.pdf" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Copies of Recognition Certificate Under RTE Act, 2009, and
                  its Renewal if applicable
                </td>
                <td>
                  <PdfActions file="rte-recognition.pdf" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Copy of Valid Building Safety Certificate as per the National
                  Building Code
                </td>
                <td>
                  <PdfActions file="building-safety.pdf" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Copy of Valid Fire Safety Certificate Issued by the Competent
                  Authority
                </td>
                <td>
                  <PdfActions file="fire-safety.pdf" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Copy of the DEO Certificate Submitted by the School for
                  Affiliation/Upgradation/Extension of Affiliation or Self
                  Certification by School
                </td>
                <td>
                  <PdfActions file="deo-certificate.pdf" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Copies of Valid Water, Health and Sanitation Certificates
                </td>
                <td>
                  <PdfActions file="water-health-sanitation.pdf" />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Copies of Land Certificates</td>
                <td>
                  <PdfActions file="land-certificate.pdf" />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Copy of Mandatory Information as per CBSE Circular</td>
                <td>
                  <PdfActions file="cbse-mandatory-circular.pdf" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="disclosure-section">
        <h3 className="disclosure-block-title">C. Result &amp; Academics</h3>
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Documents &amp; Information</th>
                <th>Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fee Structure of School</td>
                <td>
                  <PdfActions file="fee-structure.pdf" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Annual Academic Calendar</td>
                <td>
                  <PdfActions file="academic-calendar.pdf" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>List of School Management Committee (SMC)</td>
                <td>
                  <PdfActions file="smc-list.pdf" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>List of Parents Teachers Association (PTA) Members</td>
                <td>
                  <PdfActions file="pta-members.pdf" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Last Three-Year Result of the Board Examination as per
                  Applicability
                </td>
                <td>
                  <PdfActions file="board-exam-results.pdf" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="disclosure-section grey-mini">
        <h3 className="disclosure-block-title">D. Staff (Teaching)</h3>
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Principal</td>
                <td>01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Total No. of Teachers</td>
                <td>54</td>
              </tr>
              <tr>
                <td />
                <td>PGT</td>
                <td>18</td>
              </tr>
              <tr>
                <td />
                <td>TGT</td>
                <td>16</td>
              </tr>
              <tr>
                <td />
                <td>PRT</td>
                <td>16</td>
              </tr>
              <tr>
                <td />
                <td>NTT</td>
                <td>04</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Teachers Section Ratio</td>
                <td>1:1.5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Details of Special Educator</td>
                <td>
                  Mrs Pooja Joshi (M.A, B.Ed.)
                  <br />
                  RCI No. - A862008
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Details of Counsellor and Wellness Teacher</td>
                <td>
                  Mrs. Poonam Pathak (M.A, B.Ed.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="disclosure-section">
        <h3 className="disclosure-block-title">E. School Infrastructure</h3>
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Total Campus Area of the School (in square mtr)</td>
                <td>8093.7128</td>
              </tr>
              <tr>
                <td>2</td>
                <td>No. and Size of the Classrooms (in sq ft)</td>
                <td>43 (37 — 20×20, 06 — 20×25)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  No. and Size of Laboratories Including Computer Labs (in sq
                  mtr)
                </td>
                <td>06 (02 — 7×12, 03 — 6×9, 01 — 6×10)</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Internet Facility</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>5</td>
                <td>No. of Girls Toilets</td>
                <td>20</td>
              </tr>
              <tr>
                <td>6</td>
                <td>No. of Boys Toilets</td>
                <td>7 with door, 21 urinals</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Link of YouTube video of the inspection of school covering the
                  infrastructure of the school
                </td>
                <td>
                  <a
                    href="https://www.youtube.com/@evergreenseniorsecondaryschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="disclosure-pdf-link"
                  >
                    Ever Green Senior Secondary School — YouTube
                  </a>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default MandatoryDisclosureMain;
