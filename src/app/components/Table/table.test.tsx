import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Table } from './table'
import { TableProps } from './table.types'
import { TableHeader } from './TableHeader/tableHeader'
import { TableCell } from './TableCell/tableCell'
import { TableRow } from './TableRow/tableRow'
import { TableFooter } from './TableFooter/tableFooter'

describe('Table Component', () => {
  const defaultProps: TableProps = {
    children: [
      <>
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
        </TableRow>
        <TableRow key="row2">
          <TableCell
            key="cell1"
            $size="large"
            $weight="normal"
            content="cell1"
          />
          <TableCell
            key="cell2"
            $size="large"
            $weight="normal"
            content="cell2"
          />
          <TableCell
            key="cell3"
            $size="large"
            $weight="normal"
            content="cell3"
          />
        </TableRow>
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
        </TableFooter>
      </>,
    ],
    $size: 'large',
  }

  it('renders with default props', () => {
    render(<Table {...defaultProps} />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedWidth: '100%' },
      { size: 'small' as const, expectedWidth: '30%' },
    ]

    sizeTests.forEach(({ size, expectedWidth }, index) => {
      render(<Table {...defaultProps} $size={size} />)
      const table = screen.getAllByRole('table')[index] as HTMLTableElement

      expect(table).toHaveStyle(`width: ${expectedWidth}`)
    })
  })

  it('renders children correctly', () => {
    render(<Table {...defaultProps} />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(3)
    expect(headers[0]).toHaveTextContent('Header 1')
    expect(headers[1]).toHaveTextContent('Header 2')
    expect(headers[2]).toHaveTextContent('Header 3')
  })
  it('renders footer correctly', () => {
    render(<Table {...defaultProps} />)
    const footer = screen.getByText('Footer Cell')
    expect(footer).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Table {...defaultProps} disabled />)
    const table = screen.getByRole('table')
    expect(table).toHaveStyle('cursor: not-allowed')
  })
})
