import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { peerDependencies } from './package.json'

const dependenciesKeys = Object.keys(peerDependencies).map((key) => key)

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
    cssInjectedByJsPlugin(),
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
    rollupOptions: {
      external: [...dependenciesKeys, 'react/jsx-runtime'],
    },
  },
})
