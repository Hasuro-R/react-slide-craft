import { Container, ContainerBaseProps } from "./Container"

export const Row = (props: ContainerBaseProps) => {
  return (
    <Container
      direction="row"
      align="start"
      crossAlign="start"
      {...props}
    />
  )
}
