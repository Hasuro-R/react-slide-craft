import { BaseTextProps, CustomText } from "./CustomText"

export type BodyTextProps = BaseTextProps

export const BodyText = (props: BodyTextProps) => {
  return (
    <CustomText
      size="xl"
      weight="500"
      {...props}
    />
  )
}

export const BoldBodyText = (props: BodyTextProps) => {
  return (
    <BodyText
      weight="600"
      {...props}
    />
  )
}
