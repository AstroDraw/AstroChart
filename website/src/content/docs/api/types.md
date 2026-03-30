---
title: Types
description: TypeScript type definitions for AstroChart.
---

# Types

Complete TypeScript type definitions for AstroChart.

## AstroData

```typescript
interface AstroData {
  planets?: Planet[]
  cusps?: Cusp[]
  aspects?: Aspect[]
  pointsOfInterest?: PointOfInterest[]
}
```

## Planet

```typescript
interface Planet {
  name: string
  x: number
  y: number
  type: 'personal' | 'social' | 'generational' | 'angle'
  retrograde?: boolean
}
```

## Cusp

```typescript
interface Cusp {
  name: string
  x: number
  y: number
}
```

## Aspect

```typescript
interface Aspect {
  planet1: string
  planet2: string
  type: 'conjunction' | 'sextile' | 'square' | 'trine' | 'opposition'
  value: number
  orb?: number
}
```

## Settings

```typescript
interface Settings {
  BACKGROUND_COLOR?: string
  PAPER_BORDER_COLOR?: string
  STROKE_ONLY?: boolean
  ADD_CLICK_AREA?: boolean
  [key: string]: any
}
```

## Next Steps

- **[Settings Reference](/docs/api/settings)** — See all settings
- **[API Reference](/docs/api/chart)** — See all methods
