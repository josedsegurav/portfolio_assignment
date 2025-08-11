import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from './button'
import { ButtonProps } from './button.types'

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    label: 'Click Me',
    $primary: false,
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
  }

  it('renders with default props', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
  })

  it('applies primary styles when primary prop is true', () => {
    render(<Button {...defaultProps} $primary />)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: '#1ea7fd' })
  })

  it('applies custom background color', () => {
    const customColor = '#ff5733'
    render(<Button {...defaultProps} $backgroundColor={customColor} />)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      {
        size: 'large' as const,
        expectedFontSize: 'clamp(1rem, 3vw, 1.125rem)',
      },
      {
        size: 'small' as const,
        expectedFontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      },
    ]

    sizeTests.forEach(({ size, expectedFontSize }, index) => {
      render(<Button {...defaultProps} $size={size} />)
      const button = screen.getAllByText('Click Me')[index] as HTMLButtonElement

      expect(button).toHaveStyle(`font-size: ${expectedFontSize}`)
    })
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
