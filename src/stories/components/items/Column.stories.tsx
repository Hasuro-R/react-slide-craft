import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../components/container/Column'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof Column> = {
  title: 'Components/Items/Column',
  component: Column,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Column>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', margin: '5px' }}>
          <BodyText text="上部" size="base" />
        </div>
        <div style={{ padding: '10px', backgroundColor: '#e0e0e0', margin: '5px' }}>
          <BodyText text="中央" size="base" />
        </div>
        <div style={{ padding: '10px', backgroundColor: '#d0d0d0', margin: '5px' }}>
          <BodyText text="下部" size="base" />
        </div>
      </>
    ),
  },
}

export const TwoRows: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '20px', backgroundColor: '#e3f2fd', margin: '5px' }}>
          <BodyText text="上段（広い）" size="base" />
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f3e5f5', margin: '5px' }}>
          <BodyText text="下段（広い）" size="base" />
        </div>
      </>
    ),
  },
}

export const UnequalRows: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '30px', backgroundColor: '#fff3e0', margin: '5px' }}>
          <BodyText text="メインコンテンツ（大きい）" size="lg" />
        </div>
        <div style={{ padding: '10px', backgroundColor: '#f1f8e9', margin: '5px' }}>
          <BodyText text="フッター（小さい）" size="sm" />
        </div>
      </>
    ),
  },
}

export const MultipleItems: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '8px', backgroundColor: '#ffebee', margin: '2px' }}>
          <BodyText text="アイテム 1" size="sm" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#e8f5e8', margin: '2px' }}>
          <BodyText text="アイテム 2" size="sm" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#e3f2fd', margin: '2px' }}>
          <BodyText text="アイテム 3" size="sm" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#fff8e1', margin: '2px' }}>
          <BodyText text="アイテム 4" size="sm" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#fce4ec', margin: '2px' }}>
          <BodyText text="アイテム 5" size="sm" />
        </div>
      </>
    ),
  },
}