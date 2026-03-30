---
title: Radix
description: API reference for radix chart methods.
---

# Radix

Methods and properties for working with radix charts.

## Methods

### `Chart.radix(data: AstroData): Chart`

Renders a radix chart.

**Parameters:**
- `data` — AstroData object with planets, cusps, and aspects

**Returns:** The chart instance for method chaining

## Example

```typescript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: [
    { name: 'Sun', x: 120, y: 45, type: 'personal' }
  ],
  cusps: [
    { name: 'Asc', x: 0, y: 0 }
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## Next Steps

- **[Radix Chart Guide](/docs/guides/radix-chart)** — Learn more
- **[Chart API](/docs/api/chart)** — See all methods
