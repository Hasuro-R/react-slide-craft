import { BaseTextProps, CustomText } from "./CustomText"
import "./index.css"

export type QuoteTextProps = BaseTextProps & {
  size?: string | undefined
}

export const QuoteText = (props: QuoteTextProps) => {
  const { size = "xl" } = props

  return (
    <blockquote className="rsc-block-quote">
      <CustomText
        {...props}
        size={size}
        weight="700"
        style={{ opacity: 0.6 }}
      />
    </blockquote>
  )
}
