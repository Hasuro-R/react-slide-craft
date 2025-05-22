import { BaseTextProps, CustomText } from "./CustomText"

export type CaptionTextProps = BaseTextProps

export const CaptionText = (props: CaptionTextProps) => {
  return (
    <CustomText
      {...props}
      size="base"
      weight="500"
    />
  )
}
