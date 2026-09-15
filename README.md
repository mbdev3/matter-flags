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

- `ad` — Andorra
- `ae` — United Arab Emirates
- `af` — Afghanistan
- `ag` — Antigua and Barbuda
- `ai` — Anguilla
- `al` — Albania
- `am` — Armenia
- `ao` — Angola
- `aq` — Antarctica
- `ar` — Argentina
- `as` — American Samoa
- `at` — Austria
- `au` — Australia
- `aw` — Aruba
- `ax` — Åland Islands
- `az` — Azerbaijan
- `ba` — Bosnia and Herzegovina
- `bb` — Barbados
- `bd` — Bangladesh
- `be` — Belgium
- `bf` — Burkina Faso
- `bg` — Bulgaria
- `bh` — Bahrain
- `bi` — Burundi
- `bj` — Benin
- `bl` — Saint Barthélemy
- `bm` — Bermuda
- `bn` — Brunei
- `bo` — Bolivia
- `bq-bo` — Bonaire
- `bq-sa` — Saba
- `bq-se` — Sint Eustatius
- `br` — Brazil
- `bs` — Bahamas
- `bt` — Bhutan
- `bv` — Bouvet Island
- `bw` — Botswana
- `by` — Belarus
- `bz` — Belize
- `ca` — Canada
- `cc` — Cocos Islands
- `cd` — Democratic Republic of Congo
- `cf` — Central African Republic
- `cg` — Congo
- `ch` — Switzerland
- `ci` — Côte d'Ivoire
- `ck` — Cook Island
- `cl` — Chile
- `cm` — Cameroon
- `cn` — China
- `co` — Colombia
- `cr` — Costa Rica
- `cu` — Cuba
- `cv` — Cape Verde
- `cw` — Curaçao
- `cx` — Christmas Island
- `cy` — Cyprus
- `cz` — Czech Republic
- `de` — Germany
- `dj` — Djibouti
- `dk` — Denmark
- `dm` — Dominica
- `do` — Dominican Republic
- `dz` — Algeria
- `ec` — Ecuador
- `ee` — Estonia
- `eg` — Egypt
- `er` — Eritrea
- `es` — Spain
- `et` — Ethiopia
- `fi` — Finland
- `fj` — Fiji
- `fk` — Falkland Islands
- `fm` — Micronesia (Federated States of)
- `fo` — Faroe Island
- `fr` — France
- `ga` — Gabon
- `gb-nir` — Northern Ireland
- `gb-sct` — Scotland
- `gb-ukm` — United Kingdom
- `gb-wls` — Wales
- `gd` — Grenada
- `ge` — Georgia
- `gf` — French Guiana
- `gg` — Guernsey
- `gh` — Ghana
- `gi` — Gibraltar
- `gl` — Greenland
- `gm` — Gambia
- `gn` — Guinea
- `gp` — Guadeloupe
- `gq` — Equatorial Guinea
- `gr` — Greece
- `gs` — South Georgia and the South Sandwich Islands
- `gt` — Guatemala
- `gu` — Guam
- `gw` — Guinea-Bissau
- `gy` — Guyana
- `hk` — Hong Kong
- `hm` — Heard Island and McDonald Islands
- `hn` — Honduras
- `hr` — Croatia
- `ht` — Haiti
- `hu` — Hungary
- `id` — Indonesia
- `ie` — Ireland
- `im` — Isle of Man
- `in` — India
- `io` — British Indian Ocean Territory
- `iq` — Iraq
- `ir` — Iran
- `is` — Iceland
- `it` — Italy
- `je` — Jersey
- `jm` — Jamaica
- `jo` — Jordan
- `jp` — Japan
- `ke` — Kenya
- `kg` — Kyrgyzstan
- `kh` — Cambodia
- `ki` — Kiribati
- `km` — Comoros
- `kn` — Saint Kitts and Nevis
- `kp` — Korea (the Democratic People's Republic of)
- `kr` — Korea (the Republic of)
- `kw` — Kuwait
- `ky` — Cayman Islands
- `kz` — Kazakhstan
- `la` — Lao People's Democratic Republic (the)
- `lb` — Lebanon
- `lc` — Saint Lucia
- `li` — Liechtenstein
- `lk` — Sri Lanka
- `lr` — Liberia
- `ls` — Lesotho
- `lt` — Lithuania
- `lu` — Luxembourg
- `lv` — Latvia
- `ly` — Libya
- `ma` — Morocco
- `mc` — Monaco
- `md` — Moldova (the Republic of)
- `me` — Montenegro
- `mf` — Saint Martin
- `mg` — Madagascar
- `mh` — Marshall Islands (the)
- `mk` — North Macedonia
- `ml` — Mali
- `mm` — Myanmar
- `mn` — Mongolia
- `mo` — Macao
- `mp` — Northern Mariana Islands (the)
- `mq` — Martinique
- `mr` — Mauritania
- `ms` — Montserrat
- `mt` — Malta
- `mu` — Mauritius
- `mv` — Maldives
- `mw` — Malawi
- `mx` — Mexico
- `my` — Malaysia
- `mz` — Mozambique
- `na` — Namibia
- `nc` — New Caledonia
- `ne` — Niger
- `nf` — Norfolk Island
- `ng` — Nigeria
- `ni` — Nicaragua
- `nl` — Netherlands
- `no` — Norway
- `np` — Nepal
- `nr` — Nauru
- `nu` — Niue
- `nz` — New Zealand
- `om` — Oman
- `pa` — Panama
- `pe` — Peru
- `pf` — French Polyesia
- `pg` — Papua New Guinea
- `ph` — Philippines (the)
- `pk` — Pakistan
- `pl` — Poland
- `pm` — Saint Pierre and Miquelon
- `pn` — Pitcairn
- `pr` — Puerto Rico
- `ps` — Palestine, State of
- `pt` — Portugal
- `pw` — Palau
- `py` — Paraguay
- `qa` — Qatar
- `re` — Réunion
- `ro` — Romania
- `rs` — Serbia
- `ru` — Russian Federation (the)
- `rw` — Rwanda
- `sa` — Saudi Arabia
- `sb` — Solomon Islands
- `sc` — Seychelles
- `sd` — Sudan (the)
- `se` — Sweden
- `sg` — Singapore
- `sh` — Saint Helena, Ascension Island, Traistan da Cunha
- `si` — Slovenia
- `sj` — Svalbard, Jan Mayen
- `sk` — Slovakia
- `sl` — Sierra Leone
- `sm` — San Marino
- `sn` — Senegal
- `so` — Somalia
- `sr` — Suriname
- `ss` — South Sudan
- `st` — Sao Tome and Principe
- `sv` — El Salvador
- `sx` — Sint Maarten
- `sy` — Syrian Arab Republic (the)
- `sz` — Eswatini
- `tc` — Turks and Caicos Islands (the)
- `td` — Chad
- `tf` — French Southern Territories
- `tg` — Togo
- `th` — Thailand
- `tj` — Tajikistan
- `tk` — Tokelau
- `tl` — Timor-Leste
- `tm` — Turkmenistan
- `tn` — Tunisia
- `to` — Tonga
- `tr` — Turkey
- `tt` — Trinidad and Tobago
- `tv` — Tuvalu
- `tw` — Taiwan
- `tz` — Tanzania, the United Republic of
- `ua` — Ukraine
- `ug` — Uganda
- `um` — United States Minor Outlying Islands (the)
- `us` — United States of America
- `uy` — Uruguay
- `uz` — Uzbekistan
- `va` — Holy See
- `vc` — Saint Vincent and the Grenadines
- `ve` — Venezuela (Bolivarian Republic of)
- `vg` — Virgin Islands (British)
- `vi` — Virgin Islands (U.S.)
- `vn` — Vietnam
- `vu` — Vanuatu
- `wf` — Wallis and Futuna
- `ws` — Samoa
- `ye` — Yemen
- `yt` — Mayotte
- `za` — South Africa
- `zm` — Zambia
- `zw` — Zimbabwe

</details>

<details>
<summary>All 5 organization codes</summary>

- `african-union` — African Union
- `arab-league` — Arab League
- `eu` — European Union
- `nato` — NATO
- `un` — United Nations

</details>

<details>
<summary>All 50 US state + DC codes</summary>

- `us-ak` — Alaska
- `us-al` — Alabama
- `us-ar` — Arkansas
- `us-az` — Arizona
- `us-ca` — California
- `us-co` — Colorado
- `us-ct` — Connecticut
- `us-dc` — District of Columbia
- `us-de` — Delaware
- `us-fl` — Florida
- `us-ga` — Georgia
- `us-hi` — Hawaii
- `us-ia` — Iowa
- `us-id` — Idaho
- `us-il` — Illinois
- `us-in` — Indiana
- `us-ks` — Kansas
- `us-ky` — Kentucky
- `us-la` — Louisiana
- `us-ma` — Massachusetts
- `us-md` — Maryland
- `us-me` — Maine
- `us-mi` — Michigan
- `us-mn` — Minnesota
- `us-mo` — Missouri
- `us-mt` — Montana
- `us-nc` — North Carolina
- `us-nd` — North Dakota
- `us-ne` — Nebraska
- `us-nh` — New Hampshire
- `us-nj` — New Jersey
- `us-nm` — New Mexico
- `us-nv` — Nevada
- `us-ny` — New York
- `us-oh` — Ohio
- `us-ok` — Oklahoma
- `us-or` — Oregon
- `us-pa` — Pennsylvania
- `us-ri` — Rhode Island
- `us-sc` — South Carolina
- `us-sd` — South Dakota
- `us-tn` — Tennessee
- `us-tx` — Texas
- `us-ut` — Utah
- `us-va` — Virginia
- `us-vt` — Vermont
- `us-wa` — Washington
- `us-wi` — Wisconsin
- `us-wv` — West Virginia
- `us-wy` — Wyoming

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
