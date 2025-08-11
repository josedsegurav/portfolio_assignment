import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TableRow } from './tableRow'
import { TableHeader } from '../TableHeader/tableHeader'
import { TableCell } from '../TableCell/tableCell'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Table/Table Row',
  component: TableRow,
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
} satisfies Meta<typeof TableRow>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const LargeHeaderRow: Story = {
  args: {
    $size: 'large',
    children: [
      <TableHeader
        key="header1"
        $size="large"
        $weight="bold"
        content="Header 1"
      />,
      <TableHeader
        key="header2"
        $size="large"
        $weight="bold"
        content="Header 2"
      />,
      <TableHeader
        key="header3"
        $size="large"
        $weight="bold"
        content="Header 3"
      />,
    ],
  },
}

export const SmallHeaderRow: Story = {
  args: {
    $size: 'small',
    children: [
      <TableHeader
        key="header1"
        $size="small"
        $weight="bold"
        content="Header 1"
      />,
      <TableHeader
        key="header2"
        $size="small"
        $weight="bold"
        content="Header 2"
      />,
      <TableHeader
        key="header3"
        $size="small"
        $weight="bold"
        content="Header 3"
      />,
    ],
  },
}

// Disabled state stories
export const DisabledHeaderRow: Story = {
  args: {
    children: [
      <TableHeader
        key="header1"
        $size="large"
        $weight="normal"
        content="Header 1"
      />,
      <TableHeader
        key="header2"
        $size="large"
        $weight="normal"
        content="Header 2"
      />,
      <TableHeader
        key="header3"
        $size="large"
        $weight="normal"
        content="Header 3"
      />,
    ],
    disabled: true,
  },
}

export const LargeCellRow: Story = {
  args: {
    $size: 'large',
    children: [
      <TableCell key="cell1" $size="large" $weight="normal" content="cell1" />,
      <TableCell key="cell2" $size="large" $weight="normal" content="cell2" />,
      <TableCell key="cell3" $size="large" $weight="normal" content="cell3" />,
    ],
  },
}

export const SmallCellRow: Story = {
  args: {
    $size: 'small',
    children: [
      <TableCell key="cell1" $size="large" $weight="normal" content="cell1" />,
      <TableCell key="cell2" $size="large" $weight="normal" content="cell2" />,
      <TableCell key="cell3" $size="large" $weight="normal" content="cell3" />,
    ],
  },
}

// Disabled state stories
export const DisabledCellRow: Story = {
  args: {
    children: [
      <TableCell key="cell1" $size="large" $weight="normal" content="cell1" />,
      <TableCell key="cell2" $size="large" $weight="normal" content="cell2" />,
      <TableCell key="cell3" $size="large" $weight="normal" content="cell3" />,
    ],
    disabled: true,
  },
}
