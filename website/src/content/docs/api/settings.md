---
title: Settings Reference
description: Complete reference for all AstroChart settings.
---

# Settings Reference

All settings are passed as a plain object to the `Chart` constructor. Every key is optional — omitted keys fall back to the values listed here.

```typescript
import { Chart } from '@astrodraw/astrochart'
const chart = new Chart('chart', 600, 600, { /* settings here */ })
```

---

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SYMBOL_SCALE` | `number` | `1` | Global scale multiplier for all rendered symbols |
| `COLOR_BACKGROUND` | `string` | `'#fff'` | SVG canvas background fill color |
| `MARGIN` | `number` | `50` | Outer margin in pixels |
| `PADDING` | `number` | `18` | Inner padding in pixels |
| `SHIFT_IN_DEGREES` | `number` | `180` | Chart rotation offset; `180` places 0° on the left (West) |
| `STROKE_ONLY` | `boolean` | `false` | Render all symbols as outlines — no fill |
| `ADD_CLICK_AREA` | `boolean` | `false` | Add invisible click-target areas; required for click events |
| `COLLISION_RADIUS` | `number` | `10` | Planet collision-avoidance radius in px (at `SYMBOL_SCALE: 1`) |
| `DEBUG` | `boolean` | `false` | Print internal debug information to the browser console |

---

## Points / Planets

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `POINTS_COLOR` | `string` | `'#000'` | Fill/stroke color for planet symbols |
| `POINTS_TEXT_SIZE` | `number` | `8` | Font size in px for the text next to each planet (angle, retrograde, dignity) |
| `POINTS_STROKE` | `number` | `1.8` | Stroke width for planet symbols |

---

## Signs

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SIGNS_COLOR` | `string` | `'#000'` | Color for zodiac sign symbols |
| `SIGNS_STROKE` | `number` | `1.5` | Stroke width for zodiac sign symbols |
| `COLOR_ARIES` | `string` | `'#FF4500'` | Sector color — Aries |
| `COLOR_TAURUS` | `string` | `'#8B4513'` | Sector color — Taurus |
| `COLOR_GEMINI` | `string` | `'#87CEEB'` | Sector color — Gemini |
| `COLOR_CANCER` | `string` | `'#27AE60'` | Sector color — Cancer |
| `COLOR_LEO` | `string` | `'#FF4500'` | Sector color — Leo |
| `COLOR_VIRGO` | `string` | `'#8B4513'` | Sector color — Virgo |
| `COLOR_LIBRA` | `string` | `'#87CEEB'` | Sector color — Libra |
| `COLOR_SCORPIO` | `string` | `'#27AE60'` | Sector color — Scorpio |
| `COLOR_SAGITTARIUS` | `string` | `'#FF4500'` | Sector color — Sagittarius |
| `COLOR_CAPRICORN` | `string` | `'#8B4513'` | Sector color — Capricorn |
| `COLOR_AQUARIUS` | `string` | `'#87CEEB'` | Sector color — Aquarius |
| `COLOR_PISCES` | `string` | `'#27AE60'` | Sector color — Pisces |
| `COLORS_SIGNS` | `string[]` | *(array of the 12 above in order)* | Ordered array of all 12 sign sector colors |

---

## Circles & Lines

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `CIRCLE_COLOR` | `string` | `'#333'` | Color of chart ring circles |
| `CIRCLE_STRONG` | `number` | `2` | Stroke width for circles |
| `LINE_COLOR` | `string` | `'#333'` | Color of house spoke lines |
| `INDOOR_CIRCLE_RADIUS_RATIO` | `number` | `2` | `radius / INDOOR_CIRCLE_RADIUS_RATIO` determines the inner-most circle size |
| `INNER_CIRCLE_RADIUS_RATIO` | `number` | `8` | `radius - radius/INNER_CIRCLE_RADIUS_RATIO` determines the planet ring inner edge |
| `RULER_RADIUS` | `number` | `4` | `(radius / INNER_CIRCLE_RADIUS_RATIO) / RULER_RADIUS` determines degree ruler band width |

---

