import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from 'svgo';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// Vendored build inputs (committed): flagpack-core SVGs are MIT, see NOTICE.
const SRC_DIR = join(root, 'assets', 'countries');
const OUT_DIR = join(root, 'src', 'flags');
const COUNTRY_JSON = join(root, 'assets', 'countryCodeList.json');

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith('.svg'));
// Excluded from matter-flags.
const BLOCKLIST = new Set(['il', 'eh']);
const countries = JSON.parse(readFileSync(COUNTRY_JSON, 'utf8'));
const nameByCode = new Map(countries.map((c) => [c.alpha2.toLowerCase(), c.countryName]));

// Extra non-ISO codes present in flagpack (EU, etc.) — fall back to code label.
function labelFor(code) {
  return nameByCode.get(code) ?? code.toUpperCase();
}

function extractInner(svg) {
  // strip outer <svg ...> and </svg>, drop xml comments
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim()
    // collapse 3+ whitespace runs to keep files small but readable
    .replace(/[ \t]+\n/g, '\n');
}

const codes = [];
const ident = (s) => s.toUpperCase().replace(/[^A-Z0-9_]/g, '_');

function svgoOptimize(raw, path, fp = 2) {
  return optimize(raw, {
    path,
    multipass: true,
    plugins: [{ name: 'preset-default', params: { floatPrecision: fp } }],
  }).data;
}

function writeFlagModule(code, upper, label, inner) {
  codes.push({ code, upper, ident: ident(upper), label });
  // `svg` is a template literal over __inner, so the markup is stored once, not
  // twice. Under sideEffects:false an app that imports only `svg` (React Native)
  // drops the component and never pulls in React.
  const out = [
    `import { createFlagComponent } from '../createFlag.js';`,
    ``,
    `const __inner = ${JSON.stringify(inner)};`,
    ``,
    `/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */`,
    // The `: string` annotation is load-bearing. Without it TS infers a string
    // LITERAL type and inlines the whole flag into the .d.ts — that alone took
    // the declarations from ~60kB to 2.7MB and doubled the tarball.
    //
    // xmlns:xlink is only emitted for the ~21 flags that use <use xlink:href>.
    // Inside a live <svg> the browser's HTML parser tolerates the undeclared
    // prefix; a standalone document is parsed as XML and a real renderer
    // (resvg, react-native-svg) rejects it outright.
    'export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg"' +
      (inner.includes('xlink:') ? ' xmlns:xlink="http://www.w3.org/1999/xlink"' : '') +
      ' viewBox="0 0 32 24">${__inner}</svg>`;',
    ``,
    `/** Country / region name. */`,
    `export const name = '${label}';`,
    ``,
    // /* @__PURE__ */ lets bundlers drop the component when only `svg`/`name`
    // are imported. Without it the call is assumed side-effectful, the module
    // keeps its createFlagComponent import, and React lands in the RN bundle.
    `const C = /* @__PURE__ */ createFlagComponent('${code}', '${label}', __inner);`,
    ``,
    `export default C;`,
    ``,
  ].join('\n');
  writeFileSync(join(OUT_DIR, `${code}.ts`), out);
}

for (const file of files) {
  const upper = file.replace('.svg', '');
  const code = upper.toLowerCase();
  if (BLOCKLIST.has(code)) continue;
  const raw = readFileSync(join(SRC_DIR, file), 'utf8');
  // SVGO multipass, floatPrecision 2 (SA: 103kB -> 21kB gzip).
  // Keeps viewBox (required for slice fill).
  const inner = extractInner(svgoOptimize(raw, file));
  const label = labelFor(code).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  writeFlagModule(code, upper, label, inner);
}

