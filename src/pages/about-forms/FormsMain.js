import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const PdfActions = ({ file }) => {
  const href = `/forms/${file}`;
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

const FORM_ROWS = [
  {
    sr: 1,
    title: 'ANNUAL DAY PROGRAMME',
    date: '23rd Nov 2023',
    file: '01-annual-day-programme.pdf',
  },
  {
    sr: 2,
    title: 'BUS LEAVING',
    date: '03rd Jul 2023',
    file: '02-bus-leaving.pdf',
  },
  {
    sr: 3,
    title: 'BUS AVAILING',
    date: '03rd Jul 2023',
    file: '03-bus-availing.pdf',
  },
  {
    sr: 4,
    title: 'TC APPLICATION FORM',
    date: '05th Sep 2022',
    file: '04-tc-application-form.pdf',
  },
  {
    sr: 5,
    title: 'DECLARATION FORM FOR CLASS IX - XII',
    date: '05th Sep 2022',
    file: '05-declaration-form-class-ix-xii.pdf',
  },
];

const FormsMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Forms"
      breadcrumbSub="About Us"
      eyebrow="Downloads"
      title="Forms"
      greyBg={false}
    >
      <p className="text-center mb-40">
        Download school forms below. Use <strong>View</strong> to open the PDF in
        your browser or <strong>Download</strong> to save a copy on your device.
      </p>

      <div className="disclosure-section">
        <div className="table-responsive">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Date</th>
                <th style={{ minWidth: '200px' }}>View / Download</th>
              </tr>
            </thead>
            <tbody>
              {FORM_ROWS.map((row) => (
                <tr key={row.sr}>
                  <td>{row.sr}</td>
                  <td>{row.title}</td>
                  <td>{row.date}</td>
                  <td>
                    <PdfActions file={row.file} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default FormsMain;
