import type { Meta, StoryObj } from "@storybook/react"
import { TitleText } from "../../../components"
import { textComponentsArgTypes } from "../../../lib/consts/textComponentsArgTypes"

export default {
  title: "Components/Texts/TitleText",
  component: TitleText,
  args: {
    text: "Hello |World|!",
  },
  argTypes: {
    ...textComponentsArgTypes,
  },
} satisfies Meta<typeof TitleText>

export const Default: StoryObj<typeof TitleText> = {
  args: {
  }
}

export const Highlight: StoryObj<typeof TitleText> = {
  args: {
    highlightColor: "red",
  }
}
