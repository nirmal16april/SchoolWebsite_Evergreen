import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

function getInitials(name) {
  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return '?';
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatBirthday(dateValue) {
  if (!dateValue) {
    return 'Birthday';
  }

  const parsed = parseISO(dateValue);

  if (!isValid(parsed)) {
    return dateValue;
  }

  return format(parsed, 'd MMM');
}

function getFirstName(name) {
  return String(name).trim().split(/\s+/)[0] || 'Student';
}

function getBirthdayWish(student, slideIndex = 0) {
  if (student.wish?.trim()) {
    return student.wish.trim();
  }

  const firstName = getFirstName(student.name);
  const wishes = [
    `Happy Birthday, ${firstName}! Wishing you a wonderful year ahead filled with joy and success.`,
    `Many happy returns, ${firstName}! May your special day bring smiles and beautiful memories.`,
    `Happy Birthday, ${firstName}! Keep shining bright and reaching for your dreams.`,
    `Warm birthday wishes to you, ${firstName}! May this year bring new achievements and happiness.`,
  ];

  return wishes[slideIndex % wishes.length];
}

const BirthdayCard = ({ student, slideIndex = 0 }) => (
  <div className="evergreen-highlight-card evergreen-highlight-card--birthday">
    <div className="evergreen-highlight-card__media">
      {student.photo ? (
        <img
          src={student.photo}
          alt={student.name}
          className="evergreen-highlight-card__photo"
        />
      ) : (
        <div className="evergreen-highlight-card__photo evergreen-highlight-card__photo--placeholder">
          <span>{getInitials(student.name)}</span>
        </div>
      )}
      <span className="evergreen-highlight-card__badge">
        <i className="fa-light fa-cake-candles" aria-hidden="true" />
      </span>
    </div>
    <h4 className="evergreen-highlight-card__name">{student.name}</h4>
    <p className="evergreen-highlight-card__meta">{student.className}</p>
    <p className="evergreen-highlight-card__date">
      {formatBirthday(student.dateOfBirth)}
    </p>
    <p className="evergreen-highlight-card__wish">
      {getBirthdayWish(student, slideIndex)}
    </p>
  </div>
);

export default BirthdayCard;
