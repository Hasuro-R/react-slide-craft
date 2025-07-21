import SyntaxHighlighter from "react-syntax-highlighter"
import { CodeblockLanguagesType, CodeblockThemeType } from "../../types/codeblockType"
import { getCodeblockTheme } from "../../lib/consts/codeblockConfig"
import { useFontSize } from "../../hooks/useFontSize"
import WindowControlImage from "../../../assets/window-control.png"
import WindowControlTransparencyImage from "../../../assets/window-control-transparency.png"
import "./index.css"
import { Image } from "../image"
import { FloatContainer } from "../container"

export type CodeblockProps = {
  children: string
  language?: CodeblockLanguagesType | undefined
  theme?: CodeblockThemeType | undefined
  windowControlStyle?: WindowControlStyleType | undefined
  fontSize?: string
  cornerRadius?: string
  dropShadow?: boolean
}

type WindowControlStyleType = "default" | "transparency" | "none"

export const Codeblock = (props: CodeblockProps) => {
  const {
    children,
    language,
    theme = "vs",
    windowControlStyle = "default",
    fontSize = "base",
    cornerRadius = "5px",
    dropShadow = true,
  } = props

  const fs = useFontSize()

  return (
    <div
      className="codeblock-cn"
      style={{
        borderRadius: fs(cornerRadius),
        boxShadow: dropShadow ? `0 ${fs("1rem")} ${fs("4rem")} rgba(0, 0, 0, 0.55)` : "none",
      }}
    >
      {windowControlStyle !== "none" && (
        <WindowControl style={windowControlStyle} />
      )}
      <SyntaxHighlighter
        language={language}
        style={getCodeblockTheme(theme)}
        customStyle={{
          fontSize: fs(fontSize),
          padding: `${fs("18px")} ${fs("12px")}`,
          paddingTop: windowControlStyle === "none" ? "18px" : fs("3rem")
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

const WindowControl = ({ style } : { style: WindowControlStyleType }) => {
  if (style === "none") {
    return <></>
  }

  return (
    <FloatContainer
      top="18px"
      left="12px"
    >
      <Image
        src={style === "transparency" ? WindowControlTransparencyImage : WindowControlImage}
        alt="Window Control"
        height="10px"
      />
    </FloatContainer>
  )
}
