import { TableHeaderProps } from './tableHeader.types'
import styled from 'styled-components'

const StyledTableHeader = styled.th<Omit<TableHeaderProps, 'content'>>`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;

  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f0f0f0'};

  /* Size variants */
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '12px'
      case 'large':
        return '16px'
      default:
        return '14px' // medium
    }
  }};

  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '10px 16px'
      case 'large':
        return '12px 24px'
      default:
        return '11px 20px' // medium
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

  /* Disabled state */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const TableHeader = ({
  $size = 'medium',
  $backgroundColor,
  $weight = 'normal',
  content,
  ...props
}: TableHeaderProps) => {
  return (
    <StyledTableHeader
      $size={$size}
      $backgroundColor={$backgroundColor}
      $weight={$weight}
      {...props}
    >
      {content}
    </StyledTableHeader>
  )
}
