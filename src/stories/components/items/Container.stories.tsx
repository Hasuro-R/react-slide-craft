import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../../../components/container/Container'
import { TitleText } from '../../../components/text/TitleText'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof Container> = {
  title: 'Components/Items/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TitleText text="コンテナサンプル" size="xl" />
        <BodyText text="このコンテンツはContainerコンポーネントでラップされています。" size="base" />
      </>
    ),
  },
}

export const MultipleElements: Story = {
  args: {
    children: (
      <>
        <TitleText text="複数要素のコンテナ" size="2xl" />
        <BodyText text="最初の段落です。" size="lg" />
        <BodyText text="二番目の段落です。" size="lg" />
        <BodyText text="三番目の段落です。" size="lg" />
      </>
    ),
  },
}

export const NestedContainers: Story = {
  args: {
    children: (
      <>
        <TitleText text="ネストされたコンテナ" size="xl" />
        <Container>
          <BodyText text="内側のコンテナ内容" size="base" />
        </Container>
      </>
    ),
  },
}