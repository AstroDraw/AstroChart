---
title: Settings Reference
description: All available AstroChart settings.
---

# Settings Reference

Customize AstroChart charts with the `Settings` object.

## Colors

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `BACKGROUND_COLOR` | string | `'#ffffff'` | Chart background color |
| `PAPER_BORDER_COLOR` | string | `'#000000'` | Outer border color |
| `ZODIAC_SIGN_COLOR` | string | `'#666666'` | Zodiac sign color |

## Sizing

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `PAPER_BORDER_WIDTH` | number | `2` | Border stroke width |
| `INNER_CIRCLE_RADIUS_RATIO` | number | `0.5` | Ratio of inner circle to paper |

## Rendering

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `STROKE_ONLY` | boolean | `false` | Render planets as outlines only |
| `ADD_CLICK_AREA` | boolean | `false` | Enable click detection |

## Example

```javascript
const settings = {
  BACKGROUND_COLOR: '#f5f5f5',
  PAPER_BORDER_COLOR: '#333333',
  STROKE_ONLY: true
}

const chart = new Chart('chart', 600, 600, settings)
chart.radix(data)
```

## Next Steps

- **[Custom Settings Guide](/docs/guides/custom-settings)** — Learn more
- **[Types Reference](/docs/api/types)** — See all type definitions
