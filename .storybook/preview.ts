import type { Preview } from "@storybook/react"
import "../src/index.css"

const preview: Preview = {
  globalTypes: {
    local: {
      description: "Internationalization locale",
      initialValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", icon: "🇺🇸", title: "English" },
          { value: "ja", icon: "🇯🇵", title: "日本語" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
}

export default preview