import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import PrevArrow from '../../components/SVG/PrevArrow';
import NextArrow from '../../components/SVG/NextArrow';

import img1 from '../../assets/img/course/course-2-1.jpg';
import img2 from '../../assets/img/course/course-2-2.jpg';
import img3 from '../../assets/img/course/course-2-3.jpg';
import img4 from '../../assets/img/course/course-2-4.jpg';
import img5 from '../../assets/img/course/course-2-5.jpg';
import img6 from '../../assets/img/course/course-2-6.jpg';
import img7 from '../../assets/img/value/value-1.jpg';
import img8 from '../../assets/img/about/ed-about-1-1.jpg';

const POOL = [img1, img2, img3, img4, img5, img6, img7, img8];

const FacilityCarousel = ({ images, navIndex }) => {
  const prevClass = `about-fac-prev-${navIndex}`;
  const nextClass = `about-fac-next-${navIndex}`;
  const sliderOption = {
    speed: 900,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: { delay: 4500, disableOnInteraction: false },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
    navigation: {
      prevEl: `.${prevClass}`,
      nextEl: `.${nextClass}`,
    },
  };

  return (
    <div className="about-facility-carousel mb-35">
      <div className="d-flex justify-content-end gap-2 mb-20">
        <button type="button" className={`${prevClass} ed-team-arrow-box border-0 bg-transparent`}>
          <PrevArrow />
        </button>
        <button type="button" className={`${nextClass} ed-team-arrow-box border-0 bg-transparent`}>
          <NextArrow />
        </button>
      </div>
      <Swiper modules={[Autoplay, Navigation]} {...sliderOption} className="swiper-wrapper">
        {images.map((src, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="about-facility-thumb overflow-hidden rounded">
              <img src={src} alt="" className="w-100" style={{ objectFit: 'cover', maxHeight: 220 }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const pickImages = (count, offset) =>
  Array.from({ length: count }, (_, i) => POOL[(offset + i) % POOL.length]);

const FACILITIES = [
  {
    title: 'School Transport',
    body: `The School has its own Bus Service, for the students residing in the far away localities. We have Nineteen buses for New Mandi, Teenpani, Old I.T.I., Garaparao, Motinagar, Motahaldu, Beriparao, Halduchaur, Lalkuan & Bindukhatta respectively. We are also providing school bus facility in Gaulapaar, Kunwarpur, Shantipuri, Pantnagar from the session 2024-25.`,
    count: 3,
    offset: 0,
  },
  {
    title: 'Library',
    body: `The School library is the hub of intellectual activities and is rich in reading material and reference resources, which provide information and ideas that are fundamental for functioning successfully in today's information and knowledge-based society. The students can update their knowledge about the latest developments in various fields through the different newspapers and magazines, available for them in the school.`,
    count: 5,
    offset: 1,
  },
  {
    title: 'Class Rooms',
    body: `Neat clean and spacious and well furnished Classrooms providing unique atmosphere for students to concentrate in their studies. Our Classrooms are properly ventilated, well-lit and spacious. Specially designed, modern, ergonomic and attractive furniture is provided in the classrooms. In order to monitor the progress and performance of students in the class rooms, Projectors/ LED Panels are installed in each and every section to access digital content. Presently 44 Classrooms are installed with LED Panels/ Projectors. All classes are fitted with CCTV Camera to monitor the activities of the students.`,
    count: 5,
    offset: 2,
  },
  {
    title: 'Chemistry Laboratory',
    body: `The Chemistry lab of the School is fully equipped with necessary apparatus, chemicals, salts and solutions required by the students to learn through experiments. Realising the power of concentrated acids and watching flame of different colours during flame test make the student aware and bring the joy of learning for students. Our chemistry lab not only help the students understand different chemical reactions but also help them to understand various chemical reactions we see in our daily life.`,
    count: 5,
    offset: 3,
  },
  {
    title: 'NCC',
    body: `School is having 2 different wings of NCC for students of class VIII onwards. We are offering 150 seats for JD/ JW and SD/ SW under: 1 UK AIR SQN NCC, PANTNAGAR. and 79 BN NCC, NAINITAL`,
    count: 3,
    offset: 4,
  },
  {
    title: 'Physics Laboratory',
    body: `The School has a well equipped Physics lab where students learn various concepts of the subject by practically experimenting with the apparatus. Experiments not only help students in understanding the concept in a better way but also create an excitement among students. Our Physics laboratory is equipped with all the necessary equipment and models to demonstrate practical applications of theoretical physics.`,
    count: 5,
    offset: 5,
  },
  {
    title: 'Biology Laboratory',
    body: `The Biology lab is well stocked with Microscopes, live specimens of plants and animals, human skeleton, clay models and charts. Understanding life and working of different body parts is one of the most challenging things. With our well stocked and equipped Biology lab we make things simpler for our students.`,
    count: 5,
    offset: 6,
  },
  {
    title: 'Computer Lab',
    body: `Computer education is an integral part of modern education system. Our School also emphasize on computer education in accordance with C.B.S.E curriculum. We have separate labs for Juniors and Seniors at our school. We have 42 Computers installed in Senior Computer lab and 21 Computers installed in Junior Lab. All the computers have Windows based systems with office suites and programming languages installed on to them. Computer lab provides invaluable skills and knowledge essential to the world of information technology.`,
    count: 5,
    offset: 7,
  },
  {
    title: 'Mathematics Lab',
    body: `Math Lab provides opportunity for children to enjoy Mathematics, understand its basic structure, pose and solve meaningful problems. It enables the student to learn Mathematics with the help of concrete objects and to exhibit its relatedness with everyday life.`,
    count: 5,
    offset: 0,
  },
  {
    title: 'Composite Science Lab',
    body: `The School has an extensive Composite Science lab which provides an experimental foundation for the concepts introduced. Students enhance their learning by doing varied experiments which kindles their interest visually and kinaesthetically. It also deviates them from rote learning and enriches their thinking ability and drawing skills. It enables the learners to familiarize themselves with experimental apparatus, scientific methods applied, and to make careful observations and draw conclusions in relation to the experiment.`,
    count: 4,
    offset: 2,
  },
  {
    title: 'STEM & Robotics Lab',
    body: `In STEM Lab (Science, Technology, Engineering and Mathematics), students get the experience of performing hands on activities and build their conceptual understanding about different topics they studied in their text book of Science and Mathematics. STEM Lab provides the platform to develop the scientific attitude among the students. In STEM Lab science and maths kits are available. Demonstration material/ models/ charts are also available.

STEM at Ever Green School not only incorporates teamwork and instruction in the 'soft skills' needed in the future but also fulfils students learning experience by supporting them in their ability to transfer learning to performing skills, by which students can solve new problems and draw conclusions based upon previously learned principles applied through science, technology, engineering and mathematics.

Robotics is a school programme for students to stimulate their tender minds to engage themselves with the latest technology around them. We train the young minds to nurture scientific outlook and to be future Techno scientists.`,
    count: 3,
    offset: 5,
  },
  {
    title: 'Interactive Classes',
    body: `In today's competitive world, children need the skill sets, which are beyond subject knowledge and require concentration assimilation and retention. In this regard the role of smart classes is quite important. At Ever Green its importance is manifested with the installation Smart Boards in every class room. Our Smart classes comprise the use of all interactive modules like videos and presentations which are appealing to students. In our smart classes animated visuals are used to teach a concept. This kind of visual is eye-catching and our young students easily relate with them. Watching highly engaging visuals and animations makes learning enjoyable for students while improving their overall academic performance in school.`,
    count: 4,
    offset: 1,
  },
];

const AboutFacilitiesSection = () => {
  return (
    <section id="about-facilities" className="it-about-3-area fix pt-100 pb-100 grey-bg-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            {FACILITIES.map((f, idx) => (
              <div
                key={f.title}
                className={`about-facility-block pb-60 ${idx < FACILITIES.length - 1 ? 'mb-50 border-bottom' : ''}`}
              >
                <h3 className="it-section-title-3 pb-25" style={{ fontSize: '1.5rem' }}>
                  {f.title}
                </h3>
                <FacilityCarousel images={pickImages(f.count, f.offset)} navIndex={idx} />
                {f.body.split('\n\n').map((para, i) => (
                  <p key={i} className={i === 0 ? 'mb-20' : 'mb-15'}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFacilitiesSection;
