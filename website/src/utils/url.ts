/**
 * Prepends `import.meta.env.BASE_URL` to a path and ensures a trailing
 * slash on the result, consistent with `trailingSlash: 'always'` in
 * astro.config.mjs (which mirrors GitHub Pages behaviour in dev):
 *
 *   withBase('/installation')  →  '/AstroChart/installation/'
 *   withBase('/changelog')     →  '/AstroChart/changelog/'
 *
 * The base itself comes from `base` in astro.config.mjs — the only place
 * that ever needs to change when the deployment URL changes.
 */
export const withBase = (path: string): string => {
  const url = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
  return url.endsWith('/') ? url : `${url}/`
}
