import type { Meta, StoryObj } from "@storybook/react"
import { SlideCore } from "../../components/core"
import { CustomText } from "../../components/text/CustomText"
import { SlideBase } from "../../components/core/SlideBase"
import { CoverSlideTemplate } from "../../components/templates/CoverSlideTemplate"
import { TitleAndBodySlideTemplate } from "../../components/templates/TitleAndBodySlideTemplate"
import { TitleWithBgAndBodySlideTemplate } from "../../components/templates/TitleWithBgAndBodySlideTemplate"

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
  () => <CoverSlideTemplate title="Cover Slide Title\nHello" subTitle="HASURO" align="center" subTitleColor="gray" />,
  () => <TitleAndBodySlideTemplate title="Hello">d</TitleAndBodySlideTemplate>,
  () => <TitleWithBgAndBodySlideTemplate title="Hello">d</TitleWithBgAndBodySlideTemplate>,
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
