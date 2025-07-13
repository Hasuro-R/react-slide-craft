import type { Meta, StoryObj } from '@storybook/react'
import { CoverSlideTemplate } from '../../../components/templates/CoverSlideTemplate'

const meta: Meta<typeof CoverSlideTemplate> = {
  title: 'Components/Templates/CoverSlideTemplate',
  component: CoverSlideTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CoverSlideTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'React Slide Craft',
    subtitle: 'ライブラリで簡単スライド作成',
  },
}

export const WithLongTitle: Story = {
  args: {
    title: '長いタイトルのスライドでもレスポンシブに対応',
    subtitle: 'サブタイトルもしっかり表示されます',
  },
}

export const OnlyTitle: Story = {
  args: {
    title: 'タイトルのみのスライド',
  },
}

export const WithHighlight: Story = {
  args: {
    title: '|重要な|キーワードを強調',
    subtitle: '|React Slide Craft|で作成',
  },
}