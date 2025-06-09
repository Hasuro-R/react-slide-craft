import type { Meta, StoryObj } from "@storybook/react"
import { List } from "../../components"

const items = [
  "I am HASURO.",
  "/I am the creator of this library",
  "//For more information, please visit |hasuro.com|",
]

export default {
  title: "Components/List",
  component: List,
  args: {
    items: items,
    marker: "dot",
    textStyle: {
      color: "#404855",
    },
    highlightTextStyle: {
      highlightColor: "#ea5e7f",
    },
  },
  argTypes: {
    items: {
      description: "表示するリストのアイテムの配列",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    width: {
      description: "リストのwidth",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "auto" },
      },
    },
    height: {
      description: "リストのheight",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "auto" },
      },
    },
    gap: {
      description: "リストのアイテム間の隙間\n\n指定できる値はfontSizeの値と同じ",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "base" },
      },
    },
    textStyle: {
      description: "リストのテキストスタイル",
      table: {
        type: { summary: "TextProps" },
      },
    },
    highlightTextStyle: {
      description: "リストのハイライトテキストスタイル",
      table: {
        type: { summary: "HighlightTextProps" },
      },
    },
    align: {
      description: "`Container`と同じ挙動",
      table: {
        type: {
          summary: "Align",
          detail: "`start` | `center` | `end` | `between` | `around`",
        },
        defaultValue: { summary: "start" },
      },
    },
    crossAlign: {
      description: "`Container`と同じ挙動",
      table: {
        type: {
          summary: "Align",
          detail: "`start` | `center` | `end` | `between` | `around`",
        },
        defaultValue: { summary: "start" },
      },
    },
    marker: {
      description: "リストのマーカーの種類",
      table: {
        type: {
          summary: "ListMarkerKind",
          detail: "`dot` | `number` | `none`",
        },
        defaultValue: { summary: "dot" },
      },
    },
    markerColor: {
      description: "リストのマーカーの色",
      table: {
        type: { summary: "string | undefined" },
      },
    },
  },
} satisfies Meta<typeof List>

export const Default: StoryObj<typeof List> = {
  args: {
  }
}
