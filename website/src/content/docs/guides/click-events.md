---
title: Click Events
description: Add interactivity to chart elements with click event listeners.
---

# Click Events

AstroChart supports click interactivity via the `ADD_CLICK_AREA` setting. When enabled, transparent `<rect>` hit areas are rendered on top of each planet and cusp symbol. You attach standard DOM `click` listeners to those elements using their predictable `id` attributes.

---

## Enabling Click Areas

Pass `ADD_CLICK_AREA: true` in your settings object:

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
chart.radix(data)
```

Without this setting no `<rect>` elements are rendered and there are no click targets.

---

## How Click Areas Work

When `ADD_CLICK_AREA: true` is set, AstroChart injects a transparent `<rect>` element
on top of each planet symbol and each cusp. These elements get predictable `id` attributes
derived from the chart container `id` and the `ID_*` settings:

| Element | ID pattern | Example (chart id = `'chart'`) |
|---|---|---|
| Planet | `{chartId}-radix-planets-{PlanetName}` | `chart-radix-planets-Sun` |
| Cusp | `{chartId}-radix-cusps-{index}` (0-based) | `chart-radix-cusps-0` (house 1) |

> If you override `ID_RADIX`, `ID_POINTS`, or `ID_CUSPS` in your settings, the IDs
> change accordingly — update your selectors to match.

---

## Listening for a Single Planet Click

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
chart.radix(data)

document.getElementById('chart-radix-planets-Sun')
  ?.addEventListener('click', (event) => {
    console.log('Sun clicked', event)
  })
```

---

## Listening for All Planets via Event Delegation

Attach one listener to the SVG container and inspect the target `id` to determine which
planet was clicked:

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
chart.radix(data)

document.getElementById('chart')?.addEventListener('click', (event) => {
  const id = (event.target as Element)?.id ?? ''
  const match = id.match(/^chart-radix-planets-(.+)$/)
  if (match) {
    const planetName = match[1]
    console.log('Planet clicked:', planetName)
  }
})
```

---

## Listening for Cusp Clicks

Cusp indices are zero-based — house 1 = index `0`, house 12 = index `11`.

```javascript
import { Chart } from '@astrodraw/astrochart'

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
chart.radix(data)

// House 1 (index 0)
document.getElementById('chart-radix-cusps-0')
  ?.addEventListener('click', (event) => {
    console.log('House 1 cusp clicked', event)
  })

// All cusps via delegation
document.getElementById('chart')?.addEventListener('click', (event) => {
  const id = (event.target as Element)?.id ?? ''
  const match = id.match(/^chart-radix-cusps-(\d+)$/)
  if (match) {
    const houseNumber = Number(match[1]) + 1
    console.log('House clicked:', houseNumber)
  }
})
```

---

## Full Working Example

```javascript
import { Chart } from '@astrodraw/astrochart'

const data = {
  planets: {
    Sun:     [120.5, 0],
    Moon:    [45.2, 0],
    Mercury: [110.3, 0],
    Venus:   [98.7, -1],
    Mars:    [200.1, 0],
  },
  cusps: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
}

const chart = new Chart('chart', 600, 600, { ADD_CLICK_AREA: true })
chart.radix(data)

// Event delegation — handles all planets and cusps with one listener
document.getElementById('chart')?.addEventListener('click', (event) => {
  const id = (event.target as Element)?.id ?? ''

  const planetMatch = id.match(/^chart-radix-planets-(.+)$/)
  if (planetMatch) {
    alert(`You clicked: ${planetMatch[1]}`)
    return
  }

  const cuspMatch = id.match(/^chart-radix-cusps-(\d+)$/)
  if (cuspMatch) {
    const houseNumber = Number(cuspMatch[1]) + 1
    console.log(`House ${houseNumber} cusp starts at ${data.cusps[Number(cuspMatch[1])]}°`)
  }
})
```

HTML:

```html
<div id="chart"></div>
```

---

## Notes

- **`ADD_CLICK_AREA: true` is required.** Without it no transparent hit areas are rendered.
- The click target is the `<rect>` element, not the planet symbol itself. Use the `id`
  attribute on `event.target` to identify which planet or cusp was clicked.
- Events are standard DOM `MouseEvent` objects — `event.clientX`, `event.clientY`,
  `event.target`, etc. are all available.
- If you customise `ID_RADIX`, `ID_POINTS`, or `ID_CUSPS` in your settings, the element
  IDs change. Adjust your regex patterns or selectors accordingly.

---

## Next Steps

- **[Custom Settings](./custom-settings)** — Configure `ADD_CLICK_AREA` and other options
- **[Framework Integrations](./frameworks/react)** — Use click events with React, Vue, and Angular
- **[Settings API Reference](../api/settings)** — Full settings type documentation
