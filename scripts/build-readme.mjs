// Regenerates README.md from scripts/manual.template.md + live code tables.
// Run: node scripts/build-readme.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src', 'countries.ts'), 'utf8');

const entries = [...src.matchAll(/^  '([^']+)': '((?:[^'\\]|\\.)*)',?$/gm)].map((m) => ({
  code: m[1],
  name: m[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
}));

const ORGS = new Set(['eu', 'un', 'nato', 'african-union', 'arab-league']);
const ALIASES = new Set(['gb', 'uk', 'arab', 'africa']);
const byCode = (a, b) => (a.code < b.code ? -1 : 1);
const line = (e) => `- \`${e.code}\` — ${e.name}`;

const countries = entries.filter((e) => !e.code.startsWith('us-') && !ORGS.has(e.code) && !ALIASES.has(e.code)).sort(byCode);
const orgs = entries.filter((e) => ORGS.has(e.code)).sort(byCode);
const states = entries.filter((e) => e.code.startsWith('us-')).sort(byCode);

let tpl = readFileSync(join(root, 'scripts', 'manual.template.md'), 'utf8');
tpl = tpl
  .replace('<!-- CODES-COUNTRIES -->', countries.map(line).join('\n'))
  .replace('<!-- CODES-ORGS -->', orgs.map(line).join('\n'))
  .replace('<!-- CODES-STATES -->', states.map(line).join('\n'));

if (tpl.includes('<!-- CODES-')) throw new Error('unfilled placeholder remains');
writeFileSync(join(root, 'README.md'), tpl);
console.log(`README.md: ${countries.length} countries, ${orgs.length} orgs, ${states.length} states`);
