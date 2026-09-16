/**
 * Stamp `'use client';` onto every emitted JS file, then verify it stuck.
 *
 * Why this isn't just a tsup `banner`:
 *   tsup runs esbuild and then pipes the result through Rollup for the
 *   `treeshake: true` pass. Rollup parses a top-of-file `'use client';` as a
 *   module-level directive and drops it ("Module level directives cause errors
 *   when bundled"). That silently ate both the directives in src/Flag.tsx and
 *   src/DuoFlag.tsx and an esbuild `banner`, which is how v0.1.0 shipped a
 *   build that throws "Add the 'use client' directive" in any Server Component.
 *
 * Why *every* file and not just the barrel:
 *   FlagFrame calls React.useId(), which the react-server build doesn't export.
 *   So `import MA from 'matter-flags/flags/ma'` needs the boundary too.
 *
 * The verify pass at the end is the point: the build fails loudly rather than
 * publishing a package that breaks on the consumer's first render.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIRECTIVE = "'use client';";
const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function* jsFiles(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* jsFiles(p);
    else if (e.name.endsWith('.js')) yield p;
  }
}

let stamped = 0;
const files = [...jsFiles(DIST)];
for (const f of files) {
  const code = readFileSync(f, 'utf8');
  if (code.startsWith(DIRECTIVE) || code.startsWith('"use client";')) continue;
  writeFileSync(f, `${DIRECTIVE}\n${code}`);
  stamped++;
}

const missing = files.filter((f) => {
  const first = readFileSync(f, 'utf8').split('\n', 1)[0].trim();
  return first !== DIRECTIVE && first !== '"use client";';
});
if (missing.length) {
  console.error(`add-use-client: ${missing.length} file(s) missing the directive, e.g. ${missing[0]}`);
  process.exit(1);
}

console.log(`add-use-client: ${stamped} stamped, ${files.length} verified.`);
