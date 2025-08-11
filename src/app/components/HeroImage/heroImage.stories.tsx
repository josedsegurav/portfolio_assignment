import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroImageComponent } from './heroImage'

const meta = {
  title: 'Component/HeroImage',
  component: HeroImageComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the hero image',
      defaultValue: 'https://placehold.co/1200x600',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the hero image',
      defaultValue: 'Hero Image Placeholder',
    },
    height: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Height of the hero image container',
      defaultValue: 'medium',
    },
    centered: {
      control: 'boolean',
      description: 'Whether the content should be centered',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof HeroImageComponent>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/1200x600',
    alt: 'Hero Image Placeholder',
    height: 'medium',
    centered: true,
  },
}

export const NoImage: Story = {
  args: {
    src: '',
    alt: 'No Image',
    height: 'medium',
    centered: true,
  },
}

export const WithOverlay: Story = {
  args: {
    src: 'https://placehold.co/1200x600',
    alt: 'Hero Image with Overlay',
    height: 'medium',
    overlay: true,
    centered: true,
  },
}

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/1200x600',
    alt: 'Disabled Hero Image',
    height: 'medium',
    centered: true,
    disabled: true,
  },
}
