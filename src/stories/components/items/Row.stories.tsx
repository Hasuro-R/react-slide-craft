import type { Meta, StoryObj } from '@storybook/react'
import { Row } from '../../../components/container/Row'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof Row> = {
  title: 'Components/Items/Row',
  component: Row,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Row>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', margin: '5px' }}>
          <BodyText text="左側" />
        </div>
        <div style={{ padding: '10px', backgroundColor: '#e0e0e0', margin: '5px' }}>
          <BodyText text="中央" />
        </div>
        <div style={{ padding: '10px', backgroundColor: '#d0d0d0', margin: '5px' }}>
          <BodyText text="右側" />
        </div>
      </>
    ),
  },
}

export const TwoColumns: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '20px', backgroundColor: '#e3f2fd', flex: 1, margin: '5px' }}>
          <BodyText text="左カラム（広い）" />
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f3e5f5', flex: 1, margin: '5px' }}>
          <BodyText text="右カラム（広い）" />
        </div>
      </>
    ),
  },
}

export const UnequalColumns: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: '15px', backgroundColor: '#fff3e0', flex: 2, margin: '5px' }}>
          <BodyText text="メインコンテンツ（2倍幅）" />
        </div>
        <div style={{ padding: '15px', backgroundColor: '#f1f8e9', flex: 1, margin: '5px' }}>
          <BodyText text="サイドバー" />
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
          <BodyText text="1" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#e8f5e8', margin: '2px' }}>
          <BodyText text="2" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#e3f2fd', margin: '2px' }}>
          <BodyText text="3" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#fff8e1', margin: '2px' }}>
          <BodyText text="4" />
        </div>
        <div style={{ padding: '8px', backgroundColor: '#fce4ec', margin: '2px' }}>
          <BodyText text="5" />
        </div>
      </>
    ),
  },
}