---
title: Contributing
description: Contribute to the AstroChart project.
---

# Contributing to AstroChart

We welcome contributions of all kinds — bug reports, feature requests, documentation improvements, and code changes. This page explains how to get started.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create a branch** for your feature or bugfix (see [branch naming](#submitting-a-pr) below)
4. **Make your changes** and test thoroughly
5. **Submit a pull request** with a clear description

---

## Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/AstroChart.git
cd AstroChart
npm ci           # install exact dependency versions
npm run build    # compile TypeScript → dist/astrochart.js
npm test         # run the full test suite
```

> **Node version:** Use Node 24. If `npm` commands fail, run `nvm use 24` first.

---

## Testing

```bash
npm test                          # run all tests
npm run test:coverage             # run tests with coverage report
npx jest project/src/utils.test.ts  # run a single test file
```

Tests are co-located with source files (`foo.test.ts` lives next to `foo.ts`). Use `describe`/`test` (not `it`), prefer `toStrictEqual`, and never commit `.only`.

---

## Website Development

The documentation website lives in the `website/` sub-directory and is a completely separate project built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

### Running the dev server

```bash
cd website
npm ci
npm run dev
```

The site will be available at `http://localhost:4321`.

### Website stack

- **Astro** — static site builder
- **Starlight** — documentation theme for Astro
- **MDX** — use `.mdx` extension (not `.md`) for any content page that imports and uses components
- Content lives in `website/src/content/docs/`

### Isolation rule

`website/` must **never** affect the library build or tests. If you add any new sub-directory at the repo root, add it to both:
- the `exclude` list in the root `tsconfig.json`
- the `exclude` regex in `webpack.config.js`

After any structural change, verify isolation by running `npm run build` and `npm test` from the **repo root**.

---

## Code Style

The project follows these conventions (enforced by ESLint):

| Rule | Value |
|------|-------|
| Indentation | 2 spaces |
| Quotes | Single quotes `'` |
| Semicolons | None |
| Line endings | Unix (`LF`) |
| Trailing commas | None |
| `var` keyword | Never — use `const` or `let` |

Additional conventions:

- **Class methods** have a space before the parameter list: `radix (data: AstroData) {`
- **Standalone functions** use arrow-function exports: `export const fn = (...) => { ... }`
- **Naming:** Classes/interfaces PascalCase · methods/variables camelCase · settings keys UPPER_SNAKE_CASE · files lowercase single-word
- **Imports:** default imports for classes, named imports for functions, `import type` for type-only; relative `./` paths, no extensions
- **Errors:** throw plain `Error('descriptive message')` — no custom error classes
- **Null checks:** use loose equality `== null` (catches both `null` and `undefined`)
- **JSDoc:** add `@param` and `@return` tags on all public methods and classes

Run the linter before committing:

```bash
npm run lint
```

---

## Bug Reports

When reporting bugs, please include:

- A clear description of the issue
- Steps to reproduce
- Expected vs. actual behavior
- Browser and version information
- A minimal code example if possible

---

## Feature Requests

Feature requests are welcome! Please describe:

- The desired behavior
- Your use case
- Why this would be valuable for other users
- Any alternative solutions you have considered

---

## Submitting a PR

### Branch naming

| Type | Pattern | Example |
|------|---------|---------|
| Bug fix | `fix/<short-description>` | `fix/collision-radius-scaling` |
| Feature | `feat/<short-description>` | `feat/sextile-aspect-support` |
| Documentation | `docs/<short-description>` | `docs/vue-integration-guide` |
| Chore / refactor | `chore/<short-description>` | `chore/update-jest` |

### What to include in the PR description

- **What** the change does
- **Why** it is needed (link to the related issue if one exists)
- **How** to test it (steps or test file)
- Screenshots for any visual / chart-rendering changes

### Checklist before opening a PR

- [ ] `npm run lint` passes with no errors
- [ ] `npm test` passes with no failures
- [ ] `npm run build` produces a clean `dist/astrochart.js`
- [ ] New behaviour is covered by a test
- [ ] Public API is unchanged (this is a production library — breaking changes require a major version bump and a migration guide)

---

## Questions?

- Open an issue on [GitHub](https://github.com/AstroDraw/AstroChart/issues)
- Review existing issues for similar questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for making AstroChart better! 🙌
