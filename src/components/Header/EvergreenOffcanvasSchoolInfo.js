import React from 'react';

const MAP_LINK =
  'https://www.google.com/maps?cid=18409507374368258856&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed';

export function EvergreenOffcanvasIntro() {
  return (
    <div className="itoffcanvas__text">
      <p>
        Ever Green Senior Secondary School is a CBSE-affiliated English-medium school
        in Haldwani, Uttarakhand. Use the links below for admissions, transport,
        fees, or general enquiries.
      </p>
    </div>
  );
}

export function EvergreenOffcanvasGetInTouch() {
  return (
    <div className="itoffcanvas__info">
      <h3 className="offcanva-title">Get in touch</h3>
      <div className="it-info-wrapper mb-20 d-flex align-items-center">
        <div className="itoffcanvas__info-icon">
          <a href="mailto:evergreenpublicschool42@yahoo.in">
            <i className="fal fa-envelope" />
          </a>
        </div>
        <div className="itoffcanvas__info-address">
          <span>Email</span>
          <a href="mailto:evergreenpublicschool42@yahoo.in">
            evergreenpublicschool42@yahoo.in
          </a>
        </div>
      </div>
      <div className="it-info-wrapper mb-20 d-flex align-items-center">
        <div className="itoffcanvas__info-icon">
          <a href="tel:+915946292491">
            <i className="fal fa-phone-alt" />
          </a>
        </div>
        <div className="itoffcanvas__info-address">
          <span>Reception</span>
          <a href="tel:+915946292491">(05946) 292491</a>
        </div>
      </div>
      <div className="it-info-wrapper mb-20 d-flex align-items-center">
        <div className="itoffcanvas__info-icon">
          <a href="tel:+919997182574">
            <i className="fal fa-mobile-android" />
          </a>
        </div>
        <div className="itoffcanvas__info-address">
          <span>Mobile</span>
          <a href="tel:+919997182574">+91 99971 82574</a>
          <a href="tel:+918958851161">+91 89588 51161</a>
        </div>
      </div>
      <div className="it-info-wrapper mb-20 d-flex align-items-center">
        <div className="itoffcanvas__info-icon">
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-map-marker-alt" />
          </a>
        </div>
        <div className="itoffcanvas__info-address">
          <span>Campus</span>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            Sri Ganga Vihar Colony, Beri Parao, P.O. Motahaldu, Haldwani, Nainital
            263139
          </a>
        </div>
      </div>
    </div>
  );
}
