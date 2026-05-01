import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import FaqOne from '../../components/Faq';

import faqImg from '../../assets/img/faq/thumb-1.jpg';

const FaqMain = () => {
  const items = [
    {
      id: 'a',
      btnText: 'Where is Ever Green Senior Secondary School located?',
      description:
        'Ever Green Senior Secondary School is located at Sri Ganga Vihar Colony, Beri Parao, P.O. Motahaldu, Haldwani, District Nainital, Uttarakhand (263139). The campus is connected to nearby areas and can be reached by school transport on approved routes.',
      faqImage: faqImg,
    },
    {
      id: 'b',
      btnText: 'Which board is the school affiliated to?',
      description:
        'The school is affiliated to CBSE, New Delhi, and follows CBSE curriculum and examination guidelines. Academic planning, periodic tests, practical work, and board exam preparation are aligned with CBSE standards.',
      faqImage: faqImg,
    },
    {
      id: 'c',
      btnText: 'How can I apply for admission?',
      description:
        'Parents can visit the school office during working hours to collect the admission form and counselling details. Admission is processed as per seat availability, required documents, and school admission policy. You can also check the Forms page for downloadable documents.',
      faqImage: faqImg,
    },
    {
      id: 'd',
      btnText: 'Does the school provide transport facility?',
      description:
        'Yes, school bus transport is available on selected routes. Bus allotment and fee details are shared by the school office, and parents must follow transport discipline and pickup/drop timing instructions for student safety.',
      faqImage: faqImg,
    },
    {
      id: 'e',
      btnText: 'Where can I check fee structure and book list?',
      description:
        'You can open the Fee Structure and Book List pages from the website menu under Pages. Both pages include View and Download options so parents can quickly access official PDF documents for the current session.',
      faqImage: faqImg,
    },
    {
      id: 'f',
      btnText: 'How can parents contact the school for support?',
      description:
        'For general queries, parents can contact the school office at (05946) 292491, 9997182574, or 8958851161, or write to evergreenpublicschool42@yahoo.in. Visiting hours and meeting schedules with academic coordinators can be confirmed from the office.',
      faqImage: faqImg,
    },
  ];
  return (
    <main>
      <Breadcrumb title="FAQ" />

      <div className="it-faq-area p-relative pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-faq-wrap">
                <FaqOne
                  itemClass="it-custom-accordion it-custom-accordion-style-3 inner-style"
                  items={items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default FaqMain;
