import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'react-slide-craft',
      fileName: (format) => `react-slide-craft.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'dashes',
    }
  }
})
