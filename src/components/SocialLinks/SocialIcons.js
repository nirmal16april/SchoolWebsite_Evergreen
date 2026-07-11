import React from 'react';
import { SOCIAL_LINKS } from '../../constants/socialLinks';

const SocialIcons = ({
  className = 'it-footer-social',
  links = SOCIAL_LINKS,
  useBrandColors = false,
}) => {
  return (
    <div className={className}>
      {links.map(({ id, href, icon, label, brandColor }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={
            useBrandColors && brandColor
              ? { background: brandColor, color: '#fff' }
              : undefined
          }
        >
          <i className={icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
