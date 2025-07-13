import type { Meta, StoryObj } from '@storybook/react'
import { CaptionText } from '../../../components/text/CaptionText'

const meta: Meta<typeof CaptionText> = {
  title: 'Components/Texts/CaptionText',
  component: CaptionText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaptionText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '図1: サンプル画像のキャプション',
    size: 'sm',
  },
}

export const WithHighlight: Story = {
  args: {
    text: '※|重要|な注意事項があります',
    size: 'xs',
  },
}

export const ImageCaption: Story = {
  args: {
    text: '出典: React Slide Craft ドキュメント',
    size: 'xs',
  },
  render: (args) => (
    <div>
      <div style={{ 
        width: '200px', 
        height: '100px', 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '8px'
      }}>
        サンプル画像
      </div>
      <CaptionText {...args} text="図2: 複数行にわたる\n詳細な説明文のサンプル" />
    </div>
  ),
}

export const Footnote: Story = {
  args: {
    text: '*1 この機能はバージョン1.3.4以降で利用可能です',
    size: 'xs',
  },
}

export const MultiLine: Story = {
  args: {
    text: '図2: 複数行にわたる\n詳細な説明文のサンプル',
    size: 'sm',
  },
}