## Axis & Cusps

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SYMBOL_AS` | `string` | `'As'` | Ascendant axis label text |
| `SYMBOL_DS` | `string` | `'Ds'` | Descendant axis label text |
| `SYMBOL_MC` | `string` | `'Mc'` | Midheaven axis label text |
| `SYMBOL_IC` | `string` | `'Ic'` | Imum Coeli axis label text |
| `SYMBOL_AXIS_FONT_COLOR` | `string` | `'#333'` | Color for As/Ds/Mc/Ic labels |
| `SYMBOL_AXIS_STROKE` | `number` | `1.6` | Stroke width for axis labels |
| `CUSPS_STROKE` | `number` | `1` | Stroke width for cusp dividing lines |
| `CUSPS_FONT_COLOR` | `string` | `'#000'` | Color of cusp number labels |
| `SYMBOL_CUSP_1` | `string` | `'1'` | Label for cusp 1 |
| `SYMBOL_CUSP_2` | `string` | `'2'` | Label for cusp 2 |
| `SYMBOL_CUSP_3` | `string` | `'3'` | Label for cusp 3 |
| `SYMBOL_CUSP_4` | `string` | `'4'` | Label for cusp 4 |
| `SYMBOL_CUSP_5` | `string` | `'5'` | Label for cusp 5 |
| `SYMBOL_CUSP_6` | `string` | `'6'` | Label for cusp 6 |
| `SYMBOL_CUSP_7` | `string` | `'7'` | Label for cusp 7 |
| `SYMBOL_CUSP_8` | `string` | `'8'` | Label for cusp 8 |
| `SYMBOL_CUSP_9` | `string` | `'9'` | Label for cusp 9 |
| `SYMBOL_CUSP_10` | `string` | `'10'` | Label for cusp 10 |
| `SYMBOL_CUSP_11` | `string` | `'11'` | Label for cusp 11 |
| `SYMBOL_CUSP_12` | `string` | `'12'` | Label for cusp 12 |

---

## Symbol Text (Planets & Signs)

These settings control which key name is used to look up each symbol in the built-in symbol renderer. Changing them only makes sense if you have custom symbol definitions that use different keys.

| Setting | Type | Default |
|---------|------|---------|
| `SYMBOL_SUN` | `string` | `'Sun'` |
| `SYMBOL_MOON` | `string` | `'Moon'` |
| `SYMBOL_MERCURY` | `string` | `'Mercury'` |
| `SYMBOL_VENUS` | `string` | `'Venus'` |
| `SYMBOL_MARS` | `string` | `'Mars'` |
| `SYMBOL_JUPITER` | `string` | `'Jupiter'` |
| `SYMBOL_SATURN` | `string` | `'Saturn'` |
| `SYMBOL_URANUS` | `string` | `'Uranus'` |
| `SYMBOL_NEPTUNE` | `string` | `'Neptune'` |
| `SYMBOL_PLUTO` | `string` | `'Pluto'` |
| `SYMBOL_CHIRON` | `string` | `'Chiron'` |
| `SYMBOL_LILITH` | `string` | `'Lilith'` |
| `SYMBOL_NNODE` | `string` | `'NNode'` |
| `SYMBOL_SNODE` | `string` | `'SNode'` |
| `SYMBOL_FORTUNE` | `string` | `'Fortune'` |
| `SYMBOL_ARIES` | `string` | `'Aries'` |
| `SYMBOL_TAURUS` | `string` | `'Taurus'` |
| `SYMBOL_GEMINI` | `string` | `'Gemini'` |
| `SYMBOL_CANCER` | `string` | `'Cancer'` |
| `SYMBOL_LEO` | `string` | `'Leo'` |
| `SYMBOL_VIRGO` | `string` | `'Virgo'` |
| `SYMBOL_LIBRA` | `string` | `'Libra'` |
| `SYMBOL_SCORPIO` | `string` | `'Scorpio'` |
| `SYMBOL_SAGITTARIUS` | `string` | `'Sagittarius'` |
| `SYMBOL_CAPRICORN` | `string` | `'Capricorn'` |
| `SYMBOL_AQUARIUS` | `string` | `'Aquarius'` |
| `SYMBOL_PISCES` | `string` | `'Pisces'` |
| `SYMBOL_SIGNS` | `string[]` | `['Aries', 'Taurus', ..., 'Pisces']` |

---

## Custom Symbols

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `CUSTOM_SYMBOL_FN` | `((name: string, x: number, y: number, context: SVG) => Element) \| null` | `null` | Custom symbol renderer. Return a valid SVG `Element`, or `null`/`undefined` to fall back to the built-in symbol for that name. |

See the [Custom Symbols guide](../guides/custom-symbols) for full examples.

---

## Aspects

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `ASPECTS` | `Record<string, { degree: number, orbit: number, color: string }>` | *(see below)* | Aspect definitions. Each key is an aspect name; the value defines its degree, allowed orb, and line color. |

Default value:

```javascript
{
  conjunction: { degree: 0,   orbit: 10, color: 'transparent' },
  square:      { degree: 90,  orbit: 8,  color: '#FF4500' },
  trine:       { degree: 120, orbit: 8,  color: '#27AE60' },
  opposition:  { degree: 180, orbit: 10, color: '#27AE60' }
}
```

You can add any custom aspects — for example, a sextile:

```javascript
const chart = new Chart('chart', 600, 600, {
  ASPECTS: {
    conjunction: { degree: 0,   orbit: 10, color: 'transparent' },
    sextile:     { degree: 60,  orbit: 6,  color: '#3498db' },
    square:      { degree: 90,  orbit: 8,  color: '#FF4500' },
    trine:       { degree: 120, orbit: 8,  color: '#27AE60' },
    opposition:  { degree: 180, orbit: 10, color: '#27AE60' }
  }
})
```

---

## Dignities

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `SHOW_DIGNITIES_TEXT` | `boolean` | `true` | Show dignity labels next to planet symbols |
| `DIGNITIES_RULERSHIP` | `string` | `'r'` | Label shown when a planet is in its rulership sign |
| `DIGNITIES_DETRIMENT` | `string` | `'d'` | Label shown when a planet is in detriment |
| `DIGNITIES_EXALTATION` | `string` | `'e'` | Label shown when a planet is in exaltation |
| `DIGNITIES_EXACT_EXALTATION` | `string` | `'E'` | Label shown when a planet is at its exact degree of exaltation |
| `DIGNITIES_FALL` | `string` | `'f'` | Label shown when a planet is in fall |
| `DIGNITIES_EXACT_EXALTATION_DEFAULT` | `Dignity[]` | *(Crowley positions)* | Array of `{ name, position, orbit }` defining exact exaltation degrees |

Default `DIGNITIES_EXACT_EXALTATION_DEFAULT`:

```javascript
[
  { name: 'Sun',     position: 19,  orbit: 2 }, // 19° Aries
  { name: 'Moon',    position: 33,  orbit: 2 }, // 3° Taurus
  { name: 'Mercury', position: 155, orbit: 2 }, // 15° Virgo
  { name: 'Venus',   position: 357, orbit: 2 }, // 27° Pisces
  { name: 'Mars',    position: 298, orbit: 2 }, // 28° Capricorn
  { name: 'Jupiter', position: 105, orbit: 2 }, // 15° Cancer
  { name: 'Saturn',  position: 201, orbit: 2 }, // 21° Libra
  { name: 'NNode',   position: 63,  orbit: 2 }, // 3° Gemini
]
```

---

## Animation

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `ANIMATION_CUSPS_ROTATION_SPEED` | `number` | `2` | Speed of the transit cusps rotation animation. Valid range: `0`–`4`. |

---

## Internal IDs

These settings control the `id` attributes applied to SVG group elements inside the chart. **You should not change these unless you have a specific reason** (e.g. avoiding conflicts with other SVG elements on the page).

| Setting | Default |
|---------|---------|
| `ID_CHART` | `'astrology'` |
| `ID_RADIX` | `'radix'` |
| `ID_TRANSIT` | `'transit'` |
| `ID_ASPECTS` | `'aspects'` |
| `ID_POINTS` | `'planets'` |
| `ID_SIGNS` | `'signs'` |
| `ID_CIRCLES` | `'circles'` |
| `ID_AXIS` | `'axis'` |
| `ID_CUSPS` | `'cusps'` |
| `ID_RULER` | `'ruler'` |
| `ID_BG` | `'bg'` |

---

## Related

- **[Custom Settings Guide](../guides/custom-settings)** — Practical examples and dark theme recipe
- **[Custom Symbols Guide](../guides/custom-symbols)** — Using `CUSTOM_SYMBOL_FN`
- **[Click Events Guide](../guides/click-events)** — Using `ADD_CLICK_AREA`
