---
title: Radix
description: API reference for the Radix class returned by chart.radix().
---

# Radix

`chart.radix(data)` renders a birth chart and returns a `Radix` instance.
You use this instance to draw aspects or chain into a transit ring.

## Creating a Radix

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
    Pluto:   [238.34, 0]
  },
  cusps: [
    315.45, 35.67, 65.23, 92.45, 125.67, 155.89,
    135.45, 215.67, 245.23, 272.45, 305.67, 335.89
  ]
}

const chart = new Chart('chart', 600, 600)
const radix = chart.radix(data)
```

## Methods

### `radix.aspects(formedAspects?): Radix`

Draws aspect lines between planets inside the chart.

```javascript
// Draw aspects computed from the default settings
radix.aspects()

// Or pass pre-computed aspects
radix.aspects(myAspects)
```

### `radix.transit(data: AstroData): Transit`

Adds a transit ring around the radix chart. Returns a `Transit` instance.

```javascript
const transit = radix.transit(transitData)
transit.aspects()
```

See the [Transit API](/api/transit) for full details.

### `radix.addPointsOfInterest(points: Points): Radix`

Adds extra points (e.g. Arabic parts, fixed stars) to the aspect calculation
without rendering them as planet symbols.

```javascript
radix.addPointsOfInterest({ Vertex: [324.5, 0] })
radix.aspects()
```

## Data format

`AstroData` passed to `radix()` must have:

| Field | Type | Constraint |
|-------|------|------------|
| `planets` | `Record<string, number[]>` | Keys must be [valid planet names](/api/types#valid-planet-keys) |
| `cusps` | `number[]` | Exactly **12** degree values |

Planet array: `[degrees, velocity]` — the second element is the astrological velocity; a negative value means the planet is retrograde.

## Next Steps

- [Types reference](/api/types) — `AstroData`, valid planet keys, full example
- [Transit API](/api/transit) — transit ring methods
- [Radix Chart guide](/guides/radix-chart) — practical walkthrough
