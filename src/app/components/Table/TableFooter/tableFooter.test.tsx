import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableFooter } from './tableFooter'
import { TableFooterProps } from './tableFooter.types'
import { TableCell } from '../TableCell/tableCell'
import { TableRow } from '../TableRow/tableRow'

describe('Table Footer Component', () => {
  const defaultProps: TableFooterProps = {
    children: [
      <>
        <TableRow key="row3">
          <TableCell
            key="cell4"
            $size="large"
            $weight="normal"
            content="cell4"
          />
        </TableRow>
      </>,
    ],
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
    testID: 'table-footer-test',
  }

  it('renders with default props', () => {
    render(<TableFooter {...defaultProps} />)
    const text = screen.getByTestId('table-footer-test')
    expect(text).toBeInTheDocument()
  })

  it('applies custom color', () => {
    const customColor = '#ff5733'
    render(<TableFooter {...defaultProps} $backgroundColor={customColor} />)
    const tableFooter = screen.getByTestId('table-footer-test')
    expect(tableFooter).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedPadding: '12px 24px' },
      { size: 'small' as const, expectedPadding: '10px 16px' },
    ]

    sizeTests.forEach(({ size, expectedPadding }, index) => {
      render(<TableFooter {...defaultProps} $size={size} />)
      const tableFooter = screen.getAllByTestId('table-footer-test')[
        index
      ] as HTMLButtonElement

      expect(tableFooter).toHaveStyle(`padding: ${expectedPadding}`)
    })
  })

  it('renders children Cell correctly', () => {
    render(<TableFooter {...defaultProps} />)
    const cells = screen.getAllByRole('cell')
    expect(cells).toHaveLength(1)
    expect(cells[0]).toHaveTextContent('cell4')
  })

  it('renders children Row correctly', () => {
    render(<TableFooter {...defaultProps} />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(1)
    expect(rows[0]).toHaveTextContent('cell4')
  })

  it('is disabled when disabled prop is true', () => {
    render(<TableFooter {...defaultProps} disabled />)
    const tableFooter = screen.getByTestId('table-footer-test')
    expect(tableFooter).toHaveStyle('cursor: not-allowed')
  })
})
