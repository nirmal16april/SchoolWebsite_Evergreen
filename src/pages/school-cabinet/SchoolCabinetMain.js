import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import {
  SCHOOL_CABINET_HOUSES,
  SCHOOL_CABINET_LEADERS,
} from '../../data/schoolCabinet';

const CabinetCard = ({ role, name, photo, featured = false }) => (
  <div className={`col-lg-3 col-md-4 col-sm-6 mb-30 ${featured ? 'col-lg-4' : ''}`}>
    <article className={`evergreen-cabinet-card ${featured ? 'evergreen-cabinet-card--featured' : ''}`}>
      <div className="evergreen-cabinet-card__photo">
        <img src={photo} alt={name} loading="lazy" />
      </div>
      <div className="evergreen-cabinet-card__body">
        <span className="evergreen-cabinet-card__role">{role}</span>
        <h4 className="evergreen-cabinet-card__name">{name}</h4>
      </div>
    </article>
  </div>
);

const SchoolCabinetMain = () => {
  return (
    <main>
      <Breadcrumb title="Student Cabinet" subTitle="Academics" />

      <section className="evergreen-cabinet-area pt-60 pb-120 grey-bg-4">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-xl-8 col-lg-10 text-center">
              <h2 className="it-section-title-3 mb-15">Student Cabinet</h2>
              <p className="mb-0">
                Meet the student leaders who represent Ever Green Senior Secondary
                School through the school cabinet and house teams.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-20">
            {SCHOOL_CABINET_LEADERS.map((leader) => (
              <CabinetCard key={leader.name} {...leader} featured />
            ))}
          </div>

          {SCHOOL_CABINET_HOUSES.map((house) => (
            <div key={house.name} className="evergreen-cabinet-house mb-20">
              <h3
                className={`evergreen-cabinet-house__title evergreen-cabinet-house__title--${house.theme}`}
              >
                {house.name}
              </h3>
              <div className="row justify-content-center">
                {house.members.map((member) => (
                  <CabinetCard key={`${house.name}-${member.name}`} {...member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SchoolCabinetMain;
