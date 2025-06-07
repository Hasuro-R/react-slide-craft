import type { StorybookConfig } from "@storybook/react-vite"
import { withoutVitePlugins } from "@storybook/builder-vite"

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, [
      'vite:dts',
    ]);

    return config;
  },
}
export default config