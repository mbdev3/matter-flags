# matter-flags

[![npm version](https://img.shields.io/npm/v/matter-flags.svg)](https://www.npmjs.com/package/matter-flags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 18 | 19](https://img.shields.io/badge/React-18%20%7C%2019-61dafb.svg)](https://react.dev/)

Tree-shakeable, zero-dependency React flag components. **307 flags** — 252 countries, 5 organizations, 50 US states + DC. One flag ≈ 2kB gzip. No postinstall, no `public/` copying, no CSS import.

- Docs & playground: <https://flags.matterdevelopment.com/>
- npm: <https://www.npmjs.com/package/matter-flags>
- Source: <https://github.com/mbdev3/matter-flags>

## Features

- Single `<Flag code="ma" />` with `circle | rounded | square` shapes and pixel or CSS sizes
- `<DuoFlag>` fuses two flags: vertical `split`, `diagonal` triangles, or overlapping `stack`
- Direct per-flag imports for the smallest possible bundle (RSC-safe)
- Borders, drop shadows, and gloss gradients via inline styles — zero CSS files
- White `<FallbackFlag />` for unknown codes (never crashes), `role="img"` + labels built in
- Case-insensitive codes with sensible aliases (`uk` → Union Jack, `arab`, `africa`)

## Install

```sh
pnpm add matter-flags
# npm install matter-flags | yarn add matter-flags | bun add matter-flags
```

Requires `react ^18 || ^19`. Zero runtime dependencies.

## Quick start

```tsx
// 1. Easiest — code-split <Flag> (only the requested chunk loads)
import { Flag } from 'matter-flags';

<Flag code="ma" shape="circle" size={32} bordered dropShadow gradient="linear" />;

// 2. Smallest — direct import (only MA enters your bundle)
import MA from 'matter-flags/flags/ma';

<MA size={24} shape="circle" />;

// 3. Two flags, one badge
import { DuoFlag } from 'matter-flags';

<DuoFlag a="us" b="gb" layout="split" size={48} shape="circle" bordered />;
```

## `<Flag />`

`import { Flag } from 'matter-flags'` — client component. Loads the requested flag as a separate chunk (code-split), renders a correct-size placeholder while loading (no layout shift, SSR-safe).

| Prop | Type | Default | Description |
|---|---|---|---|
| `code` | `string` | — | Case-insensitive code, e.g. `"ma"`, `"US"`, `"us-tx"`, `"eu"` |
| `shape` | `'circle' \| 'rounded' \| 'square'` | `'rounded'` | `rounded` ≈ 18% radius |
| `size` | `number \| string` | `24` | Number = px, or any CSS size (`"2rem"`, `"100%"`) |
| `bordered` | `boolean` | `true` | 1px outline |
| `borderColor` | `string` | `'rgba(0,0,0,0.15)'` | Any CSS color |
| `borderWidth` | `number \| string` | `1` | Number = px |
| `dropShadow` | `boolean` | `false` | Soft `0 1px 3px` shadow |
| `gradient` | `'none' \| 'top-down' \| 'linear' \| 'circular'` | `'none'` | Gloss overlay |
| `title` | `string` | country name | Tooltip + accessible label |
| `fallback` | `ReactNode` | white flag | Shown while the chunk loads |
| `className` / `style` | — | — | Passed to the wrapper |

Examples:

```tsx
// Avatar
<Flag code="jp" shape="circle" size={40} bordered dropShadow />

// Flag + name row
<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
  <Flag code="br" shape="rounded" size={20} />
  Brazil
</span>

// Custom border, no border-radius look via square
<Flag code="ch" shape="square" size={28} bordered borderColor="#000" borderWidth={2} />
```

## Direct flag imports

Every flag is its own module — ideal for lists, tables, and React Server Components (no client JS needed):

```tsx
import MA from 'matter-flags/flags/ma';
import US from 'matter-flags/flags/us';
import USTX from 'matter-flags/flags/us-tx';

// Named imports also work and tree-shake:
import { MA, US, GB } from 'matter-flags/flags';
```

Same visual props as `<Flag />` minus `code`/`fallback`:

```tsx
// Language picker row (server component)
import FR from 'matter-flags/flags/fr';

<FR size={18} shape="circle" title="Français" />;
```

## `<DuoFlag />`

`import { DuoFlag } from 'matter-flags'` — two flags in one badge. Same visual props as `<Flag />`, plus:

| Prop | Type | Default | Description |
|---|---|---|---|
| `a` / `b` | `string` | — | Left/top-left/first and right/bottom-right/second codes |
| `layout` | `'split' \| 'diagonal' \| 'stack'` | `'split'` | `split` = left/right halves, `diagonal` = top-left/bottom-right triangles, `stack` = overlapping badges |
| `overlap` | `number` | `35` | Overlap % for `stack` |

```tsx
// The classic split circle
<DuoFlag a="us" b="gb" layout="split" size={96} shape="circle" bordered borderColor="#7a4a2b" borderWidth={3} dropShadow />

// Diagonal energies
<DuoFlag a="fr" b="ma" layout="diagonal" size={64} shape="circle" bordered />

// Versus / language-pair badge
<DuoFlag a="en" b="es" layout="stack" size={32} /> // (use real codes: gb/es, fr/ma…)
```

## `<FallbackFlag />`

`import { FallbackFlag } from 'matter-flags'` — plain white flag in any shape/size. Rendered automatically by `<Flag />` and `<DuoFlag />` for unknown codes; use directly for skeletons and empty states:

```tsx
<FallbackFlag size={24} shape="circle" />
```

## Codes

Case-insensitive. `uk`/`gb` → Union Jack (`gb-ukm`); British nations (`gb-sct`, `gb-wls`, `gb-nir`) available directly; `el` → `gr`.

Organizations (short codes included): `eu`, `un`, `nato`, `arab`/`arab-league`, `africa`/`african-union`.

US states + DC: `us-al` … `us-wy`, `us-dc` (e.g. `us-tx`, `us-ca`, `us-oh`). No short aliases — `al`, `ca`, `ar` belong to Albania, Canada, Argentina. Mississippi is excluded: its 2020 flag is not public domain.

<details>
<summary>All 252 country codes</summary>

<!-- CODES-COUNTRIES -->

</details>

<details>
<summary>All 5 organization codes</summary>

<!-- CODES-ORGS -->

</details>

<details>
<summary>All 50 US state + DC codes</summary>

<!-- CODES-STATES -->

</details>

## Next.js / SSR

- Direct imports (`matter-flags/flags/xx`) are pure server components — use freely in RSC, SSR, SSG.
- `<Flag />`, `<DuoFlag />`, `<FallbackFlag />` are client components only because they load chunks with `useEffect`. On the server they render a correct-size placeholder, so there is no hydration mismatch or layout shift. Wrap interactive usage in a client component boundary as usual.

## Size & tree-shaking

`sideEffects: false`, ESM only, one module per flag.

| Usage | Cost |
|---|---|
| `import MA from 'matter-flags/flags/ma'` | ~0.5kB gzip flag + ~1.4kB shared runtime (once) |
| `<Flag code="ma">` | same, code-split per flag |
| Core (`matter-flags`) | ~6kB gzip, zero flags bundled |

Seal-heavy flags (some US states, up to ~50kB gzip) cost what their artwork costs — you only pay for flags you import. `pnpm size` enforces the budget in CI.

## Accessibility

Every flag renders `role="img"` with `aria-label` (country/organization name, or your `title`), and a matching `title` tooltip. Purely decorative? Hide it from assistive tech: `<span aria-hidden="true"><Flag … /></span>`.

## Sources

- Countries: [Yummygum flagpack-core](https://github.com/Yummygum/flagpack-core) (MIT) — see `NOTICE`. Single `l` source, SVGO-optimized.
- Organizations & US states: Wikimedia Commons, all verified Public Domain — see `assets/orgs/SOURCES.json` and `assets/states/SOURCES.json`.
- Brand icons on the docs site: [SVGL](https://svgl.app).

## Develop

```sh
pnpm install
pnpm build:flags   # regenerate src/flags + README.md code tables
pnpm typecheck
pnpm build
pnpm size
```

> Edit `scripts/manual.template.md`, not `README.md` — the code tables are generated by `scripts/build-readme.mjs`.

Docs site: `pnpm --filter matter-flags-site dev` → <http://localhost:4321/>.

## License

MIT — Matter Development. Flag artwork remains under its original licenses (see `NOTICE`, `assets/*/SOURCES.json`).
