import type { Meta, StoryObj } from '@storybook/react'
import { TitleAndBodySlideTemplate } from '../../../components/templates/TitleAndBodySlideTemplate'
import { List } from '../../../components/list/List'

const meta: Meta<typeof TitleAndBodySlideTemplate> = {
  title: 'Components/Templates/TitleAndBodySlideTemplate',
  component: TitleAndBodySlideTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleAndBodySlideTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'タイトルと本文のスライド',
    body: 'これは基本的なタイトルと本文を持つスライドのサンプルです。本文にはある程度の長さのテキストを記述することができます。',
  },
}

export const WithList: Story = {
  args: {
    title: 'リスト形式の内容',
    body: (
      <List
        items={[
          '最初のポイント',
          '二番目のポイント',
          '/インデントされたサブポイント',
          '//さらにインデントされたポイント',
          '三番目のポイント',
        ]}
      />
    ),
  },
}

export const WithHighlight: Story = {
  args: {
    title: '|重要な|ポイントの説明',
    body: 'このスライドでは|強調したい部分|を明確に示すことができます。テキストの一部を|ハイライト|して、聞き手の注意を引くことが可能です。',
  },
}

export const LongContent: Story = {
  args: {
    title: '詳細な説明を含むスライド',
    body: `このスライドには長い内容が含まれています。React Slide Craftは、長いテキストでも適切に表示されるように設計されています。

複数の段落を含む場合でも、レイアウトが崩れることはありません。レスポンシブデザインにより、様々な画面サイズで最適な表示を実現します。`,
  },
}