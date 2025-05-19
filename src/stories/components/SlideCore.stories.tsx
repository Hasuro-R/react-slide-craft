import type { Meta, StoryObj } from "@storybook/react"
import { SlideCore, SlideFrame } from "../../components/core"
import { CustomText } from "../../components/text/CustomText"

const slides = [
  () => (
    <SlideFrame>
      <CustomText
        size="base"
        text="hello |world|! I'm |fan||aa"
        highlightColor="red"
      />
    </SlideFrame>
  ),
  () => <SlideFrame>b</SlideFrame>,
  () => <SlideFrame>c</SlideFrame>,
  () => <SlideFrame>d</SlideFrame>
]

export default {
  title: "Components/SlideCore",
  component: SlideCore,
  args: {
    slides: slides
  }
} satisfies Meta<typeof SlideCore>

export const Default: StoryObj<typeof SlideCore> = {
  args: {}
}
