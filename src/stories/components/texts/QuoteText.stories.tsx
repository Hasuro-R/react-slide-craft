import type { Meta, StoryObj } from '@storybook/react'
import { QuoteText } from '../../../components/text/QuoteText'

const meta: Meta<typeof QuoteText> = {
  title: 'Components/Texts/QuoteText',
  component: QuoteText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuoteText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '素晴らしいプレゼンテーションは、シンプルで美しいスライドから始まる。',
    size: 'lg',
  },
}

export const WithHighlight: Story = {
  args: {
    text: 'React Slide Craftは|簡単|で|効果的|なスライド作成を可能にします。',
    size: 'base',
  },
}

export const ShortQuote: Story = {
  args: {
    text: '「簡潔は知恵の精髄である」',
    size: 'xl',
  },
}

export const LongQuote: Story = {
  args: {
    text: 'プレゼンテーションの成功は、適切なツールの選択と、聞き手のことを考えた内容構成によって決まります。React Slide Craftは、そのどちらも効率的に実現できるライブラリです。',
    size: 'base',
  },
}

export const MultiLine: Story = {
  args: {
    text: '良いスライドの条件:\n1. 見やすいレイアウト\n2. 適切なフォントサイズ\n3. 一貫したデザイン',
    size: 'lg',
  },
}