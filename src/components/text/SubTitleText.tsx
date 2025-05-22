import { BaseTextProps, CustomText } from "./CustomText"

export type SubTitleTextProps = BaseTextProps

export const SubTitleText = (props: SubTitleTextProps) => {
  return (
    <CustomText
      {...props}
      size="3xl"
      weight="600"
    />
  )
}
