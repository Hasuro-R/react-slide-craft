import type { Meta, StoryObj } from '@storybook/react'
import { FloatContainer } from '../../../components/container/FloatContainer'
import { TitleText } from '../../../components/text/TitleText'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof FloatContainer> = {
  title: 'Components/Items/FloatContainer',
  component: FloatContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <BodyText text="フローティングコンテンツ" size="base" />,
  },
  render: (args) => (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #ccc' }}>
      <TitleText text="メインコンテンツ" size="xl" />
      <BodyText text="背景のメインコンテンツです。" size="base" />
      <FloatContainer {...args} />
    </div>
  ),
}

export const TopRight: Story = {
  args: {
    children: <BodyText text="右上に配置" size="sm" />,
    style: { top: '10px', right: '10px' },
  },
  render: (args) => (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #ccc' }}>
      <TitleText text="メインコンテンツ" size="xl" />
      <FloatContainer {...args} />
    </div>
  ),
}

export const BottomLeft: Story = {
  args: {
    children: <BodyText text="左下に配置" size="sm" />,
    style: { bottom: '10px', left: '10px' },
  },
  render: (args) => (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #ccc' }}>
      <TitleText text="メインコンテンツ" size="xl" />
      <FloatContainer {...args} />
    </div>
  ),
}

export const Center: Story = {
  args: {
    children: <BodyText text="中央に配置" size="base" />,
    style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  render: (args) => (
    <div style={{ height: '400px', position: 'relative', border: '1px solid #ccc' }}>
      <TitleText text="メインコンテンツ" size="xl" />
      <FloatContainer {...args} />
    </div>
  ),
}