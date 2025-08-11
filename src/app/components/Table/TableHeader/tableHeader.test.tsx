import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableHeader } from './tableHeader'
import { TableHeaderProps } from './tableHeader.types'

describe('Table Header Component', () => {
  const defaultProps: TableHeaderProps = {
    content: 'Table Header Content',
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
    $weight: 'normal',
  }

  it('renders with default props', () => {
    render(<TableHeader {...defaultProps} />)
    const text = screen.getByText('Table Header Content')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('Table Header Content')
  })

  it('applies custom color', () => {
    const customColor = '#ff5733'
    render(<TableHeader {...defaultProps} $backgroundColor={customColor} />)
    const text = screen.getByText('Table Header Content')
    expect(text).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedFontSize: '16px' },
      { size: 'small' as const, expectedFontSize: '12px' },
    ]

    sizeTests.forEach(({ size, expectedFontSize }, index) => {
      render(<TableHeader {...defaultProps} $size={size} />)
      const text = screen.getAllByText('Table Header Content')[
        index
      ] as HTMLButtonElement

      expect(text).toHaveStyle(`font-size: ${expectedFontSize}`)
    })
  })

  it('applies different font weight correctly', () => {
    const weightTests = [
      { weight: 'normal' as const, expectedWeight: '100' },
      { weight: 'bold' as const, expectedWeight: '600' },
    ]

    weightTests.forEach(({ weight, expectedWeight }, index) => {
      render(<TableHeader {...defaultProps} $weight={weight} />)
      const text = screen.getAllByText('Table Header Content')[
        index
      ] as HTMLButtonElement

      expect(text).toHaveStyle(`font-weight: ${expectedWeight}`)
    })
  })

  it('is disabled when disabled prop is true', () => {
    render(<TableHeader {...defaultProps} disabled />)
    const text = screen.getByText('Table Header Content')
    expect(text).toHaveStyle('cursor: not-allowed')
  })
})
