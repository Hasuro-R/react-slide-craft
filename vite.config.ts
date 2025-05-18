import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'reactSlideCraft',
      formats: ['es'],
      fileName(_, name) {
        return `${name}.js`
      }
    },
  },
})
