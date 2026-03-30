# AGENTS.md

## Environment
- Node: use `nvm use 24` if node commands fail
- Website sub-project lives in `website/` with its own `package.json`; run npm commands from there

## Build / Lint / Test
- Install: `npm ci`
- Build: `npm run build` (webpack UMD bundle → `dist/astrochart.js`)
- Lint: `npm run lint` (ESLint, TypeScript source files only)
- Test all: `npm test` (Jest + ts-jest, jsdom environment)
- Test single file: `npx jest project/src/utils.test.ts`
- Test with coverage: `npm run test:coverage`

## Code Style
- **Formatting:** 2-space indent, single quotes, no semicolons, unix line endings, no trailing commas, no `var`
- **Functions:** class methods have a space before parens (`radix (data: AstroData) {`); standalone functions use `export const fn = (...) => { ... }`
- **Naming:** Classes/interfaces PascalCase, methods/variables camelCase, settings keys UPPER_SNAKE_CASE, files lowercase single-word
- **Imports:** default imports for classes, named imports for functions, `import type` for type-only; relative `./` paths, no extensions, no aliases
- **Types:** interfaces/types live in the file where primarily used — no separate types file
- **Tests:** co-located (`foo.test.ts` next to `foo.ts`), use `describe`/`test` (not `it`), prefer `toStrictEqual`, never commit `.only`
- **Errors:** throw plain `Error('descriptive message')`, no custom error classes; null checks use loose equality (`== null`)
- **Docs:** JSDoc on public methods/classes with `@param`, `@return` tags
- **⚠️ Breaking changes:** this is a production library with many consumers — never change public API (exported types, method names, function signatures)

## Adding New Dependencies
- Never write import paths or config shapes from memory for fast-moving packages (Astro, Starlight, etc.)
- After `npm install`, verify real exports: `cat node_modules/<pkg>/package.json | python3 -c "import json,sys; d=json.load(sys.stdin); print(list(d.get('exports',{}).keys()))"`
- Run `npm run build` (or `dev`) after creating the first file — don't build 30 files then discover the config is wrong
- Use `legacy-peer-deps=true` in `.npmrc` when a package's peer range lags behind the latest patch

## Sub-projects isolation (⚠️ hard rule)
- `website/` is a completely separate project — it must **never** affect the library build or tests
- Any new sub-project directory **must** be added to the root `tsconfig.json` `exclude` list AND to the `exclude` regex in `webpack.config.js` before committing
- After adding a sub-project, always run `npm run build` and `npm test` from the **root** to verify isolation

## Website / Astro content rules
- **MDX required for component imports:** Starlight content files that use `import` and JSX component tags **must** have a `.mdx` extension. A `.md` file will print the import statement as plain text and silently ignore all component tags.
- **Multi-instance inline script loading:** When an Astro `is:inline` script dynamically loads an external JS bundle, multiple component instances on the same page will all run simultaneously. Use a shared queue pattern to avoid race conditions:
  ```javascript
  if (window.astrochart) {
    initChart()
  } else if (document.querySelector('script[src="/astrochart.js"]')) {
    window.__astrochartQueue = window.__astrochartQueue || []
    window.__astrochartQueue.push(initChart)
  } else {
    window.__astrochartQueue = [initChart]
    const s = document.createElement('script')
    s.src = '/astrochart.js'
    s.onload = () => { (window.__astrochartQueue || []).forEach(fn => fn()); window.__astrochartQueue = [] }
    document.head.appendChild(s)
  }
  ```

## AstroChart library — data shape
The real `AstroData` type (from `project/src/radix.ts`) is:
```typescript
interface AstroData {
  planets: Record<string, number[]>  // key = symbol name, value = [degrees, retrograde?]
  cusps: number[]                    // exactly 12 degree values
}
```
- **Valid planet keys** (anything else renders as a red fallback circle with no warning):
  `Sun`, `Moon`, `Mercury`, `Venus`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Chiron`, `Lilith`, `NNode`, `SNode`, `Fortune`
- **Cusps** must be an array of **exactly 12** numbers (degrees); fewer or more will throw via `validate()`
- **Retrograde:** second element of a planet array — negative value = retrograde (e.g. `[245.5, -1]`)
- Do **not** use the invented `Planet[]`/`Cusp[]` shape that appears in older placeholder docs — it does not match the library
