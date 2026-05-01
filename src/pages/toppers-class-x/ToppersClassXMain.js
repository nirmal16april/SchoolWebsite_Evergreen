import React from 'react';
import ToppersBoard from '../../components/Toppers/ToppersBoard';

/** Use optional `photo` (imported image URL) when portraits are available. */
const CLASS_X_2025_26 = [
  { name: 'AKASHI JOSHI', score: '98.4%' },
  { name: 'HIMAKSHI BHATT', score: '98.2%' },
  { name: 'BHOOMIKA KABDWAL', score: '98.2%' },
  { name: 'PRASHANSA TIWARI', score: '97.4%' },
  { name: 'RIYA AIRY', score: '97.2%' },
  { name: 'MAHI BHATT', score: '96.6%' },
  { name: 'AYUSH PANT', score: '95.4%' },
  { name: 'TAMANNA DANGI', score: '95%' },
  { name: 'POOJA KAWDAL', score: '94.8%' },
  { name: 'PRIYANSHI', score: '93.4%' },
  { name: 'KARTIKEY SUNAL', score: '93.2%' },
  { name: 'YOGITA PANDEY', score: '92.4%' },
  { name: 'ANUSHKA ATWAL', score: '92.4%' },
  { name: 'VINAYAK JOSHI', score: '92.4%' },
  { name: 'VANSH KUMAR', score: '92.2%' },
  { name: 'DEEPANSHI DWIVEDI', score: '92%' },
  { name: 'KANISHKA KASHYAP', score: '92%' },
  { name: 'NAITIK RAUTELA', score: '92%' },
  { name: 'MOHAMMAD IKRAM', score: '92%' },
  { name: 'DEEPAK SINGH', score: '91.6%' },
  { name: 'PIYUSH JOSHI', score: '91.4%' },
  { name: 'MOHIT BASERA', score: '91.4%' },
  { name: 'NAVAL KISHOR JOSHI', score: '90.8%' },
  { name: 'DIVYANSHU JALAL', score: '90.6%' },
  { name: 'MANOMAY PATHAK', score: '90%' },
  { name: 'MRADUL SINGH DHANIK', score: '90.0%' },
  { name: 'MAYANK PANDEY', score: '90.0%' },
];

const SESSIONS_CLASS_X = [
  {
    id: '2025-26',
    label: '2025–26',
    boardExamYear: '2026',
    students: CLASS_X_2025_26,
  },
  {
    id: '2024-25',
    label: '2024–25',
    boardExamYear: '2025',
    students: [],
  },
];

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
