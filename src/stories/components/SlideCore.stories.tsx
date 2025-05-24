import type { Meta, StoryObj } from "@storybook/react"
import { SlideCore } from "../../components/core"
import { CustomText } from "../../components/text/CustomText"
import { SlideBase } from "../../components/core/SlideBase"

const slides = [
  () => (
    <>
      <CustomText
        size="base"
        text="hello |world|!"
        highlightColor="red"
      />
      <CustomText
        size="base"
        text="happy |happy| happy"
      />
    </>
  ),
  () => <SlideBase backgroundColor="white" textColor="black">b</SlideBase>,
  () => <>c</>,
  () => <>d</>
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

export const SetBaseFrame: StoryObj<typeof SlideCore> = {
  args: {
    isShowSlideButtonAlways: true,
    baseSlideFrameStyle: {
      backgroundColor: "aqua",
      textColor: "white",
      cornerRadius: 20,
      padding: "20",
    },
  }
}
