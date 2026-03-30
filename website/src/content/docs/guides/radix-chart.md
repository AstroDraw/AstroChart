---
title: Radix Chart
description: Learn how to render a complete radix (natal) chart with AstroChart.
---

# Radix Chart

A radix chart (also called a natal or birth chart) is a snapshot of the sky at a specific time and location.

This guide shows how to render a complete radix chart with planets, cusps, and aspects using AstroChart.

## Basic Radix Chart

The simplest radix chart requires planets and cusps:

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' },
    { name: 'Moon', x: 220, y: 75, type: 'personal' }
  ],
  cusps: [
    { name: 'Asc', x: 150, y: 0 },
    { name: 'MC', x: 150, y: 300 }
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## Full Example with All Planets

```javascript
const data = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' },
    { name: 'Moon', x: 220, y: 75, type: 'personal' },
    { name: 'Mercury', x: 180, y: 60, type: 'personal' },
    { name: 'Venus', x: 150, y: 90, type: 'personal' },
    { name: 'Mars', x: 90, y: 80, type: 'personal' },
    { name: 'Jupiter', x: 280, y: 120, type: 'social' },
    { name: 'Saturn', x: 310, y: 150, type: 'social' },
    { name: 'Uranus', x: 45, y: 200, type: 'generational' },
    { name: 'Neptune', x: 15, y: 250, type: 'generational' },
    { name: 'Pluto', x: 350, y: 280, type: 'generational' }
  ],
  cusps: [
    { name: 'Asc', x: 0, y: 0 },
    { name: 'MC', x: 0, y: 90 },
    { name: 'Desc', x: 0, y: 180 },
    { name: 'IC', x: 0, y: 270 }
  ],
  aspects: [
    { planet1: 'Sun', planet2: 'Moon', type: 'conjunction', value: 12 },
    { planet1: 'Sun', planet2: 'Mercury', type: 'trine', value: 8 }
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## API Methods

### `chart.radix(data: AstroData)`

Renders a radix chart with the provided astrological data.

**Parameters:**
- `data` — An `AstroData` object containing planets, cusps, and aspects

**Returns:** The chart instance (for method chaining)

## Next Steps

- **[Transit Charts](/docs/guides/transit-chart)** — Add a transit ring
- **[Aspects](/docs/api/chart)** — Learn more about aspect rendering
- **[Settings](/docs/guides/custom-settings)** — Customize appearance
