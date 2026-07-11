import React from 'react';
import ToppersBoard from '../../components/Toppers/ToppersBoard';
import { SESSIONS_CLASS_XII } from '../../data/toppersStatic';

const ToppersClassXIIMain = () => {
  return (
    <ToppersBoard
      breadcrumbTitle="Class XII Toppers"
      heading="Class XII Board Toppers"
      sessions={SESSIONS_CLASS_XII}
    />
  );
};

export default ToppersClassXIIMain;
