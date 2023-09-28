import process from 'node:process'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/*.ts'],
  format: ['cjs', 'esm'],
  target: 'es2022',
  clean: true,
  cjsInterop: true,
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
