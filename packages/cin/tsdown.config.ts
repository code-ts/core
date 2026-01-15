import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/index'],
  platform: 'neutral',
  dts: {
    build: true,
  },
})
