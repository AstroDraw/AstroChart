---
title: Radix Chart
description: Learn how to render a complete radix (natal) chart with AstroChart.
---

# Radix Chart

A radix chart (also called a natal or birth chart) is a snapshot of the sky at a specific moment in time.

AstroChart renders the chart from an `AstroData` object containing **planet positions** and **house cusps** — both expressed as degree values (0–360).

## Basic Radix Chart

```html
<div id="chart"></div>
```

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: {
    Sun:  [12.45, 0],
    Moon: [145.67, 0]
  },
  cusps: [315.45, 35.67, 65.23, 92.45, 125.67, 155.89,
          135.45, 215.67, 245.23, 272.45, 305.67, 335.89]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## Data format

Planet positions use a plain object (`Record<string, number[]>`):

```javascript
{
  Sun: [degrees, retrogradeFlag]
  //   ^^^^^^^ 0–360  ^^^^^^^^ negative = retrograde, 0 = direct
}
```

House cusps are an **array of exactly 12 degree values** representing the start of each house in order (1st through 12th). Passing fewer or more than 12 will throw a validation error.

See the [Types reference](/api/types) for all valid planet keys and a full example.

## Full Example with All Planets

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: {
    Sun:     [12.45, 0],
    Moon:    [145.67, 0],
    Mercury: [8.23, 0],
    Venus:   [35.12, 0],
    Mars:    [162.34, 0],
    Jupiter: [298.56, 0],
    Saturn:  [245.78, 0],
    Uranus:  [178.90, 0],
    Neptune: [210.12, 0],
    Pluto:   [238.34, 0],
    Chiron:  [125.67, 0],
    NNode:   [95.45, 0],
    SNode:   [275.45, 0],
    Lilith:  [145.23, 0],
    Fortune: [325.67, 0]
  },
  cusps: [
    315.45, 35.67, 65.23, 92.45, 125.67, 155.89,
    135.45, 215.67, 245.23, 272.45, 305.67, 335.89
  ]
}

const chart = new Chart('chart', 600, 600)
chart.radix(data)
```

## Retrograde planets

Set the second array element to a negative value to mark a planet as retrograde.
The library will render an **R** next to the symbol.

```javascript
const data = {
  planets: {
    Jupiter: [298.56, -1],  // retrograde
    Saturn:  [245.78, 0],   // direct
  },
  cusps: [ /* 12 values */ ]
}
```

## Aspects

Call `.aspects()` on the returned `Radix` instance to draw aspect lines:

```javascript
const radix = chart.radix(data)
radix.aspects()
```

Aspects are computed automatically based on the default orbs (conjunction 10°, square 8°, trine 8°, opposition 10°). Override them via [Settings](/api/settings).

## API Reference

### `chart.radix(data: AstroData): Radix`

Renders a radix chart and returns a `Radix` instance.

**Parameters:**
- `data` — `AstroData` object with `planets` and `cusps`

**Returns:** `Radix` instance (use it to call `.aspects()` or `.transit()`)

## Next Steps

- [Transit Charts](/guides/transit-chart) — overlay a transit ring
- [Animation](/guides/animation) — animate transit movement
- [Custom Settings](/guides/custom-settings) — colours, scale, orbs
- [Types reference](/api/types) — full type definitions and valid planet keys
