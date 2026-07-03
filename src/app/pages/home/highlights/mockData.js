/**
 * Mock highlights data — consumed ONLY by highlights.ts when the live API
 * is unavailable. Page components must never import this file directly.
 */

export const MOCK_STUDENT_BIRTHDAYS = [
  {
    id: 'bday-1',
    name: 'Aarav Sharma',
    className: 'Class VIII-A',
    dateOfBirth: '2026-07-03',
    photo: null,
    wish: 'Happy Birthday! Wishing you a wonderful year filled with joy and success.',
  },
  {
    id: 'bday-2',
    name: 'Priya Joshi',
    className: 'Class VI-B',
    dateOfBirth: '2026-07-05',
    photo: null,
    wish: 'Many happy returns! May your special day bring smiles and beautiful memories.',
  },
  {
    id: 'bday-3',
    name: 'Rohan Mehta',
    className: 'Class X-C',
    dateOfBirth: '2026-07-08',
    photo: null,
    wish: 'Happy Birthday! Keep shining bright and reaching for your dreams.',
  },
  {
    id: 'bday-4',
    name: 'Sneha Pant',
    className: 'Class VII-A',
    dateOfBirth: '2026-07-12',
    photo: null,
    wish: 'Warm birthday wishes! May this year bring new achievements and happiness.',
  },
];

export const MOCK_CLASS_X_TOPPERS = [
  { id: 'x-1', name: 'AKASHI JOSHI', score: '98.4%', rank: 1, photo: null, classLevel: 10, academicYear: '2025-26' },
  { id: 'x-2', name: 'HIMAKSHI BHATT', score: '98.2%', rank: 2, photo: null, classLevel: 10, academicYear: '2025-26' },
  { id: 'x-3', name: 'BHOOMIKA KABDWAL', score: '98.2%', rank: 3, photo: null, classLevel: 10, academicYear: '2025-26' },
  { id: 'x-4', name: 'PRASHANSA TIWARI', score: '97.4%', rank: 4, photo: null, classLevel: 10, academicYear: '2025-26' },
  { id: 'x-5', name: 'RIYA AIRY', score: '97.2%', rank: 5, photo: null, classLevel: 10, academicYear: '2025-26' },
];

export const MOCK_CLASS_XII_TOPPERS = [
  { id: 'xii-1', name: 'SAKSHI', score: '97.6%', rank: 1, photo: null, classLevel: 12, academicYear: '2024-25' },
  { id: 'xii-2', name: 'KARAN BHATT', score: '96.6%', rank: 2, photo: null, classLevel: 12, academicYear: '2024-25' },
  { id: 'xii-3', name: 'DIVYANSHI PATHAK', score: '94.8%', rank: 3, photo: null, classLevel: 12, academicYear: '2024-25' },
  { id: 'xii-4', name: 'ADITYA SINGH RATHORE', score: '94.6%', rank: 4, photo: null, classLevel: 12, academicYear: '2024-25' },
  { id: 'xii-5', name: 'MANSI DEORARI', score: '93.6%', rank: 5, photo: null, classLevel: 12, academicYear: '2024-25' },
];
