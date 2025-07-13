import type { Meta, StoryObj } from '@storybook/react'
import { HeadlineText } from '../../../components/text/HeadlineText'

const meta: Meta<typeof HeadlineText> = {
  title: 'Components/Texts/HeadlineText',
  component: HeadlineText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeadlineText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'これはヘッドラインテキストです',
    size: '4xl',
  },
}

export const WithHighlight: Story = {
  args: {
    text: '|重要な|メッセージをお伝えします',
    size: '3xl',
  },
}

export const LargeSize: Story = {
  args: {
    text: '大きなヘッドライン',
    size: '6xl',
  },
}

export const SmallSize: Story = {
  args: {
    text: '小さめのヘッドライン',
    size: '2xl',
  },
}

export const MultiLine: Story = {
  args: {
    text: '複数行にわたる\nヘッドラインテキストの例',
    size: '3xl',
  },
}