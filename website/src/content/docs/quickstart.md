---
title: Quick Start
description: Get up and running with AstroChart in 5 minutes.
---

# Quick Start

This guide will show you how to render your first AstroChart in just a few lines of code.

## 1. Install

```bash
npm install @astrodraw/astrochart
```

## 2. Create a Container

Add a `<div>` to your HTML where the chart will be rendered:

```html
<div id="chart"></div>
```

## 3. Provide Data

AstroChart needs an `AstroData` object with planets, cusps, and optionally aspects:

```javascript
const data = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' },
    { name: 'Moon', x: 220, y: 75, type: 'personal' },
    { name: 'Mercury', x: 180, y: 60, type: 'personal' },
    { name: 'Venus', x: 150, y: 90, type: 'personal' },
    { name: 'Mars', x: 90, y: 80, type: 'personal' }
  ],
  cusps: [
    { name: 'Asc', x: 150, y: 0 },
    { name: 'MC', x: 150, y: 300 }
  ]
}
```

### Data Format Explained

- **`planets`** — Array of planetary positions. Each planet has:
  - `name` — Planet or point name (e.g., "Sun", "Moon")
  - `x`, `y` — Position in degrees (0–360, typically on a circle)
  - `type` — Category: `'personal'`, `'social'`, `'generational'`, etc.

- **`cusps`** — Array of house cusps or important points. Format same as planets.

- **`aspects`** (optional) — Angular relationships between planets:
  ```javascript
  aspects: [
    { planet1: 'Sun', planet2: 'Moon', type: 'conjunction', value: 12 }
  ]
  ```

## 4. Render the Chart

Import the `Chart` class and render:

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

That's it! You now have a fully rendered radix chart.

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>AstroChart Quick Start</title>
</head>
<body>
  <div id="chart"></div>

  <script type="module">
    import { Chart } from 'https://unpkg.com/@astrodraw/astrochart/dist/index.js'

    const data = {
      planets: [
        { name: 'Sun', x: 120, y: 45, type: 'personal' },
        { name: 'Moon', x: 220, y: 75, type: 'personal' }
      ],
      cusps: [
        { name: 'Asc', x: 150, y: 0 }
      ]
    }

    const chart = new Chart('chart', 600, 600)
    chart.radix(data)
  </script>
</body>
</html>
```

## Next Steps

- **[Radix Chart Guide](/docs/guides/radix-chart)** — Learn more about radix charts
- **[Transit Charts](/docs/guides/transit-chart)** — Add transit rings
- **[Animation](/docs/guides/animation)** — Animate chart transitions
- **[API Reference](/docs/api/chart)** — See all available methods

## Troubleshooting

**Chart doesn't appear?**
- Check the browser console for errors
- Make sure the container element exists: `document.getElementById('chart')`
- Verify the data object is correctly formatted

**Need help?**
- [Open an issue on GitHub](https://github.com/AstroDraw/AstroChart/issues)
- Check the [API Reference](/docs/api/chart)
