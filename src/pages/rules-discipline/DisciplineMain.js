import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const DisciplineMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Discipline"
      breadcrumbSub="Rules"
      eyebrow="Rules"
      title="Discipline"
      greyBg={false}
    >
      <div className="rules-page">
        <div className="rules-lead">
          <p>
            All students of the school are expected to show a high order of
            discipline in and outside the school.
          </p>
        </div>
        <h4 className="rules-subtitle">Guidelines for every student</h4>
        <p>The following points should always be kept in mind by all students:</p>
        <ul className="rules-list-check">
          <li>
            Always uphold the high tradition of the school — Ever Green Public
            School is well known for its high standard of discipline.
          </li>
          <li>Obey the school rules at all times.</li>
          <li>
            No student should at any time use indecent language or expressions.
          </li>
          <li>
            Any student who disregards school rules and regulations is liable to
            face disciplinary action.
          </li>
          <li>
            School and house prefects share responsibilities in maintaining
            discipline.
          </li>
        </ul>
      </div>
    </AboutInnerPage>
  );
};

export default DisciplineMain;
