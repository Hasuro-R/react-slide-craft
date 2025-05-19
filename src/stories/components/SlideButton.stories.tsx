import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { SlideButton } from "../../components/button/SlideButton"

export default {
  title: "Components/SlideButton",
  component: SlideButton,
  args: {
    totalCount: 5,
    handleNext: fn(),
    handleBack: fn()
  }
} satisfies Meta<typeof SlideButton>

export const Default: StoryObj<typeof SlideButton> = {
  args: {
    currentNumber: 1
  }
}

export const Disabled: StoryObj<typeof SlideButton> = {
  args: {
    isShowIndex: true,
    currentNumber: 5
  }
}
