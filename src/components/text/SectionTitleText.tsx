import { BaseTextProps, CustomText } from "./CustomText"

export type SectionTitleTextProps = BaseTextProps

export const SectionTitleText = (props: SectionTitleTextProps) => {
  return (
    <CustomText
      {...props}
      size="2xl"
      weight="700"
    />
  )
}
