import type { Meta, StoryObj } from '@storybook/react'
import { TitleWithBgAndBodySlideTemplate } from '../../../components/templates/TitleWithBgAndBodySlideTemplate'
import { List } from '../../../components/list/List'

const meta: Meta<typeof TitleWithBgAndBodySlideTemplate> = {
  title: 'Components/Templates/TitleWithBgAndBodySlideTemplate',
  component: TitleWithBgAndBodySlideTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleWithBgAndBodySlideTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '背景付きタイトル',
    body: 'このスライドでは、タイトルが背景色で強調されています。重要なセクションや新しいトピックを紹介する際に効果的です。',
    titleBgColor: '#3b82f6',
    titleTextColor: 'white',
  },
}

export const DarkTheme: Story = {
  args: {
    title: 'ダークテーマ',
    body: 'ダークな背景色を使用することで、より落ち着いた印象を与えることができます。',
    titleBgColor: '#1f2937',
    titleTextColor: 'white',
  },
}

export const WarmTheme: Story = {
  args: {
    title: '温かみのあるテーマ',
    body: 'オレンジ系の色を使用して、親しみやすい印象を演出します。',
    titleBgColor: '#f97316',
    titleTextColor: 'white',
  },
}

export const WithList: Story = {
  args: {
    title: '機能一覧',
    body: (
      <List
        items={[
          '背景色付きタイトル',
          'カスタマイズ可能な色設定',
          '/文字色の自動調整',
          '/レスポンシブデザイン',
          '視覚的インパクト',
        ]}
      />
    ),
    titleBgColor: '#10b981',
    titleTextColor: 'white',
  },
}

export const LightAccent: Story = {
  args: {
    title: 'ライトアクセント',
    body: '明るい背景色を使用する場合は、文字色を暗色にして可読性を確保します。',
    titleBgColor: '#fef3c7',
    titleTextColor: '#92400e',
  },
}