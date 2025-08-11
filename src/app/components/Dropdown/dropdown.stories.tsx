import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Dropdown } from './dropdown'

const meta = {
  title: 'Component/Dropdown',
  component: Dropdown,
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
    $weight: {
      control: 'select',
      options: ['normal', 'bold'],
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    $size: 'large',
    $weight: 'normal',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
    $weight: 'normal',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
}

export const NormalFont: Story = {
  args: {
    $weight: 'normal',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
}

export const BoldFont: Story = {
  args: {
    $weight: 'bold',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
}

// Disabled state stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
}
