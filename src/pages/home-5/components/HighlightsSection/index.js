import React from 'react';

import SectionTitle from '../../../../components/SectionTitle';
import {
  useClassXiiToppers,
  useClassXToppers,
  useStudentBirthdays,
} from '../../../../hooks/useHighlights';

import BirthdayCard from './BirthdayCard';
import HighlightCarousel from './HighlightCarousel';
import { SectionShapeLeft, SectionShapeRight } from './SectionShapes';
import TopperCard from './TopperCard';

const HighlightsSection = () => {
  const birthdays = useStudentBirthdays();
  const classXiiToppers = useClassXiiToppers();
  const classXToppers = useClassXToppers();

  return (
    <section className="evergreen-highlights-area pt-120 pb-120 grey-bg-4">
      <div className="evergreen-highlights-area__shape evergreen-highlights-area__shape--left">
        <SectionShapeLeft />
      </div>
      <div className="evergreen-highlights-area__shape evergreen-highlights-area__shape--right">
        <SectionShapeRight />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <SectionTitle
              itemClass="evergreen-highlights-title text-center mb-65"
              subTitleClass="it-section-subtitle-2 white-bg"
              subTitle="Student Highlights"
              titleClass="ed-section-title"
              title="Birthdays & Board Toppers"
            />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <HighlightCarousel
              title="Student Birthdays"
              theme="birthday"
              iconClass="fa-light fa-cake-candles"
              items={birthdays.data}
              isLoading={birthdays.isLoading}
              isError={birthdays.isError}
              refetch={birthdays.refetch}
              renderSlide={(student, index) => (
                <BirthdayCard student={student} slideIndex={index} />
              )}
              emptyMessage="No upcoming birthdays to display."
              loadingMessage="Loading student birthdays…"
            />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <HighlightCarousel
              title="Class XII Toppers"
              theme="class-xii"
              iconClass="fa-light fa-trophy"
              items={classXiiToppers.data}
              isLoading={classXiiToppers.isLoading}
              isError={classXiiToppers.isError}
              refetch={classXiiToppers.refetch}
              renderSlide={(topper) => <TopperCard topper={topper} />}
              actionLink="/toppers-class-xii"
              actionLabel="View All Toppers"
              buttonClass="ed-btn-theme orange"
              emptyMessage="Class XII topper results will appear here once published."
              loadingMessage="Loading Class XII toppers…"
            />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12">
            <HighlightCarousel
              title="Class X Toppers"
              theme="class-x"
              iconClass="fa-light fa-medal"
              items={classXToppers.data}
              isLoading={classXToppers.isLoading}
              isError={classXToppers.isError}
              refetch={classXToppers.refetch}
              renderSlide={(topper) => <TopperCard topper={topper} />}
              actionLink="/toppers-class-x"
              actionLabel="View All Toppers"
              buttonClass="ed-btn-theme"
              emptyMessage="Class X topper results will appear here once published."
              loadingMessage="Loading Class X toppers…"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
