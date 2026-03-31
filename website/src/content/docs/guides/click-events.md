---
title: Click Events
description: Add interactivity with click handlers.
---

# Click Events

Enable click detection on chart elements with the `ADD_CLICK_AREA` setting.

## Example

```javascript
const settings = {
  ADD_CLICK_AREA: true
}

const chart = new Chart('chart', 600, 600, settings)
chart.radix(data)

// Add click listeners
document.addEventListener('click', (e) => {
  if (e.target.id.includes('sign-')) {
    console.log('Clicked on sign:', e.target.id)
  }
})
```

## Element IDs

Use these helper functions to identify clicked elements:

- `getSignWrapperId(sign)` — Get the ID for a zodiac sign
- `getHouseIdWrapper(house)` — Get the ID for a house

## Next Steps

- **[Framework Integrations](./frameworks/react)** — Use with React, Vue, etc.
- **[API Reference](../api/chart)** — See all methods
