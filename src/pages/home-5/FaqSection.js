import React from 'react';
import FaqOne from '../../components/Faq';
import SectionTitle from '../../components/SectionTitle';

import faqMainImg from '../../assets/new-images/Home-page/img-4.jpg';
import faqImg from '../../assets/new-images/Home-page/img-5.jpg';

const FAQ = () => {
  const items = [
    {
      id: 'a',
      btnText: 'When was Ever Green Senior Secondary School established?',
      description:
        'Ever Green Senior Secondary School was established on 13 July 1996 by Late Sh. L. D. Pathak in Haldwani, Uttarakhand.',
      faqImage: faqImg,
    },
    {
      id: 'b',
      btnText: 'Is the school affiliated to CBSE?',
      description:
        'Yes. Ever Green is a premier English-medium institution affiliated to C.B.S.E., New Delhi.',
      faqImage: faqImg,
    },
    {
      id: 'c',
      btnText: 'Where is the campus located?',
      description:
        'The campus is at Sri Ganga Vihar Colony, Beri Parao, Vill-Tularampur, P.O. Motahaldu, Teh-Lalkuan, Nainital, Uttarakhand.',
      faqImage: faqImg,
    },
    {
      id: 'd',
      btnText: 'How can parents connect with the school?',
      description:
        'You can call reception at 05946-292491 or email us at evergreenpublicschool42@yahoo.in for admissions and school information.',
      faqImage: faqImg,
    },
  ];

  return (
    <div id="it-faq" className="it-faq-area p-relative pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-faq-thumb text-center text-lg-start">
              <img src={faqMainImg} alt="Students at Ever Green Senior Secondary School" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-faq-wrap">
              <SectionTitle
                itemClass="it-faq-title-box mb-20"
                subTitleClass="ed-section-subtitle"
                subTitle="FAQ"
                titleClass="it-section-title-5"
                title="Frequently asked questions"
              />

              <FaqOne items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
