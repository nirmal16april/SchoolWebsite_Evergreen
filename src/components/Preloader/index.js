import React from 'react';

import Logo from '../../assets/img/logo/logo.svg';

const Preloader = () => {
  return (
    <div id="it-loading" className="evergreen-preloader">
      <div className="evergreen-preloader__bg" aria-hidden="true" />
      <div id="it-loading-center" className="evergreen-preloader__stage">
        <div id="it-loading-absolute" className="evergreen-preloader__absolute">
          <div className="it-loading-content evergreen-preloader__content">
            <div className="evergreen-preloader__brand">
              <div className="evergreen-preloader__logo-shell" aria-hidden="true" />
              <img
                className="it-loading-logo evergreen-preloader__logo"
                src={Logo}
                alt="Ever Green Senior Secondary School"
              />
            </div>
            <p className="evergreen-preloader__title">
              Ever Green Senior Secondary School
            </p>
            <p className="evergreen-preloader__hint">Welcome — preparing your page…</p>
            <div
              className="evergreen-preloader__track"
              role="progressbar"
              aria-label="Loading"
            >
              <span className="evergreen-preloader__track-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
