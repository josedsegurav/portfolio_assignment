import { DropdownProps } from './dropdown.types'
import styled from 'styled-components'

const StyledSelect = styled.select<DropdownProps>`
  /* Reset default styles */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  outline: none;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Custom dropdown arrow */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;

  /* Base mobile-first styling */
  width: 100%;
  min-width: 120px;
  font-size: 16px; /* Prevents zoom on iOS */
  line-height: 1.5;
  color: #374151;

  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f0f0f0'};

  /* Responsive padding based on size */
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'clamp(6px, 1.5vw, 8px) clamp(32px, 8vw, 40px) clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)'
      case 'large':
        return 'clamp(12px, 3vw, 16px) clamp(40px, 10vw, 48px) clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px)'
      default:
        return 'clamp(8px, 2vw, 12px) clamp(36px, 9vw, 44px) clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)' // medium
    }
  }};

  font-weight: ${({ $weight }) => {
    switch ($weight) {
      case 'bold':
        return '600'
      default:
        return '100' // normal
    }
  }};

  /* Interactive states */
  &:hover:not(:disabled) {
    border-color: #9ca3af;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:focus:not(:disabled) {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  /* Disabled state */
  &:disabled {
    background-color: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Option styling */
  option {
    padding: 8px 12px;
    background: white;
    color: #374151;
    font-size: inherit;

    &:checked {
      background: #3b82f6;
      color: white;
    }

    &:disabled {
      color: #9ca3af;
      background-color: #f9fafb;
    }
  }
`

export const Dropdown = ({
  $size = 'medium',
  $backgroundColor,
  $weight = 'normal',
  children,
  ...props
}: DropdownProps) => {
  return (
    <StyledSelect
      $size={$size}
      $backgroundColor={$backgroundColor}
      $weight={$weight}
      {...props}
    >
      {children}
    </StyledSelect>
  )
}
