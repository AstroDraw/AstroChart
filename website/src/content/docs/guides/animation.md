---
title: Animation
description: Animate transitions between chart states.
---

# Animation

AstroChart supports smooth animations when updating transit data or other chart properties.

## Basic Animation

Use `transit.animate()` to animate transitions:

```javascript
const chart = new Chart('chart', 600, 600)
const transit = chart.radix(radixData).transit(transitData)

// Animate to new transit data over 1000ms
transit.animate(newTransitData, 1000)
```

## Animation Options

- **Duration** — Animation duration in milliseconds
- **Reverse** — Reverse the animation direction
- **Callback** — Function to call when animation completes

## Next Steps

- **[Transit Charts](/docs/guides/transit-chart)** — Learn about transit charts
- **[Custom Settings](/docs/guides/custom-settings)** — Customize animations
