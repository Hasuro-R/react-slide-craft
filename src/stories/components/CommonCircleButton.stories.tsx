import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import arrowRight from "../../../assets/arrow-right.svg"
import { CommonCircleButton } from "../../components/button/common/CommonCircleButton"

export default {
  title: "Components/CommonCircleButton",
  component: CommonCircleButton,
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof CommonCircleButton>

export const Default: StoryObj<typeof CommonCircleButton> = {
  args: {
    icon: <img src={arrowRight} />
  }
}

export const Disabled: StoryObj<typeof CommonCircleButton> = {
  args: {
    icon: <img src={arrowRight} />,
    isDisabled: true
  }
}
