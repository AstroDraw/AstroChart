---
title: Aspect Calculator
description: API reference for aspect calculation utilities.
---

# Aspect Calculator

Utilities for working with aspects and angular relationships.

## Functions

### `calculateAspect(planet1X: number, planet1Y: number, planet2X: number, planet2Y: number): number`

Calculates the aspect angle between two planets.

**Parameters:**
- `planet1X`, `planet1Y` — First planet coordinates
- `planet2X`, `planet2Y` — Second planet coordinates

**Returns:** Aspect angle in degrees

## Example

```typescript
import { calculateAspect } from '@astrodraw/astrochart'

const angle = calculateAspect(120, 45, 220, 75)
console.log(angle) // Aspect angle in degrees
```

## Next Steps

- **[Radix Chart Guide](/docs/guides/radix-chart)** — See aspects in action
- **[API Reference](/docs/api/chart)** — See all methods
