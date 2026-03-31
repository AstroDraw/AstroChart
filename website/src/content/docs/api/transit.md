---
title: Transit
description: API reference for transit chart methods.
---

# Transit

Methods and properties for working with transit charts.

## Methods

### `Chart.transit(data: AstroData): Chart`

Renders a transit ring over an existing radix chart.

**Parameters:**
- `data` — AstroData object with transit planetary positions

**Returns:** The chart instance for method chaining

### `Transit.animate(data: AstroData, duration: number, reverse?: boolean, callback?: () => void): void`

Animates a transition between transit states.

**Parameters:**
- `data` — New transit data
- `duration` — Animation duration in milliseconds
- `reverse` — Optional reverse direction flag
- `callback` — Optional completion callback

## Example

```typescript
const chart = new Chart('chart', 600, 600)
const transit = chart.radix(radixData).transit(transitData)

// Animate to new transit positions
transit.animate(newTransitData, 1500)
```

## Next Steps

- **[Transit Chart Guide](../guides/transit-chart)** — Learn more
- **[Animation Guide](../guides/animation)** — Learn about animations
