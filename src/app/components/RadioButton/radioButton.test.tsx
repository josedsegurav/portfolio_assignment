import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { RadioButton } from './radioButton'
import { RadioButtonProps } from './radioButton.types'

describe('RadioButton Component', () => {
  const defaultProps: RadioButtonProps = {
    checked: false,
    disabled: false,
    id: 'test-radio',
    name: 'test-radio-group',
    value: 'test-value',
  }

  it('renders with default props', () => {
    render(<RadioButton {...defaultProps} />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('is checked when checked prop is true', () => {
    render(<RadioButton {...defaultProps} checked />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('is disabled when disabled prop is true', () => {
    render(<RadioButton {...defaultProps} disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
  })
})
