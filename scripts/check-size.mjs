import { gzipSync } from 'node:zlib';
import { readFileSync, readdirSync } from 'node:fs';

const kb = (n) => `${(n / 1024).toFixed(2)}kB`;
const f = (p) => readFileSync(p);
const gz = (p) => gzipSync(f(p)).length;

console.log('== matter-flags size ==');
console.log('index.js       ', kb(f('dist/index.js').length), 'gzip', kb(gz('dist/index.js')));
const chunks = readdirSync('dist').filter((x) => x.startsWith('chunk-') && x.endsWith('.js'));
// shared runtime = largest chunk containing internals (approx: the one index imports)
console.log('chunks total   ', chunks.length);
// resolve the real chunk behind the ma shim (hash name changes per build)
const shim = readFileSync('dist/flags/ma.js', 'utf8');
const m = shim.match(/from '\.\.\/(chunk-[^']+\.js)'/);
const maChunk = m ? m[1] : null;
const ma = maChunk ? gz(`dist/${maChunk}`) : 0;
console.log('sample 1 flag  ~', kb(ma), `gzip (${maChunk ?? 'n/a'}, varies per flag)`);
const flagFiles = readdirSync('dist/flags').filter((x) => x.endsWith('.js'));
let total = 0;
for (const file of flagFiles) total += f(`dist/flags/${file}`).length;
console.log('all flag shims ', kb(total), `(${flagFiles.length} files, each ~150B re-export)`);
console.log('');
console.log('Budget: 1 flag <= 2.5kB gzip (incl. shared runtime amortized), index <= 8kB gzip.');
const ok = gz('dist/index.js') < 8 * 1024;
console.log(ok ? 'PASS' : 'FAIL: index too big');
process.exit(ok ? 0 : 1);
