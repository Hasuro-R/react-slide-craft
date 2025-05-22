import { BaseTextProps, CustomText } from "./CustomText"

export type BodyTextProps = BaseTextProps

export const BodyText = (props: BodyTextProps) => {
  return (
    <CustomText
      {...props}
      size="xl"
      weight="500"
    />
  )
}
