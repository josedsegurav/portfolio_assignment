import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Text } from './text'
import { TextProps } from './text.types'

describe('Text Component', () => {
  const defaultProps: TextProps = {
    content: 'Text Content',
    $size: 'medium',
    $color: undefined,
    disabled: false,
    $weight: 'normal',
  }

  it('renders with default props', () => {
    render(<Text {...defaultProps} />)
    const text = screen.getByText('Text Content')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('Text Content')
  })

  it('applies custom color', () => {
    const customColor = '#ff5733'
    render(<Text {...defaultProps} $color={customColor} />)
    const text = screen.getByText('Text Content')
    expect(text).toHaveStyle({ color: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedFontSize: '6em' },
      { size: 'small' as const, expectedFontSize: '2em' },
    ]

    sizeTests.forEach(({ size, expectedFontSize }, index) => {
      render(<Text {...defaultProps} $size={size} />)
      const text = screen.getAllByText('Text Content')[index] as HTMLElement // Changed from HTMLButtonElement to HTMLElement

      expect(text).toHaveStyle(`font-size: ${expectedFontSize}`)
    })
  })

  it('applies different font weight correctly', () => {
    const weightTests = [
      { weight: 'normal' as const, expectedWeight: '100' },
      { weight: 'bold' as const, expectedWeight: '600' },
    ]

    weightTests.forEach(({ weight, expectedWeight }, index) => {
      render(<Text {...defaultProps} $weight={weight} />)
      const text = screen.getAllByText('Text Content')[index] as HTMLElement // Changed from HTMLButtonElement to HTMLElement

      expect(text).toHaveStyle(`font-weight: ${expectedWeight}`)
    })
  })

  it('is disabled when disabled prop is true', () => {
    render(<Text {...defaultProps} disabled />)
    const text = screen.getByText('Text Content')
    expect(text).toHaveStyle('cursor: not-allowed')
  })
})
