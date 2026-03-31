# Docs Deployment Guide

This document explains how the AstroChart documentation site is built and deployed to GitHub Pages directly from this repository.

The live site is served at **https://astrodraw.github.io/AstroChart/**.

---

## What the Workflow Does

The workflow file is located at `.github/workflows/docs-deploy.yml`.

It runs on every push to `main` that touches either `website/**` or `project/src/**`, and can also be triggered manually.

The workflow has two jobs:

### Job 1: `build`

1. **Checkout** — checks out the `AstroChart` repository.
2. **Set up Node.js 20** — installs Node using `actions/setup-node`.
3. **Install root dependencies** — runs `npm ci` at the repo root.
4. **Build library** — runs `npm run build` to produce `dist/astrochart.js` (webpack UMD bundle).
5. **Copy bundle to website** — copies `dist/astrochart.js` → `website/public/astrochart.js` so the live demos can load it.
6. **Install website dependencies** — runs `npm ci` inside `website/`.
7. **Build Astro site** — runs `npm run build` inside `website/`, outputting the static site to `website/dist/`.
8. **Upload Pages artifact** — uploads `website/dist/` as a GitHub Pages artifact using the official `actions/upload-pages-artifact` action.

### Job 2: `deploy`

1. **Deploy to GitHub Pages** — deploys the uploaded artifact using the official `actions/deploy-pages` action. Uses GitHub's OIDC token — no secrets or SSH keys needed.

---

## One-Time Setup (GitHub Pages source)

This only needs to be done once per repository.

1. Go to the repository **Settings → Pages**:  
   `https://github.com/AstroDraw/AstroChart/settings/pages`
2. Under **Source**, select **GitHub Actions** (not a branch).
3. Click **Save**.

That's it. The workflow handles everything else automatically.

> **Note:** GitHub automatically creates a `github-pages` environment on the first successful deploy. You can see it under **Settings → Environments**.

---

## How to Manually Trigger the Workflow

You can trigger a deploy at any time without pushing code:

1. Go to the **Actions** tab in the AstroChart repository:  
   `https://github.com/AstroDraw/AstroChart/actions/workflows/docs-deploy.yml`
2. Click **Run workflow**
3. Select the branch (typically `main`)
4. Click **Run workflow**

The workflow will run and deploy the current state of `main` to GitHub Pages.

---

## How to Debug Deploy Failures

### Step 1 — Check the workflow logs

Go to `https://github.com/AstroDraw/AstroChart/actions` and click the failed run. Each step's output is expandable. Common failure points:

| Step | Likely cause |
|---|---|
| Build library | TypeScript compile error or missing dep — run `npm run build` locally |
| Build Astro site | MDX/Astro error — run `cd website && npm run build` locally |
| Upload Pages artifact | `website/dist/` is empty or missing — check the Astro build step above it |
| Deploy to GitHub Pages | Pages source not set to "GitHub Actions" — see one-time setup above |

### Step 2 — Permissions error on deploy

If the deploy job fails with a permissions error:

- Verify the repository **Settings → Pages → Source** is set to **GitHub Actions**, not a branch.
- Verify the workflow has the correct top-level permissions (`pages: write`, `id-token: write`).
- Check that the `deploy` job declares `environment: name: github-pages`.

### Step 3 — Verify the deployed site

After a successful run:

1. Visit `https://astrodraw.github.io/AstroChart/` — homepage should load.
2. Open browser DevTools → Network tab — no 404s for `/AstroChart/astrochart.js`.
3. Click through the sidebar — navigation should work.
4. Open the browser console — no JS errors.

If the site shows stale content, GitHub Pages may have a CDN cache delay of up to 10 minutes after deployment.

---

## Astro base path configuration

The `website/astro.config.mjs` file is configured with:

```js
site: 'https://astrodraw.github.io/AstroChart',
base: '/AstroChart',
```

The `base` option tells Astro to prefix all internal links and asset URLs with `/AstroChart`, which is required for a project repository deployed to a sub-path.

If the site is ever moved to the root URL (`https://astrodraw.github.io/`), remove the `base` option and update `site` accordingly.
