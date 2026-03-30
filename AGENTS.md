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
