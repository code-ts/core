import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/*.ts'],
  format: ['cjs', 'esm'],
  target: 'node16',
  clean: true,
  splitting: true,
  watch: !!process.env.DEV,
  dts: process.env.DEV
    ? false
    : {
        compilerOptions: {
          composite: false,
          customConditions: [],
        },
      },
  tsconfig: '../../tsconfig.lib.json',
  define: {
    'import.meta.DEV': JSON.stringify(!!process.env.DEV),
  },
})
