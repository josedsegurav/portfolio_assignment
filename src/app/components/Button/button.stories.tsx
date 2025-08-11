import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primarybutton: Story = {
  args: {
    $primary: true,
    label: 'Button',
  },
}

export const Secondarybutton: Story = {
  args: {
    label: 'Button',
  },
}

export const Largebutton: Story = {
  args: {
    $size: 'large',
    label: 'Button',
  },
}

export const Smallbutton: Story = {
  args: {
    $size: 'small',
    label: 'Button',
  },
}

// Disabled state stories
export const DisabledPrimary: Story = {
  args: {
    $primary: true,
    label: 'Disabled Button',
    disabled: true,
  },
}

export const DisabledSecondary: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}
