/**
 * Mock highlights data — consumed ONLY by highlights.ts when the live API
 * is unavailable. Page components must never import this file directly.
 */

import {
  HIGHLIGHTS_CLASS_XII_TOPPERS,
  HIGHLIGHTS_CLASS_X_TOPPERS,
} from '../../../../data/toppersStatic';

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

export const MOCK_CLASS_X_TOPPERS = HIGHLIGHTS_CLASS_X_TOPPERS;

export const MOCK_CLASS_XII_TOPPERS = HIGHLIGHTS_CLASS_XII_TOPPERS;
