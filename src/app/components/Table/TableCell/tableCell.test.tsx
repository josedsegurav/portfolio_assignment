import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableCell } from './tableCell'
import { TableCellProps } from './tableCell.types'

describe('Table Cell Component', () => {
  const defaultProps: TableCellProps = {
    content: 'Table Cell Content',
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
    $weight: 'normal',
  }

  it('renders with default props', () => {
    render(<TableCell {...defaultProps} />)
    const tableCell = screen.getByRole('cell')
    expect(tableCell).toBeInTheDocument()
    expect(tableCell).toHaveTextContent('Table Cell Content')
  })

  it('applies custom color', () => {
    const customColor = '#ff5733'
    render(<TableCell {...defaultProps} $backgroundColor={customColor} />)
    const tableCell = screen.getByRole('cell')
    expect(tableCell).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedFontSize: '16px' },
      { size: 'small' as const, expectedFontSize: '12px' },
    ]

    sizeTests.forEach(({ size, expectedFontSize }, index) => {
      render(<TableCell {...defaultProps} $size={size} />)
      const tableCell = screen.getAllByRole('cell')[index] as HTMLButtonElement

      expect(tableCell).toHaveStyle(`font-size: ${expectedFontSize}`)
    })
  })

  it('applies different font weight correctly', () => {
    const weightTests = [
      { weight: 'normal' as const, expectedWeight: '100' },
      { weight: 'bold' as const, expectedWeight: '600' },
    ]

    weightTests.forEach(({ weight, expectedWeight }, index) => {
      render(<TableCell {...defaultProps} $weight={weight} />)
      const tableCell = screen.getAllByRole('cell')[index] as HTMLButtonElement

      expect(tableCell).toHaveStyle(`font-weight: ${expectedWeight}`)
    })
  })

  it('is disabled when disabled prop is true', () => {
    render(<TableCell {...defaultProps} disabled />)
    const tableCell = screen.getByRole('cell')
    expect(tableCell).toHaveStyle('cursor: not-allowed')
  })
})
