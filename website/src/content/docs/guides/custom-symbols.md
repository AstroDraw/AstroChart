---
title: Custom Symbols
description: Replace default symbols with your own designs.
---

# Custom Symbols

AstroChart allows you to define custom SVG symbols for planets, signs, and other chart elements.

## Custom Symbol Function

```javascript
const settings = {
  CUSTOM_SYMBOL_FN: (name, x, y, context) => {
    // Create your own SVG element
    const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    symbol.setAttribute('cx', x)
    symbol.setAttribute('cy', y)
    symbol.setAttribute('r', 8)
    symbol.setAttribute('fill', '#ff0000')
    return symbol
  }
}

const chart = new Chart('chart', 600, 600, settings)
chart.radix(data)
```

## Next Steps

- **[Custom Settings](./custom-settings)** — Explore more settings
- **[API Reference](../api/chart)** — See all methods
