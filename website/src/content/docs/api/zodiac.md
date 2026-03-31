---
title: Zodiac
description: API reference for zodiac utilities.
---

# Zodiac

Utilities for working with zodiac signs and astrological positions.

## Functions

### `getZodiacSign(degrees: number): string`

Gets the zodiac sign for a given degree position.

**Parameters:**
- `degrees` — Position in degrees (0–360)

**Returns:** Zodiac sign name (e.g., "Aries", "Taurus")

### `getZodiacDegrees(sign: string): number`

Gets the starting degree for a zodiac sign.

**Parameters:**
- `sign` — Zodiac sign name

**Returns:** Starting degree position (0–360)

## Example

```typescript
import { getZodiacSign, getZodiacDegrees } from '@astrodraw/astrochart'

const sign = getZodiacSign(120) // "Leo"
const degrees = getZodiacDegrees('Aries') // 0
```

## Next Steps

- **[Guides](../guides/radix-chart)** — See zodiac in action
- **[API Reference](./chart)** — See all methods
