import React from 'react';

const BirthdayIllustration = () => (
  <svg
    className="evergreen-highlight-illustration__svg"
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="28" cy="24" r="14" fill="#FE543D" fillOpacity="0.18" />
    <path
      d="M28 38V52"
      stroke="#FE543D"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="52" cy="18" r="10" fill="#704FE6" fillOpacity="0.16" />
    <path
      d="M52 28V40"
      stroke="#704FE6"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="18"
      y="78"
      width="44"
      height="28"
      rx="6"
      fill="#FE543D"
      fillOpacity="0.12"
    />
    <path
      d="M18 86H62"
      stroke="#FE543D"
      strokeOpacity="0.28"
      strokeWidth="2"
    />
    <circle cx="30" cy="82" r="3" fill="#FE543D" fillOpacity="0.35" />
    <circle cx="40" cy="80" r="3" fill="#FFD25D" fillOpacity="0.45" />
    <circle cx="50" cy="83" r="3" fill="#704FE6" fillOpacity="0.3" />
    <path
      d="M98 34L104 48L118 50L107 60L110 74L98 67L86 74L89 60L78 50L92 48L98 34Z"
      fill="#FFD25D"
      fillOpacity="0.28"
    />
    <circle cx="124" cy="96" r="5" fill="#704FE6" fillOpacity="0.2" />
    <circle cx="110" cy="108" r="4" fill="#FE543D" fillOpacity="0.22" />
    <circle cx="132" cy="112" r="3" fill="#FFD25D" fillOpacity="0.35" />
  </svg>
);

const ClassXiiIllustration = () => (
  <svg
    className="evergreen-highlight-illustration__svg"
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M80 18L88 44H112L92 58L100 84L80 70L60 84L68 58L48 44H72L80 18Z"
      fill="#FF9E0E"
      fillOpacity="0.22"
    />
    <path
      d="M58 92H102V98C102 101.314 99.3137 104 96 104H64C60.6863 104 58 101.314 58 98V92Z"
      fill="#704FE6"
      fillOpacity="0.14"
    />
    <rect
      x="64"
      y="104"
      width="32"
      height="10"
      rx="3"
      fill="#0E2A46"
      fillOpacity="0.12"
    />
    <path
      d="M48 58H112"
      stroke="#FF9E0E"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="36" cy="36" r="8" fill="#704FE6" fillOpacity="0.12" />
    <circle cx="128" cy="40" r="6" fill="#FF9E0E" fillOpacity="0.2" />
    <path
      d="M24 108C34 98 44 118 54 108"
      stroke="#704FE6"
      strokeOpacity="0.2"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M106 108C116 98 126 118 136 108"
      stroke="#704FE6"
      strokeOpacity="0.2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ClassXIllustration = () => (
  <svg
    className="evergreen-highlight-illustration__svg"
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="80" cy="58" r="30" fill="#704FE6" fillOpacity="0.12" />
    <circle
      cx="80"
      cy="58"
      r="22"
      stroke="#704FE6"
      strokeOpacity="0.28"
      strokeWidth="2"
    />
    <path
      d="M68 78C68 72 73 68 80 68C87 68 92 72 92 78V86H68V78Z"
      fill="#704FE6"
      fillOpacity="0.16"
    />
    <path
      d="M74 86H86V94C86 97 84 99 80 99C76 99 74 97 74 94V86Z"
      fill="#0E2A46"
      fillOpacity="0.14"
    />
    <path
      d="M34 104L48 88L56 96L72 78"
      stroke="#2FC7A1"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="104"
      y="88"
      width="34"
      height="24"
      rx="4"
      fill="#2FC7A1"
      fillOpacity="0.12"
    />
    <path
      d="M110 96H132"
      stroke="#2FC7A1"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M110 102H128"
      stroke="#2FC7A1"
      strokeOpacity="0.25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="124" cy="28" r="5" fill="#704FE6" fillOpacity="0.18" />
    <circle cx="36" cy="44" r="4" fill="#2FC7A1" fillOpacity="0.22" />
  </svg>
);

const ILLUSTRATIONS = {
  birthday: BirthdayIllustration,
  'class-xii': ClassXiiIllustration,
  'class-x': ClassXIllustration,
};

const HighlightIllustration = ({ theme }) => {
  const Illustration = ILLUSTRATIONS[theme];

  if (!Illustration) {
    return null;
  }

  return (
    <div className="evergreen-highlight-illustration" aria-hidden="true">
      <Illustration />
    </div>
  );
};

export default HighlightIllustration;
