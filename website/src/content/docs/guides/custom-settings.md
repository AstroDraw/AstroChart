---
title: Custom Settings
description: Customize chart appearance and behavior with AstroChart settings.
---

# Custom Settings

AstroChart provides extensive customization through a plain settings object passed as the fourth argument to `Chart`. Every key is optional — unspecified keys fall back to the library defaults.

```javascript
import { Chart } from '@astrodraw/astrochart'

const settings = {
  COLOR_BACKGROUND: '#1a1a2e',
  POINTS_COLOR: '#e0e0e0',
}

const chart = new Chart('my-chart', 600, 600, settings)
const radix = chart.radix(data)
```

---

## Settings Reference by Category

### Colors

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `COLOR_BACKGROUND` | `string` | `'#fff'` | SVG background fill color |
| `POINTS_COLOR` | `string` | `'#000'` | Color of planet symbols |
| `SIGNS_COLOR` | `string` | `'#000'` | Color of zodiac sign symbols |
| `CIRCLE_COLOR` | `string` | `'#333'` | Color of chart ring circles |
| `LINE_COLOR` | `string` | `'#333'` | Color of spoke/house lines |
| `SYMBOL_AXIS_FONT_COLOR` | `string` | `'#333'` | Color of As/Ds/Mc/Ic labels |
| `CUSPS_FONT_COLOR` | `string` | `'#000'` | Color of cusp number labels |
| `COLOR_ARIES` | `string` | `'#FF4500'` | Sign sector color — Aries |
| `COLOR_TAURUS` | `string` | `'#8B4513'` | Sign sector color — Taurus |
| `COLOR_GEMINI` | `string` | `'#87CEEB'` | Sign sector color — Gemini |
| `COLOR_CANCER` | `string` | `'#27AE60'` | Sign sector color — Cancer |
| `COLOR_LEO` | `string` | `'#FF4500'` | Sign sector color — Leo |
| `COLOR_VIRGO` | `string` | `'#8B4513'` | Sign sector color — Virgo |
| `COLOR_LIBRA` | `string` | `'#87CEEB'` | Sign sector color — Libra |
| `COLOR_SCORPIO` | `string` | `'#27AE60'` | Sign sector color — Scorpio |
| `COLOR_SAGITTARIUS` | `string` | `'#FF4500'` | Sign sector color — Sagittarius |
| `COLOR_CAPRICORN` | `string` | `'#8B4513'` | Sign sector color — Capricorn |
| `COLOR_AQUARIUS` | `string` | `'#87CEEB'` | Sign sector color — Aquarius |
| `COLOR_PISCES` | `string` | `'#27AE60'` | Sign sector color — Pisces |
| `COLORS_SIGNS` | `string[]` | *(array of the 12 above)* | Ordered array of all 12 sign colors |

### Symbols

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SYMBOL_SCALE` | `number` | `1` | Global scale factor for all symbols |
| `SYMBOL_SUN` | `string` | `'Sun'` | Key name for Sun symbol |
| `SYMBOL_MOON` | `string` | `'Moon'` | Key name for Moon symbol |
| `SYMBOL_MERCURY` | `string` | `'Mercury'` | Key name for Mercury symbol |
| `SYMBOL_VENUS` | `string` | `'Venus'` | Key name for Venus symbol |
| `SYMBOL_MARS` | `string` | `'Mars'` | Key name for Mars symbol |
| `SYMBOL_JUPITER` | `string` | `'Jupiter'` | Key name for Jupiter symbol |
| `SYMBOL_SATURN` | `string` | `'Saturn'` | Key name for Saturn symbol |
| `SYMBOL_URANUS` | `string` | `'Uranus'` | Key name for Uranus symbol |
| `SYMBOL_NEPTUNE` | `string` | `'Neptune'` | Key name for Neptune symbol |
| `SYMBOL_PLUTO` | `string` | `'Pluto'` | Key name for Pluto symbol |
| `SYMBOL_CHIRON` | `string` | `'Chiron'` | Key name for Chiron symbol |
| `SYMBOL_LILITH` | `string` | `'Lilith'` | Key name for Lilith symbol |
| `SYMBOL_NNODE` | `string` | `'NNode'` | Key name for North Node symbol |
| `SYMBOL_SNODE` | `string` | `'SNode'` | Key name for South Node symbol |
| `SYMBOL_FORTUNE` | `string` | `'Fortune'` | Key name for Part of Fortune symbol |
| `SYMBOL_AS` | `string` | `'As'` | Ascendant axis label |
| `SYMBOL_DS` | `string` | `'Ds'` | Descendant axis label |
| `SYMBOL_MC` | `string` | `'Mc'` | Midheaven axis label |
| `SYMBOL_IC` | `string` | `'Ic'` | Imum Coeli axis label |
| `SYMBOL_SIGNS` | `string[]` | *(all 12 sign names)* | Ordered array of sign name keys |
| `CUSTOM_SYMBOL_FN` | `function \| null` | `null` | Custom symbol renderer — see [Custom Symbols](./custom-symbols) |

### Geometry

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `MARGIN` | `number` | `50` | Outer margin in px |
| `PADDING` | `number` | `18` | Inner padding in px |
| `SHIFT_IN_DEGREES` | `number` | `180` | Chart rotation offset (0° = West) |
| `INDOOR_CIRCLE_RADIUS_RATIO` | `number` | `2` | Divisor for inner-most circle radius |
| `INNER_CIRCLE_RADIUS_RATIO` | `number` | `8` | Divisor for planet ring inner edge |
| `RULER_RADIUS` | `number` | `4` | Divisor for degree ruler band width |
| `COLLISION_RADIUS` | `number` | `10` | Planet collision avoidance radius (px) at scale 1 |

### Stroke & Lines

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `POINTS_STROKE` | `number` | `1.8` | Stroke width for planet symbols |
| `SIGNS_STROKE` | `number` | `1.5` | Stroke width for sign symbols |
| `CIRCLE_STRONG` | `number` | `2` | Stroke width for circles |
| `SYMBOL_AXIS_STROKE` | `number` | `1.6` | Stroke width for axis labels |
| `CUSPS_STROKE` | `number` | `1` | Stroke width for cusp lines |
| `STROKE_ONLY` | `boolean` | `false` | Render all symbols as outlines only (no fill) |

### Aspects

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `ASPECTS` | `Aspect` | *(see below)* | Aspect definitions — degree, orbit, and color |

Default `ASPECTS` value:
```javascript
{
  conjunction: { degree: 0,   orbit: 10, color: 'transparent' },
  square:      { degree: 90,  orbit: 8,  color: '#FF4500' },
  trine:       { degree: 120, orbit: 8,  color: '#27AE60' },
  opposition:  { degree: 180, orbit: 10, color: '#27AE60' }
}
```

### Dignities

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SHOW_DIGNITIES_TEXT` | `boolean` | `true` | Show dignity labels next to planets |
| `DIGNITIES_RULERSHIP` | `string` | `'r'` | Label for rulership dignity |
| `DIGNITIES_DETRIMENT` | `string` | `'d'` | Label for detriment |
| `DIGNITIES_EXALTATION` | `string` | `'e'` | Label for exaltation |
| `DIGNITIES_EXACT_EXALTATION` | `string` | `'E'` | Label for exact exaltation |
| `DIGNITIES_FALL` | `string` | `'f'` | Label for fall |
| `DIGNITIES_EXACT_EXALTATION_DEFAULT` | `Dignity[]` | *(Crowley positions)* | Exact exaltation positions |

