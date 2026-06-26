const DEFAULT_API_ORIGIN = 'http://156.67.104.141:7000';

function configuredApiBaseUrl(): string {
  return (process.env.REACT_APP_API_URL || DEFAULT_API_ORIGIN).replace(/\/$/, '');
}

/** Use same-origin relative URLs on HTTPS to avoid mixed-content blocks. */
export function getApiBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return '';
  }

  return configuredApiBaseUrl();
}

export function toSecureMediaUrl(url: string): string {
  if (!url) {
    return '';
  }

  if (url.startsWith('data:') || url.startsWith('/')) {
    return url;
  }

  if (/^https?:\/\//i.test(url)) {
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
      const configuredBase = configuredApiBaseUrl();

      if (configuredBase && url.startsWith(configuredBase)) {
        const path = url.slice(configuredBase.length);
        return path.startsWith('/') ? path : `/${path}`;
      }

      try {
        const parsed = new URL(url);

        if (parsed.protocol === 'http:') {
          return `${parsed.pathname}${parsed.search}`;
        }
      } catch {
        return url;
      }
    }

    return url;
  }

  const baseUrl = getApiBaseUrl();

  if (!baseUrl) {
    return url.startsWith('/') ? url : `/${url}`;
  }

  return `${baseUrl}/${url.replace(/^\//, '')}`;
}
