import React from 'react';
import ToppersBoard from '../../components/Toppers/ToppersBoard';

/** Use optional `photo` (imported image URL) when portraits are available. */
const CLASS_XII_2024_25 = [
  { name: 'SAKSHI', score: '97.6%' },
  { name: 'KARAN BHATT', score: '96.6%' },
  { name: 'DIVYANSHI PATHAK', score: '94.8%' },
  { name: 'ADITYA SINGH RATHORE', score: '94.6%' },
  { name: 'MANSI DEORARI', score: '93.6%' },
  { name: 'DISHA RAJDAN', score: '93.4%' },
  { name: 'HARSHIT TIWARI', score: '92.8%' },
  { name: 'ANSHU BHATT', score: '92%' },
  { name: 'SAUMYA JOSHI', score: '91.2%' },
  { name: 'DIKSHA TIWARI', score: '90.6%' },
  { name: 'DISHA NEGI', score: '90.6%' },
  { name: 'GARIMA BATRA', score: '90.4%' },
];

const SESSIONS_CLASS_XII = [
  {
    id: '2024-25',
    label: '2024–25',
    boardExamYear: '2025',
    students: CLASS_XII_2024_25,
  },
  {
    id: '2023-24',
    label: '2023–24',
    boardExamYear: '2024',
    students: [],
  },
];

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
