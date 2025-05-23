import { BaseTextProps, CustomText } from "./CustomText"

export type HeadlineTextProps = BaseTextProps

export const HeadlineText = (props: HeadlineTextProps) => {
  return (
    <CustomText
      {...props}
      size="6xl"
      weight="700"
    />
  )
}
