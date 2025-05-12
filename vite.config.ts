import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
