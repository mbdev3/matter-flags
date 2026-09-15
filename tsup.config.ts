import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/flags/*.ts'],
  format: ['esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'es2020',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
});
