import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TableFooter } from './tableFooter'
import { TableRow } from '../TableRow/tableRow'
import { TableCell } from '../TableCell/tableCell'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Table/Table Footer',
  component: TableFooter,
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
} satisfies Meta<typeof TableFooter>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    $size: 'large',
    children: (
      <TableRow key="row3">
        <TableCell key="cell4" $size="large" $weight="normal" content="cell4" />
      </TableRow>
    ),
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
    children: (
      <TableRow key="row3">
        <TableCell key="cell4" $size="small" $weight="normal" content="cell4" />
      </TableRow>
    ),
  },
}

// Disabled state stories
export const Disabled: Story = {
  args: {
    children: (
      <TableRow key="row3">
        <TableCell key="cell4" $size="large" $weight="normal" content="cell4" />
      </TableRow>
    ),
    disabled: true,
  },
}
