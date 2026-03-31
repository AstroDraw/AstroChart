---
title: Chart
description: API reference for the Chart class.
---

# Chart

The main `Chart` class is used to render astrology charts.

## Constructor

```typescript
new Chart(elementId: string, width: number, height: number, settings?: Settings)
```

**Parameters:**
- `elementId` — The ID of the container element where the chart will be rendered
- `width` — Chart width in pixels
- `height` — Chart height in pixels
- `settings` — Optional `Settings` object for customization

## Methods

### `radix(data: AstroData): this`

Renders a radix (natal) chart.

**Parameters:**
- `data` — An `AstroData` object with planets, cusps, and aspects

**Returns:** The chart instance (for method chaining)

### `transit(data: AstroData): this`

Renders a transit ring over an existing radix chart.

**Parameters:**
- `data` — An `AstroData` object for the transit positions

**Returns:** The chart instance (for method chaining)

### `animate(data: AstroData, duration: number, reverse?: boolean, callback?: () => void): void`

Animates a transition to new data.

**Parameters:**
- `data` — New astrology data to animate to
- `duration` — Animation duration in milliseconds
- `reverse` — (Optional) Reverse the animation direction
- `callback` — (Optional) Function called when animation completes

## Example

```typescript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('my-chart', 600, 600)
chart.radix(radixData)
chart.transit(transitData)

// Animate to new transit positions
chart.animate(newTransitData, 1000, false, () => {
  console.log('Animation complete')
})
```

## Next Steps

- **[Radix Guide](../guides/radix-chart)** — Learn about radix charts
- **[Transit Guide](../guides/transit-chart)** — Learn about transit charts
- **[Settings Reference](./settings)** — Customize chart appearance
