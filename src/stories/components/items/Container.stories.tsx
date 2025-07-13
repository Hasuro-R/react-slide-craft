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
        <TitleText text="コンテナサンプル" />
        <BodyText text="このコンテンツはContainerコンポーネントでラップされています。" />
      </>
    ),
  },
}

export const MultipleElements: Story = {
  args: {
    children: (
      <>
        <TitleText text="複数要素のコンテナ" />
        <BodyText text="最初の段落です。" />
        <BodyText text="二番目の段落です。" />
        <BodyText text="三番目の段落です。" />
      </>
    ),
  },
}

export const NestedContainers: Story = {
  args: {
    children: (
      <>
        <TitleText text="ネストされたコンテナ" />
        <Container>
          <BodyText text="内側のコンテナ内容" />
        </Container>
      </>
    ),
  },
}