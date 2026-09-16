import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/flags/*.ts'],
  format: ['esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  // Source maps are 4.6MB of a 10MB install and the output isn't minified,
  // so they buy consumers almost nothing. Keep them out of the tarball.
  sourcemap: false,
  clean: true,
  minify: false,
  target: 'es2020',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  // NOTE: 'use client' is NOT applied here. treeshake:true routes esbuild's
  // output through Rollup, which strips module-level directives — including an
  // esbuild `banner`. scripts/add-use-client.mjs stamps (and verifies) it
  // post-build instead; see the comment there.
});
