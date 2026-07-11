import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SocialIcons from '../../components/SocialLinks/SocialIcons';
import { SOCIAL_EMBED_LINKS } from '../../constants/socialLinks';

const SocialMediaSection = () => {
  return (
    <section className="evergreen-social-area pt-115 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <SectionTitle
              itemClass="it-course-title-box mb-55 text-center"
              subTitleClass="it-section-subtitle-2"
              subTitle="Ever Green @ Social Links"
              titleClass="ed-section-title"
              title="Follow Ever Green Haldwani on Social Media"
            />
          </div>
        </div>

        <div className="row justify-content-center mb-40">
          <div className="col-auto">
            <SocialIcons className="evergreen-social-icons" useBrandColors />
          </div>
        </div>

        <div className="row">
          {SOCIAL_EMBED_LINKS.map(({ id, label, href, icon, embedUrl }) => (
            <div
              key={id}
              className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="evergreen-social-card">
                <div className="evergreen-social-card__header">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Ever Green on ${label}`}
                    className={`evergreen-social-card__brand evergreen-social-card__brand--${id}`}
                  >
                    <i className={icon} />
                  </a>
                  <h3 className="evergreen-social-card__title">{label}</h3>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evergreen-social-card__link"
                  >
                    Follow us
                  </a>
                </div>
                <div className="evergreen-social-card__embed">
                  <iframe
                    src={embedUrl}
                    title={`Ever Green Senior Secondary School on ${label}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
