# Improvement: `validate()` does not check for unknown planet keys

**Type:** Improvement (not a breaking bug)
**Affects:** `project/src/utils.ts` → `validate()`
**Discovered during:** Issue #94 — writing demo data for the website

---

## Current behaviour

The `validate()` function checks that:
- `data.planets` exists
- each planet value is an `Array`
- `data.cusps` is an Array of exactly 12 values

It does **not** check whether planet keys are in the set of recognised symbol names.

```typescript
// validate() — current loop (utils.ts)
for (const property in data.planets) {
  if (!Array.isArray(data.planets[property])) {
    status.messages.push(...)
    status.hasError = true
  }
  // ↑ only validates the value shape — the KEY is never checked
}
```

As a result, passing an unrecognised key (e.g. `NorthNode`, `Vertex`, `PartOfFortune`) **silently succeeds** validation and the library renders a generic red fallback circle at that position — with no warning to the developer.

## How it was discovered

When writing `demoData.ts` for the website, the following keys were used by mistake:

```typescript
// ❌ These do NOT work — wrong key names
NorthNode: [95.45, 0],
SouthNode: [275.45, 0],
Vertex:    [325.67, 0]

// ✅ Correct names
NNode:   [95.45, 0],
SNode:   [275.45, 0],
Fortune: [325.67, 0]
```

The chart appeared to load but no symbols were drawn for those planets — no console error, no validation message.

## Expected behaviour

`validate()` should emit a **warning** (not a hard error, to avoid breaking existing charts) when it encounters a key that is not in the recognised symbol list:

```
"Unknown planet key 'NorthNode'. Valid keys are: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Chiron, Lilith, NNode, SNode, Fortune."
```

## Suggested fix

```typescript
// In utils.ts, extend validate() with an optional warning step:
const KNOWN_PLANET_KEYS = new Set([
  'Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter',
  'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Chiron',
  'Lilith', 'NNode', 'SNode', 'Fortune'
])

for (const property in data.planets) {
  if (!Array.isArray(data.planets[property])) {
    status.messages.push(`The planets property '${property}' has to be Array.`)
    status.hasError = true
  } else if (!KNOWN_PLANET_KEYS.has(property)) {
    // Warning only — unknown keys are allowed (custom symbols),
    // but we surface the information to help developers catch typos
    console.warn(`[AstroChart] Unknown planet key '${property}'. It will render as a fallback symbol.`)
  }
}
```

## Notes

- This should be a **`console.warn`**, not an error — unknown keys with a `CUSTOM_SYMBOL_FN` setting are a valid use case
- The `DEBUG` settings flag could gate the warning if preferred
- Should be covered by a new unit test in `utils.test.ts`
