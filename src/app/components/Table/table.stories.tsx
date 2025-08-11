import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Table } from './table'
import { TableHeader } from './TableHeader/tableHeader'
import { TableRow } from './TableRow/tableRow'
import { TableCell } from './TableCell/tableCell'
import { TableFooter } from './TableFooter/tableFooter'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Table/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    $size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    $size: 'large',
    children: [
      <TableRow key="row1">
        <TableHeader
          key="header1"
          $size="large"
          $weight="bold"
          content="Header 1"
        />

        <TableHeader
          key="header2"
          $size="large"
          $weight="bold"
          content="Header 2"
        />

        <TableHeader
          key="header3"
          $size="large"
          $weight="bold"
          content="Header 3"
        />
      </TableRow>,
      <TableRow key="row2">
        <TableCell key="cell1" $size="large" $weight="normal" content="cell1" />

        <TableCell key="cell2" $size="large" $weight="normal" content="cell2" />

        <TableCell key="cell3" $size="large" $weight="normal" content="cell3" />
      </TableRow>,
      <TableFooter key="footer1" $size="large">
        <TableRow key="row3">
          <TableCell
            key="cell4"
            $size="large"
            $weight="normal"
            content="Footer Cell"
            colSpan={3}
          />
        </TableRow>
      </TableFooter>,
    ],
  },
}

export const Small: Story = {
  args: {
    $size: 'small',
    children: [
      <TableRow key="row1">
        <TableHeader
          key="header1"
          $size="small"
          $weight="bold"
          content="Header 1"
        />

        <TableHeader
          key="header2"
          $size="small"
          $weight="bold"
          content="Header 2"
        />

        <TableHeader
          key="header3"
          $size="small"
          $weight="bold"
          content="Header 3"
        />
      </TableRow>,
      <TableRow key="row2">
        <TableCell key="cell1" $size="small" $weight="normal" content="cell1" />

        <TableCell key="cell2" $size="small" $weight="normal" content="cell2" />

        <TableCell key="cell3" $size="small" $weight="normal" content="cell3" />
      </TableRow>,
      <TableFooter key="footer1" $size="small">
        <TableRow key="row3">
          <TableCell
            key="cell4"
            $size="small"
            $weight="normal"
            content="Footer Cell"
            colSpan={3}
          />
        </TableRow>
      </TableFooter>,
    ],
  },
}

// Disabled state stories
export const Disabled: Story = {
  args: {
    children: [
      <TableRow key="row1">
        <TableHeader
          key="header1"
          $size="large"
          $weight="bold"
          content="Header 1"
        />

        <TableHeader
          key="header2"
          $size="large"
          $weight="bold"
          content="Header 2"
        />

        <TableHeader
          key="header3"
          $size="large"
          $weight="bold"
          content="Header 3"
        />
      </TableRow>,
      <TableRow key="row2">
        <TableCell key="cell1" $size="large" $weight="normal" content="cell1" />

        <TableCell key="cell2" $size="large" $weight="normal" content="cell2" />

        <TableCell key="cell3" $size="large" $weight="normal" content="cell3" />
      </TableRow>,
      <TableFooter key="footer1" $size="large">
        <TableRow key="row3">
          <TableCell
            key="cell4"
            $size="large"
            $weight="normal"
            content="Footer Cell"
            colSpan={3}
          />
        </TableRow>
      </TableFooter>,
    ],
    disabled: true,
  },
}
