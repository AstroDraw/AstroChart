---
title: Click Events
description: Add interactivity to chart elements with click event handlers.
---

# Click Events

AstroChart can fire events when a user clicks on a planet or cusp. You must opt-in by setting `ADD_CLICK_AREA: true` when constructing the chart — without this flag no click areas are added and no events will fire.

---

## Enabling Click Areas

Pass `ADD_CLICK_AREA: true` in your settings object:

```javascript
import { Chart } from '@astrodraw/astrochart'

const settings = {
  ADD_CLICK_AREA: true
}

const chart = new Chart('chart', 600, 600, settings)
const radix = chart.radix(data)
```

---

## Listening for Planet Clicks

Use `radix.on('click:planet', handler)` to respond when a planet symbol is clicked. The handler receives the planet name and the original DOM `MouseEvent`:

```javascript
radix.on('click:planet', (name, event) => {
  console.log('Planet clicked:', name)
  console.log('DOM event:', event)
})
```

The `name` argument matches the planet key from your `AstroData` (e.g. `'Sun'`, `'Moon'`, `'Mars'`).

---

## Listening for Cusp Clicks

Use `radix.on('click:cusp', handler)` to respond when a house cusp is clicked. The handler receives the zero-based cusp index (0–11) and the `MouseEvent`:

```javascript
radix.on('click:cusp', (index, event) => {
  const houseNumber = index + 1
  console.log('House clicked:', houseNumber)
})
```

---

## Full Working Example

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: {
    Sun:     [120.5],
    Moon:    [45.2],
    Mercury: [110.3],
    Venus:   [98.7, -1], // retrograde
    Mars:    [200.1],
  },
  cusps: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
}

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
const radix = chart.radix(data)

// Planet click — show a tooltip or highlight
radix.on('click:planet', (name, event) => {
  event.stopPropagation()
  alert(`You clicked: ${name}`)
})

// Cusp click — display house info
radix.on('click:cusp', (index, event) => {
  event.stopPropagation()
  console.log(`House ${index + 1} cusp starts at ${data.cusps[index]}°`)
})
```

HTML:

```html
<div id="chart"></div>
```

---

## Notes

- **`ADD_CLICK_AREA: true` is required.** If this setting is omitted or set to `false`, no click areas are rendered and the `on()` handlers will never fire.
- Events are standard DOM `MouseEvent` objects so you have access to `event.target`, `event.clientX`, `event.clientY`, etc.
- The `click:planet` event fires for all planets present in your `AstroData.planets` map.
- The `click:cusp` index is zero-based — house 1 is index `0`, house 12 is index `11`.

---

## Next Steps

- **[Custom Settings](./custom-settings)** — Configure `ADD_CLICK_AREA` and other options
- **[Framework Integrations](./frameworks/react)** — Use click events with React, Vue, and Angular
- **[API Reference](../api/chart)** — See all chart methods
