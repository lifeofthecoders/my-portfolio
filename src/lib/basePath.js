export function withBasePath(path = '/') {
  if (!path || path === '#') return path;

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (!base) return normalized;

  return `${base}${normalized}`;
}
