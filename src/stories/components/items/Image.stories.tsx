import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '../../../components/image/Image'

const meta: Meta<typeof Image> = {
  title: 'Components/Items/Image',
  component: Image,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'サンプル画像',
    width: '400px',
    height: '300px',
  },
}

export const ResponsiveWidth: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'レスポンシブ画像',
    width: '80%',
  },
}

export const SmallImage: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200',
    alt: '小さな画像',
    width: '200px',
    height: '200px',
  },
}

export const LargeImage: Story = {
  args: {
    src: 'https://via.placeholder.com/800x500',
    alt: '大きな画像',
    width: '100%',
    height: '500px',
  },
}