### Animation

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `ANIMATION_CUSPS_ROTATION_SPEED` | `number` | `2` | Transit rotation animation speed (0–4) |

### Interaction

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `ADD_CLICK_AREA` | `boolean` | `false` | Enable click-event areas on chart elements |

### Debug

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `DEBUG` | `boolean` | `false` | Log internal debug information to the console |

---

## Practical Examples

### Dark Theme

```javascript
import { Chart } from '@astrodraw/astrochart'

const darkSettings = {
  COLOR_BACKGROUND: '#1a1a2e',
  POINTS_COLOR: '#e0e0ff',
  SIGNS_COLOR: '#aaaacc',
  CIRCLE_COLOR: '#444466',
  LINE_COLOR: '#444466',
  SYMBOL_AXIS_FONT_COLOR: '#aaaacc',
  CUSPS_FONT_COLOR: '#aaaacc',
  COLOR_ARIES: '#cc3300',
  COLOR_TAURUS: '#664411',
  COLOR_GEMINI: '#336699',
  COLOR_CANCER: '#1e7a4a',
  COLOR_LEO: '#cc3300',
  COLOR_VIRGO: '#664411',
  COLOR_LIBRA: '#336699',
  COLOR_SCORPIO: '#1e7a4a',
  COLOR_SAGITTARIUS: '#cc3300',
  COLOR_CAPRICORN: '#664411',
  COLOR_AQUARIUS: '#336699',
  COLOR_PISCES: '#1e7a4a',
  COLORS_SIGNS: ['#cc3300','#664411','#336699','#1e7a4a','#cc3300','#664411','#336699','#1e7a4a','#cc3300','#664411','#336699','#1e7a4a'],
  ASPECTS: {
    conjunction: { degree: 0,   orbit: 10, color: 'transparent' },
    square:      { degree: 90,  orbit: 8,  color: '#ff6633' },
    trine:       { degree: 120, orbit: 8,  color: '#33cc77' },
    opposition:  { degree: 180, orbit: 10, color: '#6699ff' }
  }
}

const chart = new Chart('chart', 600, 600, darkSettings)
chart.radix(data)
```

### Stroke-Only Mode

Render all planet and sign symbols as outlines with no fill — useful for monochrome or print output:

```javascript
const chart = new Chart('chart', 600, 600, { STROKE_ONLY: true })
chart.radix(data)
```

### Custom Aspect Colors

Override just the aspect colors without touching any other settings:

```javascript
const chart = new Chart('chart', 600, 600, {
  ASPECTS: {
    conjunction: { degree: 0,   orbit: 10, color: '#9b59b6' },
    square:      { degree: 90,  orbit: 8,  color: '#e74c3c' },
    trine:       { degree: 120, orbit: 8,  color: '#2ecc71' },
    opposition:  { degree: 180, orbit: 10, color: '#3498db' }
  }
})
chart.radix(data)
```

### Scale Symbols Up

Increase the size of all planet and sign symbols:

```javascript
const chart = new Chart('chart', 700, 700, { SYMBOL_SCALE: 1.4 })
chart.radix(data)
```

### Hide Dignity Labels

```javascript
const chart = new Chart('chart', 600, 600, { SHOW_DIGNITIES_TEXT: false })
chart.radix(data)
```

---

## Next Steps

- **[Custom Symbols](./custom-symbols)** — Replace individual planet symbols with your own SVG
- **[Click Events](./click-events)** — Add interactivity to chart elements
- **[Settings API Reference](../api/settings)** — Full settings type definitions
