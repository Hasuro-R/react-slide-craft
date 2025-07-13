import type { Meta, StoryObj } from '@storybook/react'
import { Spacer } from '../../../components/spacer/Spacer'
import { TitleText } from '../../../components/text/TitleText'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof Spacer> = {
  title: 'Components/Items/Spacer',
  component: Spacer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spacer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    height: '20px',
  },
  render: (args) => (
    <div>
      <TitleText text="タイトル" />
      <Spacer {...args} />
      <BodyText text="スペーサーで間隔を調整できます" />
    </div>
  ),
}

export const LargeSpace: Story = {
  args: {
    height: '50px',
  },
  render: (args) => (
    <div>
      <TitleText text="大きなスペース" />
      <Spacer {...args} />
      <BodyText text="50pxの間隔が開いています" />
    </div>
  ),
}

export const RemUnit: Story = {
  args: {
    height: '2rem',
  },
  render: (args) => (
    <div>
      <TitleText text="rem単位" />
      <Spacer {...args} />
      <BodyText text="2remの間隔です" />
    </div>
  ),
}

export const AutoHeight: Story = {
  args: {
    height: 'auto',
  },
  render: (args) => (
    <div style={{ height: '200px', display: 'flex', flexDirection: 'column' }}>
      <TitleText text="上部コンテンツ" />
      <Spacer {...args} />
      <BodyText text="下部コンテンツ（auto指定で最大限のスペース）" />
    </div>
  ),
}