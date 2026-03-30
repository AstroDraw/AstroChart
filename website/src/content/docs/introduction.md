---
title: Introduction
description: Learn what AstroChart is and how it can help you render astrology charts on the web.
---

# Welcome to AstroChart

AstroChart is a **pure SVG, zero-dependency library** for rendering interactive astrology charts directly in web browsers.

## What is AstroChart?

AstroChart specializes in visualizing astrological data as beautiful, interactive SVG charts. It can render:

- **Radix Charts** — A snapshot of the sky at a specific time and location
- **Transit Charts** — Real-time planetary positions overlaid on a radix chart
- **Aspects** — Angular relationships between planets with customizable lines and colors
- **Animations** — Smooth transitions between chart states
- **Custom Symbols** — Replace default symbols with your own SVG designs

All of this happens **client-side in the browser**, with no external API calls or backend dependencies.

## What AstroChart is NOT

AstroChart is **not** an ephemeris calculator. It does not compute planetary positions, house cusps, or aspects — it only **renders them**. You must provide the planetary data (coordinates, house positions, aspects) from another source.

For calculating planetary positions, consider:
- [Swiss Ephemeris](https://www.astro.com/swisseph/)
- [Skyfield](https://rhodesmill.org/skyfield/)
- [pymeeus](https://pymeeus.readthedocs.io/)
- [astro-charts](https://github.com/AstroDraw/astro-charts) (Python)

## Key Features

| Feature | Details |
|---------|---------|
| **Pure SVG** | All charts render as scalable vector graphics, perfect for any screen size |
| **Zero Dependencies** | No jQuery, React, Vue, or other libraries required |
| **Framework Agnostic** | Use with vanilla JavaScript, React, Vue, Angular, or any framework |
| **Fully Customizable** | Control colors, fonts, symbol styles, and rendering modes |
| **TypeScript Ready** | Complete type definitions included for type-safe code |
| **Interactive** | Add click handlers to zodiac signs, houses, and planets |
| **Lightweight** | Small bundle size (~50 KB minified, ~15 KB gzipped) |

## Quick Start

### 1. Install

```bash
npm install @astrodraw/astrochart
```

### 2. Add a Container

```html
<div id="chart"></div>
```

### 3. Render a Chart

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' },
    { name: 'Moon', x: 220, y: 75, type: 'personal' },
    // ... more planets
  ],
  cusps: [
    { name: 'Asc', x: 150, y: 0 },
    { name: 'MC', x: 150, y: 300 },
    // ... more cusps
  ],
  aspects: [
    { planet1: 'Sun', planet2: 'Moon', type: 'conjunction', value: 12 }
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

That's it! You now have a fully rendered astrology chart.

## Next Steps

- **[Installation Guide](/docs/installation)** — Detailed setup instructions for npm, CDN, and more
- **[Quick Start Guide](/docs/quickstart)** — A step-by-step walkthrough with examples
- **[API Reference](/docs/api/chart)** — Complete documentation of all classes and methods
- **[Gallery](/gallery)** — See what's possible with AstroChart

## Browser Support

AstroChart requires:
- Modern browsers with SVG support (IE11+ with polyfills)
- ES2015+ JavaScript support

## License

AstroChart is released under the **MIT License**. See the [GitHub repository](https://github.com/AstroDraw/AstroChart) for details.

## Contributing

Found a bug? Have a feature request? We'd love your help! See the [Contributing Guide](/docs/contributing) for instructions.

---

Ready to dive in? [Get started now](/docs/quickstart).
