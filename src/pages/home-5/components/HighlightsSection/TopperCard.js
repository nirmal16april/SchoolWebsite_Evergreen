import React from 'react';

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

function getRankTier(rank) {
  if (rank === 1) {
    return 'gold';
  }

  if (rank === 2) {
    return 'silver';
  }

  if (rank === 3) {
    return 'bronze';
  }

  return null;
}

const TopperCard = ({ topper }) => {
  const tier = getRankTier(topper.rank);

  return (
    <div
      className={`evergreen-highlight-card evergreen-highlight-card--topper ${
        tier ? `evergreen-highlight-card--${tier}` : ''
      }`}
    >
      <div className="evergreen-highlight-card__media">
        {topper.photo ? (
          <img
            src={topper.photo}
            alt={topper.name}
            className="evergreen-highlight-card__photo"
          />
        ) : (
          <div className="evergreen-highlight-card__photo evergreen-highlight-card__photo--placeholder">
            <span>{getInitials(topper.name)}</span>
          </div>
        )}
        {topper.rank ? (
          <span
            className={`evergreen-highlight-card__rank ${
              tier ? `evergreen-highlight-card__rank--${tier}` : ''
            }`}
          >
            #{topper.rank}
          </span>
        ) : null}
      </div>
      <h4 className="evergreen-highlight-card__name">{topper.name}</h4>
      <div className="evergreen-highlight-card__score-row">
        <span className="evergreen-highlight-card__score-label">Score</span>
        <span className="evergreen-highlight-card__score">{topper.score}</span>
      </div>
      {topper.academicYear ? (
        <p className="evergreen-highlight-card__meta">Session {topper.academicYear}</p>
      ) : null}
    </div>
  );
};

export default TopperCard;
