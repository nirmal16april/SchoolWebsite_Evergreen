import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const FeesMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="School Fees"
      breadcrumbSub="Rules"
      eyebrow="Rules"
      title="School Fees"
      greyBg={false}
    >
      <div className="rules-page">
        <div className="rules-lead">
          <p className="mb-0">
            Timely payment of fees keeps school operations smooth and supports
            quality services for every child. Please read the fee rules below
            carefully.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Monthly fee payment</h4>
          <p>
            School and other fee dues are to be paid before the{' '}
            <strong>15th</strong> of every month. Payment made after the 15th
            will attract a fine of <strong>Rs. 100</strong>.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Non-payment for three months</h4>
          <p>
            If the fee is not paid for three continuous months, re-admission fee
            will be charged as per the fee schedule.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">School bus charges</h4>
          <p>
            Students availing school bus facilities must deposit bus charges for
            the <strong>whole session (12 months)</strong>. No request for
            withdrawal of bus facility will be entertained mid-session.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Session clearance &amp; examinations</h4>
          <p className="mb-0">
            Dues for the session should be cleared by{' '}
            <strong>15th February</strong>. Any student with dues pending after
            that date will <strong>not be allowed to appear</strong> in the annual
            examination.
          </p>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default FeesMain;
