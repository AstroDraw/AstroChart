/**
 * Returns `import.meta.env.BASE_URL` without a trailing slash, so it can
 * be safely concatenated with a leading-slash path:
 *
 *   withBase('/installation')  →  '/AstroChart/installation'
 *
 * The base itself comes from `base` in astro.config.mjs — the only place
 * that ever needs to change when the deployment URL changes.
 */
export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
