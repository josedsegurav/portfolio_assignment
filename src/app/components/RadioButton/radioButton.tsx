import { RadioButtonProps } from './radioButton.types'
import styled from 'styled-components'

const StyledRadioButton = styled.input.attrs({
  type: 'radio',
})<RadioButtonProps>`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: white;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
  flex-shrink: 0;

  /* Disabled state */
  &:disabled {
    background-color: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
  /* Checked state */
  &:checked {
    border-color: #3b82f6; /* Blue border when checked */
    background-color: #3b82f6; /* Blue background when checked */
  }
`

export const RadioButton = ({
  disabled = false,
  name,
  value,
  checked = false,
}: RadioButtonProps) => {
  return (
    <StyledRadioButton
      disabled={disabled}
      name={name}
      value={value}
      checked={checked}
    />
  )
}
