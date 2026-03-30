---
title: Multiple Charts
description: Render multiple independent charts on one page.
---

# Multiple Charts

You can render multiple independent charts on the same page by using unique container IDs.

## Example

```javascript
import { Chart } from '@astrodraw/astrochart'

// First chart
const chart1 = new Chart('chart1', 400, 400)
chart1.radix(data1)

// Second chart
const chart2 = new Chart('chart2', 400, 400)
chart2.radix(data2)
```

HTML:

```html
<div id="chart1"></div>
<div id="chart2"></div>
```

## Next Steps

- **[Click Events](/docs/guides/click-events)** — Add interactivity
- **[Framework Integrations](/docs/guides/frameworks/react)** — Use with React, Vue, etc.
