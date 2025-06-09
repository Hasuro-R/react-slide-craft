import type { Meta, StoryObj } from "@storybook/react"
import { SlideCore } from "../../components/core"
import { CoverSlideTemplate } from "../../components/templates/CoverSlideTemplate"
import { TitleAndBodySlideTemplate } from "../../components/templates/TitleAndBodySlideTemplate"
import { TitleWithBgAndBodySlideTemplate } from "../../components/templates/TitleWithBgAndBodySlideTemplate"
import { genSlideObject } from "../../utils/slideObject"
import { TitleText } from "../../components"

const slides = [
  () => <CoverSlideTemplate title="Cover Slide Title\nHello" subTitle="HASURO" align="center" subTitleColor="gray" />,
  () => <TitleAndBodySlideTemplate title="Hello">d</TitleAndBodySlideTemplate>,
  () => <TitleWithBgAndBodySlideTemplate title="Hello">d</TitleWithBgAndBodySlideTemplate>,
  genSlideObject(() => <TitleText text="Not Base Style" color="white" />),
]

export default {
  title: "Components/SlideCore",
  component: SlideCore,
  argTypes: {
    slides: {
      description: "表示するスライドの配列",
      table: {
        type: { detail: "() => JSX.Element | SlideObject" },
      },
    },
    defaultSlide: {
      description: "スライドがない場合に表示するデフォルトのスライド",
      table: {
        defaultValue: { summary: "slides[0]" },
      },
    },
    baseSlideStyle: {
      description: "スライドのベースとなるスタイル",
      table: {
        type: {
          summary: "SlideBaseCoreProps",
          detail: `textColor?: string | undefined
fontFamily?: string | undefined
backgroundColor?: string | undefined
backgroundImage?: string | undefined
padding?: string | undefined
cornerRadius?: number | undefined
backgroundClassName?: string | undefined
backgroundStyle?: React.CSSProperties | undefined`
        },
      },
    },
    backgroundColor: {
      description: "スライドの背景色",
    },
    isShowSlideButtonAlways: {
      description: "PCでスライドボタンを常に表示するかのフラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isShowSlideButtonIndex: {
      description: "スライドボタンにインデックスを表示するかのフラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof SlideCore>

export const Default: StoryObj<typeof SlideCore> = {
  args: {
    slides: slides,
    isShowSlideButtonAlways: true,
  }
}

export const SetBaseFrame: StoryObj<typeof SlideCore> = {
  args: {
    slides: slides,
    isShowSlideButtonAlways: true,
    isShowSlideButtonIndex: false,
    baseSlideStyle: {
      backgroundColor: "aqua",
      textColor: "white",
      cornerRadius: 20,
      padding: "20",
    },
  }
}
