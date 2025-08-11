import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CardComponent } from './card'

const meta = {
  title: 'Component/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the card image',
      defaultValue: 'https://placehold.co/600x400',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the card image',
      defaultValue: 'Placeholder Image',
    },
    title: {
      control: 'text',
      description: 'Title of the card',
      defaultValue: 'Card Title',
    },
    description: {
      control: 'text',
      description: 'Description of the card',
      defaultValue: 'This is a sample card description.',
    },
    footer: {
      control: 'text',
      description: 'Footer text of the card',
      defaultValue: 'Footer Text',
    },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Shadow variant of the card',
      defaultValue: 'medium',
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect on the card',
      defaultValue: true,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the card interaction',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof CardComponent>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    title: 'Card Title',
    description: 'This is a sample card description.',
    footer: 'Footer Text',
    shadow: 'medium',
    hover: true,
    disabled: false,
  },
}

export const NoImage: Story = {
  args: {
    src: '',
    alt: 'No Image',
    title: 'Card Title',
    description: 'This is a sample card description.',
    footer: 'Footer Text',
    shadow: 'medium',
    hover: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    title: 'Card Title',
    description: 'This is a sample card description.',
    footer: 'Footer Text',
    shadow: 'medium',
    hover: true,
    disabled: true,
  },
}
