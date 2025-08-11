import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    $backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    $size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    $size: 'large',
    label: 'Label',
    for: 'input-id',
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
    label: 'Label',
    for: 'input-id',
  },
}

// Disabled state stories
export const Disabled: Story = {
  args: {
    label: 'Disabled Label',
    disabled: true,
    for: 'input-id',
  },
}
