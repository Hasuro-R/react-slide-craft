import type { Meta, StoryObj } from '@storybook/react'
import { SubTitleText } from '../../../components/text/SubTitleText'

const meta: Meta<typeof SubTitleText> = {
  title: 'Components/Texts/SubTitleText',
  component: SubTitleText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubTitleText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'これはサブタイトルテキストです',
    size: 'xl',
  },
}

export const WithHighlight: Story = {
  args: {
    text: 'セクション|1|: 基本的な使い方',
    size: 'lg',
  },
}

export const LargeSize: Story = {
  args: {
    text: '大きなサブタイトル',
    size: '2xl',
  },
}

export const SmallSize: Story = {
  args: {
    text: '小さなサブタイトル',
    size: 'base',
  },
}

export const MultiLine: Story = {
  args: {
    text: '複数行にわたる\nサブタイトルの例',
    size: 'xl',
  },
}