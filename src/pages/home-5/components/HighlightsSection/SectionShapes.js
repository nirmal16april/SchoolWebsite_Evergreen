import React from 'react';

const SectionShapeLeft = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="18" fill="#704FE6" fillOpacity="0.12" />
    <circle cx="78" cy="42" r="10" fill="#FE543D" fillOpacity="0.14" />
    <path
      d="M18 88C34 72 52 96 70 82C86 70 96 88 104 78"
      stroke="#704FE6"
      strokeOpacity="0.2"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M88 18L94 32L108 34L97 44L100 58L88 51L76 58L79 44L68 34L82 32L88 18Z"
      fill="#FFD25D"
      fillOpacity="0.22"
    />
  </svg>
);

const SectionShapeRight = () => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="78" cy="28" r="16" fill="#2FC7A1" fillOpacity="0.14" />
    <rect
      x="20"
      y="58"
      width="36"
      height="24"
      rx="5"
      fill="#704FE6"
      fillOpacity="0.1"
    />
    <path
      d="M26 66H50"
      stroke="#704FE6"
      strokeOpacity="0.22"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M26 72H46"
      stroke="#704FE6"
      strokeOpacity="0.18"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="34" cy="24" r="5" fill="#FF9E0E" fillOpacity="0.25" />
    <circle cx="52" cy="34" r="4" fill="#FE543D" fillOpacity="0.2" />
  </svg>
);

export { SectionShapeLeft, SectionShapeRight };
