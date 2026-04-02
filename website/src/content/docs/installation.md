---
title: Installation
description: Install AstroChart via npm, CDN, or other methods.
---

# Installation

AstroChart can be installed in several ways depending on your project setup.

## NPM

The recommended way to install AstroChart is via npm:

```bash
npm install @astrodraw/astrochart
```

### With Yarn

```bash
yarn add @astrodraw/astrochart
```

### With PNPM

```bash
pnpm add @astrodraw/astrochart
```

## CDN

For quick prototyping or embedding AstroChart in existing projects, use the UMD bundle from a CDN:

```html
<script src="https://unpkg.com/@astrodraw/astrochart/dist/astrochart.js"></script>

<div id="chart"></div>

<script>
  const data = {
    planets: [/* ... */],
    cusps: [/* ... */]
  }

  const chart = new astrochart.Chart('chart', 600, 600)
  chart.radix(data)
</script>
```

The UMD bundle exposes `astrochart` as a global variable containing all exports.

## ESM Import

For modern bundler setups (Webpack, Vite, Rollup, etc.), import directly:

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## TypeScript

Full TypeScript type definitions are included in the npm package:

```typescript
import type { Chart, AstroData, Settings } from '@astrodraw/astrochart'

const chart: Chart = new Chart('chart', 600, 600)
const settings: Settings = { /* ... */ }
```

No additional `@types/` package needed.

## Compatibility

| Environment | Status |
|-------------|--------|
| Node.js 18+ | ✅ Supported |
| Browsers (modern) | ✅ Supported |
| IE11 | ⚠️ Requires polyfills |
| Mobile browsers | ✅ Supported |
| React | ✅ See [React guide](../guides/frameworks/react) |
| Vue | ✅ See [Vue guide](../guides/frameworks/vue) |
| Angular | ✅ See [Angular guide](../guides/frameworks/angular) |

## Verification

After installation, verify AstroChart is working:

```javascript
import { Chart, version } from '@astrodraw/astrochart'

console.log('AstroChart version:', version)
// Output: AstroChart version: 3.0.2
```

## Next Steps

- **[Quick Start](../quickstart)** — Render your first chart
- **[API Reference](../api/chart)** — Learn all available methods
- **[Guides](../guides/radix-chart)** — Explore common use cases
