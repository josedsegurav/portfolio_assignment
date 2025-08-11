import { TableProps } from './table.types'
import styled from 'styled-components'

const StyledTableHeader = styled.table<Omit<TableProps, 'children'>>`
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  /* Size variants */
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '30%'
      case 'large':
        return '100%'
      default:
        return '70%' // medium
    }
  }};

  /* Responsive overflow handling */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  /* Base mobile-first styling */

  min-width: 280px;

  /* Size variants with responsive breakpoints */
  @media (min-width: 768px) {
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '30%'
        case 'large':
          return '100%'
        default:
          return '70%' // medium
      }
    }};
  }

  /* Responsive padding */
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px)'
      case 'large':
        return 'clamp(10px, 2.5vw, 12px) clamp(20px, 4vw, 24px)'
      default:
        return 'clamp(9px, 2.2vw, 11px) clamp(16px, 3.5vw, 20px)' // medium
    }
  }};

  /* Mobile-first responsive adjustments */
  @media (max-width: 767px) {
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 14px;

    /* Stack table cells on very small screens if needed */
    &.stack-on-mobile {
      thead {
        display: none;
      }

      tbody tr {
        display: block;
        border: 1px solid #ddd;
        margin-bottom: 10px;
        border-radius: 4px;
      }

      tbody td {
        display: block;
        text-align: left;
        border: none;
        padding: 8px 12px;

        &:before {
          content: attr(data-label) ': ';
          font-weight: bold;
          display: inline-block;
          min-width: 100px;
        }
      }
    }
  }

  /* Tablet adjustments */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;

    th,
    td {
      padding: 8px 12px;
    }
  }

  /* Desktop adjustments */
  @media (min-width: 1024px) {
    font-size: 16px;

    th,
    td {
      padding: 12px 16px;
    }
  }

  /* Large desktop */
  @media (min-width: 1440px) {
    max-width: ${({ $size }) => {
      switch ($size) {
        case 'small':
          return '30%'
        case 'large':
          return '100%'
        default:
          return '1200px' // medium
      }
    }};
  }

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid #000;
    box-shadow: none;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Table = ({ $size = 'medium', ...props }: TableProps) => {
  return (
    <StyledTableHeader $size={$size} {...props}>
      {props.children}
    </StyledTableHeader>
  )
}
