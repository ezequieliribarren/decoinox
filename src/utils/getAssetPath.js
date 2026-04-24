const ABSOLUTE_URL_REGEX = /^(?:[a-z]+:)?\/\//i;

export const getAssetPath = (path) => {
  if (!path || typeof path !== 'string') {
    return path;
  }

  if (
    ABSOLUTE_URL_REGEX.test(path) ||
    path.startsWith('data:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  if (path.startsWith('/')) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBaseUrl}${path}`;
};
