import type { Meta, StoryObj } from '@storybook/react'
import { SlideBase } from '../../../components/core/SlideBase'
import { TitleText } from '../../../components/text/TitleText'
import { BodyText } from '../../../components/text/BodyText'

const meta: Meta<typeof SlideBase> = {
  title: 'Components/Core/SlideBase',
  component: SlideBase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SlideBase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TitleText text="Sample Slide" />
        <BodyText text="This is a sample slide wrapped in SlideBase component." />
      </>
    ),
  },
}

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        <TitleText text="Custom Content" />
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div style={{ flex: 1 }}>
            <BodyText text="Left column content" />
          </div>
          <div style={{ flex: 1 }}>
            <BodyText text="Right column content" />
          </div>
        </div>
      </>
    ),
  },
}