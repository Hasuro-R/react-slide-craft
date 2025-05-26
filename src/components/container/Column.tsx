import { Container, ContainerBaseProps } from "./Container"

export const Column = (props: ContainerBaseProps) => {
  return (
    <Container
      direction="column"
      align="start"
      crossAlign="start"
      {...props}
    />
  )
}
