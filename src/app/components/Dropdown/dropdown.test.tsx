import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Dropdown } from './dropdown'
import { DropdownProps } from './dropdown.types'

describe('Dropdown Component', () => {
  const defaultProps: DropdownProps = {
    $size: 'medium',
    $backgroundColor: undefined,
    $weight: 'normal',
    disabled: false,
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  }

  it('renders with default props', () => {
    render(<Dropdown {...defaultProps} />)
    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toBeInTheDocument()
  })

  it('applies custom background color', () => {
    const customColor = '#ff5733'
    render(<Dropdown {...defaultProps} $backgroundColor={customColor} />)
    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      {
        size: 'large' as const,
        expectedPadding:
          'clamp(12px, 3vw, 16px) clamp(40px, 10vw, 48px) clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px)',
      },
      {
        size: 'small' as const,
        expectedPadding:
          'clamp(6px, 1.5vw, 8px) clamp(32px, 8vw, 40px) clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
      },
    ]

    sizeTests.forEach(({ size, expectedPadding }, index) => {
      render(<Dropdown {...defaultProps} $size={size} />)
      const dropdown = screen.getAllByRole('combobox')[
        index
      ] as HTMLSelectElement

      expect(dropdown).toHaveStyle(`padding: ${expectedPadding}`)
    })
  })

  it('applies different font weights correctly', () => {
    const weightTests = [
      { weight: 'bold' as const, expectedFontWeight: '600' },
      { weight: 'normal' as const, expectedFontWeight: '100' },
    ]

    weightTests.forEach(({ weight, expectedFontWeight }, index) => {
      render(<Dropdown {...defaultProps} $weight={weight} />)
      const dropdown = screen.getAllByRole('combobox')[
        index
      ] as HTMLSelectElement

      expect(dropdown).toHaveStyle(`font-weight: ${expectedFontWeight}`)
    })
  })

  it('is disabled when disabled prop is true', () => {
    render(<Dropdown {...defaultProps} disabled />)
    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toBeDisabled()
  })
})
