import type { Meta, StoryObj } from '@storybook/react'
import { SectionTitleText } from '../../../components/text/SectionTitleText'

const meta: Meta<typeof SectionTitleText> = {
  title: 'Components/Texts/SectionTitleText',
  component: SectionTitleText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitleText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'セクションタイトル',
    size: '2xl',
  },
}

export const WithChapter: Story = {
  args: {
    text: '第1章: React Slide Craftの基本',
    size: 'xl',
  },
}

export const WithHighlight: Story = {
  args: {
    text: '|重要|セクション: 注意事項',
    size: '2xl',
  },
}

export const NumberedSection: Story = {
  args: {
    text: '3.1 コンポーネントの使い方',
    size: 'lg',
  },
}

export const MultiLine: Story = {
  args: {
    text: 'セクション 2:\n高度な機能について',
    size: 'xl',
  },
}