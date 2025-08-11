import { ButtonProps } from './button.types'
import styled from 'styled-components'

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: all 0.2s ease;

  /* Responsive width - full width on mobile, auto on larger screens */
  width: 100%;
  max-width: 300px;

  @media (min-width: 640px) {
    width: auto;
    min-width: 120px;
  }

  /* Background color logic */
  background-color: ${({ $backgroundColor, $primary }) =>
    $backgroundColor || ($primary ? '#1ea7fd' : '#ffffff')};

  /* Text color based on variant */
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#333333')};

  /* Border for secondary buttons */
  border: ${({ $primary }) =>
    $primary ? 'none' : '1px solid rgba(0, 0, 0, 0.15)'};

  /* Responsive Size variants */
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'clamp(0.75rem, 2vw, 0.875rem)' // 12px - 14px
      case 'large':
        return 'clamp(1rem, 3vw, 1.125rem)' // 16px - 18px
      default:
        return 'clamp(0.875rem, 2.5vw, 1rem)' // 14px - 16px
    }
  }};

  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'clamp(0.5rem, 2vw, 0.625rem) clamp(0.75rem, 3vw, 1rem)' // 8px-10px vertical, 12px-16px horizontal
      case 'large':
        return 'clamp(0.75rem, 3vw, 1rem) clamp(1.25rem, 4vw, 1.75rem)' // 12px-16px vertical, 20px-28px horizontal
      default:
        return 'clamp(0.625rem, 2.5vw, 0.75rem) clamp(1rem, 3.5vw, 1.5rem)' // 10px-12px vertical, 16px-24px horizontal
    }
  }};

  /* Mobile-first responsive adjustments */
  @media (max-width: 639px) {
    /* Ensure minimum touch target size (44px) on mobile */
    min-height: 44px;

    /* Adjust font sizes for better mobile readability */
    font-size: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '0.875rem' // 14px
        case 'large':
          return '1.125rem' // 18px
        default:
          return '1rem' // 16px
      }
    }};
  }

  /* Tablet adjustments */
  @media (min-width: 640px) and (max-width: 1023px) {
    max-width: 200px;
  }

  /* Desktop adjustments */
  @media (min-width: 1024px) {
    max-width: none;

    /* Slightly reduce padding on larger screens for better proportion */
    padding: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '0.5rem 1rem'
        case 'large':
          return '0.875rem 1.75rem'
        default:
          return '0.6875rem 1.25rem'
      }
    }};
  }

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* Hover effects - only on devices that support hover */
  @media (hover: hover) {
    &:hover:not(:disabled) {
      background-color: ${({ $backgroundColor, $primary }) => {
        if ($backgroundColor) return $backgroundColor
        return $primary ? '#1565c0' : '#f6f6f6'
      }};
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  /* Touch device active states */
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  /* Focus styles - enhanced for accessibility */
  &:focus {
    outline: 2px solid #1ea7fd;
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;

    &:focus {
      outline: 3px solid #1ea7fd;
      outline-offset: 3px;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }

    &:active:not(:disabled) {
      transform: none;
    }
  }
`

export const Button = ({
  $primary = false,
  $size = 'medium',
  $backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      $primary={$primary}
      $size={$size}
      $backgroundColor={$backgroundColor}
      {...props}
    >
      {label}
    </StyledButton>
  )
}
