import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import societyLogo from '../../assets/new-images/about-page/society.png';

const SocietyMain = () => {
  return (
    <main>
      <Breadcrumb title="Our Society" subTitle="About Us" />

      <div className="it-teacher-details-area evergreen-leadership-profile evergreen-society-profile pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="it-teacher-details-left">
                  <div className="it-teacher-details-left-thumb about-society-logo-thumb">
                    <img
                      src={societyLogo}
                      alt="Education Welfare Society logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h4>Our Society</h4>
                    <span>Education Welfare Society</span>
                  </div>
                  <div className="it-teacher-details-right-content about-extended-copy">
                    <p>
                      Education Welfare Society was formed by our visionary
                      Chairman who was nominated as Secretary in the society
                      under the guidance of Mr. Suresh Chandra Joshi, a
                      businessman by profession who was appointed as the
                      president of the society in 1993. The society is being
                      formed with a vision to explore education in the area of
                      Tularampur, and started first school namely Ever Green
                      Public School with minimum funds and infrastructure but
                      the vision was to give best to the students and society
                      which is same as of now.
                    </p>
                    <p>
                      The society also organizes many other programs for the
                      people of locality like health camps, Marathon on Kargil
                      Vijay Diwas, different co-curricular competition, women
                      awareness programs, child safety programs etc. Society is
                      also having record of donating people in need as meal
                      donation programs was conducted during Covid-19 Pandemic,
                      dress to needy students of primary schools, furniture in
                      primary schools, other donations for organization of
                      different community programs like Ramleela, Krishna Leela,
                      Ganesh Mahotsav etc.
                    </p>
                    <p>
                      As exploring education is the primary vision of Education
                      Welfare Society. With this vision the society has started
                      another school in lush green environment of Haripur
                      Bacchi, Halduchaur, namely &ldquo;Immortal International
                      School&rdquo; in 2019 and Pre-Primary section of Evergreen
                      is also expanded with new name &ldquo;Berrybees Pre
                      School&rdquo; in 2022.
                    </p>
                    <p>
                      At present the society is having 7 intellectual members
                      in all with vision of growth and success and the members
                      are supporting all branches positively to grow more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SocietyMain;
