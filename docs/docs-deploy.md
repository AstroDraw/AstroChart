# Docs Deployment Guide

This document explains how the AstroChart documentation site is built and deployed to [astrodraw.github.io](https://astrodraw.github.io/).

---

## What the Workflow Does

The workflow file is located at `.github/workflows/docs-deploy.yml`.

It runs on every push to `main` that touches either `website/**` or `project/src/**`, and can also be triggered manually.

**Steps (in order):**

1. **Checkout** — checks out the `AstroChart` repository.
2. **Set up Node.js 20** — installs Node using `actions/setup-node`.
3. **Install root dependencies** — runs `npm ci` at the repo root.
4. **Build library** — runs `npm run build` to produce `dist/astrochart.js` (webpack UMD bundle).
5. **Copy bundle to website** — copies `dist/astrochart.js` → `website/public/astrochart.js` so the live demos can load it.
6. **Install website dependencies** — runs `npm ci` inside `website/`.
7. **Build Astro site** — runs `npm run build` inside `website/`, outputting the static site to `website/dist/`.
8. **Deploy to astrodraw.github.io** — uses [`peaceiris/actions-gh-pages@v3`](https://github.com/peaceiris/actions-gh-pages) to push `website/dist/` to the `main` branch of `AstroDraw/astrodraw.github.io` via SSH deploy key.

The resulting site is served at **https://astrodraw.github.io/**.

---

## One-Time Setup (SSH Deploy Key)

This is a one-time setup per environment. Once done, the secret persists and no further action is needed.

### 1. Generate an SSH key pair

Run this locally (no passphrase):

```bash
ssh-keygen -t ed25519 -C "docs-deploy" -f docs_deploy_key -N ""
```

This creates two files:
- `docs_deploy_key` — **private key** (never share or commit)
- `docs_deploy_key.pub` — **public key**

### 2. Add the public key as a Deploy Key on astrodraw.github.io

1. Go to `https://github.com/AstroDraw/astrodraw.github.io/settings/keys`
2. Click **Add deploy key**
3. Title: `AstroChart CI`
4. Key: paste the contents of `docs_deploy_key.pub`
5. Check **Allow write access**
6. Click **Add key**

### 3. Add the private key as a Secret in AstroChart

1. Go to `https://github.com/AstroDraw/AstroChart/settings/secrets/actions`
2. Click **New repository secret**
3. Name: `DOCS_DEPLOY_KEY`
4. Value: paste the entire contents of `docs_deploy_key` (including the `-----BEGIN...` and `-----END...` lines)
5. Click **Add secret**

### 4. Delete the local key files

```bash
rm docs_deploy_key docs_deploy_key.pub
```

> ⚠️ Never commit these files. They are not needed locally after setup.

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
| Deploy to astrodraw.github.io | SSH key problem (see below) |

### Step 2 — SSH key issues

If the deploy step fails with an authentication or permission error:

- **"Permission denied (publickey)"** — the deploy key is wrong or missing. Re-do the one-time setup steps above.
- **"Key is not in correct format"** — the secret was pasted with extra whitespace or is missing the header/footer lines. Delete the secret and re-paste the raw key file content.
- **"Remote: Permission to AstroDraw/astrodraw.github.io denied"** — the deploy key on `astrodraw.github.io` does not have write access. Go to the deploy key settings and verify **Allow write access** is checked.

### Step 3 — Verify the deployed site

After a successful run:

1. Visit `https://astrodraw.github.io/` — homepage should load.
2. Open browser DevTools → Network tab — no 404s for `/astrochart.js`.
3. Click through the sidebar — navigation should work.
4. Open the browser console — no JS errors.

If the site shows stale content, GitHub Pages may have a CDN cache delay of up to 10 minutes after deployment.
