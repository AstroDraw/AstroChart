---
title: Multiple Charts
description: Render multiple independent AstroChart instances on one page.
---

# Multiple Charts

You can render as many chart instances as you need on a single page. Each instance is fully independent — they share no internal state. The only requirement is that **each chart must target a unique HTML element ID**.

---

## Basic Example: Two Radix Charts

```html
<div id="chart-natal"></div>
<div id="chart-solar"></div>
```

```javascript
import { Chart } from '@astrodraw/astrochart'

const natalData = {
  planets: { Sun: [120.5], Moon: [45.2], Mercury: [110.3] },
  cusps: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
}

const solarData = {
  planets: { Sun: [200.0], Moon: [88.4], Mars: [15.7] },
  cusps: [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345]
}

const natal = new Chart('chart-natal', 500, 500)
natal.radix(natalData)

const solar = new Chart('chart-solar', 500, 500)
solar.radix(solarData)
```

---

## Radix + Transit on the Same Page

A common use case is displaying a natal chart alongside a transit chart. Each `Chart` instance is independent:

```html
<div id="natal-chart"></div>
<div id="transit-chart"></div>
```

```javascript
import { Chart } from '@astrodraw/astrochart'

// Natal chart
const natalChart = new Chart('natal-chart', 600, 600)
const radix = natalChart.radix(natalData)

// Transit chart — shows natal as inner wheel, transit as outer wheel
const transitChart = new Chart('transit-chart', 600, 600)
const transitRadix = transitChart.radix(natalData)
transitRadix.transit(transitData)
```

---

## Different Settings Per Instance

Each `Chart` constructor accepts its own settings object, so you can style each chart differently:

```javascript
const darkSettings = {
  COLOR_BACKGROUND: '#1a1a2e',
  POINTS_COLOR: '#e0e0ff',
  CIRCLE_COLOR: '#444466',
  LINE_COLOR: '#444466',
}

const lightSettings = {
  COLOR_BACKGROUND: '#ffffff',
  POINTS_COLOR: '#222222',
  STROKE_ONLY: true,
}

const chart1 = new Chart('chart-dark', 600, 600, darkSettings)
chart1.radix(natalData)

const chart2 = new Chart('chart-light', 600, 600, lightSettings)
chart2.radix(solarData)
```

---

## Dynamically Creating Charts in a List

You can generate chart containers programmatically and render into them:

```javascript
import { Chart } from '@astrodraw/astrochart'

const charts = [
  { id: 'chart-0', data: data1 },
  { id: 'chart-1', data: data2 },
  { id: 'chart-2', data: data3 },
]

const container = document.getElementById('chart-list')

charts.forEach (({ id, data }) => {
  const el = document.createElement('div')
  el.id = id
  container.appendChild(el)

  const chart = new Chart(id, 400, 400)
  chart.radix(data)
})
```

HTML:

```html
<div id="chart-list"></div>
```

---

## Notes

- **Each chart requires a unique element ID.** Reusing the same ID will cause charts to overwrite each other.
- Charts are fully independent — changing data in one chart has no effect on any other.
- There is no global chart registry; hold references to each `Chart` instance yourself if you need to update or destroy them later.
- To replace a chart's contents, clear the container element (`el.innerHTML = ''`) and create a new `Chart` instance.

---

## Next Steps

- **[Custom Settings](./custom-settings)** — Style each chart instance independently
- **[Click Events](./click-events)** — Add per-chart click handlers
- **[Framework Integrations](./frameworks/react)** — Manage multiple charts in React, Vue, or Angular
