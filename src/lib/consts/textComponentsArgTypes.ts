export const textComponentsArgTypes = {
  text: {
    description: "表示するテキストの値",
    table: {
      type: { summary: "string" },
    },
  },
  color: {
    description: "テキストの色",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  align: {
    description: "テキストの配置",
    table: {
      type: { summary: "React.CSSProperties['textAlign'] | undefined" },
      defaultValue: { summary: "left" },
    }
  },
  fontFamily: {
    description: "テキストのfont family",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  className: {
    description: "テキストのカスタムクラス名",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  style: {
    description: "テキストのカスタムスタイル\n\n※直接styleでサイズなどを指定しないでください",
    table: {
      type: { summary: "React.CSSProperties | undefined" },
    },
  },
  highlightColor: {
    description: "強調するテキストの色",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  highlightFontSize: {
    description: "強調するテキストのフォントサイズ\n\n1.5倍にしたい場合は *1.5 のように指定してください",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  highlightFontWeight: {
    description: "強調するテキストのfont weight",
    table: {
      type: { summary: "string | undefined" },
      defaultValue: { summary: "bold" },
    },
  },
  highlightClassName: {
    description: "強調するテキストのカスタムクラス名",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  highlightStyle: {
    description: "強調するテキストのカスタムスタイル",
    table: {
      type: { summary: "React.CSSProperties | undefined" },
    },
  },
}