// Supranational / organization flags (Wikimedia Commons, public domain — see assets/orgs/SOURCES.json).
// Native aspects differ (3:2 etc.), so they are FIT (not cover) into the 32x24
// canvas over a solid rect sampled from the flag's own background — the seam
// is invisible and no emblem gets cropped. Square render then crops all flags equally.
const ORG_DIR = join(root, 'assets', 'orgs', 'raw');
const ORG_FLAGS = [
  { file: 'eu.svg', code: 'eu', name: 'European Union', bg: '#003399' },
  { file: 'un.svg', code: 'un', name: 'United Nations', bg: '#009edb' },
  { file: 'nato.svg', code: 'nato', name: 'NATO', bg: '#004990' },
  { file: 'african-union.svg', code: 'african-union', name: 'African Union', bg: '#3f724a' },
  { file: 'arab-league.svg', code: 'arab-league', name: 'Arab League', bg: '#006233' },
];

function nativeViewBox(svg) {
  const tag = svg.match(/<svg[^>]*>/)?.[0] ?? '';
  const vb = tag.match(/viewBox="([\d.\-+\s,eE]+)"/);
  if (vb) {
    const [x, y, w, h] = vb[1].trim().split(/[\s,]+/).map(Number);
    if (w > 0 && h > 0) return [x, y, w, h];
  }
  const w = parseFloat(tag.match(/width="([\d.]+)/)?.[1] ?? NaN);
  const h = parseFloat(tag.match(/height="([\d.]+)/)?.[1] ?? NaN);
  if (w > 0 && h > 0) return [0, 0, w, h];
  throw new Error('cannot determine native dimensions');
}

const r2 = (n) => Math.round(n * 1000) / 1000;

/** Fit any native viewBox into the 32x24 canvas, centered: p -> s*p + t.
 *  Optional bg rect (flag's own background color) hides the letterbox seam. */
function fitWrap(raw, path, bg, fp = 2) {
  const [vx, vy, vw, vh] = nativeViewBox(raw);
  const s = Math.min(32 / vw, 24 / vh);
  const tx = r2((32 - vw * s) / 2 - vx * s);
  const ty = r2((24 - vh * s) / 2 - vy * s);
  const bgRect = bg ? `<rect width="32" height="24" fill="${bg}"/>` : '';
  return `${bgRect}<g transform="translate(${tx} ${ty}) scale(${r2(s)})">${extractInner(svgoOptimize(raw, path, fp))}</g>`;
}

for (const org of ORG_FLAGS) {
  const raw = readFileSync(join(ORG_DIR, org.file), 'utf8');
  writeFlagModule(org.code, org.code, org.name, fitWrap(raw, org.file, org.bg));
}

// US states + DC (Wikimedia Commons, public domain — see assets/states/SOURCES.json).
// Background is auto-sampled from the first full-bleed shape; flags without one
// (e.g. Ohio's burgee) render on transparent, shape-accurate.
const STATE_DIR = join(root, 'assets', 'states', 'raw');
const STATE_SOURCES = JSON.parse(readFileSync(join(root, 'assets', 'states', 'SOURCES.json'), 'utf8'));

function sampleBg(raw) {
  // Render-based: most common opaque border color (>=70% consensus).
  // Handles class fills, transformed groups, reversed paths — anything regex can't.
  // No consensus (multi-color edges like Texas, transparent like nothing found) -> null.
  let img;
  try {
    img = new Resvg(raw, { fitTo: { mode: 'width', value: 120 } }).render();
  } catch {
    return null;
  }
  const { width: W, height: H, pixels } = img;
  const counts = new Map();
  let opaque = 0;
  const push = (x, y) => {
    const i = (y * W + x) * 4;
    if (pixels[i + 3] > 200) {
      opaque++;
      const k = ((pixels[i] >> 2) << 16) | ((pixels[i + 1] >> 2) << 8) | (pixels[i + 2] >> 2);
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
  };
  for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
  for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
  if (!opaque) return null;
  const [[top, n]] = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  if (n / opaque < 0.7) return null;
  const hx = (v) => Math.min(255, ((v & 255) << 2) + 2).toString(16).padStart(2, '0');
  return `#${hx(top >> 16)}${hx(top >> 8)}${hx(top)}`;
}

for (const [code, meta] of Object.entries(STATE_SOURCES.flags).sort(([a], [b]) => (a < b ? -1 : 1))) {
  const raw = readFileSync(join(STATE_DIR, `${code}.svg`), 'utf8');
  // Adaptive precision: large native canvases (900+) tolerate fp0 (0.1% units),
  // small ones (Ohio's 26-unit burgee) keep fp2. Seal detail is display-invisible anyway.
  const maxDim = Math.max(...nativeViewBox(raw).slice(2));
  const fp = maxDim >= 500 ? 0 : maxDim >= 100 ? 1 : 2;
  writeFlagModule(code, code, meta.name, fitWrap(raw, `${code}.svg`, sampleBg(raw), fp));
}

// flags/index.ts — explicit re-exports so bundlers can tree-shake
const indexTs = codes
  .sort((a, b) => (a.code < b.code ? -1 : 1))
  .map((c) => `export { default as ${c.ident} } from './${c.code}.js';`)
  .join('\n');
writeFileSync(join(OUT_DIR, 'index.ts'), indexTs + `\nexport { default as GB } from './gb.js';\nexport { default as UK } from './uk.js';\nexport { default as ARAB } from './arab.js';\nexport { default as AFRICA } from './africa.js';\n`);

// countries.ts
const countryEntries = codes.map((c) => `  '${c.code}': '${c.label}'`);
writeFileSync(
  join(root, 'src', 'countries.ts'),
  `export const COUNTRY_NAMES = {\n${countryEntries.join(',\n')},\n  'gb': 'United Kingdom',\n  'uk': 'United Kingdom',\n  'arab': 'Arab League',\n  'africa': 'African Union'\n} as const;\n\nexport type FlagCode = keyof typeof COUNTRY_NAMES;\n\n/** Normalize user input: trim, lowercase, uk->gb-ukm, gb->gb-ukm, el->gr. */\nexport function normalizeCode(input: string): string {\n  const c = input.trim().toLowerCase();\n  if (c === 'uk' || c === 'gb') return 'gb-ukm';\n  if (c === 'el') return 'gr';\n  return c;\n}\n\nexport function countryName(code: string): string {\n  const n = normalizeCode(code);\n  const raw = inputKey(code);\n  return (\n    (COUNTRY_NAMES as Record<string, string>)[raw] ??\n    (COUNTRY_NAMES as Record<string, string>)[n] ??\n    n.toUpperCase()\n  );\n}\n\nfunction inputKey(input: string): string {\n  return input.trim().toLowerCase();\n}\n`,
);

// Alias modules: gb + uk -> gb-ukm (Union Jack). Flagpack has no base GB.svg.
// Short codes for orgs: arab -> arab-league, africa -> african-union.
const ALIASES = { gb: 'gb-ukm', uk: 'gb-ukm', arab: 'arab-league', africa: 'african-union' };
for (const [alias, target] of Object.entries(ALIASES)) {
  writeFileSync(
    join(OUT_DIR, `${alias}.ts`),
    `export { default, svg, name } from './${target}.js';\n`,
  );
}

// flag loader map for <Flag> / <DuoFlag> (static strings -> code-split chunks)
const loaderEntries = codes
  .sort((a, b) => (a.code < b.code ? -1 : 1))
  .map((c) => `  '${c.code}': () => import('./flags/${c.code}.js')`)
  .join(',\n') + `,\n  'gb': () => import('./flags/gb.js'),\n  'uk': () => import('./flags/uk.js'),\n  'arab': () => import('./flags/arab.js'),\n  'africa': () => import('./flags/africa.js')`;
writeFileSync(
  join(root, 'src', 'loaders.ts'),
  `// auto-generated — do not edit\n/* eslint-disable */\nexport const FLAG_LOADERS: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {\n${loaderEntries}\n};\n`,
);

console.log(`generated ${codes.length} flags`);
