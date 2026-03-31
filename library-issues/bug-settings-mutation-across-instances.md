# Bug: `Chart` constructor mutates the shared `default_settings` singleton

**Type:** Bug
**Affects:** `project/src/chart.ts` → `Chart` constructor
**Severity:** Medium — causes cross-instance settings bleed when multiple charts are on the same page with different custom settings

---

## Current behaviour

`default_settings` is imported as a module-level singleton object. In the `Chart` constructor, custom settings are merged into it **in-place** via `Object.assign`:

```typescript
// chart.ts — current constructor
const chartSettings = default_settings        // ← just a reference, not a copy
if (settings != null) {
  Object.assign(chartSettings, settings)      // ← mutates the shared singleton!
  ...
}
```

Because `chartSettings` is a reference to the same object as `default_settings`, any settings passed to one `Chart` instance permanently modify the module-level default for all subsequent `Chart` instances in the same page/process.

## Reproduction

```javascript
import { Chart } from '@astrodraw/astrochart'

// First chart — custom red background
const chart1 = new Chart('chart1', 600, 600, { COLOR_BACKGROUND: '#ff0000' })

// Second chart — no custom settings passed, expects white background
const chart2 = new Chart('chart2', 600, 600)
// ❌ chart2 ALSO has a red background because default_settings was mutated
```

## Expected behaviour

Each `Chart` instance should have its own isolated copy of the settings. The module-level `default_settings` must remain pristine.

## Suggested fix

Replace the reference assignment with a deep copy:

```typescript
// chart.ts — fixed constructor
constructor (elementId: string, width: number, height: number, settings?: Partial<Settings>) {
  // Create a fresh copy of defaults for this instance
  const chartSettings: Settings = { ...default_settings }

  if (settings != null) {
    Object.assign(chartSettings, settings)
    if (!('COLORS_SIGNS' in settings)) {
      chartSettings.COLORS_SIGNS = [
        chartSettings.COLOR_ARIES, chartSettings.COLOR_TAURUS,
        // ... rest of sign colours
      ]
    }
  }
  // ...
}
```

For nested objects (e.g. `ASPECTS`, `DIGNITIES_EXACT_EXALTATION_DEFAULT`) a shallow spread may not be enough — consider `structuredClone(default_settings)` if those nested objects are also mutated downstream.

## Notes

- The bug may be masked in most use cases where only one `Chart` instance is created per page, or where the same settings are reused
- It is reproducible whenever two `Chart` instances with *different* custom settings are created in the same JavaScript context
- Should be covered by a new test: create two Chart instances in sequence with conflicting settings and assert each uses its own values
- The `COLORS_SIGNS` re-computation block inside the `if (settings != null)` branch also references `default_settings.COLOR_*` — after the fix it should reference `chartSettings.COLOR_*` instead (already correct behaviour, just noting for the reviewer)
