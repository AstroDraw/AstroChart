---
title: Changelog
description: AstroChart version history and release notes.
---

# Changelog

All notable changes to AstroChart are documented here.  
This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Versioning](https://semver.org/).

> For the full release history, see the [GitHub Releases page](https://github.com/AstroDraw/AstroChart/releases).

---

## [3.0.2] — 2023-08-17

### Fixed
- Corrected planet collision-avoidance logic when `SYMBOL_SCALE` is set to a value other than `1`
- Resolved an edge case where `DIGNITIES_EXACT_EXALTATION_DEFAULT` positions were not applied when custom dignity data was provided
- Minor SVG attribute type-coercion fixes for strict browser environments
- Fixed `SNode` and `Fortune` symbol positions being rendered at incorrect ecliptic angles

---

## [3.0.1] — 2023-07-20

### Fixed
- Transit chart rendering when cusps array contains boundary values at 0° or 360°
- `STROKE_ONLY` mode now correctly suppresses fill on sign sector backgrounds
- `ANIMATION_CUSPS_ROTATION_SPEED: 0` now stops animation as expected

### Changed
- `CUSTOM_SYMBOL_FN` returning `null` or `undefined` now reliably falls back to the built-in symbol instead of leaving an empty group element
- Improved collision detection performance for charts with many planets

---

## [3.0.0] — 2023-07-10

### Added
- Full TypeScript rewrite — all public APIs are typed; ships with `.d.ts` declaration files
- `CUSTOM_SYMBOL_FN` setting for replacing any planet or sign symbol with a custom SVG element
- `ADD_CLICK_AREA` setting — adds transparent `<rect>` hit areas around planet and cusp symbols, enabling external DOM `click` event listeners
- `STROKE_ONLY` rendering mode for monochrome / print output
- `SHOW_DIGNITIES_TEXT` setting and configurable dignity label characters (`r`, `d`, `e`, `E`, `f`)
- `ANIMATION_CUSPS_ROTATION_SPEED` setting for transit rotation animation
- `DEBUG` setting for internal console logging
- Configurable per-aspect colors, degrees, and orbs via the `ASPECTS` setting
- Support for Chiron, Lilith, North Node, South Node, and Part of Fortune
- `COLLISION_RADIUS` setting to tune planet symbol spacing
- UMD bundle (`dist/astrochart.js`) for direct browser `<script>` tag usage
- Comprehensive Jest + ts-jest test suite

### Changed
- **Breaking:** Package renamed to `@astrodraw/astrochart`
- **Breaking:** `AstroData` shape changed to `{ planets: Record<string, number[]>, cusps: number[] }` — see the [Introduction](../introduction)
- Cusps array must contain exactly 12 values; validation throws a descriptive error on mismatch
- `SHIFT_IN_DEGREES` default changed to `180` (0° on the West / Ascendant side)

### Removed
- Legacy UMD global `Astrology` namespace — use `import { Chart } from '@astrodraw/astrochart'` instead

---

## Earlier Versions

See the [GitHub repository](https://github.com/AstroDraw/AstroChart) for the history of the original `astrochart` package (versions prior to 3.0.0).
