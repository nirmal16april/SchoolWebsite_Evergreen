import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const WithdrawalMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Withdrawal"
      breadcrumbSub="Rules"
      eyebrow="Rules"
      title="Withdrawal"
      greyBg={false}
    >
      <div className="rules-page">
        <div className="rules-lead">
          <p>
            Parents willing to withdraw their child must give one month (30
            days) notice in writing or pay one month&apos;s fee in lieu of
            notice. No student is permitted to withdraw in the month of March.
          </p>
          <p className="mb-0">
            In case the child is to withdraw from 1 April, notice of withdrawal
            must be received by the school by 1 March. If notice is given in
            April, the fee for April will be charged.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">School leaving certificate (T.C.)</h4>
          <p>
            A school leaving certificate will be issued only on application from
            the parents or guardians responsible for the child, with a fee of
            Rs. 500. Applications should be made one month before the intended
            withdrawal; failing this, one month&apos;s fee (without allowance for
            a broken period) shall be payable before applying for the T.C.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Class XI &amp; XII</h4>
          <p className="mb-0">
            If a student of Class XI or XII leaves after the commencement of the
            first session, two installments of school fees shall be payable before
            applying for the T.C. No school leaving certificate will be issued
            until all dues are fully paid.
          </p>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default WithdrawalMain;
