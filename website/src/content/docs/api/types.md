---
title: Types
description: TypeScript type definitions for AstroChart.
---

# Types

Complete TypeScript type definitions used by AstroChart.

## AstroData

The main data object passed to `chart.radix()` and `chart.radix().transit()`.

```typescript
interface AstroData {
  planets: Points   // keyed planet positions
  cusps: number[]   // exactly 12 house cusp degrees
}
```

## Points

Planet positions are stored as a plain object where each key is a planet name and each value is a two-element array.

```typescript
type Points = Record<string, number[]>
// number[0] — position in degrees (0–360)
// number[1] — retrograde flag: negative value = retrograde (e.g. -1)
```

### Valid planet keys

Only the following keys are recognised and rendered with their proper astrological symbol.
Any other key is silently rendered as a generic fallback circle.

| Key | Body |
|-----|------|
| `Sun` | ☉ Sun |
| `Moon` | ☽ Moon |
| `Mercury` | ☿ Mercury |
| `Venus` | ♀ Venus |
| `Mars` | ♂ Mars |
| `Jupiter` | ♃ Jupiter |
| `Saturn` | ♄ Saturn |
| `Uranus` | ♅ Uranus |
| `Neptune` | ♆ Neptune |
| `Pluto` | ♇ Pluto |
| `Chiron` | ⚷ Chiron |
| `Lilith` | Lilith (Black Moon) |
| `NNode` | ☊ North Node |
| `SNode` | ☋ South Node |
| `Fortune` | ⊕ Part of Fortune |

## Full AstroData example

```javascript
const data = {
  planets: {
    Sun:     [12.45, 0],    // Aries 12° — direct
    Moon:    [145.67, 0],   // Leo 25°
    Mercury: [8.23, 0],
    Venus:   [35.12, 0],
    Mars:    [162.34, 0],
    Jupiter: [298.56, -1],  // retrograde (negative second element)
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
    315.45,  // 1st house (Ascendant)
    35.67,   // 2nd house
    65.23,   // 3rd house
    92.45,   // 4th house (IC)
    125.67,  // 5th house
    155.89,  // 6th house
    135.45,  // 7th house (Descendant)
    215.67,  // 8th house
    245.23,  // 9th house
    272.45,  // 10th house (MC)
    305.67,  // 11th house
    335.89   // 12th house
  ]
}
```

## Settings

Partial settings object passed as an optional fourth argument to `new Chart()`.
See the [Settings reference](/api/settings) for all available keys.

```typescript
interface Settings {
  SYMBOL_SCALE?: number
  COLOR_BACKGROUND?: string
  STROKE_ONLY?: boolean
  ADD_CLICK_AREA?: boolean
  ASPECTS?: Record<string, { degree: number; orbit: number; color: string }>
  // ... and many more — see Settings reference
}
```

## Next Steps

- [Settings Reference](/api/settings) — all configurable settings
- [Chart API](/api/chart) — `Chart` class methods
- [Radix Chart guide](/guides/radix-chart) — practical walkthrough
