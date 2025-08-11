import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableRow } from '../TableRow/tableRow'
import { TableRowProps } from './tableRow.types'
import { TableHeader } from '../TableHeader'

describe('Table Row Component', () => {
  const defaultProps: TableRowProps = {
    children: [
      <>
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
      </>,
    ],
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
  }
  it('renders with default props', () => {
    render(<TableRow {...defaultProps} />)
    const text = screen.getByRole('row')
    expect(text).toBeInTheDocument()
  })

  it('applies custom color', () => {
    const customColor = '#ff5733'
    render(<TableRow {...defaultProps} $backgroundColor={customColor} />)
    const tableRow = screen.getByRole('row')
    expect(tableRow).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedPadding: '12px 24px' },
      { size: 'small' as const, expectedPadding: '10px 16px' },
    ]

    sizeTests.forEach(({ size, expectedPadding }, index) => {
      render(<TableRow {...defaultProps} $size={size} />)
      const tablerow = screen.getAllByRole('row')[index] as HTMLTableRowElement

      expect(tablerow).toHaveStyle(`padding: ${expectedPadding}`)
    })
  })

  it('renders children correctly', () => {
    render(<TableRow {...defaultProps} />)
    const cells = screen.getAllByRole('columnheader')
    expect(cells).toHaveLength(3)
    expect(cells[0]).toHaveTextContent('Header 1')
    expect(cells[1]).toHaveTextContent('Header 2')
    expect(cells[2]).toHaveTextContent('Header 3')
  })

  it('is disabled when disabled prop is true', () => {
    render(<TableRow {...defaultProps} disabled />)
    const tableRow = screen.getByRole('row')
    expect(tableRow).toHaveStyle('cursor: not-allowed')
  })
})
