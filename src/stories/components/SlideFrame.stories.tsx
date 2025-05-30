import type { Meta, StoryObj } from "@storybook/react"
import { CustomText, List, SlideBase, SlideFrame } from "../../components"
import { TitleText } from "../../components/text/TitleText"
import { SubTitleText } from "../../components/text/SubTitleText"
import { HeadlineText } from "../../components/text/HeadlineText"
import { BodyText, BoldBodyText } from "../../components/text/BodyText"
import { SectionTitleText } from "../../components/text/SectionTitleText"
import { CaptionText } from "../../components/text/CaptionText"
import { QuoteText } from "../../components/text/QuoteText"
import { Container } from "../../components/container/Container"
import { FloatContainer } from "../../components/container/FloatContainer"

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
    children: (
      <>
        <CustomText text="Hello |World|!" highlightColor="red" />
      </>
    ),
  }
}

export const CheckPadding: StoryObj<typeof SlideFrame> = {
  args: {
    children: (<div style={{ width: "100%", height: "100%", backgroundColor: "white" }} />),
    cornerRadius: 5,
  }
}

export const TextComponentPlayground: StoryObj<typeof SlideFrame> = {
  args: {
    children: (
      <>
        <HeadlineText text="hello こんちは" />
        <TitleText text="hello こんちは" />
        <SubTitleText text="hello こんちは" />
        <SectionTitleText text="hello こんちは" />
        <BodyText text="これは|ReactSlideCraft|の|BodyText|ですよ" highlightFontSize="*1.2" />
        <BoldBodyText text="これは|ReactSlideCraft|の|BodyText|ですよ\n改行できます" />
        <CaptionText text="hello こんちは" />
        <QuoteText text="hello 引用してます" />
      </>
    ),
    textColor: "black",
    backgroundColor: "white",
    backgroundStyle: {
      border: "1px solid black",
    },
    cornerRadius: 5,
  }
}

const items = [
  "1",
  "/1",
  "//1",
  "///1",
  "|1|",
  "1",
  "1",
  "1",
  "1",
  "1",
]

export const ListComponentPlayground: StoryObj<typeof SlideFrame> = {
  args: {
    children: (
      <SlideBase>
        <HeadlineText text={items.length.toString()} />
        <List
          items={items}
          defaultFontSize="2xl"
          textColor="gray"
          lineHeight={1.9}
          listMarker="dot"
          listItemHighlight={{highlightColor: "red"}}
        />
      </SlideBase>
    ),
    textColor: "black",
    backgroundColor: "white",
    backgroundStyle: {
      border: "1px solid black",
    },
    cornerRadius: 5,
  }
}

export const ContainerPlayground: StoryObj<typeof SlideFrame> = {
  args: {
    children: (
      <SlideBase>
        <FloatContainer
          textColor="aqua"
          right="30%"
          containerStyle={{ color: "gray" }}
        >
          a
        </FloatContainer>
        <Container
          width="auto"
          cornerRadius={2000}
          border={{
            color: "white",
            width: 5,
            style: "solid",
          }}
          containerStyle={{ aspectRatio: "1/1" }}
        >
          a
        </Container>
      </SlideBase>
    ),
  }
}
