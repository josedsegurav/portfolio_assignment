import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Label } from './label'
import { LabelProps } from './label.types'

describe('Label Component', () => {
  const defaultProps: LabelProps = {
    label: 'Label Text',
    $size: 'medium',
    $backgroundColor: undefined,
    disabled: false,
    for: 'input-id',
  }

  it('renders with default props', () => {
    render(<Label {...defaultProps} />)
    const label = screen.getByText('Label Text')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Label Text')
  })

  it('applies custom background color', () => {
    const customColor = '#ff5733'
    render(<Label {...defaultProps} $backgroundColor={customColor} />)
    const label = screen.getByText('Label Text')
    expect(label).toHaveStyle({ backgroundColor: customColor })
  })

  it('applies different sizes correctly', () => {
    const sizeTests = [
      { size: 'large' as const, expectedFontSize: 'clamp(1rem, 3vw, 1.25rem)' },
      {
        size: 'small' as const,
        expectedFontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      },
    ]

    sizeTests.forEach(({ size, expectedFontSize }, index) => {
      render(<Label {...defaultProps} $size={size} />)
      const label = screen.getAllByText('Label Text')[
        index
      ] as HTMLButtonElement

      expect(label).toHaveStyle(`font-size: ${expectedFontSize}`)
    })
  })
})
