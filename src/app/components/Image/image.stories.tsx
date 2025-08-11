import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Image } from './image'

const meta = {
  title: 'Component/Image',
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the image',
      defaultValue: 'https://placehold.co/600x400',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
      defaultValue: 'Placeholder Image',
    },
    width: {
      control: 'number',
      description: 'Width of the image in pixels',
      defaultValue: 150,
    },
    height: {
      control: 'number',
      description: 'Height of the image in pixels',
      defaultValue: 150,
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'How the image should be resized to fit its container',
      defaultValue: 'cover',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the image should have rounded corners',
      defaultValue: false,
    },
    shadow: {
      control: 'boolean',
      description: 'Whether the image should have a shadow effect',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Image>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    objectFit: 'cover',
    rounded: false,
    shadow: false,
  },
}

export const Rounded: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    objectFit: 'cover',
    rounded: true,
    shadow: false,
  },
}

export const Shadow: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    objectFit: 'cover',
    rounded: false,
    shadow: true,
  },
}

export const CustomSize: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 300,
    height: 200,
    objectFit: 'cover',
    rounded: false,
    shadow: false,
  },
}

export const ObjectFitFill: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 300,
    height: 200,
    objectFit: 'fill',
    rounded: false,
    shadow: false,
  },
}

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    objectFit: 'cover',
    rounded: false,
    shadow: false,
    disabled: true, // Assuming you have a disabled prop in your Image component
  },
}
