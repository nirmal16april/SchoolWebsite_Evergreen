import React, { useMemo, useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import titleImg from '../../assets/img/about/title-home2.png';

function getInitials(name) {
  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * @param {object} props
 * @param {string} props.breadcrumbTitle
 * @param {string} props.heading
 * @param {{ id: string, label: string, boardExamYear?: string, students: { name: string, score: string, photo?: string }[] }[]} props.sessions
 */
const ToppersBoard = ({
  eyebrow = 'Our Achievers',
  heading,
  breadcrumbTitle,
  breadcrumbSub = 'Our Achievers',
  sessions,
}) => {
  const validSessions = useMemo(
    () => (Array.isArray(sessions) ? sessions.filter((s) => s && s.id) : []),
    [sessions]
  );
  const [activeId, setActiveId] = useState(
    validSessions[0]?.id ?? ''
  );

  const active = useMemo(
    () => validSessions.find((s) => s.id === activeId) ?? validSessions[0],
    [validSessions, activeId]
  );

  const students = active?.students ?? [];

  return (
    <main className="toppers-board-root">
      <Breadcrumb title={breadcrumbTitle} subTitle={breadcrumbSub} />

      <div className="toppers-hero">
        <div className="toppers-hero__bg" aria-hidden="true" />
        <div className="container position-relative z-index-2">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 text-center">
              <span className="toppers-hero__chip">
                <img src={titleImg} alt="" /> {eyebrow}
              </span>
              <h2 className="toppers-hero__title">{heading}</h2>
              <p className="toppers-hero__lead">
                Celebrating our students&apos; dedication and outstanding board
                results. Select an academic session to view the honour roll.
                Student portraits can be added anytime — placeholders show
                initials until photos are provided.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="toppers-body grey-bg-4 pt-50 pb-120">
        <div className="container">
          {validSessions.length > 1 && (
            <div className="toppers-session-bar row justify-content-center mb-45">
              <div className="col-xl-10">
                <p className="toppers-session-label text-center mb-20">
                  Academic session
                </p>
                <div
                  className="toppers-session-tabs d-flex flex-wrap justify-content-center gap-2"
                  role="tablist"
                  aria-label="Choose academic session"
                >
                  {validSessions.map((sess) => {
                    const isActive = sess.id === active?.id;
                    return (
                      <button
                        key={sess.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`toppers-session-tab ${isActive ? 'is-active' : ''}`}
                        onClick={() => setActiveId(sess.id)}
                      >
                        <span className="toppers-session-tab__label">{sess.label}</span>
                        {sess.boardExamYear && (
                          <span className="toppers-session-tab__year">
                            Board {sess.boardExamYear}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {validSessions.length === 1 && active?.boardExamYear && (
            <div className="text-center mb-40">
              <span className="toppers-single-session-pill">
                Session {active.label}
                {active.boardExamYear && (
                  <>
                    {' '}
                    · Board {active.boardExamYear}
                  </>
                )}
              </span>
            </div>
          )}

          {students.length === 0 ? (
            <div className="toppers-empty text-center py-5 px-3">
              <div className="toppers-empty__icon mb-20">
                <i className="fa-light fa-medal" aria-hidden="true" />
              </div>
              <h3 className="toppers-empty__title">Results coming soon</h3>
              <p className="toppers-empty__text mb-0">
                There are no published toppers for this session yet. Check back
                after board results are declared.
              </p>
            </div>
          ) : (
            <div className="row g-4 justify-content-center">
              {students.map((s, index) => {
                const rank = index + 1;
                const tier =
                  rank === 1
                    ? 'gold'
                    : rank === 2
                      ? 'silver'
                      : rank === 3
                        ? 'bronze'
                        : '';
                return (
                  <div
                    key={`${active?.id}-${s.name}-${index}`}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  >
                    <article
                      className={`toppers-card ${tier ? `toppers-card--${tier}` : ''}`}
                    >
                      <div className="toppers-card__photo-wrap">
                        {s.photo ? (
                          <img
                            className="toppers-card__photo"
                            src={s.photo}
                            alt=""
                          />
                        ) : (
                          <div
                            className="toppers-card__photo toppers-card__photo--placeholder"
                            aria-hidden="true"
                          >
                            <span className="toppers-card__initials">
                              {getInitials(s.name)}
                            </span>
                          </div>
                        )}
                        <span className={`toppers-card__rank-badge ${tier ? `toppers-card__rank-badge--${tier}` : ''}`}>
                          #{rank}
                        </span>
                      </div>
                      {tier && (
                        <div className="toppers-card__medal" aria-hidden="true">
                          <i className={`fa-light fa-trophy toppers-card__trophy toppers-card__trophy--${tier}`} />
                        </div>
                      )}
                      {!s.photo && (
                        <p className="toppers-card__photo-hint">Portrait — optional</p>
                      )}
                      <h3 className="toppers-card__name">{s.name}</h3>
                      <div className="toppers-card__score-row">
                        <span className="toppers-card__score-label">Score</span>
                        <span className="toppers-card__score">{s.score}</span>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ToppersBoard;
