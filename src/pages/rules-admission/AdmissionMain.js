import React from 'react';
import { Link } from 'react-router-dom';
import AboutInnerPage from '../about/AboutInnerPage';

const AdmissionMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="Admission"
      breadcrumbSub="Rules"
      eyebrow="Rules"
      title="Admission at Ever Green School"
      greyBg={false}
    >
      <div className="rules-page">
        <div className="rules-lead">
          <p>
            Welcome to Ever Green School, where learning goes beyond boundaries
            and every student&apos;s potential is nurtured. We are excited to
            partner with you on your child&apos;s academic journey. Admissions
            are open for the academic session, and we invite you to join our
            vibrant learning community.
          </p>
          <p className="mb-0">
            We believe in holistic education that empowers students to excel
            academically while fostering creativity, leadership, and social
            responsibility — supported by dedicated faculty and enriching
            activities.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Admission procedure</h4>
          <ol className="rules-ordered">
            <li>
              Visit the school campus or contact us online to obtain the
              admission form.
            </li>
            <li>For admission to Nursery, a child should have completed three years.</li>
            <li>
              Once documents are verified, you will receive further instructions
              regarding an interaction or evaluation, depending on the grade
              level.
            </li>
            <li>
              Upon successful completion, proceed with fee payment to secure your
              child&apos;s admission.
            </li>
          </ol>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Documents required</h4>
          <p>Please keep the following ready at the time of admission:</p>
          <ul className="rules-list-check">
            <li>Xerox copy of the date of birth certificate.</li>
            <li>
              Xerox copy of UID (Aadhaar) for admission to Classes IX and XI.
            </li>
            <li>Transfer certificate from the institution last attended.</li>
            <li>Character certificate from the institution last attended.</li>
          </ul>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Why choose Ever Green School?</h4>
          <ul className="rules-list-check">
            <li>
              <strong>Academic excellence:</strong> A curriculum designed to
              foster critical thinking and innovation.
            </li>
            <li>
              <strong>Modern facilities:</strong> Smart classrooms, well-equipped
              labs, and a spacious library.
            </li>
            <li>
              <strong>Holistic development:</strong> Co-curricular and
              extracurricular activities beyond academics.
            </li>
            <li>
              <strong>Inclusive environment:</strong> A supportive, safe space for
              students from all walks of life.
            </li>
          </ul>
        </div>

        <div className="rules-lead">
          <p className="mb-0">
            Join the Ever Green School family and give your child the foundation
            to achieve their dreams.             For queries, call the office at{' '}
            <a href="tel:05946232762">05946-232762</a>, reception at{' '}
            <a href="tel:+918057420801">+91 80574 20801</a>, or{' '}
            <Link to="/contact">contact us online</Link>.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Rules for admission</h4>
          <p>
            All Indians are eligible to be part of the school. Registration is
            done in the month of April. For K.G. classes, a test may be conducted.
            Children in Class XI need to complete the test in English.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Nurturing future leaders</h4>
          <p className="mb-0">
            We aim to inspire young minds into confident, compassionate, and
            capable individuals. Our educators and progressive methods ensure
            personalized attention, character-building, academic rigor, and
            experiential learning — preparing students to meet tomorrow&apos;s
            challenges with resilience and optimism.
          </p>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default AdmissionMain;
