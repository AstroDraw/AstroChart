---
title: Custom Symbols
description: Replace default planet and sign symbols with your own SVG elements.
---

# Custom Symbols

AstroChart lets you replace any planet or sign symbol with a custom SVG element via the `CUSTOM_SYMBOL_FN` setting. This is useful for branding, accessibility, or artistic chart styles.

---

## The `CUSTOM_SYMBOL_FN` Setting

Set `CUSTOM_SYMBOL_FN` to a function with the following signature:

```typescript
(name: string, x: number, y: number, context: SVG) => Element
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | The symbol name (e.g. `'Sun'`, `'Moon'`, `'Aries'`) |
| `x` | `number` | The horizontal center coordinate on the SVG canvas |
| `y` | `number` | The vertical center coordinate on the SVG canvas |
| `context` | `SVG` | The internal SVG helper — use it to create elements in the correct namespace |

The function **must** return a valid SVG `Element`. Returning `null` or `undefined` causes the library to fall back to the built-in symbol for that name.

---

## Example: Replace Sun With a Custom Circle

```javascript
import { Chart } from '@astrodraw/astrochart'

const settings = {
  CUSTOM_SYMBOL_FN: (name, x, y, context) => {
    if (name !== 'Sun') return null // use defaults for everything else

    // Create a styled circle as a custom Sun symbol
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    const outer = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    outer.setAttribute('cx', String(x))
    outer.setAttribute('cy', String(y))
    outer.setAttribute('r', '9')
    outer.setAttribute('fill', '#FFD700')
    outer.setAttribute('stroke', '#B8860B')
    outer.setAttribute('stroke-width', '1.5')

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    dot.setAttribute('cx', String(x))
    dot.setAttribute('cy', String(y))
    dot.setAttribute('r', '2.5')
    dot.setAttribute('fill', '#B8860B')

    g.appendChild(outer)
    g.appendChild(dot)
    return g
  }
}

const chart = new Chart('chart', 600, 600, settings)
chart.radix(data)
```

---

## Example: Selective Custom Symbols

Return `null` for names you want to keep as defaults; return an element only for the symbols you want to customise:

```javascript
const CUSTOM_PLANETS = new Set(['Sun', 'Moon', 'Mars'])

const settings = {
  CUSTOM_SYMBOL_FN: (name, x, y, context) => {
    if (!CUSTOM_PLANETS.has(name)) return null

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', String(x))
    circle.setAttribute('cy', String(y))
    circle.setAttribute('r', '8')

    const colors = { Sun: '#FFD700', Moon: '#C0C0C0', Mars: '#FF4500' }
    circle.setAttribute('fill', colors[name] ?? '#888')
    circle.setAttribute('stroke', '#fff')
    circle.setAttribute('stroke-width', '1')

    return circle
  }
}
```

---

## Example: Text / Emoji Symbols

You can even use SVG `<text>` elements to render emoji or Unicode glyphs as symbols:

```javascript
const EMOJI = {
  Sun: '☀️',
  Moon: '🌙',
  Mars: '♂',
  Venus: '♀',
}

const settings = {
  CUSTOM_SYMBOL_FN: (name, x, y, context) => {
    const glyph = EMOJI[name]
    if (!glyph) return null

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('x', String(x))
    text.setAttribute('y', String(y))
    text.setAttribute('text-anchor', 'middle')
    text.setAttribute('dominant-baseline', 'central')
    text.setAttribute('font-size', '14')
    text.textContent = glyph
    return text
  }
}
```

---

## Important Notes

- The function is called for **every** planet and sign symbol on the chart. Return `null` or `undefined` to use the built-in symbol for that name.
- The returned element **must** be a valid SVG `Element` created with `document.createElementNS('http://www.w3.org/2000/svg', ...)`.
- The `name` parameter matches the `SYMBOL_*` setting values (defaults: `'Sun'`, `'Moon'`, `'Aries'`, etc.).
- Use `x` and `y` as the center of the symbol — do not offset them unless you intentionally want to shift placement.
- The `context` parameter is the library's internal SVG helper; you may use it but `document.createElementNS` is sufficient for most cases.

---

## Next Steps

- **[Custom Settings](./custom-settings)** — Explore all appearance settings
- **[Settings API Reference](../api/settings)** — Full settings type documentation
