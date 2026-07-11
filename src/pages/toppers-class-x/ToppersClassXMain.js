import React from 'react';
import ToppersBoard from '../../components/Toppers/ToppersBoard';
import { SESSIONS_CLASS_X } from '../../data/toppersStatic';

const ToppersClassXMain = () => {
  return (
    <ToppersBoard
      breadcrumbTitle="Class X Toppers"
      heading="Class X Board Toppers"
      sessions={SESSIONS_CLASS_X}
    />
  );
};

export default ToppersClassXMain;
