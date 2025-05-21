import type { Meta, StoryObj } from "@storybook/react"
import { CustomText, SlideFrame } from "../../components"

export default {
  title: "Components/SlideFrame",
  component: SlideFrame,
  args: {
    padding: "20 30",
    textColor: "white",
    backgroundColor: "black",
  }
} satisfies Meta<typeof SlideFrame>

export const Default: StoryObj<typeof SlideFrame> = {
  args: {
    children: (<CustomText text="Hello |World|!" highlightColor="red" />),
  }
}

export const CheckPadding: StoryObj<typeof SlideFrame> = {
  args: {
    children: (<div style={{ width: "100%", height: "100%", backgroundColor: "white" }} />),
    cornerRadius: 5,
  }
}
