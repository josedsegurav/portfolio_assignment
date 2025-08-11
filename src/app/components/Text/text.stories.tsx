import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Text } from './text'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    $color: { control: 'color' },
    disabled: { control: 'boolean' },
    $size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $weight: {
      control: 'select',
      options: ['normal', 'bold'],
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    $size: 'large',
    content: 'This is a large text',
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
    content: 'This is a small text',
  },
}

// Disabled state stories
export const Disabled: Story = {
  args: {
    content: 'This is a disabled text',
    disabled: true,
  },
}
