import React from "react"

export type ParseTextProps = {
  text: string
  spanClassName?: string | undefined
  spanStyle?: React.CSSProperties | undefined
}

export const ParseText = (props: ParseTextProps) => {
  const {
    text,
    spanClassName,
    spanStyle,
  } = props

  const lines = text.replace(/\\n/g, "\n").split("\n")

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          <HighlightParseText
            spanClassName={spanClassName}
            spanStyle={spanStyle}
            text={line}
          />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

const HighlightParseText = (props: ParseTextProps) => {
  const {
    text,
    spanClassName,
    spanStyle,
  } = props

  const parts = text.split("|")

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 && index < parts.length - 1 ? (
          <span className={spanClassName} style={spanStyle} key={index}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}
