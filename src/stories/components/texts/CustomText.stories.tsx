import type { Meta, StoryObj } from "@storybook/react"
import { CustomText } from "../../../components"
import { textComponentsArgTypes } from "../../../lib/consts/textComponentsArgTypes"

export default {
  title: "Components/Texts/CustomText",
  component: CustomText,
  args: {
    text: "Hello |World|!",
  },
  argTypes: {
    ...textComponentsArgTypes,
    size: {
      description: "テキストのサイズ\n\n指定できる値はドキュメントを参照",
      table: {
        type: { summary: "string | undefined" },
      },
    },
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof CustomText>

export const Default: StoryObj<typeof CustomText> = {
  args: {
  }
}

export const Highlight: StoryObj<typeof CustomText> = {
  args: {
    text: "|Hello| World!\nI'm |HASURO|.",
    size: "xl",
    highlightColor: "red",
    highlightFontSize: "*1.1",
    highlightFontWeight: "600",
  }
}

