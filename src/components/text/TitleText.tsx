import { BaseTextProps, CustomText } from "./CustomText"

export type TitleTextProps = BaseTextProps

export const TitleText = (props: TitleTextProps) => {
  return (
    <CustomText
      {...props}
      size="4xl"
      weight="700"
    />
  )
}
