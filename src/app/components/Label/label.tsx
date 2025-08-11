import { LabelProps } from './label.types'
import styled from 'styled-components'

const StyledLabel = styled.label<Omit<LabelProps, 'label' | 'for'>>`
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.025em;
  position: relative;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: all 0.2s ease;

  /* Responsive width and spacing */
  width: 100%;
  margin-bottom: clamp(0.5rem, 2vw, 0.75rem);

  /* Background color logic */
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'transparent'};

  /* Responsive border radius if background is set */
  border-radius: ${({ $backgroundColor }) =>
    $backgroundColor ? '0.375rem' : '0'};

  /* Responsive Size variants with fluid scaling */
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'clamp(0.75rem, 2vw, 0.875rem)' // 12px - 14px
      case 'large':
        return 'clamp(1rem, 3vw, 1.25rem)' // 16px - 20px
      default:
        return 'clamp(0.875rem, 2.5vw, 1rem)' // 14px - 16px
    }
  }};

  /* Responsive padding with fluid scaling */
  padding: ${({ $size, $backgroundColor }) => {
    // Only apply padding if there's a background color
    if (!$backgroundColor) return '0'

    switch ($size) {
      case 'small':
        return 'clamp(0.5rem, 2vw, 0.625rem) clamp(0.75rem, 3vw, 1rem)'
      case 'large':
        return 'clamp(0.75rem, 3vw, 1rem) clamp(1.25rem, 4vw, 1.5rem)'
      default:
        return 'clamp(0.625rem, 2.5vw, 0.75rem) clamp(1rem, 3.5vw, 1.25rem)'
    }
  }};

  /* Mobile-first responsive adjustments */
  @media (max-width: 639px) {
    /* Ensure better readability on mobile */
    font-size: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '0.875rem' // 14px (bumped up for mobile readability)
        case 'large':
          return '1.125rem' // 18px
        default:
          return '1rem' // 16px
      }
    }};

    /* Adjust line height for better mobile readability */
    line-height: 1.4;

    /* Add more spacing on mobile for better touch targets */
    margin-bottom: 0.75rem;
  }

  /* Tablet adjustments */
  @media (min-width: 640px) and (max-width: 1023px) {
    line-height: 1.3;
    margin-bottom: 0.625rem;
  }

  /* Desktop adjustments */
  @media (min-width: 1024px) {
    line-height: 1.2;
    margin-bottom: 0.5rem;

    /* Refined padding for desktop */
    padding: ${({ $size, $backgroundColor }) => {
      if (!$backgroundColor) return '0'

      switch ($size) {
        case 'small':
          return '0.5rem 0.875rem'
        case 'large':
          return '0.875rem 1.5rem'
        default:
          return '0.625rem 1.125rem'
      }
    }};
  }

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  /* Interactive states - only for labels with background */
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    `
    &:hover:not([disabled]) {
      background-color: ${$backgroundColor}dd;
      transform: translateY(-1px);
    }

    &:active:not([disabled]) {
      transform: translateY(0);
    }
  `}

  /* Focus styles for accessibility when used with form controls */
  &:focus-within {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 0.375rem;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    color: ${({ disabled }) => (disabled ? '#666666' : '#000000')};
    border: 1px solid currentColor;

    &:focus-within {
      outline: 3px solid #0066cc;
      outline-offset: 3px;
    }
  }

  /* Ensure proper spacing with form elements */
  + input,
  + textarea,
  + select {
    margin-top: 0.25rem;
  }

  /* Responsive typography scaling for very large screens */
  @media (min-width: 1440px) {
    font-size: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '0.875rem'
        case 'large':
          return '1.125rem'
        default:
          return '1rem'
      }
    }};
  }
`

export const Label = ({
  $size = 'medium',
  $backgroundColor,
  label,
  for: htmlFor,
  ...props
}: LabelProps) => {
  return (
    <>
      <StyledLabel
        $size={$size}
        $backgroundColor={$backgroundColor}
        htmlFor={htmlFor}
        disabled={props.disabled}
        {...props}
      >
        {label}
      </StyledLabel>
    </>
  )
}
