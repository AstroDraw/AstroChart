---
title: Transit Chart
description: Learn how to render transit charts with AstroChart.
---

# Transit Chart

A transit chart overlays current planetary positions over a natal chart to show how transits affect your birth chart.

This guide shows how to render transit charts using AstroChart.

## Basic Transit Chart

To render a transit chart, provide both radix (natal) and transit data:

```javascript
import { Chart } from '@astrodraw/astrochart'

const radixData = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' },
    { name: 'Moon', x: 220, y: 75, type: 'personal' }
  ],
  cusps: [
    { name: 'Asc', x: 0, y: 0 },
    { name: 'MC', x: 0, y: 90 }
  ]
}

const transitData = {
  planets: [
    { name: 'Sun', x: 140, y: 55, type: 'personal' },
    { name: 'Moon', x: 250, y: 100, type: 'personal' }
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(radixData).transit(transitData)
```

## Next Steps

- **[Animation](/docs/guides/animation)** — Animate transit movements
- **[Radix Charts](/docs/guides/radix-chart)** — Learn about radix charts
