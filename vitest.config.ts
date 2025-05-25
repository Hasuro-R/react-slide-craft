/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    globals: true,
    workspace: [
      'vite.config.ts',
      {
        plugins: [react()],
        test: {
          name: 'main',
          globals: true,
          environment: 'jsdom',
          include: ["src/tests/*.test.{js,ts,jsx,tsx}"],
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            name: 'chromium',
            provider: 'playwright'
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
