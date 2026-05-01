import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const AimsObjectivesMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Aims & Objectives"
      breadcrumbSub="About"
      eyebrow="About Us"
      title="Aims & Objectives"
      greyBg
    >
      <p>
        The Primary aim of the school is spontaneous growth and development of
        individual—physical, mental, moral, spiritual values and ultimately to
        form her/him into a true citizen of the nation.
      </p>
      <ul className="about-extended-list">
        <li>
          It aims all round development of children by drawing out the best in
          them.
        </li>
        <li>
          Aims all quality of self reliance, mutual help, team spirit, service of
          general awareness and leadership.
        </li>
        <li>
          Aims at qualitative and excellence in scholastic as well as
          co-scholastic fields in particular and life in general.
        </li>
        <li>
          Aims at character building of the children and propagation of patriotic
          sentiments.
        </li>
      </ul>
    </AboutInnerPage>
  );
};

export default AimsObjectivesMain;
