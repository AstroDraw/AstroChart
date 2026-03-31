---
title: Custom Settings
description: Customize chart appearance with AstroChart settings.
---

# Custom Settings

AstroChart provides extensive customization options through the `Settings` object.

## Basic Settings

```javascript
import { Chart } from '@astrodraw/astrochart'

const settings = {
  BACKGROUND_COLOR: '#ffffff',
  PAPER_BORDER_COLOR: '#000000'
}

const chart = new Chart('chart', 600, 600, settings)
chart.radix(data)
```

## Next Steps

- **[Types Reference](../api/types)** — See all available settings
- **[Custom Symbols](./custom-symbols)** — Create custom symbols
